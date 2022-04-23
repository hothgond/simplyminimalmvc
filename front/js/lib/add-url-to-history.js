function addUrlToHistory(sectionId){
    if(sections.hasOwnProperty(sectionId)){
        var sectionInUse = sections[sectionId];
        var sectionTranslation = '';
        sectionTranslation = getTranslationByKey(sectionId);
        history.pushState({pageID: sectionId}, sectionTranslation, sectionInUse[0]);
    }
}