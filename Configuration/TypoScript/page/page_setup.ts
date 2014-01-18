page = PAGE
page {
	10 = FLUIDTEMPLATE
	10 {
		layoutRootPath = EXT:template_husumtraegt/Resources/Private/Page/Layouts/
		partialRootPath = EXT:template_husumtraegt/Resources/Private/Page/Partials/
		file = EXT:template_husumtraegt/Resources/Private/Page/Templates/Main.html
		variables {
			homePid = TEXT
			homePid.value = {$page.homePid}
			title = TEXT
			title.field = subtitle // title
		}
	}
}

[PIDinRootline = 13]
page.bodyTag >
page.bodyTagCObject = TEXT
page.bodyTagCObject.value = <body class="diapers">
[global]