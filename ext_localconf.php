<?php
if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

// Static TS
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
	file_get_contents(
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extPath($_EXTKEY) . 'Configuration/TSConfig/root.ts'
	)
);

?>