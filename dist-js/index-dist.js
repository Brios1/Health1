$(document).ready(function() {


    let imgHeigthBox = $('.img-content').prop('naturalHeight');
    let imgWidthBox = $('.img-content').prop('naturalWidth');

    if(imgHeigthBox == imgWidthBox){
        if(imgWidthBox > 600){
            $('.img-content').css({'width':'50%'});
        }
    }
    if(imgHeigthBox > imgWidthBox){
        if(imgHeigthBox < 1400 && imgHeigthBox > 700){
            $('.img-content').css({'width':'25%'});
        }
        if(imgHeigthBox < 700 && imgHeigthBox > 500){
            $('.img-content').css({'width':'50%'});
        }
    }
    if(imgHeigthBox < imgWidthBox){
        $('.img-content').css({'width':'100%'});
        if(imgWidthBox < 600){
            $('.img-content').css({'width':'500px'});
        }
    }

    if(imgHeigthBox > imgWidthBox){
        if(imgHeigthBox < 1400 && imgHeigthBox > 700){
            $('.img-content').css({'width':'25%'});
        }
        if(imgHeigthBox < 700 && imgHeigthBox > 500){
            $('.img-content').css({'width':'50%'});
        }
    }



    function bgColor(){
        let bgColor = $('.bg-block').css('background-color');

        if(tinycolor(bgColor).isLight()){
            $('.bg-block').css({'color':'#333'});
        }else{
            $('.bg-block').css({'color':'#fff'});
        }

    }

    let borderColor = $('#borderColor').attr('class');
    let borderWidth = $('#borderWidth').attr('class');

    if($('.wrapper-store').width() > 1360){
        $('.wrapper-store').css({'margin-top':'0px','margin-bottom':'0px'});
        $('.header-store').css('border-radius','0px');
        $('.header-store-bg').css('border-radius','0px');
        $('.content-store').css({'border-top':borderWidth + ' solid ' +borderColor,'border-bottom':borderWidth + ' solid ' +borderColor});
        $('.wrapper-store').css('margin-top','0px');
    }

    if($('.navigation ul').css('flex-direction') == 'row' && $('.header-store_logobox').hasClass('flex-row')){
        $('.header-store_logobox').css('justify-content','start');
    }

    if($('.header-store_logobox').hasClass('flex-column') && $('.navigation ul').css('flex-direction') == 'column'){
        $('.store_description_navigation').css('justify-content','center');
    }

    let randomNumber = $('#randomNumber').attr('class');
    if(randomNumber == '1' || randomNumber == '2'){
        $('.store_description_text').hide();
        $('.store_description_navigation').css('display','flex');
    }

    if($('.content-flex-container').hasClass('flex-column')){
        $('.content-flex-container > div').css('width','100%');
        $('.flex-container_layout').css('display','flex');
        $('.flex-container_layout').css({'display':'flex','gap':'30px'});
        $('.flex-container_layout > div').css({'width':'50%','margin-bottom':'50px'});
        $('.price-btn-block').css({'margin-top':'0px','flex-direction':'row'});
        $('.hideBlock').show();
        if($('.description-option').css('flex-direction') == 'column-reverse'){
            $('.description-option p:first-child').css('border','none');
        }else{
            $('.description-option p:last-child').css('border','none');
        }
        $('.description-option p').css('text-align','left');
        $('.price-product').css('justify-content','start');
        $('.price-product').css('text-align','left');
    }

    $('.linkGallery').each(function() {
        $(this).attr('href', $(this).children('img').attr('src'));
    });



    if($('.title-block').css('background-color') != 'rgb(255, 255, 255)'){
        $('.title-block').css({'padding':'5px 10px 5px 10px','color':'#fff'});
    }else{
        $('.title-block').css({'color':'#333','padding':'5px 10px 5px 10px'});
    }

    if($('.bg-block').css('background-color') != 'rgb(255, 255, 255)'){
        $('.title-block').css('border-radius','0px');
    }

    if($('.comments-content__main').hasClass('flex-row')){
        $('.comments-content__main > div').css('width','50%');
    }

    if($('.not-comments').css('display') == 'block'){
        $('.comments-content__main').hide();
    }

    if($('.btnOrder').hasClass('d-none')){
        $('.price-btn-block').css('display','block');
        $('.price-product').css('width','100%');
    }

    $('.add_btn').click(function(){
        if($('.text_comm').val() != '' && $('.name_comm').val() != ''){
            $('.addcomment__main').hide();
            $('.done-comments').fadeIn(200);
        }

    });

    bgColor();
});
