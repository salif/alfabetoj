window.onload = function () {
	var el_convert = document.getElementById("convert")
	var el_clear = document.getElementById("clear")
	var el_input = document.getElementById("input")
	var el_output = document.getElementById("output")

	var el_esperanto_to_cyrillic = document.getElementById("EsperantoToCyrillic")
	var el_esperanto_to_cyrillic_2 = document.getElementById("EsperantoToCyrillic2")
	var el_esperanto_to_shavian = document.getElementById("EsperantoToShavian")
	var el_esperanto_to_x_system = document.getElementById("EsperantoToXSystem")
	var el_esperanto_to_arabic = document.getElementById("EsperantoToArabic")

	var el_cyrillic_to_esperanto = document.getElementById("CyrillicToEsperanto")
	var el_cyrillic_2_to_esperanto = document.getElementById("Cyrillic2ToEsperanto")
	var el_shavian_to_esperanto = document.getElementById("ShavianToEsperanto")
	var el_x_system_to_esperanto = document.getElementById("XSystemToEsperanto")
	var el_arabic_to_esperanto = document.getElementById("ArabicToEsperanto")

	function is_visible(elm) {
		var rect = elm.getBoundingClientRect()
		var view_height = Math.max(document.documentElement.clientHeight, window.innerHeight)
		return !(rect.bottom < 0 || rect.top - view_height >= 0)
	}

	function scroll_to_output() {
		if (!is_visible(el_output)) {
			el_output.scrollIntoView(true)
		}
	}

	function convert_t() {
		var input = el_input.value
		if (input.length == 0) {
			el_input.focus()
			return
		}
		var skribsistemo = {}, use_replacing = false
		if (el_esperanto_to_cyrillic.checked) {
			skribsistemo = konvertilo.skribsistemoj.cyrillic.from_esperanto
		} else if (el_esperanto_to_cyrillic_2.checked) {
			skribsistemo = konvertilo.skribsistemoj.cyrillic_2.from_esperanto
		} else if (el_esperanto_to_arabic.checked) {
			skribsistemo = konvertilo.skribsistemoj.arabic.from_esperanto
		} else if (el_esperanto_to_shavian.checked) {
			skribsistemo = konvertilo.skribsistemoj.shavian.from_esperanto
		} else if (el_esperanto_to_x_system.checked) {
			skribsistemo = konvertilo.skribsistemoj.x_system.from_esperanto
		} else if (el_x_system_to_esperanto.checked) {
			skribsistemo = konvertilo.skribsistemoj.x_system.to_esperanto
			use_replacing = true
		} else if (el_shavian_to_esperanto.checked) {
			skribsistemo = konvertilo.skribsistemoj.shavian.to_esperanto
			use_replacing = true
		} else if (el_cyrillic_to_esperanto.checked) {
			skribsistemo = konvertilo.skribsistemoj.cyrillic.to_esperanto
		} else if (el_cyrillic_2_to_esperanto.checked) {
			skribsistemo = konvertilo.skribsistemoj.cyrillic_2.to_esperanto
		} else if (el_arabic_to_esperanto.checked) {
			skribsistemo = konvertilo.skribsistemoj.arabic.to_esperanto
			use_replacing = true
		}
		el_output.value = konvertilo.konverti(input, skribsistemo, use_replacing)
		scroll_to_output()
	}

	el_convert.onclick = convert_t

	function clear_t() {
		el_input.value = ""
		el_output.value = ""
	}

	el_clear.onclick = clear_t

	function check_trl(userlangs, currentlang, trllangs) {
		for (var i = 0; i < userlangs.length; i++) {
			var userlang = userlangs[i]
			if (userlang === currentlang) {
				return { no_change: true }
			} else if (trllangs.indexOf(userlang) > -1) {
				return { no_change: false, lang: userlang }
			}
		}
		return { no_change: true }
	}

	function my_translate(ekey, nlang) {
		var enkey = TrlData[ekey]
		if (enkey == undefined) {
			return { ok: false }
		}
		var nvalue = enkey[nlang]
		return (nvalue == undefined) ? { ok: false } : { ok: true, new_value: nvalue }
	}

	window.localize = function (nlang) {
		document.querySelectorAll("[data-trl]").forEach(el => {
			var el_attr = el.getAttribute('data-trl')
			var p = {}
			switch (el_attr.charAt(0)) {
				case "1":
					p = my_translate(el_attr, nlang)
					if (p.ok === true) el.innerText = p.new_value
					break
				case "2":
					p = my_translate(el_attr, nlang)
					if (p.ok === true) el.value = p.new_value
					break
				case "3":
					p = my_translate(el_attr, nlang)
					if (p.ok === true) el.placeholder = p.new_value
					break
			}
		})
		document.documentElement.lang = nlang
	}

	try {
		var trl_checked = check_trl(navigator.languages, "en", TrlLanguages)
		if (!trl_checked.no_change) { localize(trl_checked.lang) }
	} catch (err) { }
}
