//javascript to print dom

$(document).ready(function() {
    var indexItems = document.getElementsByTagName("*");
    for (var i=0; i < indexItems.length; i++) {
        console.log(indexItems[i].tagName);
    }
                  
 //var allDOMEElements = document;
    //console.log(allDOMElements);

//function printDOM() {
    //var x = document.getElementById("myOutput").name;
    //document.getElementById("demo").innerHTML = x;
    //console.log(document.getElementsByTagName('body')[0].innerHTML);
    
    
});
