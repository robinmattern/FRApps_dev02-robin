   import React from 'react'

// import './SideDrawer.css' 

//--------------------------------------------------------

// const sideDrawer = function( props ) { return (
// const sideDrawer = props => (
function  SideDrawer(  props ) { 
                                            // .(20514.04.4 RAM Add Open class with animation) 
     let drawerClasses = 'sideDrawer'       //  or an Array: [ 'sideDrawer' ]
     if (props.show) {
         drawerClasses = 'sideDrawer open'  //  or an Array: [ 'sideDrawer', 'show' ].join( ' ' )
         }    
//  --------------------------------------------------
  return (
     
//* <nav className="sideDrawer"> *//       //* .(20514.04.5 Max: Replace with) *//  
    <nav className={ drawerClasses } >     {/* .(20514.04.5 Max:   two class names) */}  
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">Links</a></li>
        <li><a href="/">Cards</a></li>
        <li><a href="/">FAQ</a></li>
        <li><a href="/">Sign In</a></li>
      </ul>  
    </nav>

    ) // eos return( ... )   
//  --------------------------------------------------
  } // eof ToggleButton
//--------------------------------------------------------

 export default SideDrawer 
