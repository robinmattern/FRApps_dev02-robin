
//--------------------------------------------------------

// const toolbar = function( props ) { return (
// const toolbar = props => (
function Toolbar(  props ) { 

//  --------------------------------------------------

  return (
`
    <header  class    ="toolbar">
      <nav   class    ="toolbar_nav">
        <div>
          <!-- SideDrawer_ToggleButton( ) -->
        </div>
        <div class    ="toolbar_logo"><a href="/">&nbsp;</a></div>  <!-- &nbsp; is required -->

        <div class    ="toolbar_spacer"></div>                      <!-- Ending tag is required -->

        <div class    ="toolbar_nav-items">
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
`
    ) // eos return( ... )   
//  --------------------------------------------------
  } // eof App
//--------------------------------------------------------

export default Toolbar;

// console.log( Toolbar( ) )