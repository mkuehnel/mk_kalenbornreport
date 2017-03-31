#
# Global news configuration
# Includes the News Plugins into typoscript Objects
#

lib.kbreportPlugin = USER
lib.kbreportPlugin {
    userFunc = TYPO3\CMS\Extbase\Core\Bootstrap->run
    extensionName = News
    pluginName = Pi1
    vendorName = GeorgRinger

    switchableControllerActions.News.1 = list
    settings < plugin.tx_news.settings
    settings {
        overrideFlexformSettingsIfEmpty := addToList(detailPid,orderDirection)
        startingpoint = {$page.uid.kalenbornreportData}
        defaultDetailPid = {$page.uid.kalenbornreport}
    }
}

lib.kbreportPlugin {
    mvc.callDefaultActionIfActionCantBeResolved = 1

    #
    # Overwrite this values in your local instance extension if you
    # want to use your own templates
    #
    view {
        templateRootPaths {
            0 = EXT:news/Resources/Private/Templates/
            1 = {$plugin.kalenbornreport.view.templateRootPath}
        }

        partialRootPaths {
            0 = EXT:news/Resources/Private/Partials/
            1 = {$plugin.kalenbornreport.view.partialRootPath}
        }

        layoutRootPaths {
            0 = EXT:news/Resources/Private/Layouts/
            1 = {$plugin.kalenbornreport.view.layoutRootPath}
        }

        widget.GeorgRinger\News\ViewHelpers\Widget\PaginateViewHelper.templateRootPath = EXT:news/Resources/Private/Templates/
    }
}

lib.kbreportSettings.isLatest = TEXT
lib.kbreportSettings.isLatest.value = 0

[globalVar = TSFE:id = {$page.uid.root}]
    lib.kbreportSettings.isLatest.value = 1
[global]

# Latest
lib.kbreportLatestPlugin < lib.kbreportPlugin
lib.kbreportLatestPlugin {
    action = list
    switchableControllerActions.News.1 = list
    settings {
        limit = 3
    }

    stdWrap.dataWrap = |
    stdWrap.insertData = 1
}

# List and Detail (on the same page)
# List
lib.kbreportListAndDetailPlugin = COA
lib.kbreportListAndDetailPlugin.10 = TEXT
lib.kbreportListAndDetailPlugin.10 {

    wrap = <div class="kbreport-header"><h3 class="kbreport-title">{LLL:EXT:mk_kalenbornreport/Resources/Private/Language/locallang.xlf:kbreport.listLink}</h3></div>
    insertData = 1
}

lib.kbreportListAndDetailPlugin.20 < lib.kbreportPlugin
lib.kbreportListAndDetailPlugin.20 {
    action = list
    settings {
        orderBy = datetime
        orderDirection = desc
        list {
            media.image.width = 300c
            media.image.height = 200
            paginate.itemsPerPage = 20
        }
        categoryConjunction = OR
    }
}

# Detail
[globalVar = TSFE:id = {$page.uid.kalenbornreport}] && [globalVar = GP:tx_news_pi1|news > 0]
    lib.kbreportListAndDetailPlugin.10 >
    lib.kbreportListAndDetailPlugin.20 {
        action = detail
        switchableControllerActions.News.1 = detail
        settings.detail.checkPidOfNewsRecord = 0
        settings.detail.media.image.width = 350
        settings.detail.media.image.height = 200c
        settings.detail.media.image.maxWidth = 400
        settings.detail.media.image.maxHeight = 600

    }

    lib.kbreportLatestSliderPlugin >
[global]

lib.pageUid.kalenbornreport = TEXT
lib.pageUid.news.value = {$page.uid.kalenbornreport}

# Category View
[globalVar = GP:tx_news_pi1|overwriteDemand|categories > 0]
    # Show Category Title
    lib.kbreportListAndDetailPlugin.10 {
        data = GP:tx_news_pi1|overwriteDemand|categories
        wrap = <div class="kbreport-header"><h3 class="kbreport-title">{LLL:EXT:mk_kalenbornreport/Resources/Private/Language/locallang.xlf:kbreport.listHeader}: {DB:sys_category:|:title}</h3></div>
        insertData = 1
    }




