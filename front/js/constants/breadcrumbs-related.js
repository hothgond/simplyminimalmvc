/*  breadcrumbs = Object {'section-key', ArrayOfParents}

        section-key => for language translation porpouses.
        ArrayOfParents =>   is an array of ordered Arrays ['section-key', 'sectionId'] 
                            first element will be on first position of breadcrumbs, and last in last.
                            In case of EMPTY Array, it means  the section has no paarents.
    
    Just add breadcrumbs in this variable as you need it
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

var sections = {
    pageContainerHome: ['/simplyminimalmvc/'],
    pageContainerContactUs: ['contact-us'],
    breadcrumbTest: ['breadcrumb-test'],
}