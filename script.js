window.onload = function () {
	const convertEl = document.getElementById("convert")
	const clearEl = document.getElementById("clear")
	const inputEl = document.getElementById("input")
	const outputEl = document.getElementById("output")

	const EsperantoToCyrillicEl = document.getElementById("EsperantoToCyrillic")
	const EsperantoToCyrillicKEl = document.getElementById("EsperantoToCyrillicK")
	const EsperantoToShavianEl = document.getElementById("EsperantoToShavian")
	const EsperantoToXSystemEl = document.getElementById("EsperantoToXSystem")
	const EsperantoToArabicEl = document.getElementById("EsperantoToArabic")
	const CyrillicToShavianEl = document.getElementById("CyrillicToShavian")

	const CyrillicToEsperantoEl = document.getElementById("CyrillicToEsperanto")
	const CyrillicKToEsperantoEl = document.getElementById("CyrillicKToEsperanto")
	const ShavianToEsperantoEl = document.getElementById("ShavianToEsperanto")
	const XSystemToEsperantoEl = document.getElementById("XSystemToEsperanto")
	const ArabicToEsperantoEl = document.getElementById("ArabicToEsperanto")
	const ShavianToCyrillicEl = document.getElementById("ShavianToCyrillic")

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
		} if (EsperantoToCyrillicKEl.checked) {
			cm = converter.d.Esperanto_CyrillicK
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
		} else if (CyrillicKToEsperantoEl.checked) {
			cm = converter.d.CyrillicK_Esperanto
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

	function Trln(alangs, clang, slangs) {
		for (let i = 0; i < alangs.length; i++) {
			const lang = alangs[i]
			if (lang === clang) {
				return { n: true }
			} else if (slangs.indexOf(lang) > -1) {
				return { n: false, l: lang }
			}
		}
		return { n: true }
	}

	function trl(w, l) {
		const trlw = TrlData[w]
		if (trlw == undefined) {
			return { p: false }
		}
		const trle = trlw[l]
		if (trle == undefined) {
			return { p: false }
		} else {
			return { p: true, t: trle }
		}
	}

	window.trle = function (w, l) {
		const trlw = TrlData[w]
		if (trlw == undefined) {
			return { p: false }
		}
		const trle = trlw["eo"]
		if (trle == undefined) {
			return { p: false }
		} else {
			return { p: true, t: converter.convert(trle, l) }
		}
	}

	window.localize = function (rl, trlc) {
		document.querySelectorAll("[data-trl]").forEach(e => {
			const t = e.getAttribute('data-trl')
			if (t.charAt(0) == "1") {
				const p = trlc(t, rl)
				if (p.p === true) {
					e.innerText = p.t
				}
			} else if (t.charAt(0) == "2") {
				const p = trlc(t, rl)
				if (p.p === true) {
					e.value = p.t
				}
			} else if (t.charAt(0) == "3") {
				const p = trlc(t, rl)
				if (p.p === true) {
					e.placeholder = p.t
				}
			}
		})
	}

	try {
		const r = Trln(navigator.languages, "en", TrlLanguages)
		if (r.n) {
			return
		}
		localize(r.l, trl)
		document.documentElement.lang = r.l
	} catch (err) { }
}
