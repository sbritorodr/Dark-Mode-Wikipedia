function saveOptions(e) {
    e.preventDefault();
    browser.storage.sync.set({
        wikipediaDarkModeSystemThemeEnabled: document.querySelector("#systemThemeEnabled").value
    });
  }
  
  function restoreOptions() {
    function setCurrentChoice(result) {
      document.querySelector("#systemThemeEnabled").value = result.wikipediaDarkModeSystemThemeEnabled || false; // The addon always is on dark mode by default.
    }
  
    function onError(error) {
      console.log(`Error: ${error}`); // Any error goes to log
    }
  
    let getting = browser.storage.sync.get("wikipediaDarkModeSystemThemeEnabled");
    getting.then(setCurrentChoice, onError);
  }
  
  document.addEventListener("DOMContentLoaded", restoreOptions);
  document.querySelector("form").addEventListener("submit", saveOptions);
  