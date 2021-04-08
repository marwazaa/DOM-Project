
document.getElementById("click1").addEventListener("click",function(){
    var textBox = document.getElementById("bt1").value;
    if(textBox>=1){
        textBox--;
        document.getElementById("bt1").value=textBox;}
        price1();
        totalprice();
})

document.getElementById("click2").addEventListener("click",function(){
    var textBox = document.getElementById("bt1").value;
    textBox++;
        document.getElementById("bt1").value=textBox;
        price1();
        totalprice();
})


document.getElementById("click3").addEventListener('click',function(){
    var textBox = document.getElementById("bt2").value;
    if(textBox>=1){
        textBox--;
        document.getElementById("bt2").value=textBox;}
        price2();
        totalprice();
})


document.getElementById("click4").addEventListener("click",function(){
    var textBox = document.getElementById("bt2").value;
    textBox++;
    document.getElementById("bt2").value=textBox;
    price2();
    totalprice();
})


document.getElementById("click5").addEventListener("click",function(){
    var textBox = document.getElementById("bt3").value;
    if(textBox>=1){
        textBox--;
        document.getElementById("bt3").value=textBox;}
        price3();
        totalprice();
})


document.getElementById("click6").addEventListener("click",function(){
    var textBox = document.getElementById("bt3").value;
    textBox++;
    document.getElementById("bt3").value=textBox;
    price3();
    totalprice();
})




let menu = document.getElementById('rem');
let item1=document.getElementById('i1')
function remove1(){
    menu.removeChild(item1)
}

let menu2 = document.getElementById('rem');
let item2=document.getElementById('i2')
function remove2(){
    menu2.removeChild(item2)
}

let menu3 = document.getElementById('rem');
let item3=document.getElementById('i3')
function remove3(){
    menu3.removeChild(item3)
}


function heart1(){
    let like1=document.getElementById('heart1')
    
    if(like1.style.color=='black'){
        like1.style.color='red'
    } 
    else {
        like1.style.color='black'
    }   
}

function heart2(){
    let like2=document.getElementById('heart2')
    if(like2.style.color=='black'){
    like2.style.color='red'
    }
    else {
    like2.style.color='black'  
    }
}

function heart3(){
    let like3=document.getElementById('heart3')
    if(like3.style.color=='black'){
       like3.style.color='red'
    }
   else{
    like3.style.color='black'  
   }
}


function price1(){
    var n1 = document.getElementById("bt1").value*1379.00;
    document.getElementById("pr1").innerHTML=n1;

}

function price2(){
    var n2 = document.getElementById("bt2").value*176.80;
    document.getElementById("pr2").innerHTML=n2;

}

function price3(){
    var n3 = document.getElementById("bt3").value*249.00;
    document.getElementById("pr3").innerHTML=n3;

}

function totalprice(){
    let price1=parseInt(document.getElementById("pr1").innerHTML);
    let price2=parseInt(document.getElementById("pr2").innerHTML);
    let price3=parseInt(document.getElementById("pr3").innerHTML);
    let total=price1+price2+price3;
    document.getElementById("finalPrice").value=total;
}


