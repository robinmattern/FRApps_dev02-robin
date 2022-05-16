   import React from 'react'

// import './Toolbar.css'

   import SideDrawer_ToggleButton from '../SideDrawer/ToggleButton.jsx'

//--------------------------------------------------------
 
// const  toolbar = function( props ) { return (
// const  toolbar = props => (
function  Toolbar(  props ) {                          // props contains the property, drawerClickHandler
                                                      // passed as the Toolbar attribute in App.jsx 

//  --------------------------------------------------

  return (

    <header  className="toolbar">
      <nav   className="toolbar_nav">
        <div className="toolbar_toggleButton">                             {/* hide on phones */}                                      
          <SideDrawer_ToggleButton click={ props.drawerClickHandler } />   {/* passed from App.jsx */}
        </div>
        <div className="toolbar_logo"><a href="/">&nbsp;</a></div>         {/* &nbsp; is required */}

        <div className="toolbar_spacer"></div>                             {/* Ending tag is required */}

        <div className="toolbar_nav-items">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Links</a></li>
            <li><a href="/">Cards</a></li>
            <li><a href="/">FAQs</a></li>
            <li id="cta" ><a href="/" >Sign In</a></li>
          </ul>
        </div>

      </nav>
    </header>

    ) // eos return( ... )   
//  --------------------------------------------------
  } // eof App
//--------------------------------------------------------

 export default Toolbar
