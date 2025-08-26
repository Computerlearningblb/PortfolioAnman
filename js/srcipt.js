// tab section here 

// btn section here 
let tabBtn1 = document.getElementById("butn-1");
let tabBtn2 = document.getElementById("butn-2");
let tabBtn3 = document.getElementById("butn-3");
let tabBtn4 = document.getElementById("butn-4");
let tabBtn5 = document.getElementById("butn-5");

// box section here 

let tabBox1 = document.getElementById("sec1");
let tabBox2 = document.getElementById("sec2");
let tabBox3 = document.getElementById("sec3");
let tabBox4 = document.getElementById("sec4");
let tabBox5 = document.getElementById("sec5");

tabBtn1.addEventListener('click', ()=>{
    tabBox1.classList.add("active");    
    tabBox2.classList.remove("active");    
    tabBox3.classList.remove("active");    
    tabBox4.classList.remove("active");    
    tabBox5.classList.remove("active");    

});

tabBtn2.addEventListener('click', ()=>{
    tabBox1.classList.remove("active");    
    tabBox2.classList.add("active");
    tabBox3.classList.remove("active");    
    tabBox4.classList.remove("active");    
    tabBox5.classList.remove("active");    

});

tabBtn3.addEventListener('click', ()=>{
    tabBox1.classList.remove("active");    
    tabBox2.classList.remove("active");    
    tabBox3.classList.add("active");    
    tabBox4.classList.remove("active");    
    tabBox5.classList.remove("active");    

});

tabBtn4.addEventListener('click', ()=>{
    tabBox1.classList.remove("active");    
    tabBox2.classList.remove("active");    
    tabBox3.classList.remove("active");    
    tabBox4.classList.add("active");    
    tabBox5.classList.remove("active");    

});

tabBtn5.addEventListener('click', ()=>{
    tabBox1.classList.remove("active");    
    tabBox2.classList.remove("active");    
    tabBox3.classList.remove("active");    
    tabBox4.classList.remove("active");    
    tabBox5.classList.add("active");    

});

