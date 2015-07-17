/**
 * Created by Administrator on 2015/7/17.
 */
function open_h_modal(obj){
    initSwiper();
    $(".h-modal-backdrop").show();
    $(obj).animate({right:0},500,function(){
    })
}

function close_h_modal(obj){
    $(obj).animate({right:-85+"%"},500,function(){
        $(".h-modal-backdrop").hide();
    })
}

function initSwiper(){
    var swiper = new Swiper('.swiper-container', {
        scrollbar: '.swiper-scrollbar',
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true,
        observer:true
    });
}
