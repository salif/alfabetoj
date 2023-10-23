var konvertilo = {
	skribsistemoj: {
		cyrillic: {
			to_esperanto: {
				"А": "A", "Б": "B", "Ц": "C", "Ч": "Ĉ", "Д": "D", "Е": "E",
				"Ф": "F", "Г": "G", "Џ": "Ĝ", "Һ": "H", "Х": "Ĥ", "И": "I",
				"Й": "J", "Ж": "Ĵ", "К": "K", "Л": "L", "М": "M", "Н": "N",
				"О": "O", "П": "P", "Р": "R", "С": "S", "Ш": "Ŝ", "Т": "T",
				"У": "U", "Ў": "Ŭ", "В": "V", "З": "Z",
				"а": "a", "б": "b", "ц": "c", "ч": "ĉ", "д": "d", "е": "e",
				"ф": "f", "г": "g", "џ": "ĝ", "һ": "h", "х": "ĥ", "и": "i",
				"й": "j", "ж": "ĵ", "к": "k", "л": "l", "м": "m", "н": "n",
				"о": "o", "п": "p", "р": "r", "с": "s", "ш": "ŝ", "т": "t",
				"у": "u", "ў": "ŭ", "в": "v", "з": "z"
			},
			from_esperanto: {
				"A": "А", "B": "Б", "C": "Ц", "Ĉ": "Ч", "D": "Д", "E": "Е",
				"F": "Ф", "G": "Г", "Ĝ": "Џ", "H": "Һ", "Ĥ": "Х", "I": "И",
				"J": "Й", "Ĵ": "Ж", "K": "К", "L": "Л", "M": "М", "N": "Н",
				"O": "О", "P": "П", "R": "Р", "S": "С", "Ŝ": "Ш", "T": "Т",
				"U": "У", "Ŭ": "Ў", "V": "В", "Z": "З",
				"a": "а", "b": "б", "c": "ц", "ĉ": "ч", "d": "д", "e": "е",
				"f": "ф", "g": "г", "ĝ": "џ", "h": "һ", "ĥ": "х", "i": "и",
				"j": "й", "ĵ": "ж", "k": "к", "l": "л", "m": "м", "n": "н",
				"o": "о", "p": "п", "r": "р", "s": "с", "ŝ": "ш", "t": "т",
				"u": "у", "ŭ": "ў", "v": "в", "z": "з"
			}
		},
		shavian: {
			to_esperanto: {
				"𐑨": "a", "𐑚": "b", "𐑔": "c", "𐑗": "ĉ", "𐑛": "d", "𐑧": "e",
				"𐑓": "f", "𐑜": "g", "𐑡": "ĝ", "𐑣": "h", "𐑙": "ĥ", "𐑦": "i",
				"𐑢": "j", "𐑠": "ĵ", "𐑒": "k", "𐑤": "l", "𐑫": "m", "𐑵": "n",
				"𐑩": "o", "𐑐": "p", "𐑮": "r", "𐑕": "s", "𐑖": "ŝ", "𐑑": "t",
				"𐑪": "u", "𐑘": "ŭ", "𐑝": "v", "𐑟": "z"
			},
			from_esperanto: {
				"A": "𐑨", "B": "𐑚", "C": "𐑔", "Ĉ": "𐑗", "D": "𐑛", "E": "𐑧",
				"F": "𐑓", "G": "𐑜", "Ĝ": "𐑡", "H": "𐑣", "Ĥ": "𐑙", "I": "𐑦",
				"J": "𐑢", "Ĵ": "𐑠", "K": "𐑒", "L": "𐑤", "M": "𐑫", "N": "𐑵",
				"O": "𐑩", "P": "𐑐", "R": "𐑮", "S": "𐑕", "Ŝ": "𐑖", "T": "𐑑",
				"U": "𐑪", "Ŭ": "𐑘", "V": "𐑝", "Z": "𐑟",
				"a": "𐑨", "b": "𐑚", "c": "𐑔", "ĉ": "𐑗", "d": "𐑛", "e": "𐑧",
				"f": "𐑓", "g": "𐑜", "ĝ": "𐑡", "h": "𐑣", "ĥ": "𐑙", "i": "𐑦",
				"j": "𐑢", "ĵ": "𐑠", "k": "𐑒", "l": "𐑤", "m": "𐑫", "n": "𐑵",
				"o": "𐑩", "p": "𐑐", "r": "𐑮", "s": "𐑕", "ŝ": "𐑖", "t": "𐑑",
				"u": "𐑪", "ŭ": "𐑘", "v": "𐑝", "z": "𐑟"
			},
		},
		x_system: {
			to_esperanto: {
				"CX": "Ĉ", "GX": "Ĝ", "HX": "Ĥ", "JX": "Ĵ", "SX": "Ŝ", "UX": "Ŭ",
				"Cx": "Ĉ", "Gx": "Ĝ", "Hx": "Ĥ", "Jx": "Ĵ", "Sx": "Ŝ", "Ux": "Ŭ",
				"cx": "ĉ", "gx": "ĝ", "hx": "ĥ", "jx": "ĵ", "sx": "ŝ", "ux": "ŭ"
			},
			from_esperanto: {
				"Ĉ": "Cx", "Ĝ": "Gx", "Ĥ": "Hx", "Ĵ": "Jx", "Ŝ": "Sx", "Ŭ": "Ux",
				"ĉ": "cx", "ĝ": "gx", "ĥ": "hx", "ĵ": "jx", "ŝ": "sx", "ŭ": "ux"
			}
		},
		arabic: {
			to_esperanto: {
				"آ": "a", "ب": "b", "ث": "c", "چ": "ĉ", "د": "d", "اَ": "e",
				"ف": "f", "گ": "g", "ج": "ĝ", "ه": "h", "خ": "ĥ", "اِ": "i",
				"ی": "j", "ژ": "ĵ", "ك": "k", "ل": "l", "م": "m", "ن": "n",
				"اُ": "o", "پ": "p", "ر": "r", "س": "s", "ش": "ŝ", "ت": "t",
				"اْ": "u", "و": "ŭ", "ڤ": "v", "ز": "z"
			},
			from_esperanto: {
				"A": "آ", "B": "ب", "C": "ث", "Ĉ": "چ", "D": "د", "E": "اَ",
				"F": "ف", "G": "گ", "Ĝ": "ج", "H": "ه", "Ĥ": "خ", "I": "اِ",
				"J": "ی", "Ĵ": "ژ", "K": "ك", "L": "ل", "M": "م", "N": "ن",
				"O": "اُ", "P": "پ", "R": "ر", "S": "س", "Ŝ": "ش", "T": "ت",
				"U": "اْ", "Ŭ": "و", "V": "ڤ", "Z": "ز",
				"a": "آ", "b": "ب", "c": "ث", "ĉ": "چ", "d": "د", "e": "اَ",
				"f": "ف", "g": "گ", "ĝ": "ج", "h": "ه", "ĥ": "خ", "i": "اِ",
				"j": "ی", "ĵ": "ژ", "k": "ك", "l": "ل", "m": "م", "n": "ن",
				"o": "اُ", "p": "پ", "r": "ر", "s": "س", "ŝ": "ش", "t": "ت",
				"u": "اْ", "ŭ": "و", "v": "ڤ", "z": "ز"
			}
		},
		georgian: {
			to_esperanto: {
				"ა": "a", "ბ": "b", "ც": "c", "ჩ": "ĉ", "დ": "d", "ე": "e",
				"ჶ": "f", "გ": "g", "ჯ": "ĝ", "ჰ": "h", "ხ": "ĥ", "ი": "i",
				"ჲ": "j", "ჟ": "ĵ", "ქ": "k", "ლ": "l", "მ": "m", "ნ": "n",
				"ო": "o", "ფ": "p", "რ": "r", "ს": "s", "შ": "ŝ", "თ": "t",
				"უ": "u", "ჳ": "ŭ", "ვ": "v", "ზ": "z"
			},
			from_esperanto: {
				"A": "ა", "B": "ბ", "C": "ც", "Ĉ": "ჩ", "D": "დ", "E": "ე",
				"F": "ჶ", "G": "გ", "Ĝ": "ჯ", "H": "ჰ", "Ĥ": "ხ", "I": "ი",
				"J": "ჲ", "Ĵ": "ჟ", "K": "ქ", "L": "ლ", "M": "მ", "N": "ნ",
				"O": "ო", "P": "ფ", "R": "რ", "S": "ს", "Ŝ": "შ", "T": "თ",
				"U": "უ", "Ŭ": "ჳ", "V": "ვ", "Z": "ზ",
				"a": "ა", "b": "ბ", "c": "ც", "ĉ": "ჩ", "d": "დ", "e": "ე",
				"f": "ჶ", "g": "გ", "ĝ": "ჯ", "h": "ჰ", "ĥ": "ხ", "i": "ი",
				"j": "ჲ", "ĵ": "ჟ", "k": "ქ", "l": "ლ", "m": "მ", "n": "ნ",
				"o": "ო", "p": "ფ", "r": "რ", "s": "ს", "ŝ": "შ", "t": "თ",
				"u": "უ", "ŭ": "ჳ", "v": "ვ", "z": "ზ"
			}
		},
		armenian: {
			to_esperanto: {
				"Ա": "A", "Բ": "B", "Ծ": "C", "Ճ": "Ĉ", "Դ": "D", "է": "E",
				"Ֆ": "F", "Գ": "G", "Ղ": "Ĝ", "Հ": "H", "Խ": "Ĥ", "Ի": "I",
				"Յ": "J", "Ջ": "Ĵ", "Կ": "K", "Լ": "L", "Մ": "M", "Ն": "N",
				"Ո": "O", "Պ": "P", "Ր": "R", "Ս": "S", "Շ": "Ŝ", "Տ": "T",
				"Ւ": "U", "Ւ": "Ŭ", "Վ": "V", "Զ": "Z",
				"ա": "a", "բ": "b", "ծ": "c", "ճ": "ĉ", "դ": "d", "ե": "e",
				"ֆ": "f", "գ": "g", "ղ": "ĝ", "հ": "h", "խ": "ĥ", "ի": "i",
				"յ": "j", "ջ": "ĵ", "կ": "k", "լ": "l", "մ": "m", "ն": "n",
				"ո": "o", "պ": "p", "ր": "r", "ս": "s", "շ": "ŝ", "տ": "t",
				"ւ": "u", "ւ": "ŭ", "վ": "v", "զ": "z",
			},
			from_esperanto: {
				"A": "Ա", "B": "Բ", "C": "Ծ", "Ĉ": "Ճ", "D": "Դ", "E": "է",
				"F": "Ֆ", "G": "Գ", "Ĝ": "Ղ", "H": "Հ", "Ĥ": "Խ", "I": "Ի",
				"J": "Յ", "Ĵ": "Ջ", "K": "Կ", "L": "Լ", "M": "Մ", "N": "Ն",
				"O": "Ո", "P": "Պ", "R": "Ր", "S": "Ս", "Ŝ": "Շ", "T": "Տ",
				"U": "Ւ", "Ŭ": "Ւ", "V": "Վ", "Z": "Զ",
				"a": "ա", "b": "բ", "c": "ծ", "ĉ": "ճ", "d": "դ", "e": "ե",
				"f": "ֆ", "g": "գ", "ĝ": "ղ", "h": "հ", "ĥ": "խ", "i": "ի",
				"j": "յ", "ĵ": "ջ", "k": "կ", "l": "լ", "m": "մ", "n": "ն",
				"o": "ո", "p": "պ", "r": "ր", "s": "ս", "ŝ": "շ", "t": "տ",
				"u": "ւ", "ŭ": "ւ", "v": "վ", "z": "զ"
			}
		},
		hebrew: {
			to_esperanto: {},
			from_esperanto: {}
		},
		greek: {
			to_esperanto: {},
			from_esperanto: {}
		},
		korean: {
			to_esperanto: {},
			from_esperanto: {}
		},
		cyrillic_2: {
			to_esperanto: {
				"А": "A", "Б": "B", "Ц": "C", "Ч": "Ĉ", "Д": "D", "Е": "E",
				"Ф": "F", "Г": "G", "Ѓ": "Ĝ", "Х": "H", "Ћ": "Ĥ", "И": "I",
				"Й": "J", "Ж": "Ĵ", "К": "K", "Л": "L", "М": "M", "Н": "N",
				"О": "O", "П": "P", "Р": "R", "С": "S", "Ш": "Ŝ", "Т": "T",
				"У": "U", "Ў": "Ŭ", "В": "V", "З": "Z",
				"а": "a", "б": "b", "ц": "c", "ч": "ĉ", "д": "d", "е": "e",
				"ф": "f", "г": "g", "ѓ": "ĝ", "х": "h", "ћ": "ĥ", "и": "i",
				"й": "j", "ж": "ĵ", "к": "k", "л": "l", "м": "m", "н": "n",
				"о": "o", "п": "p", "р": "r", "с": "s", "ш": "ŝ", "т": "t",
				"у": "u", "ў": "ŭ", "в": "v", "з": "z"
			},
			from_esperanto: {
				"A": "А", "B": "Б", "C": "Ц", "Ĉ": "Ч", "D": "Д", "E": "Е",
				"F": "Ф", "G": "Г", "Ĝ": "Ѓ", "H": "Х", "Ĥ": "Ћ", "I": "И",
				"J": "Й", "Ĵ": "Ж", "K": "К", "L": "Л", "M": "М", "N": "Н",
				"O": "О", "P": "П", "R": "Р", "S": "С", "Ŝ": "Ш", "T": "Т",
				"U": "У", "Ŭ": "Ў", "V": "В", "Z": "З",
				"a": "а", "b": "б", "c": "ц", "ĉ": "ч", "d": "д", "e": "е",
				"f": "ф", "g": "г", "ĝ": "ѓ", "h": "х", "ĥ": "ћ", "i": "и",
				"j": "й", "ĵ": "ж", "k": "к", "l": "л", "m": "м", "n": "н",
				"o": "о", "p": "п", "r": "р", "s": "с", "ŝ": "ш", "t": "т",
				"u": "у", "ŭ": "ў", "v": "в", "z": "з"
			}
		},
		bulgarian: {
			to_esperanto: {
				"А": "A", "Б": "B", "В": "V", "Г": "G", "Д": "D", "Е": "E",
				"Ж": "Ĵ", "З": "Z", "И": "I", "Й": "J", "К": "K", "Л": "L",
				"М": "M", "Н": "N", "О": "O", "П": "P", "Р": "R", "С": "S",
				"Т": "T", "У": "U", "Ф": "F", "Х": "Ĥ", "Ц": "C", "Ч": "Ĉ",
				"Ш": "Ŝ", "Щ": "ŜT", "Ъ": "Ŭ", "Ю": "JU", "Я": "JA",
				"а": "a", "б": "b", "в": "v", "г": "g", "д": "d", "е": "e",
				"ж": "ĵ", "з": "z", "и": "i", "й": "j", "к": "k", "л": "l",
				"м": "m", "н": "n", "о": "o", "п": "p", "р": "r", "с": "s",
				"т": "t", "у": "u", "ф": "f", "х": "ĥ", "ц": "c", "ч": "ĉ",
				"ш": "ŝ", "щ": "ŝt", "ъ": "ŭ", "ь": "j", "ю": "ju", "я": "ja"
			}
		},
		cyrillic_shavian: {
			to_shavian: {
				"А": "𐑨", "Б": "𐑚", "Ц": "𐑔", "Ч": "𐑗", "Д": "𐑛", "Е": "𐑧",
				"Ф": "𐑓", "Г": "𐑜", "Џ": "𐑡", "Һ": "𐑣", "Х": "𐑙", "И": "𐑦",
				"Й": "𐑢", "Ж": "𐑠", "К": "𐑒", "Л": "𐑤", "М": "𐑫", "Н": "𐑵",
				"О": "𐑩", "П": "𐑐", "Р": "𐑮", "С": "𐑕", "Ш": "𐑖", "Т": "𐑑",
				"У": "𐑪", "Ў": "𐑘", "В": "𐑝", "З": "𐑟",
				"а": "𐑨", "б": "𐑚", "ц": "𐑔", "ч": "𐑗", "д": "𐑛", "е": "𐑧",
				"ф": "𐑓", "г": "𐑜", "џ": "𐑡", "һ": "𐑣", "х": "𐑙", "и": "𐑦",
				"й": "𐑢", "ж": "𐑠", "к": "𐑒", "л": "𐑤", "м": "𐑫", "н": "𐑵",
				"о": "𐑩", "п": "𐑐", "р": "𐑮", "с": "𐑕", "ш": "𐑖", "т": "𐑑",
				"у": "𐑪", "ў": "𐑘", "в": "𐑝", "з": "𐑟"
			}, from_shavian: {
				"𐑨": "а", "𐑚": "б", "𐑔": "ц", "𐑗": "ч", "𐑛": "д", "𐑧": "е",
				"𐑓": "ф", "𐑜": "г", "𐑡": "џ", "𐑣": "һ", "𐑙": "х", "𐑦": "и",
				"𐑢": "й", "𐑠": "ж", "𐑒": "к", "𐑤": "л", "𐑫": "м", "𐑵": "н",
				"𐑩": "о", "𐑐": "п", "𐑮": "р", "𐑕": "с", "𐑖": "ш", "𐑑": "т",
				"𐑪": "у", "𐑘": "ў", "𐑝": "в", "𐑟": "з"
			}
		}
	},
	konverti: (function () {

		function convert_replacing(input, skribsistemo) {
			var output = input
			var entries = Object.entries(skribsistemo)
			for (var i = 0; i < entries.length; i++) {
				var entry = entries[i]
				output = output.replaceAll(entry[0], entry[1])
			}
			return output
		}
		return function (input, skribsistemo, use_replacing) {
			if (input.length == 0) {
				return ""
			}
			if (use_replacing) {
				return convert_replacing(input, skribsistemo)
			}
			var output = []
			for (var i = 0; i < input.length; i++) {
				var input_char = input.charAt(i)
				var output_char = skribsistemo[input_char]
				output.push(output_char != undefined ? output_char : input_char)
			}
			return output.join("")
		}

	})()
}
