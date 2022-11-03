function onError(error) {
    console.log(`Error: ${error}`);
}
function onGot(item){
    const systemThemeEnabled = false;
    if (item.wikipediaDarkModeSystemThemeEnabled){
        systemThemeEnabled = item.wikipediaDarkModeSystemThemeEnabled;
    }
}

function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}
function changeTheme(themeselected){
    if (systemThemeEnabled){ // if the user wants to use system theme:
        switch (themeselected) {
            case "light":
                swapStyleSheet("moz-extension://624c59d2-4298-471a-8e5f-fccc46a215b0/light.css")
                break;
        
            default: //darkmode
                swapStyleSheet("moz-extension://624c59d2-4298-471a-8e5f-fccc46a215b0/background.css") // adds dark mode css
                break;
        }
    } else { // ignore all and applies dark mode
        swapStyleSheet("moz-extension://624c59d2-4298-471a-8e5f-fccc46a215b0/background.css")
    }
}

const getting = browser.storage.sync.get("wikipediaDarkModeSystemThemeEnabled").then(onGot, onError);

var head = document.head;
    var link = document.createElement("link");
  
    link.type = "text/css";
    link.rel = "stylesheet";
    link.id = "pagestyle";
    link.href = fileName;

changeTheme("dark") //by default is dark
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
    console.log(newColorScheme)
    changeTheme(newColorScheme);
});

