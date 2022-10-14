$(document).ready(function(){
    $('.flip-card').hover(function(){
        $(this).css("cursor","pointer")
    })

    $('#query').hover(function(){
      $(this).css("cursor","pointer")
    })
    $('#acm').on('click',function(){
        window.open('acm.html')
    })

    $('#iee').on('click',function(){
        window.open('IEEE.html')
    })

    $('#iei').on('click',function(){
        window.open('IEI.html')
    })

    $('#dsc').on('click',function(){
        window.open('DSC.html')
    })

    $('#nss').on('click',function(){
        window.open('NSS.html')
    })

    $('#codechef').on('click',function(){
        window.open('codechef.html')
    })

    $('#csi').on('click',function(){
        window.open('CSI.html')
    })

    $('#iste').on('click',function(){
        window.open('ISTE.html')
    })

    $('#curin').on('click',function(){
        window.open('curin.html')
    })

    $('#asme').on('click',function(){
        window.open('ASME.html')
    })

    $('#ecell').on('click',function(){
        window.open('ceed.html')
    })

    $('#toastmaster').on('click',function(){
        window.open('Toastmaster.html')
    })

    $('#bnb').on('click',function(){
        window.open('bits&bits.html')
    })

    $('#seagulls').on('click',function(){
        window.open('Seagulls.html')
    })

    $('#mechstein').on('click',function(){
        window.open('Mechstein club.html')
    })

    $('#epic').on('click',function(){
        window.open('epic youth.html')
    })

    $(".c2s2").on('click',function(){
        window.open('underConstruction.gif')
    })

})

function openForm() {
    var txt;
  var person = prompt("Please enter your name:");
  var query=prompt("Query:","Here")
  if (person == null || person == "" || query == null || query == "" ) {
    alert("cancelled query")
  } else {
    alert("submitted");
  }
  }


var i = 0;
var i2=0;
var i3=0;
var i4=0;
var txt = "The greatest engine of change is TECHNOLOGY";
var speed = 100;
var txt2="If you can SPEAK you can influence, If you can influence, you change lives";
var txt3="The beauty of the world lies in the diversity of its CULTURE";
var txt4="Department";
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("tech").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


function typeWriter2() {
    if (i2 < txt2.length) {
      document.getElementById("speaking").innerHTML += txt2.charAt(i2);
      i2++;
      setTimeout(typeWriter2, speed);
    }
  }

function typeWriter3() {
    if (i3 < txt3.length) {
      document.getElementById("CULTURE").innerHTML += txt3.charAt(i3);
      i3++;
      setTimeout(typeWriter3, speed);
    }
  }

function typeWriter4() {
    if (i4 < txt4.length) {
      document.getElementById("DEPARTMENT").innerHTML += txt4.charAt(i4);
      i4++;
      setTimeout(typeWriter4, speed);
    }
  }