<?php
if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

// Static TS
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript', 'Husum trägt');

?>