# simplyminimalmvc

What is SimplyMinimalMVC?
SimplyMinimalMVC is a simple MVC based on:

- HTML5
- SASS/SCSS
- JavaScript (Jquery 3.5.1)
- PHP 7.4+
- MySQL

What does SimplyMinimalMVC offer:

- Code-ready minimal structure. Download and go.
- One-Page HTML application that accepts multi-file for better application composition.
- Front-end easy built-in Translation system.
- Built-in Analytics integrated support, that permits tracking on sections without recharging your site.
- Front-end simple built-in form Validation system based on Jquery Validate Version 1.9.2
- SASS/SCSS built-in variables. (You may need a SCSS/SASS intalled in your PC, and Koala to minimise the exports)
- Built-in Models to easily connect Back-end to DataBase.
- Back-end built-in simple parameter input Validation system.
- Built-in one-file responsive navigation menu.

Other minimal interesting things:

- Some CSS and jQuery useful functions top save time.
- Front-end easy built-in Modals.
- BEM class nomenclature for CSS.
- Using LocalStorage to preserve configuration variables.
- Front-end to Back-end easy built-in Asynchronous communication system. (AJAX)
- SimplyMinimalMVC is 100% free to use and 100% adds-free.

Front-end

- Structure: We use includeHTML() function to compile all views into one document, which allows to parse html in folders for better segmentation.
- Translations: We use 'key' parameter in html for language translations. Key parameter is our dictionary entry in our json translation files in assets/locales folder
- Modals: Modal windows can be easily generated and activated. They are all inside /front/view/pages/modals folder, and are declated (and included in our html file) from /front/view/container/modals.html file. To show and hide modals, just call: toggleModal('modalId') where modalId is the modal ID which we want to interact with. So every modal MUST have an ID.
- Sections: To change the currently displayed section, just use function showBodySection('sectionId'). Altought no changes in URL will be apreciated, there is a Google analytics tool that will be sensible to this changes (if set) and also breadcrumbs will be generated (if set).
    - Analytics: To activate Google Analytics substitution tool, you should go to /front/js/lib/analytics.js and interact with googleAnalyticsSectionsObject variable. (You should have a GA account first and add a the key in googleAnalyticsKey and also change the hostname variable)
    - Breadcrumbs: For a correct use of Breadcrumbs tool, the section we want to show must be in translates files with the key: 'section-'+sectionId.
- Form Validation: Based in jQuery-Validate; just remember to add a 'name' parameter into every field input of the form for verification purpouses. Also remember to add them in validateFormsOnInit() and sendForm() functions, inside /front/js/lib/validators.js, to define its behaviour. There is five field 'names' that automatically validate: email, name, message, age and weight. You can declare other identifiers (names) for inputs with its own validators here. Note: You can see every validation types in changeValidationLang() function.
