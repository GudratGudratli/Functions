function dividedSeven(num){
    if(num%7==0){
        console.log("eded 7'e bolunur")
    }
    else if(num%7<4){
        console.log(num-num%7)
    }
    else{
        console.log(num+(7-num%7))
    }
}
// dividedSeven(22)
// un comment ^ this for run
// yuxardaki task1 daxil edilen ededin 7 ye en yaxin bolunenini tapir

// -
// -
// -
// -
// - !!!!!!!!!!!!!!!!!!!!!!!!!!!
// NOT: optimal olsun deye asagidaki tasklarda i nin baslangic deyerini bolen ededin ozu yazdm bosu bosuna bolenden kicik eded yazmaq lazim deil onsuzda o deyer false qaytaracaq
// - !!!!!!!!!!!!!!!!!!!!!!!!!!!
// -
// -
// -
// -
function smaller50(num){
    let count=0
    if(num<50){
        for (let i = 3; i < num; i++){
            if(i%3==0){
                count++
            }
        }
    }
    console.log(count)
}
// smaller50(45)
// un comment ^ this for run
// yuxardaki task2 daxil edilen ededin 50 den kicik 3e bolunen ededlerin sayini tapir

function range(num){
    let count=0
    if(num>50 && num<100){
        for (let i = 5; i<=num; i++){
            if(i%5==0){
                count++
            }
        }
    }
    console.log(count)
}
// range(80)
// un comment ^ this for run
// yuxaridaki task3 daxil edilen eded 50-100 range icindedise hemin edede qeder 5 e bolunen ededlerin sayini gosterir

function bigger100(num){
    let count=0
    if(num>100){
        for (let i = 2; i < num; i++){
            if(i%8==0){
                count++
            }
        }
    }
    console.log(count)
}
// bigger100(111)
// un comment ^ this for run
// yuxaridaki task4 daxil edilen eded 100 den boyukdurse hemin edede qeder 8 e bolunen ededlerin sayini gosterir