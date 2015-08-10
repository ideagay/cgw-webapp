/**
 * Created by Administrator on 2015/7/17.
 */
function open_h_modal(obj){
    //打开模态框
    initSwiper();

    $(".h-modal-backdrop").show();
    $(obj).animate({right:0},200);
}


function initSwiper(){
    //初始化滚动插件
    var swiper = new Swiper('.swiper-container', {
        scrollbar: '.swiper-scrollbar',
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true,
        observer:true
    });
}



var start_x=0, start_y=0, end_x, end_y, move_num_X,move_num_Y;

$(".h-modal").on("touchstart", function(e) {
        start_x = e.originalEvent.targetTouches[0].clientX;
        start_y = e.originalEvent.targetTouches[0].clientY;
});
$(".h-modal").on("touchmove", function(e) {
    e.stopPropagation();
        end_x = e.originalEvent.targetTouches[0].clientX;
        end_y = e.originalEvent.targetTouches[0].clientY;
        move_num_X = (end_x - start_x).toFixed(2);
        move_num_Y = (end_y - start_y).toFixed(2);
        if (Math.abs(move_num_X) > Math.abs(move_num_Y)) {
            //alert(Math.abs(move_num_X)+","+Math.abs(move_num_Y));
            if (move_num_X > 0) {
                //alert("向右")
                if (Math.abs(move_num_X) > 10) {
                    $(this).animate({right: -85 + "%"}, 200);
                    $(".h-modal-backdrop").hide();
                }
            }
            //else{
            //    //alert("向左")
            //}
        }
        //else{
        //    if(move_num_Y>0){
        //        //alert("向下");
        //    }else{
        //        //alert("向上");
        //    }
        //
        //}
});
$(".h-modal").on("touchend", function(e) {

});

