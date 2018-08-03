window.onload = function() {


  $(document).ready(function() {
    //$('.your-class').slick({
    //  setting-name: setting-value
    //});
    $('.your-class').slick({
      touchMove: true,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 3,
      centerMode: true,
      centerPadding: '0px',
      prevArrow:"<button type='button' class='slick-prev button_Left'><img class='arrowImage' src='images/leftArrow.png'></button>",
      nextArrow:"<button type='button' class='slick-next button_Right'><img class='arrowImage' src='images/rightArrow.png'></button>"

    });

    loadedCode();

  });

  function loadedCode() {
    setTimeout(() => {
      document.getElementsByClassName('textBlockBG')[0].className = "textBlockBG2";
    }, 1000);
    setTimeout(() => {
      document.getElementById('sliderTextId').classList.add("opacityChange");
    }, 1500);
    setTimeout(() => {
      document.getElementsByClassName('textBlockBG2')[0].className = "textBlockBG";
      document.getElementById('sliderTextId').classList.remove("opacityChange");
    }, 5000);

  }

}
