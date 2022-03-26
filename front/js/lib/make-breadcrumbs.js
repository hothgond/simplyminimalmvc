/*  breadcrumbs = Object {'section-key', ArrayOfParents}
        section-key => for language translation porpouses.
        ArrayOfParents =>   is an array of ordered Arrays ['section-key', 'sectionId'] 
                            first element will be on first position of breadcrumbs, and last in last.
                            In case of EMPTY Array, it means  the section has no paarents.
    
    Just add breadcrumbs in this bariable as you need it
*/
var breadcrumbs = {
    pageContainerContactUs: ['section-contactUs',[]],
    breadcrumbTest: [
        'section-breadcrumbTest',
        [ // Parents array: ['section-key', 'sectionId']
            ['section-contactUs','pageContainerContactUs']
        ]
    ],
}

function makeBreadcrumbs(sectionId){
    if($( ".header__container-breadcrumbs div" ).length > 1){
        $( ".header__container-breadcrumbs div" ).not(':first').remove();
    }
    if(sectionId != 'home' && breadcrumbs.hasOwnProperty(sectionId)){
        var breadcrumbInUse = breadcrumbs[sectionId];
        var breadcrumbTranslation = '';
        $.each(breadcrumbInUse[1], function(i, b) {
            breadcrumbTranslation = getTranslationByKey(b[0]);
            $( ".header__container-breadcrumbs" ).append(
                '<div class="breadcrumb active" onclick="showBodySection(\''+b[1]+'\')" key="'+b[0]+'">'+breadcrumbTranslation+'</div>'
            );
        });
        breadcrumbTranslation = getTranslationByKey(breadcrumbInUse[0]);
        $( ".header__container-breadcrumbs" ).append(
            '<div class="breadcrumb inactive" key="section-'+sectionId+'">'+breadcrumbTranslation+'</div>'
        );
    }
}