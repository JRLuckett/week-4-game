
document.getElementById("win-lose").innerHTML = "";
var newRandomNumber = document.getElementById('random-number').innerHTML = Math.floor((Math.random() * 101)+19);
$(document).ready(function() {
  var crystalOne = Math.floor((Math.random()*12)+1);
  var crystalTwo = Math.floor((Math.random()*12)+1);
  var crystalThree = Math.floor((Math.random()*12)+1);
  var crystalFour = Math.floor((Math.random()*12)+1);
  var total = 0;
  // console.log(crystalOne);
  // console.log(crystalTwo);
  // console.log(crystalThree);
  // console.log(crystalFour);
  var clear = function clear(){
    crystalOne = 0;
    crystalTwo = 0;
    crystalThree = 0;
    crystalFour = 0;
    total = 0;
  }
  
  $('#crystal1').click(function(){
    if ($('#win-lose').html() == "") {
      total += crystalOne; 
      $('#total-number').html(total);
      }
    else {
      clear();
      // console.log(crystalOne); 
    }
  });
  $('#crystal2').click(function(){
    if ($('#win-lose').html() == "") {
      total += crystalTwo; 
      $('#total-number').html(total);
      }
    else {
      clear();
      // console.log(crystalTwo); 
    }
  });
  $('#crystal3').click(function(){
    if ($('#win-lose').html() == "") {
      total += crystalThree; 
      $('#total-number').html(total);
      }
    else {
      clear();
      // console.log(crystalThree); 
    }
  });
  $('#crystal4').click(function(){
    if ($('#win-lose').html() == "") {
      total += crystalFour; 
      $('#total-number').html(total);
      }
    else {
      clear();
      // console.log(crystalFour); 
    }
  });

});