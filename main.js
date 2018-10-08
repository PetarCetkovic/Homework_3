var responsiveSlider = function() {

  var slider = document.getElementById("slider");
  var sliderWidth = slider.offsetWidth;
  var slideList = document.getElementById("slideWrap");
  var count = 1;
  var items = slideList.querySelectorAll("li").length;
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");

  window.addEventListener('resize', function() {
    sliderWidth = slider.offsetWidth;
  });

  var prevSlide = function() {
    if(count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
    else if(count = 1) {
      count = items - 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };

  var nextSlide = function() {
    if(count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
    else if(count = items) {
      slideList.style.left = "0px";
      count = 1;
    }
  };
  
  next.addEventListener("click", function() {
    nextSlide();
  });

  prev.addEventListener("click", function() {
    prevSlide();
  });
  
  setInterval(function() {
    nextSlide()
  }, 8000);

};

window.onload = function() {
  responsiveSlider();  
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// Get the modal
var modal1 = document.getElementById('myModal1');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');
var modal4 = document.getElementById('myModal4');

// Get the button that opens the modal
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
var span4 = document.getElementsByClassName("close")[3];

// When the user clicks on the button, open the modal 
btn1.onclick = function() {
    modal1.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}
btn3.onclick = function() {
  modal3.style.display = "block";
}
btn4.onclick = function() {
  modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modal2.style.display = "none";
}
span3.onclick = function() {
 
  modal3.style.display = "none";
}
span4.onclick = function() {
  modal4.style.display = "none";
}
span1.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1 || event.target == modal2 || event.target == modal3 || event.target == modal4) {
        modal1.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
        modal4.style.display = "none";

    }
}