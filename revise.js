function rev(){
       
var base_url="http://www.oxforddictionaries.com/";  
 chrome.tabs.create({url:base_url});
 chrome.tabs.executeScript({file:"flash_create.js"} );

    
    
  
}

document.getElementById('revise').addEventListener('click',rev);