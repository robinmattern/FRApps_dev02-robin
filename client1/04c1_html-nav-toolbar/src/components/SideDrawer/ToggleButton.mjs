


/*
 function drawerToggle_onClick           ( )    { 
//        drawerToggle_ClickHandler =    ( ) => { 
//          this.setState(                      {          sideDrawerOpen: !           sideDrawerOpen } )   // Not good 
//          this.setState(  ( prevState )    => { return { sideDrawerOpen: ! prevState.sideDrawerOpen } } ) //     good 
            bDrawerOpen  =  ! bDrawerOpen 
            }  
*/

// const ToggleButton = function( props ) { return (
// const ToggleButton = props => (
function ToggleButton(  props ) { 

 return (

//  --------------------------------------------------
`
          <button class    ="toggleButton" onClick="drawerToggle_onClick">   <!-- defined in App.mjs -->
            <div  class    ="toggleButton_line"></div>
            <div  class    ="toggleButton_line"></div>
            <div  class    ="toggleButton_line"></div>
          </button>

<script> function drawerToggle_onClick( )    {  
 //      drawerToggle_ClickHandler =  ( ) => { ... }
            bDrawerOpen  =  ! bDrawerOpen 
            } 
</script>            
` 
    ) // eos return( ... )   
//  --------------------------------------------------
  } // eof ToggleButton
//--------------------------------------------------------

 export default ToggleButton 

// console.log( ToggleButton( ) )

