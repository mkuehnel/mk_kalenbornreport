<INCLUDE_TYPOSCRIPT:source="DIR:EXT:mk_kalenbornreport/Configuration/TypoScript/Extensions/News/" Extensions="ts">

[globalVar = TSFE:id={$page.uid.kalenbornreport}] && [globalVar = TSFE:id > 0]
    # Additional CSS Kalenborn Report (Twitter Bootstrap Grid)
    page.includeCSS.bootstrapgridsystem = EXT:mk_kalenbornreport/Resources/Public/Css/bootstrap-grid-system.css
    page.includeCSS.kalenbornreport = EXT:mk_kalenbornreport/Resources/Public/Css/kalenbornreport.css
[global]