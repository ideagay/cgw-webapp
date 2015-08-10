
function validate_form(thisform)
{
    with (thisform)
    {
        if (validate_required(name,"请输入姓名")==false || validate_name(name,"姓名为2-10个汉字")==false)
        {
            //name.focus();
            return false
        }
        if (validate_required(carType,"请选择证件类型")==false)
        {
            //carType.focus();
            return false
        }
        if(carType.value==1){
            if (validate_required(carID,"请输入证件号码")==false || validate_cardID(carID,"证件号码格式不正确")==false)
            {
                //carID.focus();
                return false
            }
        }else{
            if (validate_required(carID,"请输入证件号码")==false)
            {
                //carID.focus();
                return false
            }
        }
        if (validate_required(loanMoney,"请输入计划贷款金额")==false)
        {
            //loanMoney.focus();
            return false
        }
        if (validate_required(monthIncome,"请选择月收入")==false)
        {
           // monthIncome.focus();
            return false
        }
        if (validate_required(phone,"请输入手机号")==false || validate_phone(phone,"手机格式不正确")==false)
        {
            //phone.focus();
            return false
        }
        if (validate_required(yzm,"请输入验证码")==false)
        {
            //yzm.focus();
            return false
        }
        if (validate_required(tjPhone,"请输入推荐人手机号")==false || validate_phone(tjPhone,"手机格式不正确")==false)
        {
            //tjPhone.focus();
            return false
        }
    }
}

//验证必填
function validate_required(field,alerttxt)
{
    with (field)
    {
        if (value==null||value=="")
        {
            layer.open({
                content:alerttxt,
                time:3,
                shade:false
            });
            return false
        }
        else {return true}
    }
}

//验证姓名
function validate_name(field,txt)
{
    with (field)
    {
        if (isName(value)==false)
        {
            openLayer(txt);
            return false
        }
        else {return true}
    }
}

//验证姓名为两个汉字
function isName(value){
    return /^[\u4e00-\u9fa5]{2,10}$/.test(value);
}

//验证手机号码
function validate_phone(field,txt)
{
    with (field)
    {
        if (isPhone(value)==false)
        {
            openLayer(txt);
            return false
        }
        else {return true}
    }
}

//验证手机号码
function isPhone(value){
    return /^1[3578]\d{9}$/.test(value);
}


//验证身份证
function validate_cardID(field,txt)
{
    with (field)
    {
        if (isIdCardNo(value)==false)
        {
            openLayer(txt);
            return false
        }
        else {return true}
    }
}


//验证身份证
function isIdCardNo(num) {
    var factorArr = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1);
    var parityBit = new Array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2");
    var varArray = new Array();
    var intValue;
    var lngProduct = 0;
    var intCheckDigit;
    var intStrLen = num.length;
    var idNumber = num;
    // initialize
    if ((intStrLen != 15) && (intStrLen != 18)) {
        return false;
    }
    // check and set value
    for (var i = 0; i < intStrLen; i++) {
        varArray[i] = idNumber.charAt(i);
        if ((varArray[i] < '0' || varArray[i] > '9') && (i != 17)) {
            return false;
        } else if (i < 17) {
            varArray[i] = varArray[i] * factorArr[i];
        }
    }
    if (intStrLen == 18) {
        //check date
        var date8 = idNumber.substring(6, 14);
        if (isDate8(date8) == false) {
            return false;
        }
        // calculate the sum of the products
        for (i = 0; i < 17; i++) {
            lngProduct = lngProduct + varArray[i];
        }
        // calculate the check digit
        intCheckDigit = parityBit[lngProduct % 11];
        // check last digit
        if (varArray[17] != intCheckDigit) {
            return false;
        }
    }
    else {        //length is 15
        //check date
        var date6 = idNumber.substring(6, 12);
        if (isDate6(date6) == false) {
            return false;
        }
    }
    return true;
}

function isDate6(sDate) {
    if (!/^[0-9]{6}$/.test(sDate)) {
        return false;
    }
    var year, month, day;
    year = sDate.substring(0, 4);
    month = sDate.substring(4, 6);
    if (year < 1700 || year > 2500) return false
    if (month < 1 || month > 12) return false
    return true
}

function isDate8(sDate) {
    if (!/^[0-9]{8}$/.test(sDate)) {
        return false;
    }
    var year, month, day;
    year = sDate.substring(0, 4);
    month = sDate.substring(4, 6);
    day = sDate.substring(6, 8);
    var iaMonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if (year < 1700 || year > 2500) return false
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) iaMonthDays[1] = 29;
    if (month < 1 || month > 12) return false
    if (day < 1 || day > iaMonthDays[month - 1]) return false
    return true
}


//打开弹出层
function openLayer(txt){
    layer.open({
        content:txt,
        time:3,
        shade:false
    });
}