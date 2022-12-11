function init() {
    var ww = $(window).width()
    if (ww>1024) {
        $('html').addClass('pc').removeClass('mobile')
    } else if(ww<=1024) {
        $('html').addClass('mobile').removeClass('pc')
    }
}
init()
$(window).on('resize', function(){
    init()
})

$('.depth1 > li').hover(
    function(){
        if ($('html').hasClass('pc')) {
            $(this).find('.depth2').stop().slideDown(300)
        }
    },
    function(){
        if ($('html').hasClass('pc')) {
            $(this).find('.depth2').stop().slideUp(300)
        }
    }
)

$('.depth1 > li > a').on('click', function(){
    if ($('html').hasClass('mobile')) {
        $(this).next().slideToggle()
        $(this).parent().siblings().find('.depth2').slideUp()
    }
    return false
})

$('#header .opennav').on('click', function(){
    $('#navbox').addClass('on')
    $('#header .nav').addClass('on')
    $('#header .nav')
    .append('<div class="closenav"><i class="fa-solid fa-xmark"></i></div>')
    $('.closenav').css({
        position:'absolute',
        top:'20px', right:'20px',
        fontSize:'30px'
    })
    $('html').css({ overflowY:'hidden' })
})
$('body').on('click', '#header .nav .closenav, #navbox', function(){
    $('.nav').removeClass('on')
    $('#navbox').removeClass('on')
    $('#header .nav .closenav').remove()
    $('html').css({
        overflowY:'auto'
    })
})

$(window).on('scroll', function(){
    let sct = $(this).scrollTop()
    if (sct>0) {
        $('#header').css({
            position:'fixed'
        })
    } else {
        $('#header').css({
            position:'relative'
        })
    }
})

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
