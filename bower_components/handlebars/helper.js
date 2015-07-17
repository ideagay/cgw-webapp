/**
 * Created by Chen on 15/5/24.
 */

//S-公用

//S-时间格式化
Handlebars.registerHelper("dateFormatStyle",function(value,style){
    function formatDate(now) {
        var year=now.getFullYear();
        var month=now.getMonth()+1;
        var date=now.getDate();
        var hour=now.getHours();
        var minute=now.getMinutes();
        var second=now.getSeconds();
        if(second < 10)
        {
            second = '0' + second;
        }
        if(minute < 10)
        {
            minute = '0' + minute;
        }
        if(style ==1 ){//格式:2014-08-15 00:00:00
            return year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second;
        }else if(style == 2){//格式:2014-08-15 00:00
            return year+"-"+month+"-"+date+" "+hour+":"+minute;
        }

    }
    if(value==null ||value==''){
        return '';
    }
    var d = new Date(value);
    return formatDate(d);
});

//E-时间格式化

//S-文本截取
Handlebars.registerHelper("hideText",function(value,num){
    if(value.length > num)
    {
        return new Handlebars.SafeString(value.substr(0,num)+'…');
    }
    else
    {
        return value;
    }

});
//E-文本截取

//E-公用

//S-申请记录状态
Handlebars.registerHelper("applicationState",function(state){
    if(state == 0){
        return new Handlebars.SafeString('<i class="state-icon approval">审核中</i>');
    }else if(state == 1){
        return new Handlebars.SafeString('<i class="state-icon lending">审核通过</i>');
    }else if(state == 2){
        return new Handlebars.SafeString('<i class="state-icon fail">审核失败</i>');
    }
})
//E-申请记录状态

//S-我要贷款成功率
Handlebars.registerHelper("successRateFun",function(successRate){
    if(successRate > 0 && successRate < 40){
        return new Handlebars.SafeString('<img src="/statics/images/ic1.jpg" alt="'+successRate+'">');
    }else if(successRate >= 40 && successRate < 60){
        return new Handlebars.SafeString('<img src="/statics/images/ic2.jpg" alt="'+successRate+'">');
    }else if(successRate >= 60 && successRate < 80){
        return new Handlebars.SafeString('<img src="/statics/images/ic3.jpg" alt="'+successRate+'">');
    }else if(successRate >= 80 && successRate < 100){
        return new Handlebars.SafeString('<img src="/statics/images/ic4.jpg" alt="'+successRate+'">');
    }else if(successRate == 100){
        return new Handlebars.SafeString('<img src="/statics/images/ic5.jpg" alt="'+successRate+'">');
    }
})
//E-我要贷款成功率




//日期格式化
Handlebars.registerHelper("prettifyDate", function(timestr) {
	var date= new Date(Date.parse(timestr.replace(/-/g,   "/"))); //转换成Data();
	return  date.toLocaleDateString();

});

//金额转换为万
Handlebars.registerHelper("prettifyMoney", function(money) {
    if(money<10000)
    	return money;
    else 
    	return money/10000 +"万";
});

 