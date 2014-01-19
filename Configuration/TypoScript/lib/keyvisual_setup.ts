temp.keyvisual = TEXT
temp.keyvisual {
	value = ./typo3conf/ext/template_husumtraegt/Resources/Public/Images/keyvisual.jpg
	wrap = <img class="mood" src="|">
}

[globalVar = TSFE:id = 3]
lib.keyvisual < temp.keyvisual
[globalVar = TSFE:id = 13]
lib.keyvisual < temp.keyvisual
lib.keyvisual.value = ./typo3conf/ext/template_husumtraegt/Resources/Public/Images/keyvisual_diapers2.jpg
[global]