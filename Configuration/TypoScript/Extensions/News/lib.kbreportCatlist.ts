#
# Category menu for tx-news
#

lib.kbreportCatlist = USER
lib.kbreportCatlist {
   userFunc = TYPO3\CMS\Extbase\Core\Bootstrap->run
   extensionName = News
   pluginName = Pi1
   vendorName = GeorgRinger


   #settings < plugin.tx_news.settings
   settings {
      startingpoint = {$page.uid.kalenbornreportData}
      defaultDetailPid = {$page.uid.kalenbornreport}
      #categoryConjunction = OR
      #includeSubCategories = 0
   }
   action = list
   switchableControllerActions.Category.1 = list
   stdWrap.dataWrap = <div class="kbreport-header"><h3 class="kbreport-title">{LLL:EXT:mk_kalenbornreport/Resources/Private/Language/locallang.xlf:kbreport.catHeader}</h3></div>|
}

lib.kbreportCatlist {
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