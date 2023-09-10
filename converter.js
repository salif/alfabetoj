var converter = {
	d: {
		Cyrillic_Esperanto: { "А": "A", "Б": "B", "Ц": "C", "Ч": "Ĉ", "Д": "D", "Е": "E", "Ф": "F", "Г": "G", "Џ": "Ĝ", "Һ": "H", "Х": "Ĥ", "И": "I", "Й": "J", "Ж": "Ĵ", "К": "K", "Л": "L", "М": "M", "Н": "N", "О": "O", "П": "P", "Р": "R", "С": "S", "Ш": "Ŝ", "Т": "T", "У": "U", "Ў": "Ŭ", "В": "V", "З": "Z", "а": "a", "б": "b", "ц": "c", "ч": "ĉ", "д": "d", "е": "e", "ф": "f", "г": "g", "џ": "ĝ", "һ": "h", "х": "ĥ", "и": "i", "й": "j", "ж": "ĵ", "к": "k", "л": "l", "м": "m", "н": "n", "о": "o", "п": "p", "р": "r", "с": "s", "ш": "ŝ", "т": "t", "у": "u", "ў": "ŭ", "в": "v", "з": "z" },
		Shavian_Esperanto: { "𐑨": "a", "𐑚": "b", "𐑔": "c", "𐑗": "ĉ", "𐑛": "d", "𐑧": "e", "𐑓": "f", "𐑜": "g", "𐑡": "ĝ", "𐑣": "h", "𐑙": "ĥ", "𐑦": "i", "𐑢": "j", "𐑠": "ĵ", "𐑒": "k", "𐑤": "l", "𐑫": "m", "𐑵": "n", "𐑩": "o", "𐑐": "p", "𐑮": "r", "𐑕": "s", "𐑖": "ŝ", "𐑑": "t", "𐑪": "u", "𐑘": "ŭ", "𐑝": "v", "𐑟": "z" },
		XSystem_Esperanto: { "CX": "Ĉ", "GX": "Ĝ", "HX": "Ĥ", "JX": "Ĵ", "SX": "Ŝ", "UX": "Ŭ", "Cx": "Ĉ", "Gx": "Ĝ", "Hx": "Ĥ", "Jx": "Ĵ", "Sx": "Ŝ", "Ux": "Ŭ", "cx": "ĉ", "gx": "ĝ", "hx": "ĥ", "jx": "ĵ", "sx": "ŝ", "ux": "ŭ" },
		Arabic_Esperanto: { "آ": "a", "ب": "b", "ث": "c", "چ": "ĉ", "د": "d", "اَ": "e", "ف": "f", "گ": "g", "ج": "ĝ", "ه": "h", "خ": "ĥ", "اِ": "i", "ی": "j", "ژ": "ĵ", "ك": "k", "ل": "l", "م": "m", "ن": "n", "اُ": "o", "پ": "p", "ر": "r", "س": "s", "ش": "ŝ", "ت": "t", "اْ": "u", "و": "ŭ", "ڤ": "v", "ز": "z" },
		Cyrillic2_Esperanto: { "А": "A", "Б": "B", "Ц": "C", "Ч": "Ĉ", "Д": "D", "Е": "E", "Ф": "F", "Г": "G", "Ѓ": "Ĝ", "Х": "H", "Ћ": "Ĥ", "И": "I", "Й": "J", "Ж": "Ĵ", "К": "K", "Л": "L", "М": "M", "Н": "N", "О": "O", "П": "P", "Р": "R", "С": "S", "Ш": "Ŝ", "Т": "T", "У": "U", "Ў": "Ŭ", "В": "V", "З": "Z", "а": "a", "б": "b", "ц": "c", "ч": "ĉ", "д": "d", "е": "e", "ф": "f", "г": "g", "ѓ": "ĝ", "х": "h", "ћ": "ĥ", "и": "i", "й": "j", "ж": "ĵ", "к": "k", "л": "l", "м": "m", "н": "n", "о": "o", "п": "p", "р": "r", "с": "s", "ш": "ŝ", "т": "t", "у": "u", "ў": "ŭ", "в": "v", "з": "z" },
		Bulgarian_Esperanto: { "А": "A", "Б": "B", "В": "V", "Г": "G", "Д": "D", "Е": "E", "Ж": "Ĵ", "З": "Z", "И": "I", "Й": "J", "К": "K", "Л": "L", "М": "M", "Н": "N", "О": "O", "П": "P", "Р": "R", "С": "S", "Т": "T", "У": "U", "Ф": "F", "Х": "Ĥ", "Ц": "C", "Ч": "Ĉ", "Ш": "Ŝ", "Щ": "ŜT", "Ъ": "Ŭ", "Ю": "JU", "Я": "JA", "а": "a", "б": "b", "в": "v", "г": "g", "д": "d", "е": "e", "ж": "ĵ", "з": "z", "и": "i", "й": "j", "к": "k", "л": "l", "м": "m", "н": "n", "о": "o", "п": "p", "р": "r", "с": "s", "т": "t", "у": "u", "ф": "f", "х": "ĥ", "ц": "c", "ч": "ĉ", "ш": "ŝ", "щ": "ŝt", "ъ": "ŭ", "ь": "j", "ю": "ju", "я": "ja" },
		Cyrillic_Shavian: { "А": "𐑨", "Б": "𐑚", "Ц": "𐑔", "Ч": "𐑗", "Д": "𐑛", "Е": "𐑧", "Ф": "𐑓", "Г": "𐑜", "Џ": "𐑡", "Һ": "𐑣", "Х": "𐑙", "И": "𐑦", "Й": "𐑢", "Ж": "𐑠", "К": "𐑒", "Л": "𐑤", "М": "𐑫", "Н": "𐑵", "О": "𐑩", "П": "𐑐", "Р": "𐑮", "С": "𐑕", "Ш": "𐑖", "Т": "𐑑", "У": "𐑪", "Ў": "𐑘", "В": "𐑝", "З": "𐑟", "а": "𐑨", "б": "𐑚", "ц": "𐑔", "ч": "𐑗", "д": "𐑛", "е": "𐑧", "ф": "𐑓", "г": "𐑜", "џ": "𐑡", "һ": "𐑣", "х": "𐑙", "и": "𐑦", "й": "𐑢", "ж": "𐑠", "к": "𐑒", "л": "𐑤", "м": "𐑫", "н": "𐑵", "о": "𐑩", "п": "𐑐", "р": "𐑮", "с": "𐑕", "ш": "𐑖", "т": "𐑑", "у": "𐑪", "ў": "𐑘", "в": "𐑝", "з": "𐑟" },
		Shavian_Cyrillic: { "𐑨": "а", "𐑚": "б", "𐑔": "ц", "𐑗": "ч", "𐑛": "д", "𐑧": "е", "𐑓": "ф", "𐑜": "г", "𐑡": "џ", "𐑣": "һ", "𐑙": "х", "𐑦": "и", "𐑢": "й", "𐑠": "ж", "𐑒": "к", "𐑤": "л", "𐑫": "м", "𐑵": "н", "𐑩": "о", "𐑐": "п", "𐑮": "р", "𐑕": "с", "𐑖": "ш", "𐑑": "т", "𐑪": "у", "𐑘": "ў", "𐑝": "в", "𐑟": "з" },
		Esperanto_Cyrillic: { "A": "А", "B": "Б", "C": "Ц", "Ĉ": "Ч", "D": "Д", "E": "Е", "F": "Ф", "G": "Г", "Ĝ": "Џ", "H": "Һ", "Ĥ": "Х", "I": "И", "J": "Й", "Ĵ": "Ж", "K": "К", "L": "Л", "M": "М", "N": "Н", "O": "О", "P": "П", "R": "Р", "S": "С", "Ŝ": "Ш", "T": "Т", "U": "У", "Ŭ": "Ў", "V": "В", "Z": "З", "a": "а", "b": "б", "c": "ц", "ĉ": "ч", "d": "д", "e": "е", "f": "ф", "g": "г", "ĝ": "џ", "h": "һ", "ĥ": "х", "i": "и", "j": "й", "ĵ": "ж", "k": "к", "l": "л", "m": "м", "n": "н", "o": "о", "p": "п", "r": "р", "s": "с", "ŝ": "ш", "t": "т", "u": "у", "ŭ": "ў", "v": "в", "z": "з" },
		Esperanto_Shavian: { "A": "𐑨", "B": "𐑚", "C": "𐑔", "Ĉ": "𐑗", "D": "𐑛", "E": "𐑧", "F": "𐑓", "G": "𐑜", "Ĝ": "𐑡", "H": "𐑣", "Ĥ": "𐑙", "I": "𐑦", "J": "𐑢", "Ĵ": "𐑠", "K": "𐑒", "L": "𐑤", "M": "𐑫", "N": "𐑵", "O": "𐑩", "P": "𐑐", "R": "𐑮", "S": "𐑕", "Ŝ": "𐑖", "T": "𐑑", "U": "𐑪", "Ŭ": "𐑘", "V": "𐑝", "Z": "𐑟", "a": "𐑨", "b": "𐑚", "c": "𐑔", "ĉ": "𐑗", "d": "𐑛", "e": "𐑧", "f": "𐑓", "g": "𐑜", "ĝ": "𐑡", "h": "𐑣", "ĥ": "𐑙", "i": "𐑦", "j": "𐑢", "ĵ": "𐑠", "k": "𐑒", "l": "𐑤", "m": "𐑫", "n": "𐑵", "o": "𐑩", "p": "𐑐", "r": "𐑮", "s": "𐑕", "ŝ": "𐑖", "t": "𐑑", "u": "𐑪", "ŭ": "𐑘", "v": "𐑝", "z": "𐑟" },
		Esperanto_XSystem: { "Ĉ": "Cx", "Ĝ": "Gx", "Ĥ": "Hx", "Ĵ": "Jx", "Ŝ": "Sx", "Ŭ": "Ux", "ĉ": "cx", "ĝ": "gx", "ĥ": "hx", "ĵ": "jx", "ŝ": "sx", "ŭ": "ux" },
		Esperanto_Arabic: { "A": "آ", "B": "ب", "C": "ث", "Ĉ": "چ", "D": "د", "E": "اَ", "F": "ف", "G": "گ", "Ĝ": "ج", "H": "ه", "Ĥ": "خ", "I": "اِ", "J": "ی", "Ĵ": "ژ", "K": "ك", "L": "ل", "M": "م", "N": "ن", "O": "اُ", "P": "پ", "R": "ر", "S": "س", "Ŝ": "ش", "T": "ت", "U": "اْ", "Ŭ": "و", "V": "ڤ", "Z": "ز", "a": "آ", "b": "ب", "c": "ث", "ĉ": "چ", "d": "د", "e": "اَ", "f": "ف", "g": "گ", "ĝ": "ج", "h": "ه", "ĥ": "خ", "i": "اِ", "j": "ی", "ĵ": "ژ", "k": "ك", "l": "ل", "m": "م", "n": "ن", "o": "اُ", "p": "پ", "r": "ر", "s": "س", "ŝ": "ش", "t": "ت", "u": "اْ", "ŭ": "و", "v": "ڤ", "z": "ز" },
		Esperanto_Cyrillic2: { "A": "А", "B": "Б", "C": "Ц", "Ĉ": "Ч", "D": "Д", "E": "Е", "F": "Ф", "G": "Г", "Ĝ": "Ѓ", "H": "Х", "Ĥ": "Ћ", "I": "И", "J": "Й", "Ĵ": "Ж", "K": "К", "L": "Л", "M": "М", "N": "Н", "O": "О", "P": "П", "R": "Р", "S": "С", "Ŝ": "Ш", "T": "Т", "U": "У", "Ŭ": "Ў", "V": "В", "Z": "З", "a": "а", "b": "б", "c": "ц", "ĉ": "ч", "d": "д", "e": "е", "f": "ф", "g": "г", "ĝ": "ѓ", "h": "х", "ĥ": "ћ", "i": "и", "j": "й", "ĵ": "ж", "k": "к", "l": "л", "m": "м", "n": "н", "o": "о", "p": "п", "r": "р", "s": "с", "ŝ": "ш", "t": "т", "u": "у", "ŭ": "ў", "v": "в", "z": "з" },
	},
	convert: (function () {

		function convert_r(input, m) {
			var output = input
			var marr = Object.entries(m)
			for (var i = 0; i < marr.length; i++) {
				var mel = marr[i]
				output = output.replaceAll(mel[0], mel[1])
			}
			return output
		}

		return function (input, m, r) {
			if (r) {
				return convert_r(input, m)
			}
			var output = []
			for (var i = 0; i < input.length; i++) {
				var xx = input.charAt(i)
				var mxx = m[xx]
				if (mxx != undefined) {
					xx = mxx
				}
				output.push(xx)
			}
			return output.join("")
		}

	})()
}
