



   import   App          from './App.mjs';

// -------  -----------------   =  ---------------------------------- 

       var  pRoot = document.getElementById( 'root' )
        
            pRoot.innerHTML = App( )
 
       var  bDrawerOpen = true

       var  pDrawerToggleBtn = document.querySelectorAll( 'button.toggleButton' )[0]

//unction toggle_addEventListener( togglesButton ) {
            pDrawerToggleBtn.addEventListener( "click", drawerToggle_onClick )
//          }

 function drawerToggle_onClick( ) { 
//        drawerToggle_ClickHandler = ( ) => { 
//          this.setState(                   {          sideDrawerOpen: !           sideDrawerOpen } )   // Not good 
//          this.setState(  ( prevState ) => { return { sideDrawerOpen: ! prevState.sideDrawerOpen } } ) //     good 
            bDrawerOpen = ! bDrawerOpen 
            }  
// -------  -----------------   =  ---------------------------------- 
 