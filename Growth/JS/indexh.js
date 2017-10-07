var jqThis = $('#adjinput'),
    fontSize = parseInt( jqThis.css('font-size') ),
    minWidth= parseInt( jqThis.css('min-width') ),
    maxWidth= parseInt( jqThis.css('max-width') );

jqThis.bind('keydown', function(e){         
   var newVal = (this.value.length * fontSize) / 2;
    
   if( newVal  > minWidth && newVal <= maxWidth )
       this.style.width = newVal + 'px';
    
});



var isTyping = false;

var jqNewThis = $('#newInput'),
    nfontSize = parseInt( jqNewThis.css('font-size') ),
    nminWidth= parseInt( jqNewThis.css('min-width') ),
    nmaxWidth= parseInt( jqNewThis.css('max-width') ),
    testText = document.getElementById('testText');

jqNewThis.bind('keydown', function(e){         
   clearTimeout( isTyping );
    
    isTyping = setTimeout( function() {
       testText.innerHTML =  jqNewThis.val();
        
       testText.style.display = "inline";
        
       var _width = $(testText).width();
        
        if( _width > minWidth && _width <= maxWidth )
            jqNewThis.animate({ 'width': _width }, 280 );
        else if( _width < minWidth )
             jqNewThis.animate({ 'width': minWidth }, 280 );
        
         testText.style.display = "none";
    },500);
   
    
});
