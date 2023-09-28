var lcl_lang = "en"
var lcl_langs = ["en", "bg", "eo"]

var options_convert = [
	{
		l: { "en": "Esperanto → Cyrillic", "bg": "есперанто → кирилица", "eo": "Esperanto → Cirila" },
		s: konvertilo.skribsistemoj.cyrillic.from_esperanto,
		r: false,
	},
	{
		l: { "en": "Cyrillic → Esperanto", "bg": "кирилица → есперанто", "eo": "Cirila → Esperanto" },
		s: konvertilo.skribsistemoj.cyrillic.to_esperanto,
		r: false,
	},
	{
		l: { "en": "Esperanto → Shavian", "bg": "есперанто → шавиански", "eo": "Esperanto → Ŝava" },
		s: konvertilo.skribsistemoj.shavian.from_esperanto,
		r: false,
	},
	{
		l: { "en": "Shavian → Esperanto", "bg": "шавиански → есперанто", "eo": "Ŝava → Esperanto" },
		s: konvertilo.skribsistemoj.shavian.to_esperanto,
		r: true,
	},
	{
		l: { "en": "Esperanto → x-system", "bg": "есперанто → x-система", "eo": "Esperanto → x-sistemo" },
		s: konvertilo.skribsistemoj.x_system.from_esperanto,
		r: false,
	},
	{
		l: { "en": "x-system → Esperanto", "bg": "x-система → есперанто", "eo": "x-sistemo → Esperanto" },
		s: konvertilo.skribsistemoj.x_system.to_esperanto,
		r: true,
	},
	{
		l: { "en": "Esperanto → Arabic", "bg": "есперанто → арабски", "eo": "Esperanto → Araba" },
		s: konvertilo.skribsistemoj.arabic.from_esperanto,
		r: false,
	},
	{
		l: { "en": "Arabic → Esperanto", "bg": "арабски → есперанто", "eo": "Araba → Esperanto" },
		s: konvertilo.skribsistemoj.arabic.to_esperanto,
		r: true,
	},
	{
		l: { "en": "Esperanto → Georgian", "bg": "есперанто → грузински", "eo": "Esperanto → Kartvela" },
		s: konvertilo.skribsistemoj.georgian.from_esperanto,
		r: false,
	},
	{
		l: { "en": "Georgian → Esperanto", "bg": "грузински → есперанто", "eo": "Kartvela → Esperanto" },
		s: konvertilo.skribsistemoj.georgian.to_esperanto,
		r: false,
	},
	{
		l: { "en": "Esperanto → Cyrillic 2", "bg": "есперанто → кирилица 2", "eo": "Esperanto → Cirila 2" },
		s: konvertilo.skribsistemoj.cyrillic_2.from_esperanto,
		r: false,
	},
	{
		l: { "en": "Cyrillic 2 → Esperanto", "bg": "кирилица 2 → есперанто", "eo": "Cirila 2 → Esperanto" },
		s: konvertilo.skribsistemoj.cyrillic_2.to_esperanto,
		r: false,
	}
]

var selected_convert = options_convert[0]

function _i(o) {
	var ro = o[lcl_lang]
	if (ro == undefined) {
		return ""
	} else {
		return ro
	}
}

function lcl_page(lang) {
	lcl_lang = lang
	document.title = _i({ "en": "Esperanto alphabet converter", "bg": "Есперанто конвертор на азбуки", "eo": "Esperanta alfabeta konvertilo" })
	document.documentElement.lang = lcl_lang
}

function check_lcl() {
	var user_langs = navigator.languages
	var site_langs = lcl_langs
	for (var i = 0; i < user_langs.length; i++) {
		var user_lang = user_langs[i]
		if (user_lang === lcl_lang) {
			return { yes: false }
		} else if (site_langs.indexOf(user_lang) > -1) {
			return { yes: true, lang: user_lang }
		}
	}
	return { yes: false }
}

function load_page() {

	try {
		var lcl_c = check_lcl()
		if (lcl_c.yes) {
			lcl_page(lcl_c.lang)
		}
	} catch (err) { }

	build_page()
}

function build_page() {

	var body = document.getElementById("main")

	var el_title = document.createElement("div")
	el_title.classList.add("h3")
	el_title.textContent = document.title

	var el_header = document.createElement("div")
	el_header.classList.add("p-4")
	el_header.appendChild(el_title)
	body.appendChild(el_header)

	var el_input = document.createElement("textarea")
	el_input.classList.add("form-control")
	el_input.rows = "10"
	el_input.placeholder = _i({ "en": "Input", "bg": "Въведи", "eo": "Enigu" })
	el_input.onkeyup = convert

	var el_con_input = document.createElement("div")
	el_con_input.classList.add("mb-3")
	el_con_input.appendChild(el_input)
	body.appendChild(el_con_input)

	var el_con_langs = document.createElement("div")
	el_con_langs.classList.add("row")

	var create_lang_option = function (o, i, p) {
		var el_lang = document.createElement("input")
		el_lang.classList.add("btn-check")
		el_lang.type = "radio"
		el_lang.name = "lang_o"
		el_lang.id = "lang_" + i
		el_lang.onchange = function (e) {
			if (this.checked) {
				selected_convert = o
				if (el_input.value.length == 0) {
					el_input.focus()
					return
				} else {
					convert()
					scroll_to_output(el_output)
				}
			}
		}

		var el_lang_label = document.createElement("label")
		el_lang_label.classList.add("btn", "btn-outline-success")
		el_lang_label.htmlFor = el_lang.id
		el_lang_label.textContent = _i(o.l)

		p.appendChild(el_lang)
		p.appendChild(el_lang_label)

	}

	for (var i = 0; i < options_convert.length; i += 2) {
		var el_con_lang = document.createElement("div")
		el_con_lang.classList.add("btn-group", "col-auto", "my-1")
		create_lang_option(options_convert[i], i, el_con_lang)
		create_lang_option(options_convert[i + 1], i + 1, el_con_lang)
		el_con_langs.appendChild(el_con_lang)
	}

	el_con_langs.firstChild.firstChild.checked = true

	var el_con_control = document.createElement("div")
	el_con_control.classList.add("mb-3")
	el_con_control.appendChild(el_con_langs)
	body.appendChild(el_con_control)

	var el_output = document.createElement("textarea")
	el_output.classList.add("form-control")
	el_output.rows = "10"
	el_output.disabled = "disabled"

	var el_con_output = document.createElement("div")
	el_con_output.classList.add("mb-3")
	el_con_output.appendChild(el_output)
	body.appendChild(el_con_output)

	var el_btn_lcl = document.createElement("select")
	el_btn_lcl.classList.add("form-select", "mx-1")
	el_btn_lcl.style.width = "auto"
	el_btn_lcl.style.display = "inline-block"
	el_btn_lcl.onchange = function () {
		lcl_page(this.value)
		body.innerHTML = ""
		build_page()
	}

	for (var i = 0; i < lcl_langs.length; i++) {
		var lang = lcl_langs[i]
		var el_btn_lcl_o = document.createElement("option")
		el_btn_lcl_o.value = lang
		el_btn_lcl_o.textContent = lang
		if (lang === lcl_lang) {
			el_btn_lcl_o.selected = true
		}
		el_btn_lcl.appendChild(el_btn_lcl_o)
	}

	var el_btn_clear = document.createElement("input")
	el_btn_clear.type = "button"
	el_btn_clear.classList.add("btn", "btn-danger", "mx-1")
	el_btn_clear.value = _i({ "en": "clear", "bg": "изчисти", "eo": "purigi" })
	el_btn_clear.onclick = function () {
		el_input.value = ""
		el_output.value = ""
	}

	var el_btn_code = document.createElement("a")
	el_btn_code.classList.add("btn", "btn-primary", "mx-1")
	el_btn_code.href = "https://github.com/salif/alfabetoj"
	el_btn_code.target = "_blank"
	el_btn_code.textContent = _i({ "en": "code", "bg": "код", "eo": "fontkodo" })

	var el_con_b_control = document.createElement("div")
	el_con_b_control.appendChild(el_btn_lcl)
	el_con_b_control.appendChild(el_btn_clear)
	el_con_b_control.appendChild(el_btn_code)
	body.appendChild(el_con_b_control)

	function scroll_to_output(elm) {
		var rect = elm.getBoundingClientRect()
		var view_height = Math.max(document.documentElement.clientHeight, window.innerHeight)
		var is_not_visible = rect.bottom < 0 || rect.top - view_height >= 0
		if (is_not_visible) {
			elm.scrollIntoView(true)
		}
	}

	function convert() {
		el_output.value = konvertilo.konverti(el_input.value, selected_convert.s, selected_convert.r)
	}
}

document.body.onload = load_page
