(function($){
    $(window).on("load",function(){
        $(".seo_text").mCustomScrollbar({
            mouseWheel:false
        });
    });
})(jQuery);
// -----------------------------------------------------
(function($){
    $(window).on("load",function(){
        $('.goods_corousel').slick({
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true

                  }},
                  {
                    breakpoint: 762,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      infinite: true
  
                    }
                }]
        });
    });
})(jQuery);
//-----------------------------------------------------------------------
var lang = $('.languages>h3');
var currency = $('.currency>h3');
var langItem;
langItem = lang.siblings('.languages_list').children('span');
var  currencyItem;
currencyItem=currency.siblings('.currency_list').children('span');
function openlist(){


    $(this).siblings('.languages_list').toggleClass('active');
    $(this).siblings('.currency_list').toggleClass('active');
}
lang.click(openlist);
currency.click(openlist);

//-------------------------------------------------------------------------------------
function changeLang(){

   var choosenType;
choosenType = $(this).text();
    lang.text(choosenType);
    lang.siblings().removeClass('active')
}
function changeCur(){

    var choosenType;
 choosenType = $(this).text();
 currency.text(choosenType);
 currency.siblings().removeClass('active')
 }

langItem.click(changeLang);
currencyItem.click(changeCur);
//---------------------------------------------------------------------------

$( ".btn_burger>i" ).click(function() {
    $('.hiden_menu').css('display','block')
  });

  $( ".close_btn" ).click(function() {
    $('.hiden_menu').css('display','none')
  });


  //---------------------------------------------------------------------------

//   $('.menu_item').on('click' , '.sub_menu' ,function (){
//         $('.menu_item .sub_menu').removeClass('open_menu');
//         $(this).addClass('open_menu');
//   });
  $(document).ready(function() {
    
    var menuItem = $('.main-menu').children('.menu_item');
    console.log(menuItem);
    $(menuItem).on('click',function (){
        $('.menu_item .sub_menu').removeClass('open_menu');
        $(this).children('.sub_menu').toggleClass('open_menu');
        // if($(this).children('.sub_menu').hasClass('open_menu')){
        //     console.log('11')
        // }
    });
});