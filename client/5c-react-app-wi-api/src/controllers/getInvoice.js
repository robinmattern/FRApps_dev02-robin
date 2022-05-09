// import                              "./env.js"
// import 'dotenv/config'
// require( '{ path: '/custom/path/to/.env' }

// dotenv_config__WEBPACK_IMPORTED_MODULE_0__

   import { useEffect, useState } from "react";

//     var  aAPI_URL  = 'http://localhost:50114/api/invoices'
       var  aAPI_URL  =  process.env.REACT_APP_API_URL; 

//  ------------------------------------------------------------------

export function GetInvoice( nNumber ) {

      var [ Invoices, setInvoices ] = useState( [ ] )     // sets    mJSON      = setJSON( mJSON )

            useEffect( ( ) => { getInvoices( ) }, [ ] )   // calls   getJSON( ) { setJSON( mJSON ) }

 async function getInvoices() {
       var  pResponse =  await fetch( aAPI_URL )
       var  pJSON     =  await pResponse.json()
            setInvoices( pJSON )
            }
 
   return ( Invoices.find( invoice => invoice.number === nNumber  ) ) // returns pJSON = mJSON.find( ... )
   };
//  ------------------------------------------------------------------
