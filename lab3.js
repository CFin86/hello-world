//this the function you worked on yesterday

function singSong() {



var friends=['Lisa', 'Ashley', 'Sam', 'Bobby', 'Linc'];
var lyrics= " ";
var a = " lines of code in the file, ";
var b = " lines of code; ";
var c = " strikes one out, clears it all out, ";
var d = " there's no more lines of code in the file ";
var e = " line of code in the file ";
var f = " line of code; ";

  for (var i =  0; i < friends.length; i++){
   var name =friends[i];
   for (var j= 99; j > 0; j--){
       if (j == 99){
         var fdiv = document.createElement("div");
          var r = document.createTextNode( " ");    
          fdiv.appendChild(r);
          fdiv.setAttribute('class', "friend");
          document.body.appendChild(fdiv);
          var createH3= document.createElement("h3");
          var t = document.createTextNode(friends[i]);
          createH3.appendChild(t);
          document.body.appendChild(createH3);
}  if (j == 1){
      var p1 = document.createElement("p");
      var s = document.createTextNode(lyrics + j + " line of code in the file " + j + " line of code" + b + name + c + d); 
    p1.appendChild(s);
    document.body.appendChild(p1);
} else if (j == 2){
    var p1 = document.createElement("p");
    var s = document.createTextNode(lyrics + j +  a  + j + b + name + c + (j - 1)  + e);
     p1.appendChild(s);
    document.body.appendChild(p1);  
} else { 
    var p1 = document.createElement("p");
     var s = document.createTextNode(lyrics + j +  a  + j + b + name + c + (j - 1)   + a);
     p1.appendChild(s);
    document.body.appendChild(p1);  
};
};
};
};