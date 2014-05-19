function load() { /* run after page load */

  isSmallScreen = window.matchMedia( "(max-width: 768px)" );
  /* if viewport is narrow, scroll into form-login top */
  if( isSmallScreen ) {
    document.getElementById("form-login").scrollIntoView(true);
  }

}

if ( window.addEventListener ) {
  window.addEventListener( "load", load, false );
} else if ( window.attacEvent ) {
  window.attacEvent( "onload", load ); /* IE before version 9 */
}
