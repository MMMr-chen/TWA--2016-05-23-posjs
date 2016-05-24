//TODO: Please write code in this file.
function printInventory(inputs) {
    var outputArray=[];
    for(var i=0;i<inputs.length;i++){
        if(judgeExist(inputs[i],outputArray)){
            var item= {
            barcode:inputs[i].barcode,
            name : inputs[i].name,
            number : 1,
            unit : inputs[i].unit,
            price : inputs[i].price,
            totalprice : inputs[i].price
            };
        }
        outputArray.push(item);
    }
    printData(outputArray);
}
function judgeExist(input,outputArray){
    for(var i=0;i<outputArray.length;i++){
        if(input.barcode==outputArray[i].barcode){
        outputArray[i].number++;
        outputArray[i].totalprice += input.price;
        return false;
        }
    }
    return true;
}
function printData(outputArray){
    var itemString='';
    var allprice=0;
    for(var k=0;k<outputArray.length;k++){
        var out=outputArray[k];
        var allprice=allprice+out.totalprice;
        itemString += '名称：'+out.name+'，数量：'+out.number+out.unit+'，单价：'+out.price.toFixed(2)+'(元)，小计：'+
        out.totalprice.toFixed(2)+'(元)'+'\n';
    }
    var outputString= {title:'***<没钱赚商店>购物清单***\n',
                       content:itemString,
                       dividedLine:'----------------------\n',
                       totalPrice:'总计：'+ allprice.toFixed(2) +'(元)\n',
                       footLine:'**********************'};
    printView(outputString);
}
function printView(outData){
    console.log(outData.title + outData.content + outData.dividedLine + outData.totalPrice + outData.footLine);
}

