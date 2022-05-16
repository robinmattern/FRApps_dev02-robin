   import React from 'react'

// import './ToggleButton.css' 

//--------------------------------------------------------

// const  ToggleButton = function( props ) { return (
// const  ToggleButton = props => (
function  ToggleButton(  props ) { return (             // props contains the property, click, passed as the 
                                                        // SideDrawer_ToggleButton attribute in Toggle.jsx 
//  --------------------------------------------------

          <button className="toggleButton" onClick = { props.click }>   {/* passed from Toggle.jsx */}
            <div  className="toggleButton_line"></div>
            <div  className="toggleButton_line"></div>
            <div  className="toggleButton_line"></div>
          </button>
  
    ) // eos return( ... )   
//  --------------------------------------------------
  } // eof ToggleButton
//--------------------------------------------------------

 export default ToggleButton 
