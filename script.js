window.onload = function () {
	const convertEl = document.getElementById("convert")
	const clearEl = document.getElementById("clear")
	const inputEl = document.getElementById("input")
	const outputEl = document.getElementById("output")
	const EsperantoToCyrillicEl = document.getElementById("EsperantoToCyrillic")
	const EsperantoToBulgarianEl = document.getElementById("EsperantoToBulgarian")
	const EsperantoToShavianEl = document.getElementById("EsperantoToShavian")
	const EsperantoToXSystemEl = document.getElementById("EsperantoToXSystem")
	const XSystemToEsperantoEl = document.getElementById("XSystemToEsperanto")
	const ShavianToEsperantoEl = document.getElementById("ShavianToEsperanto")
	const ShavianToCyrillicEl = document.getElementById("ShavianToCyrillic")
	const CyrillicToEsperantoEl = document.getElementById("CyrillicToEsperanto")
	const CyrillicToShavianEl = document.getElementById("CyrillicToShavian")
	const BulgarianToEsperantoEl = document.getElementById("BulgarianToEsperanto")
	const BulgarianToShavianEl = document.getElementById("BulgarianToShavian")

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

	convertEl.onclick = function () {
		let input = inputEl.value
		if (input.length == 0) {
			inputEl.focus()
			return
		}
		let cm = "", r = false
		if (EsperantoToCyrillicEl.checked) {
			cm = converter.d.EsperantoToCyrillic
		} else if (EsperantoToBulgarianEl.checked) {
			cm = converter.d.EsperantoToBulgarian
		} else if (EsperantoToShavianEl.checked) {
			cm = converter.d.EsperantoToShavian
		} else if (EsperantoToXSystemEl.checked) {
			cm = converter.d.EsperantoToXSystem
		} else if (XSystemToEsperantoEl.checked) {
			cm = converter.d.XSystemToEsperanto
			r = true
		} else if (ShavianToEsperantoEl.checked) {
			cm = converter.d.ShavianToEsperanto
			r = true
		} else if (ShavianToCyrillicEl.checked) {
			cm = converter.d.ShavianToCyrillic
			r = true
		} else if (CyrillicToEsperantoEl.checked) {
			cm = converter.d.CyrillicToEsperanto
		} else if (CyrillicToShavianEl.checked) {
			cm = converter.d.CyrillicToShavian
		} else if (BulgarianToEsperantoEl.checked) {
			cm = converter.d.BulgarianToEsperanto
		} else if (BulgarianToShavianEl.checked) {
			cm = converter.d.BulgarianToShavian
		}
		outputEl.value = converter.convert(input, cm, r)
		scrollToOutput()
	}

	clearEl.onclick = function () {
		inputEl.value = ""
		outputEl.value = ""
	}

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

	try {
		const r = Trln(navigator.languages, "en", TrlLanguages)
		if (r.n) {
			return
		}
		document.querySelectorAll("[data-trl]").forEach(e => {
			const t = e.getAttribute('data-trl')
			if (t.charAt(0) == "1") {
				const p = trl(t, r.l)
				if (p.p === true) {
					e.innerText = p.t
				}
			} else if (t.charAt(0) == "2") {
				const p = trl(t, r.l)
				if (p.p === true) {
					e.value = p.t
				}
			} else if (t.charAt(0) == "3") {
				const p = trl(t, r.l)
				if (p.p === true) {
					e.placeholder = p.t
				}
			}
		})
		document.documentElement.lang = r.l
	} catch (err) { }
}
