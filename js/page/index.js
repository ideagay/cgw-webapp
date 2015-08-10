/**
 * Created by Administrator on 2015/7/15.
 */
$(function(){
    //initHotCars(4);//初始化热门车辆显示数目为4
})
function showHotCars(obj){
    var num= $(".hotCar .list li:hidden").length;  //当前隐藏车辆数目
    var count=12-num;  //4
    for(var i=0;i<count+4;i++){
        $(".hotCar .list li").eq(i).show();
    }
    var currentNum= $(".hotCar .list li:hidden").length;  //点击后的隐藏车辆数目
    if(currentNum==0){
        $(obj).hide();
    }
}
//初始化热门车辆显示数目为4
function initHotCars(index){
    for(var i=0;i<index;i++){
        $(".hotCar .list li").eq(i).show();
    }
}

