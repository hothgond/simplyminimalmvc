function includeHTML() {
  
  /* ------------------- DO NOT CHANGE THE FOLLOWING jQuery CODE: --------------- */
  var finishedInclude = initIncludeHTML();
  if ( localStorage.getItem("simplyMinimalOnThisSite") == null ) {
    localStorage.setItem("simplyMinimalOnThisSite", true);
    // local storage set base
    initLocalStorage();
    // initial values
    setInitialValues();
  }
  
  // language
  setLanguage(localStorage.getItem("language"));
  // misc
  toggleCookies(localStorage.getItem("showCookies"));

  // Initialization of environment variables HERE

  // execute at the end of includes, when it returns UNDEFINED
  // Actions to do when page loaded, as documentLoaded
  if(finishedInclude == undefined){
    // init forms validation
    validateFormsOnInit();
    //example
    $( "#id" ).click(function() {
      $("input").val('');
    });

  }
}

// Initialization of environment variables HERE


function setInitialValues() {
  // initial Data
  initialData();
  
  // AJAX calls
  ajaxCalls();
  
  // Other functions to be executed go here
  // changeBodyContents(Number(localStorage.getItem("users")));
  
}

function initialData() {
  // data Structures if you need, por example: dataUsers
  var dataUsers = JSON.stringify([
    {
		  users:[]
    },
  ]);
  
  // Set to storage
  localStorage.setItem("data", dataUsers);
}
