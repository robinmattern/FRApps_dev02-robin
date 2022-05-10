
        var mCards_Items = 
            [ { Id:    "CI1", Srt: "CS01"
              , Title: "Explore The World"
              , URL:   "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                }
            , { Id:    "CI2", Srt: "CS02"
              , Title: "Wild Forest"
              , URL:   "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                }
            , { Id:    "CI3", Srt: "CS03"
              , Title: "Sunny Beach"
              , URL:   "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
                }
            , { Id:    "CI4", Srt: "CS04"
              , Title: "City on Winter"
              , URL:   "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
                }
            , { Id:    "CI5", Srt: "CS05"
              , Title: "Mountains - Clouds"
              , URL:   "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                }
              ]
// -------- ------------------------------------------------------------ 

function  fmtPanels() {

        var pCards_Root = getDOM_Elements( "#cards-container", 1 )
            pCards_Root.innerHTML = Cards_Root_render(  mCards_Items )  
  
// ------- ------------------------------------------------------------ 

   function  Cards_Root_render( mCards_Items ) { 

        var aCards_Container = `  
    <div class="cards-container"  id="cards-container" style="border: 1px solid #fff;" >

      {Cards_Items}
      
    </div><!-- eod cards-container --> `

        var aCards_Container = `     {Cards_Items}`

        var aCards_Items =  mCards_Items.sort( )
                                       .map( Cards_Item_render ) 
                                       .join( "" ).substr( 7 ) 

        var aHTML   =  aCards_Container.replace( /{Cards_Items}/,  aCards_Items ) 
//          console.log( aHTML )
     return aHTML
            }
// -------- --------------------------------------------------- 

   function  Cards_Item_render( pCards_Item, i ) { 

        var aHTML = `
      <div class="panel" style="background-image: url('${pCards_Item.URL}')">
        <h3>${pCards_Item.Title}</h3>
      </div> `
//          aHTML = aHTML.replace( /panel/, i == 0 ? "panel active" : "panel" )  // Set first item ctive   
        if (i == 0)  {   
            aHTML = aHTML.replace( /panel/, 'panel active' )  // Set first item ctive   
            }
//          console.log( aHTML )
     return aHTML
            }
// -------- --------------------------------------------------- 

   function getDOM_Elements( aSelector, bOne ) { 
        var bDOM = typeof( document) != 'undefined'
        var mElements = bDOM ? document.querySelectorAll( aSelector )
                             : [ { innerHTML: '', addEventListener: function( ){ } } ]       
     return bOne ? mElements[0] : mElements
            }
// -------- --------------------------------------------------- 
   }
//--------- ------------------------------------------------------------ 
   
    export  default fmtPanels         // import AnyName from './this_file.js'        


