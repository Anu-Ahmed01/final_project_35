// search side bar start
// search side bar start
$('#search1').on('click', ()=>{
    $('#search').addClass('show');
  })
  $('#search_close_btn').on('click', ()=>{
      $('#search').removeClass('show');
    })

// search side bar end

 /* Hero Slider Activation Js Start */
$(function (){
    $(".banner_slider").slick({
        autoplay: true,
    autoplaySpeed: 2000,
        arrows:false,
        fade:true,
        speed:600,
        dots:true,
        dotsClass:'banner_slider_dots'
        
     
    });
  });
/* //Hero Slider Activation Js End */

// countdown js start
$("#deals_timer").countdown("2023/12/10", function (event) {
  var $this = $(this).html(
      event.strftime(
          "" +
              "<div><h4>%D</h4> <p>days</p></div> " +
              "<span>:</span>"+
              "<div><h4>%H</h4> <p>hr</p></div> " +
              "<span>:</span>"+
              "<div><h4>%M</h4> <p>min</p></div> " +
              "<span>:</span>"+
              "<div><h4>%S</h4> <p>sec</p></div>"
      )
  );
});

// countdown js start End
// / New Product Slider Activation Js Start /
$('.new_product_slider').slick({
  slidesToShow:4,
  autoplay: true,
  autoplaySpeed: 2000,
      arrows:false,
});
///New Product Slider Activation Js End /


$('.new_arrival_slider').slick({
  slidesToShow:2,
  autoplay: true,
  autoplaySpeed: 2000,
      arrows:false,
      dots:true,
      dotsClass:'banner_slider_dots'
});

