function months(arr , val){

    var finalMonths = [];

    for (let i= 0; i<arr.length; i+=val){
        console.log(arr.slice(i , i + val))
    }
    return finalMonths;
}


months(["jan","feb","mar","apr","may","june","july","aug","sept","oct","nov","dec"],3)