$(function(){
  var donutCounter = new DonutCounter();
});

function DonutCounter() {
  $(document).ready(function(){
    var donutCount = 0, guests = 0;
    $('#donuts button').first().click(function(){
      donutCount++;
        $('#donuts h3 span').text(donutCount)
    });

    $('#donuts button').last().click(function(){
      if(donutCount >0){
        donutCount--;
        $('#donuts h3 span').text(donutCount)
      }
    });

    $('#guests button').first().click(function(){
      guests++;
        $('#guests h3 span').text(guests)
    });

    $('#guests button').last().click(function(){
      if(guests >0){
        guests--;
        $('#guests h3 span').text(guests)
      }
    });

    $("#check").click(function(){
      if(guests === 0){
        return $("#status").text("Invite someone you jerk!")
      }else if(guests === donutCount){
        return $("#status").text("Guests are having a blast!")
      }else if(guests < donutCount){
        return $("#status").text('ARE YOU TRYING TO KILL US ALL!?')
      } else{
        return $("#status").text('Guests are sad :(')
      }
    })
  });
}
