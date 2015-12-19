function def()
{
       
  var base_url="http://www.oxforddictionaries.com/definition/english/";
  chrome.tabs.executeScript(null,{code:"window.getSelection().toString();"},function(selection){
  chrome.tabs.create({url:base_url+selection[0]})});
   }

document.getElementById('word_meaning').addEventListener('click',def);
