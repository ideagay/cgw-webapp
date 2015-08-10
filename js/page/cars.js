/**
 * Created by Administrator on 2015/7/15.
 */
$(function(){

    //加载city
    $.ajax({
        type:"GET",
        url:"json/cars.txt?randomTime="+(new Date()).getTime(),
        dataType:'json',
        success:function(data){
            if(typeof data=="string"){
                data = $.parseJSON(data);
            }
            var carGroup=""; //车型品牌列表
            var carChar=""; //车型字母列表
            var carList=data.carList;
            $.each(carList,function(){
                carGroup+="<ul><p id="+this.name+">"+this.name+"</p>";  //车型品牌列表
                carChar+="<li><a  href='#"+this.name+"'>"+this.name+"</a>";  //车型字母列表
                $.each(this.cars,function(){
                    carGroup+="<li> <a onclick=\"open_h_modal('#carModal')\"; href='javascript:;'><img src='images/brand-icon.png' class='brand'/>"+this.carName+"</a></li>";
                });
                carGroup+="</ul>"
            });
            $("#carList").append(carGroup);
            $("#carChar ul").append(carChar);
        }
    })

    $(".h-modal-backdrop").click(function(){
        $(this).hide();
        $(".h-modal").animate({right:"-85%"},200,function(){

        })
    })

})
