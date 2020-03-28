// Script do navegador cruzado escrito por Jim Stiles
	// código adicional para exibir a data no formato dia do mês, ano
	var lutext;
	var lutime;
	var ludm;
	var ludd;
	var ludy;
	function sstr (a, b) {// extrai substrings
		ret = lutime.substring (a, b);
		if (ret == "Jan" || ret == "01") ret = "1";
		if (ret == "Feb" || ret == "02") ret = "2";
		if (ret == "Mar" || ret == "03" || ret == "Mrz") ret = "3";
		if (ret == "abr" || ret == "04") ret = "4";
		if (ret == "Maio" || ret == "05" || ret == "Mai") ret = "5";
		if (ret == "Jun" || ret == "06") ret = "6";
		if (ret == "Jul" || ret == "07") ret = "7";
		if (ret == "Ago" || ret == "08") ret = "8";
		if (ret == "Set" || ret == "09") ret = "9";
		if (ret == "Oct" || ret == "Ok") ret = "10";
		if (ret == "Nov") ret = "11";
		if (ret == "Dez" || ret == "Dez") ret = "12";
		return ret;
	}
	lutime = sem escape (document.lastModified);
	if (lutime.length == 17) {// Netscape 3 e superior, Internet Explorer 4
	ludm = sstr (0,2);
	ludd = sstr (3,5);
	ludy = sstr (6,8);
	}

        if (lutime.length == 19) {// Netscape 3 e superior, Internet Explorer 4 e superior, ano de 4 dígitos
        ludm = sstr (0,2);       
        ludd = sstr (3,5);       
        ludy = sstr (6,10);
        }

	if (lutime.length == 25 || lutime.length == 24) {// Netscape 2
	ludm = sstr (4,7);
	ludd = sstr (8,10);
	ludy = sstr (20,24);
	}
	if (lutime.length == 29) {// Opera 3
	ludm = sstr (8,11);
	ludd = sstr (5,7);
	ludy = sstr (12,16);
	}
	if (lutime.length == 23) {// Internet Explorer 3
	ludm = sstr (3,6);
	ludd = sstr (7,9);
	ludy = sstr (19,23);
	}
	lutext = "";

	monthName = nova matriz (12)
	monthName [1] = '/ 01 /'
	monthName [2] = '/ 02 /'
	monthName [3] = '/ 03 /'
	monthName [4] = '/ 04 /'
	monthName [5] = '/ 05 /'
	monthName [6] = '/ 06 /'
	monthName [7] = '/ 07 /'
	monthName [8] = '/ 08 /'
	monthName [9] = '/ 09 /'
	monthName [10] = '/ 10 /'
	monthName [11] = '/ 11 /'
	monthName [12] = '/ 12 /'
	yearNow = null
	if (ludy.length == 2) {
	if (ludy> = 90) {
	yearNow = 19
	}
	outro {
	yearNow = 20
	}
	}
	else yearNow = ""
	lutext + = ludd + "" + monthName [ludm] + "" + yearNow + ludy + "";

	document.write ("Wilson Fernandes - " + lutext); 
	// -> - 