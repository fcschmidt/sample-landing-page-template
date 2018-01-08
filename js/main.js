/*
* Carrousel Slider
* */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("myCarousel");
    var indicator = document.getElementsByClassName("indicator");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < indicator.length; i++) {
        indicator[i].className = indicator[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    indicator[slideIndex-1].className += " active";
}

/*
* Math Captcha Validation Form
* */
var total;
function getRandom(){
    return Math.ceil(Math.random()* 30);
}
function createSum(){
    var randomNum1 = getRandom(),
        randomNum2 = getRandom();
    total =randomNum1 + randomNum2;
    $("#captcha").text(randomNum1 + " + " + randomNum2 + " = " + " ? ");
}

Captcha();
function Captcha(){
  $('button[type=submit]').attr('disabled', 'disabled');

  createSum();

  $( "#validation" ).keyup(function() {
      var input = $(this).val();
      var slideSpeed = 200;

      $('#message').hide();

      if(input == total) {
          $('button[type=submit]').removeAttr('disabled');
          $('#success').slideDown(slideSpeed);
          $('#fail').slideUp(slideSpeed);
      }else{
          $('button[type=submit]').attr('disabled','disabled');
          $('#fail').slideDown(slideSpeed);
          $('#success').slideUp(slideSpeed);
      }
  });
}


