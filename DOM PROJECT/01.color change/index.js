//manuplate the baground color using dom



const buttons=document.querySelectorAll('.button');

const body=document.querySelector("body");

// console.log(buttons);

buttons.forEach(function (btn){
  console.log(btn);
  btn.addEventListener('click',function(e){
    // console.log(e.target.id==="white"? "true":"false");
  if(e.target.id==="white"){
    body.style.backgroundColor=e.target.id;
  }
  if(e.target.id==="red"){
    body.style.backgroundColor=e.target.id;
  }
  if(e.target.id==="yellow"){
    body.style.backgroundColor=e.target.id;
  }
  if(e.target.id==="blue"){
    body.style.backgroundColor=e.target.id;
  }
  if(e.target.id==="green"){
    body.style.backgroundColor=e.target.id;
  }
  
   
    
  })
})