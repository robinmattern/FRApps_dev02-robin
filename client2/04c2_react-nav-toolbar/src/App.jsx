   import   React, { Component } from 'react';

   import   Toolbar      from './components/Toolbar/Toolbar.jsx';
   import   SideDrawer   from './components/SideDrawer/SideDrawer.jsx';
   import   Backdrop     from './components/Backdrop/Backdrop.jsx';

//--------- ---------------  =  --------------------------------------------------------  

// const Add = function( )     { // render( ) { return {
//nction App extends Component ( // render( ) { return {
   class App extends Component {

//  ------- ---------------  =  ------------------------------------  

          state = {
            sideDrawerOpen: false
            }
//          ---------------  =  ------------------------  

//        drawerToggle_onClick = function( )    { ... }
//unction drawerToggle_onClick           ( )    { ... }
          drawerToggle_ClickHandler =    ( ) => {
//          this.setState(                      {          sideDrawerOpen: !           sideDrawerOpen } )   // Not good 
            this.setState( ( prevState )     => { 
                                                  return { sideDrawerOpen: ! prevState.sideDrawerOpen } } ) //   good 
            } // eof drawerToggle_ClickHandler
//          ---------------  =  ------------------------  

//        backdrop_onClick   =   function( )    { ... }
          backdrop_ClickHandler    =     ( ) => {
            this.setState( { sideDrawerOpen: false } )

            } // eof backdrop_ClickHandler
//  ------- ---------------  =  ------------------------------------  

//function render( )    { ... }   
//render         ( )    { ... }    // class method 
  render       = ( ) => {          // class method 

    let backdrop   // = <Backdrop click={ this.backdrop_ClickHandler } /> 
//  let sideDrawer // = <SideDrawer />                              // .(20514.04.1 Max: Use Show method on Component) 

    if (this.state.sideDrawerOpen) {
        backdrop   = <Backdrop click={ this.backdrop_ClickHandler } />
//      sideDrawer = <SideDrawer />                                 //#.(20514.04.2 Max: Remove)    
        }

//  ------- ---------------  =  ----------------

    return (

      <div style={ { height: '100%' } }>
        <Toolbar drawerClickHandler = { this.drawerToggle_ClickHandler } />
{/*     {sideDrawer} */}                                            {/*#.(20514.04.3 Max: Always keep it open, but) */}  
        <SideDrawer show={ this.state.sideDrawerOpen } />           {/* .(20514.04.3 Max:   pass a show property)   */}  
        {backdrop}                                          
        <main style={ { marginTop: '64px' } }>
          <p>This is the page content!</p>
        </main>
      </div>

      ) // eos return( ... )
//  ------- ---------------  =  ----------------
    } // eom render
//  ------- ---------------  =  ------------------------------------  
  } // eoc App
//--------- ---------------  =  --------------------------------------------------------  

 export default App;

