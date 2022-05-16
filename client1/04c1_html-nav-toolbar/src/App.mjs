

  import  Toolbar    from './components/Toolbar/Toolbar.mjs';
  import  SideDrawer from './components/SideDrawer/SideDrawer.mjs';
  import  Backdrop   from './components/Backdrop/Backdrop.mjs';

//--------------------------------------------------------

//   var  bDrawerOpen = true
     var  bDrawerOpen = true

// const Add = function( )     { // render( ) { return {
// class App extends Component ( render() { return { 
function  App( ) { 

            bDrawerOpen    =  ! bDrawerOpen 
/* 
//        drawerToggle_onClick = function( ) { 
 function drawerToggle_onClick           ( )    { 
//        drawerToggle_ClickHandler =    ( ) => { 
//          this.setState(                      {          sideDrawerOpen: !           sideDrawerOpen } )   // Not good 
//          this.setState(  ( prevState )    => { return { sideDrawerOpen: ! prevState.sideDrawerOpen } } ) //     good 
            bDrawerOpen  =  ! bDrawerOpen 
            }  
  
//     var  pDrawerToggleBtn = document.querySelectorAll( 'button.toggleButton' )

//unction toggle_addEventListener( togglesButton ) {
//          pdrawerToggleBtn.addEventListener( "click", drawerToggle_onClick )
//          }
*/  
return (

//  --------------------------------------------------
`
  <div style="height: 100%;" >   
    ${ Toolbar( ) }
    ${ bDrawerOpen ? SideDrawer( ) : null }
    ${ bDrawerOpen ? Backdrop( )   : null }
    <main style="margin-top: 64px;">
      <p>This is the page content</p>
    </main>  
  </div> 
`
    )   // eos return
//  --------------------------------------------------
  } // eof App
//--------------------------------------------------------

 export default App 

// console.log( App() )


