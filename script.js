alert( "MY CALCULATOR");

var operationa;
var operationb;
var operation;

function init(){
  //variables
  var result= document.getElementById('result');
  var one= document.getElementById('one');
  var two= document.getElementById('two');
  var three= document.getElementById('three');
  var subtract= document.getElementById('subtract');
  var four= document.getElementById('four');
  var five= document.getElementById('five');
  var six= document.getElementById('six');
  var multiply= document.getElementById('multiply');
  var seven= document.getElementById('seven');
  var eigth= document.getElementById('eight');
  var nine= document.getElementById('nine');
  var divide= document.getElementById('divide');
  var equal= document.getElementById('equal');
  var reset= document.getElementById('reset');
  var cero= document.getElementById('cero');
  var sum= document.getElementById('sum');

//Events
one.onclick = function (){
  result.textContent = result.textContent + "1";
}
two.onclick = function (){
  result.textContent = result.textContent + "2";
}
three.onclick = function (){
  result.textContent = result.textContent + "3";
}
four.onclick = function (){
  result.textContent = result.textContent + "4";
}
five.onclick = function (){
  result.textContent = result.textContent + "5";
}
six.onclick = function (){
  result.textContent = result.textContent + "6";
}
seven.onclick = function (){
  result.textContent = result.textContent + "7";
}
eight.onclick = function (){
  result.textContent = result.textContent + "8";
}
nine.onclick = function (){
  result.textContent = result.textContent + "9";
}
cero.onclick = function (){
  result.textContent = result.textContent + "0";
}

reset.onclick = function (){
  resetear();
}

sum.onclick = function (){
  operationa = result.texContent;
  operation= "+";
  clear ();
}
subtract.onclick = function (){
  operationa = result.texContent;
  operation= "-";
  clear ();
}
multiply.onclick = function (){
  operationa = result.texContent;
  operation= "*";
  clear ();
}
divide.onclick = function (){
  operationa = result.texContent;
  operation= "/";
  clear ();
}

equal.onclick = function (){
 operationb = result.textContent;
 resolved();
}

}

function clear (){
  result.textContent = "";
}

function resetear (){
  result.textContent = "";
  operationa= 0;
  operationb= 0;
  operation= "";
}

function resolved (){
  var res = 0;
  switch(operation){
  case "+":
  res = parseFloat(operationa) + parseFloat (operationb);
  break;

  case "-":
  res = parseFloat(operationa) - parseFloat (operationb);
  break;

  case "*":
  res = parseFloat(operationa) * parseFloat (operationb);
  break;

  case "/":
  res = parseFloat(operationa) / parseFloat (operationb);
  break;
}
  resetear ();
  result.textContent = res;
}
