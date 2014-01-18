lib.logo = COA
lib.logo {
	# Title
	10 = COA
	10 {
		10 = TEXT
		10.value = Trageberatung
		10.wrap = <span class="l1">|</span>
		20 = TEXT
		20.value = Husum
		20.noTrimWrap = | <span class="l2">|</span>
		wrap = <h2>|</h2>
	}
	# Logo
	20 = TEXT
	20 {
		value = /typo3conf/ext/template_husumtraegt/Resources/Public/Images/logo.svg
		stdWrap.wrap = <img src="|" alt="">
		typolink.parameter = {$page.homePid}
	}
	wrap = <div class="logowrap">|</div>
}

[PIDinRootline = 13]
lib.logo.10.10.value = Stoffwindelberatung
[global]