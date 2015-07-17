/**
 * Created by Administrator on 2015/7/15.
 */
    $(function(){

        //city
        $.ajax({
            type:"GET",
            url:"json/city.txt?randomTime="+(new Date()).getTime(),
            dataType:'json',
            success:function(data){
                if(typeof data=="string"){
                    data = $.parseJSON(data);
                }
                var hotCityGroup="";
                var hotCity=data.hotCity;
                var cityGroup="";
                var cityChar="";
                var cityList=data.cityList;
                $.each(hotCity,function(){
                    hotCityGroup+="<li><a href=''class='btn btn-default' href='#' role='button'>"+this.areaname+"</a></li>"
                });
                $.each(cityList,function(){
                    cityGroup+="<ul><p id="+this.name+">"+this.name+"</p>";
                    cityChar+="<li><a href='#"+this.name+"'>"+this.name+"</a>";
                    $.each(this.city,function(){
                        cityGroup+="<li><a href=''>"+this.cityName+"</a></li>";
                    });
                    cityGroup+="</ul>"
                });
                $("#hotCity ul").append(hotCityGroup);
                $("#cityList").append(cityGroup);
                $("#cityChar ul").append(cityChar);
            }
        })

    })
