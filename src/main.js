//TODO: Please write code in this file.
function printInventory(inputs) {
    var outputArray=new Array();
    var j=0;
    for(var i=0;i<inputs.length;i++){

        if(judgeExist(inputs[i],outputArray)){
            outputArray[j]=new listItem(inputs[i].barcode,inputs[i].name,1,inputs[i].unit,inputs[i].price);
            j++;
}
}
    var outputString;
    var outString='';
    var allprice=0;
    for(var k=0;k<outputArray.length;k++){
        var out=outputArray[k];
        var allprice=allprice+out.totalprice;
        outString = outString+'名称：'+out.name+'，数量：'+out.number+out.unit+'，单价：'+out.price.toFixed(2)+'(元)，小计：'+
        out.totalprice.toFixed(2)+'(元)'+'\n';

}
        outputString= '***<没钱赚商店>购物清单***\n' +
                       outString+
                       '----------------------\n' +
                       '总计：'+ allprice.toFixed(2) +'(元)\n'+
                       '**********************';
        console.log(outputString);



}
function judgeExist(input,outputArray){
    for(var i=0;i<outputArray.length;i++){
        if(input.barcode==outputArray[i].barcode){
        outputArray[i].number++;
        outputArray[i].totalprice=outputArray[i].totalprice+input.price;
        return false;
}
}
    return true;
}

function listItem(barcode,name,number,unit,price){
    this.barcode=barcode;
    this.name=name;
    this.number=number;
    this.unit=unit;
    this.price=price;
    this.totalprice=price;
}
