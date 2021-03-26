function includeHTML() {
  
  /* ------------------- DO NOT CHANGE THE FOLLOWING jQuery CODE: --------------- */
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
  // local storage set base
  initLocalStorage();
  // initial values
  setInitialValues();
  
  /* ------------------- YOU CAN EDIT FROM HERE ON: --------------- */


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
  // init form validation
  validateFormsOnInit();
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
