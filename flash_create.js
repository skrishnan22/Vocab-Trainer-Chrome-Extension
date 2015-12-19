document.body.innerHTML="";
document.head.innerHTML="";
var i=0;
var word_key=localStorage.key(0);
var len=localStorage.length

document.body.innerHTML="<head><title>VOCAB-TRAINER</title></head><body><h1 id=\"heading\">VOCAB-TRAINER</h1><div class=\"panda\"><div class=\"ear\"></div><div class=\"face\"><div class=\"eye-shade\"></div><div class=\"eye-white\"><div class=\"eye-ball\"></div></div><div class=\"eye-shade rgt\"></div><div class=\"eye-white rgt\"><div class=\"eye-ball\"></div></div><div class=\"nose\"></div><div class=\"mouth\"></div></div><div class=\"body\"> </div><div class=\"foot\"><div class=\"finger\"></div></div><div class=\"foot rgt\"><div class=\"finger\"></div></div></div><div class=\"card\">  <div class=\"hand\"></div><div class=\"hand rgt\"></div><h1 id=\"word\"></h1><h2 id=\"meaning\"></h2></div><button id=\"flip\"> FLIP</button><button id=\"next\">NEXT</button><div id=\"warn\">This is not a page of <span id=\"url\">www.oxforddictionaries.com</span><br>It is a custom generated page to make use of words stored in localStorage of this domain.</div></body>"

document.getElementById("word").innerHTML=word_key;

function word_meaning(){
    if(i<len){
 document.getElementById("flip").style.visibility="hidden";        
 var meaning=document.createElement('h2');
 meaning.setAttribute("id","meaning");    
 document.getElementsByClassName('card')[0].appendChild(meaning);    
     
  document.getElementById("meaning").innerHTML=localStorage[word_key];
    }
    
    
}
function required_word(){
    if(document.getElementById("meaning")!==null)
    {document.getElementById("meaning").remove();}
    i+=1;  
    document.getElementById("flip").style.visibility="visible";
    if(i<len){
    
    
    word_key=localStorage.key(i);
    document.getElementById("word").innerHTML=word_key;}
    else{
        document.getElementById("word").innerHTML="THE END";
        document.getElementById("flip").remove();
        document.getElementById("next").remove();
    }
}
        

document.getElementById("flip").addEventListener('click',word_meaning);
document.getElementById("next").addEventListener('click',required_word);