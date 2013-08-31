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