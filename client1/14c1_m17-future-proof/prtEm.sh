#!/bin/bash

function prt( ) {

   echo ""
   echo "============================================================================================================"
   echo "  $1"
   echo "-----------------------------------------------------------------------------------------------"
   echo ""
    cat    "$1"
   echo ""
   echo "-----------------------------------------------------------------------------------------------"
   }

#prt !_Based on CSS M17 Future Proof by Max S (5-02-22)

 prt   index.html
 prt   main.css

 prt   customers/customers.css
 prt   customers/index.html

 prt   packages/index.html
 prt   packages/packages.css

 prt   shared.css
 prt   shared.js
 prt   shared.prod.css

 prt   start-hosting/index.html
 prt   start-hosting/start-hosting.css


