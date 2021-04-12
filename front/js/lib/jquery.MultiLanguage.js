// Language JSON File Location
var language = localStorage.getItem('language');

// Set Selected Language
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    $(".header__languages .btn").removeClass('selected');
    $(".header__languages .btn[rel="+lang+"]").addClass('selected');
    //$("label.error").addClass('dnone'); // for errors in form translates!
    language = localStorage.getItem('language');
    // Run Multi Language Plugin
    getLanguage();
}

// Run Multi Language Plugin
function getLanguage() {
    // Load data of selected language
    $.ajax({
        url: 'assets/locales/' + language + '.json',
        dataType: 'json', async: true
    }).done(function (data) {
        localStorage.setItem('language_active_keys', JSON.stringify(data));
        // add selected language class to the body tag
        $('body').attr('class', language);
        // Loop through message in data
        $.each(data, function (index, val) {
            // head is the only RESTRICTED key!!!
            if (index == 'head'){
                $(document).attr("title", val);
            } else if (index == 'img_alt'){
                // ALTS of IMAGES
                $.each(val, function (i, v) {
                    $("img[key="+i+"]").prop('alt', v);
                });
            } else if (index == 'a_title'){
                // TITLES of LINKS
                $.each(val, function (i, v) {
                    $("a[key="+i+"]").prop('title', v);
                });
            } else if (index == 'text'){
                // NORMAL TEXTS
                $.each(val, function (i, v) {
                    $("[key="+i+"]").text(v);
                });
            }
        })
        changeValidationLang();
    })
}

function getTranslationByKey(key){
    var languageActiveKeys = JSON.parse(localStorage.getItem('language_active_keys'));
    return languageActiveKeys['text'][key];
}

// Auto Loader
$(document).ready(function () {
    getLanguage(language);
});
