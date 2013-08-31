lib.navigation = HMENU
lib.navigation {

	1 = TMENU
	1 {
		NO = 1
		NO.wrapItemAndSub = <li>|</li>
		ACT < .NO
		ACT.wrapItemAndSub = <li class="active"><span>|</span></li>
		ACT.doNotLinkIt = 1
		wrap = <ul>|</ul>
	}

}

[globalVar = TSFE:id = 3]
lib.navigation{
	# PID 4 is a shortcut to home, show it as active
	alwaysActivePIDlist = 4
}
[global]