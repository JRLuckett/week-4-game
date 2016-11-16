document.getElementById("win-lose").innerHTML = ""; 
$('#random-number').html(Math.floor((Math.random() * 101)+19)); 
$(document).ready(function() {
  var crystalOne = Math.floor((Math.random()*12)+1);
  var crystalTwo = Math.floor((Math.random()*12)+1);
  var crystalThree = Math.floor((Math.random()*12)+1);
  var crystalFour = Math.floor((Math.random()*12)+1);
  var randomAmount = $('#random-number').html(); 
  var nextNumber = $('#random-number').html();
  var total = 0;
  var wins = 0;
  var losses = 0;
  var clear = function clear(){
    crystalOne = Math.floor((Math.random()*12)+1);
    crystalTwo = Math.floor((Math.random()*12)+1);
    crystalThree = Math.floor((Math.random()*12)+1);
    crystalFour = Math.floor((Math.random()*12)+1);
    total = 0;
    $('#total-number').html(0);
    $('#random-number').html(Math.floor((Math.random() * 101)+19));
    randomAmount = $('#random-number').html();

  }
  
  $('#crystal1').click(function(){
    total += crystalOne;
    console.log(total);
    if (total < randomAmount) {
      console.log(randomAmount);
      $('#total-number').html(total);
      }
    else if (randomAmount == total){
      wins++;
      $('#wins').html('Wins: '+wins);
      clear();
    }
    else{
      losses++;
      $('#losses').html('Losses: '+losses);
      clear();
    }
  });
  $('#crystal2').click(function(){
    total += crystalTwo;
    console.log(total);
    if (total < randomAmount) {
      console.log(randomAmount);
      $('#total-number').html(total);
      }
    else if (randomAmount == total){
      wins++;
      $('#wins').html('Wins: '+wins);
      clear();
    }
    else{
      losses++;
      $('#losses').html('Losses: '+losses);
      clear();
    }
  });
  $('#crystal3').click(function(){
    total += crystalThree;
    console.log(total);
    if (total < randomAmount) {
      console.log(randomAmount);
      $('#total-number').html(total);
      }
    else if (randomAmount == total){
      wins++;
      $('#wins').html('Wins: '+wins);
      clear();
    }
    else{
      losses++;
      $('#losses').html('Losses: '+losses);
      clear();
    }
  });
  $('#crystal4').click(function(){
    total += crystalFour;
    console.log(total);
    if (total < randomAmount) {
      console.log(randomAmount);
      $('#total-number').html(total);
      }
    else if (randomAmount == total){
      wins++;
      $('#wins').html('Wins: '+wins);
      clear();
    }
    else{
      losses++;
      $('#losses').html('Losses: '+losses);
      clear();
    }
  });


});