function storageSet(item, val){
  if (!localStorage.getItem(item)) {
    localStorage.setItem(item, val);
  }
}

//All LocalStorage indicators go here
function initLocalStorage() {
  var localStorageItems = {
    language : 'en',

    //SECTIONS go here
    showCookies: true,
    showUsers: false,
    showBody: true,
    showEmail: false,
    setOthers: 0
  }
  $.each(localStorageItems, function (item, val) {
    storageSet(item, val);
  });
}