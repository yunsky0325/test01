$('.search label').on('click', function(){
    $(this).parent().toggleClass('on')
})


$('.slide-group').slick({
    autoplay:true,
    autoplaySpeed:3000,
    slidesToShow: 1,
    dots:true,
    prevArrow:'<button class="arrleft"><i class="fas fa-angle-left"></i></button>',
    nextArrow:'<button class="arrright"><i class="fas fa-angle-right"></i></button>'
})


$('.subslide-group').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    prevArrow:'<button class="arrleft2"><i class="fas fa-angle-left"></i></button>',
    nextArrow:'<button class="arrright2"><i class="fas fa-angle-right"></i></button>'
});


$('.best-subject a span').each(function(){
    var textcount = $(this).text().length
    if (textcount<=19) {
        $(this).append('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;')
    }

})


$('.vigan-slide-group').slick({
    slidesToShow: 3,
    // slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: '0px',
    autoplaySpeed: 2000,
    prevArrow:'<button class="arrleft3"><i class="fas fa-angle-left"></i></button>',
    nextArrow:'<button class="arrright3"><i class="fas fa-angle-right"></i></button>',
});


$('.footer-top .fam').on('click', function(){
    $(this).find('ul').slideToggle()
})

$('.btinfo').click(function(e){
    e.preventDefault();
    $('.footer-toggle').slideToggle();
    $('.btinfo').toggleClass('open');

    if($('.btinfo').hasClass('open')) {
        $('.btinfo').find("i").attr("class","fa fa-angle-up")
    }else {
        $('.btinfo').find("i").attr("class","fa fa-angle-down")
    }
})


// $(window).scroll(  
//     function(){  
//         //스크롤의 위치가 상단에서 450보다 크면  
//         if($(window).scrollTop() > 450){  
//         /* if(window.pageYOffset >= $('원하는위치의엘리먼트').offset().top){ */  
//             $('.topbanner').addClass("fix");  
//             //위의 if문에 대한 조건 만족시 fix라는 class를 부여함  
//         }else{  
//             $('.topbanner').removeClass("fix");  
//             //위의 if문에 대한 조건 아닌경우 fix라는 class를 삭제함  
//         }  
//     }  
// );  

$(document).ready(function(){
    var currentPosition = parseInt($(".topbanner").css("top"));
    $(window).scroll(function() {
      var position = $(window).scrollTop(); 
      $(".topbanner").stop().animate({"top":position+currentPosition+"px"},400);
    });
  });

