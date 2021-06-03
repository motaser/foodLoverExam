'use strict'

let myForm = document.getElementById('myForm');
let styl =document.getElementById('table');
let table = document.getElementById('body');
let imgname = ['shawarma.jpg','burger.jpg','pizza.jpg'];
let orders =[];


function Food (customerName, foodType, img,  price ){

this.customerName = customerName;
this.foodType = foodType;
this.img= 'img/food/'+img;
this.price= randomfun(1,100);
orders.push(this)


}

    

// let tableEl =document.createElement('table');
// contEl.appendChild(tableEl);
// let trhead = document.createElement('tr');
// tableEl.appendChild(trhead);
// let thhead = document.createElement('th');
// trhead.appendChild(thhead);
// thhead.textContent = 'Order Image';
// let th2head = document.createElement('th')
// trhead.appendChild(th2head);
// th2head.textContent= 'Order Details'




function render(){

    table.textContent='';
    for (let i = 0; i <orders.length; i++) {
      
        let trbody = document.createElement('tr');
       table.appendChild(trbody);
       
       let tdbody = document.createElement('td');
       trbody.appendChild(tdbody);
       let imag = document.createElement('img');
       tdbody.appendChild(imag);
       imag.setAttribute('src',orders[i].img);
       
    
       tdbody = document.createElement('td');
       trbody.appendChild(tdbody);
       let para =document.createElement('p');
       tdbody.appendChild(para);
       para.textContent="Customer name: " + orders[i].customerName; 
       para =document.createElement('p');
       tdbody.appendChild(para);
       para.textContent="Food Type: " + orders[i].foodType;
       para =document.createElement('p');
       tdbody.appendChild(para);
       para.textContent="Price: " + orders[i]. price;
       
        
    }
    
    

 
    
}




myForm.addEventListener('submit', handelSubmit)

function handelSubmit(event){
     event.preventDefault();


let customerName = event.target.customerName.value;
let foodType = event.target.foodType.value;
let foodImg ;
if(foodType== 'shawarma'){
    foodImg = imgname[0];
}
if(foodType== 'burger'){
    foodImg = imgname[1];
}
if(foodType== 'pizza'){
    foodImg = imgname[2];
}

console.log(orders);

new Food (customerName, foodType, foodImg );
setting();
render();


}
function randomfun(min,max){
    return parseInt( Math.random() * (max - min) + min);
}

function setting(){
    let data = JSON.stringify(orders);
    localStorage.setItem('food',data);
}
function getting(){

    let getdata = localStorage.getItem('food');
    let obj = JSON.parse(getdata);
    

    if(obj){
        obj.randomunm =randomfun();
        orders =obj;
    }
    render();
}
getting();