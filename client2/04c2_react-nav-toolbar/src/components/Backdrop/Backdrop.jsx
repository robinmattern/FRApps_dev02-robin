   import React from 'react'

// import './Backdrop.css' 

//--------------------------------------------------------

// const  Backdrop = function( props ) { return (
// const  Backdrop = props => (
function  Backdrop(  props ) { return (                 // props contains the property, click, 
                                                       // passed as the Backdrop attribute in App.jsx 
//  --------------------------------------------------

          <div className="backdrop" onClick={ props.click } >   {/* passed from App.jsx */}
          </div>
  
    ) // eos return( ... )   
//  --------------------------------------------------
  } // eof Backdrop
//--------------------------------------------------------

 export default Backdrop
