//Loader Fade out
$(document).ready(function(){
  $(".loader").delay(2000).fadeOut();
});

//Smooth Scroll
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

//Changing Collapse Button
$(document).ready(function(){

    $("#collapse-btn").click(function(){
  
      if($("#navicon").hasClass("fa-bars")){
        $("#navicon").removeClass("fa-bars");
        $("#navicon").addClass("fa-times");
      }
      else if($("#navicon").hasClass("fa-times")){
        $("#navicon").removeClass("fa-times");
        $("#navicon").addClass("fa-bars");
      }
  
    });
  
  });

  //Date and time function
  function datetime(){
    var dt=new Date();
    var mth=dt.getMonth()+1;
    var a;
    var hrs=dt.getHours();
    var m;
    if(mth==1)
    m='January';
    else if(mth==2)
    m='February';
    else if(mth==3)
    m='March';
    else if(mth==4)
    m='April';
    else if(mth==5)
    m='May';
    else if(mth==6)
    m='June';
    else if(mth==7)
    m='July';
    else if(mth==8)
    m='August';
    else if(mth==9)
    m='September';
    else if(mth==10)
    m='October';
    else if(mth==11)
    m='November';
    else if(mth==12)
    m='December';

    if(hrs<12)
    a='AM';
    else
    {
      a='PM';
      if(hrs!=12)
      hrs=hrs%12;
    }
    var dtm=String(hrs).padStart(2,'0')+':'+String(dt.getMinutes()).padStart(2, '0')+' '+a+',<br>'+dt.getDate()+' '+m+' '+dt.getFullYear();
    return dtm;
  }

  //Comments
  $(document).ready(function(){
    $('#submit').click(function(){
      var text1=$('#name').val();
      var text2=$('#cmmnt').val();
      var dtm=datetime();
      var html="<div class='well comment'><div class='row'><div class='col-md-10'><font class='comment-head'>" + text1 + "</font><br></div><div class='col-md-2'><small>" + dtm + "</small></div></div><font class='comment-font'>" + text2 + "</font><br></div>";
      $('#output').append(html);
      $('#name').val('');
      $('#cmmnt').val('');

    });
  });
  
  //Tooltips
  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });