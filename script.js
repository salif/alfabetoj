var str_lcl_lang = "en"
var strs_lcl_langs = ["en", "eo", "bg"]

var objs_options_convert = [
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
		l: { "en": "Esperanto → Armenian", "bg": "есперанто → арменски", "eo": "Esperanto → Armena" },
		s: konvertilo.skribsistemoj.armenian.from_esperanto,
		r: false,
	},
	{
		l: { "en": "Armenian → Esperanto", "bg": "арменски → есперанто", "eo": "Armena → Esperanto" },
		s: konvertilo.skribsistemoj.armenian.to_esperanto,
		r: false,
	},
	{
		l: { "en": "Esperanto → Hebrew", "bg": "есперанто → иврит", "eo": "Esperanto → Hebrea" },
		s: konvertilo.skribsistemoj.hebrew.from_esperanto,
		r: false,
	},
	{
		l: { "en": "Hebrew → Esperanto", "bg": "иврит → есперанто", "eo": "Hebrea → Esperanto" },
		s: konvertilo.skribsistemoj.hebrew.to_esperanto,
		r: false,
	},
	{
		l: { "en": "Esperanto → Greek", "bg": "есперанто → гръцки", "eo": "Esperanto → Greka" },
		s: konvertilo.skribsistemoj.greek.from_esperanto,
		r: false,
	},
	{
		l: { "en": "Greek → Esperanto", "bg": "гръцки → есперанто", "eo": "Greka → Esperanto" },
		s: konvertilo.skribsistemoj.greek.to_esperanto,
		r: false,
	},
	{
		l: { "en": "Esperanto → Korean", "bg": "есперанто → корейски", "eo": "Esperanto → Korea" },
		s: konvertilo.skribsistemoj.korean.from_esperanto,
		r: false,
	},
	{
		l: { "en": "Korean → Esperanto", "bg": "корейски → есперанто", "eo": "Korea → Esperanto" },
		s: konvertilo.skribsistemoj.korean.to_esperanto,
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

var obj_selected_convert = objs_options_convert[0]

function _i(obj) {
	var str_ro = obj[str_lcl_lang]
	return str_ro == undefined ? "" : str_ro
}

function lcl_page(str_lang) {
	str_lcl_lang = str_lang
	document.title = _i({ "en": "Esperanto alphabet converter", "bg": "Есперанто конвертор на азбуки", "eo": "Esperanta skribsistema konvertilo" })
	document.documentElement.lang = str_lcl_lang
}

function check_lcl() {
	var strs_user_langs = navigator.languages
	var strs_site_langs = strs_lcl_langs
	for (var num_i = 0; num_i < strs_user_langs.length; num_i++) {
		var str_user_lang = strs_user_langs[num_i]
		if (str_user_lang === str_lcl_lang) {
			return { is_yes: false }
		} else if (strs_site_langs.indexOf(str_user_lang) > -1) {
			return { is_yes: true, str_lang: str_user_lang }
		}
	}
	return { is_yes: false }
}

function load_page() {

	try {
		var obj_lcl_c = check_lcl()
		if (obj_lcl_c.is_yes) {
			lcl_page(obj_lcl_c.str_lang)
		}
	} catch (err) { }

	build_page()
}

function build_page() {

	var el_body = document.getElementById("main")

	var el_title = document.createElement("div")
	el_title.classList.add("h3")
	el_title.textContent = document.title

	var el_header = document.createElement("div")
	el_header.classList.add("p-4")
	el_header.appendChild(el_title)
	el_body.appendChild(el_header)

	var el_con_langs = document.createElement("div")
	el_con_langs.classList.add("row")

	var create_lang_option = function (obj, num_i, el_p) {
		var el_lang = document.createElement("input")
		el_lang.classList.add("btn-check")
		el_lang.type = "radio"
		el_lang.name = "lang_o"
		el_lang.id = "lang_" + num_i
		el_lang.onchange = function (ev) {
			if (this.checked) {
				obj_selected_convert = obj
				if (el_input.value.length == 0) {
					el_output.value = ""
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
		el_lang_label.textContent = _i(obj.l)

		el_p.appendChild(el_lang)
		el_p.appendChild(el_lang_label)

	}

	for (var num_i = 0; num_i < objs_options_convert.length; num_i += 2) {
		var el_con_lang = document.createElement("div")
		el_con_lang.classList.add("btn-group", "col-auto", "my-1")
		create_lang_option(objs_options_convert[num_i], num_i, el_con_lang)
		create_lang_option(objs_options_convert[num_i + 1], num_i + 1, el_con_lang)
		el_con_langs.appendChild(el_con_lang)
	}

	el_con_langs.firstChild.firstChild.checked = true

	var el_con_control = document.createElement("div")
	el_con_control.classList.add("mb-3")
	el_con_control.appendChild(el_con_langs)
	el_body.appendChild(el_con_control)

	var el_input = document.createElement("textarea")
	el_input.classList.add("form-control")
	el_input.rows = "10"
	el_input.placeholder = _i({ "en": "Input", "bg": "Въведи", "eo": "Enigu" })
	el_input.onkeyup = convert

	var el_con_input = document.createElement("div")
	el_con_input.classList.add("mb-3")
	el_con_input.appendChild(el_input)
	el_body.appendChild(el_con_input)

	var el_output = document.createElement("textarea")
	el_output.classList.add("form-control")
	el_output.rows = "10"
	el_output.disabled = "disabled"

	var el_con_output = document.createElement("div")
	el_con_output.classList.add("mb-3")
	el_con_output.appendChild(el_output)
	el_body.appendChild(el_con_output)

	var el_btn_lcl = document.createElement("select")
	el_btn_lcl.classList.add("form-select", "mx-1")
	el_btn_lcl.style.width = "auto"
	el_btn_lcl.style.display = "inline-block"
	el_btn_lcl.onchange = function () {
		lcl_page(this.value)
		el_body.innerHTML = ""
		build_page()
	}

	for (var num_i = 0; num_i < strs_lcl_langs.length; num_i++) {
		var str_lang = strs_lcl_langs[num_i]
		var el_btn_lcl_o = document.createElement("option")
		el_btn_lcl_o.value = str_lang
		el_btn_lcl_o.textContent = str_lang
		if (str_lang === str_lcl_lang) {
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

	var el_btn_letters = document.createElement("input")
	el_btn_letters.type = "button"
	el_btn_letters.classList.add("btn", "btn-primary", "mx-1")
	el_btn_letters.value = _i({ "en": "letters", "bg": "букви", "eo": "literoj" })
	el_btn_letters.onclick = function () {
		el_output.value = Object.entries(obj_selected_convert.s).map(function (e) {
			return e.join(": ")
		}).join(";    ")
		el_output.focus()
	}

	var el_btn_code = document.createElement("a")
	el_btn_code.classList.add("btn", "btn-primary", "mx-1")
	el_btn_code.href = "https://github.com/salif/alfabetoj"
	el_btn_code.target = "_blank"
	el_btn_code.textContent = _i({ "en": "code", "bg": "код", "eo": "fontkodo" })

	var el_con_b_control = document.createElement("div")
	el_con_b_control.appendChild(el_btn_lcl)
	el_con_b_control.appendChild(el_btn_clear)
	el_con_b_control.appendChild(el_btn_letters)
	el_con_b_control.appendChild(el_btn_code)
	el_body.appendChild(el_con_b_control)

	function scroll_to_output(el) {
		var dom_rect = el.getBoundingClientRect()
		var num_view_height = Math.max(document.documentElement.clientHeight, window.innerHeight)
		var is_not_visible = dom_rect.bottom < 0 || dom_rect.top - num_view_height >= 0
		if (is_not_visible) {
			el.scrollIntoView(true)
		}
	}

	function convert() {
		el_output.value = konvertilo.konverti(el_input.value, obj_selected_convert.s, obj_selected_convert.r)
	}
}

document.body.onload = load_page
