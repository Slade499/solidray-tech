const navBar = document.querySelector ( "nav" );
const mobileExit = document.querySelector ( ".mobile-exit" );
const mobileCta = document.querySelector ( ".mobile-cta" );

mobileCta.addEventListener ( "click", () => {
    navBar.style.right = "0";
} )

mobileExit.addEventListener ( "click", () => {
    navBar.style.right = "-200px";
} )