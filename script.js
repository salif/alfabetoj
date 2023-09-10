window.onload = function () {
	const convertEl = document.getElementById("convert")
	const clearEl = document.getElementById("clear")
	const inputEl = document.getElementById("input")
	const outputEl = document.getElementById("output")

	const EsperantoToCyrillicEl = document.getElementById("EsperantoToCyrillic")
	const EsperantoToCyrillic2El = document.getElementById("EsperantoToCyrillic2")
	const EsperantoToShavianEl = document.getElementById("EsperantoToShavian")
	const EsperantoToXSystemEl = document.getElementById("EsperantoToXSystem")
	const EsperantoToArabicEl = document.getElementById("EsperantoToArabic")

	const CyrillicToEsperantoEl = document.getElementById("CyrillicToEsperanto")
	const Cyrillic2ToEsperantoEl = document.getElementById("Cyrillic2ToEsperanto")
	const ShavianToEsperantoEl = document.getElementById("ShavianToEsperanto")
	const XSystemToEsperantoEl = document.getElementById("XSystemToEsperanto")
	const ArabicToEsperantoEl = document.getElementById("ArabicToEsperanto")

	function checkVisible(elm) {
		const rect = elm.getBoundingClientRect()
		const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight)
		return !(rect.bottom < 0 || rect.top - viewHeight >= 0)
	}

	function scrollToOutput() {
		if (!checkVisible(outputEl)) {
			outputEl.scrollIntoView(true)
		}
	}

	function convert_t() {
		let input = inputEl.value
		if (input.length == 0) {
			inputEl.focus()
			return
		}
		let cm = {}, r = false
		if (EsperantoToCyrillicEl.checked) {
			cm = converter.d.Esperanto_Cyrillic
		} else if (EsperantoToCyrillic2El.checked) {
			cm = converter.d.Esperanto_Cyrillic2
		} else if (EsperantoToArabicEl.checked) {
			cm = converter.d.Esperanto_Arabic
		} else if (EsperantoToShavianEl.checked) {
			cm = converter.d.Esperanto_Shavian
		} else if (EsperantoToXSystemEl.checked) {
			cm = converter.d.Esperanto_XSystem
		} else if (XSystemToEsperantoEl.checked) {
			cm = converter.d.XSystem_Esperanto
			r = true
		} else if (ShavianToEsperantoEl.checked) {
			cm = converter.d.Shavian_Esperanto
			r = true
		} else if (CyrillicToEsperantoEl.checked) {
			cm = converter.d.Cyrillic_Esperanto
		} else if (Cyrillic2ToEsperantoEl.checked) {
			cm = converter.d.Cyrillic2_Esperanto
		} else if (ArabicToEsperantoEl.checked) {
			cm = converter.d.Arabic_Esperanto
			r = true
		}
		outputEl.value = converter.convert(input, cm, r)
		scrollToOutput()
	}

	convertEl.onclick = convert_t

	function clear_t() {
		inputEl.value = ""
		outputEl.value = ""
	}

	clearEl.onclick = clear_t

	function check_trl(userlangs, currentlang, trllangs) {
		for (let i = 0; i < userlangs.length; i++) {
			const userlang = userlangs[i]
			if (userlang === currentlang) {
				return { no_change: true }
			} else if (trllangs.indexOf(userlang) > -1) {
				return { no_change: false, lang: userlang }
			}
		}
		return { no_change: true }
	}

	function my_translate(ekey, nlang) {
		const enkey = TrlData[ekey]
		if (enkey == undefined) {
			return { ok: false }
		}
		const nvalue = enkey[nlang]
		return (nvalue == undefined) ? { ok: false } : { ok: true, new_value: nvalue }
	}

	window.localize = function (nlang) {
		document.querySelectorAll("[data-trl]").forEach(el => {
			const el_attr = el.getAttribute('data-trl')
			let p = {}
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
		const trl_checked = check_trl(navigator.languages, "en", TrlLanguages)
		if (!trl_checked.no_change) localize(trl_checked.lang)
	} catch (err) { }
}
