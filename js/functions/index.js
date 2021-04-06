function includeHTML() {
  
  /* ------------------- DO NOT CHANGE THE FOLLOWING jQuery CODE: --------------- */
  initIncludeHTML();
  if ( localStorage.getItem("simplyMinimalOnThisSite") == "false" ) {
    localStorage.setItem("simplyMinimalOnThisSite", true);
    // local storage set base
    initLocalStorage();
    // initial values
    setInitialValues();
  }
  // init forms validation
  validateFormsOnInit();

  // Initialization of environment variables HERE

  // others to execute at the beginning go here
  //setOthers(0);
}

// Initialization of environment variables HERE


function setInitialValues() {
  // language
  setLanguage(localStorage.getItem("language"));
  // misc
  toggleCookies(localStorage.getItem("showCookies"));
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
