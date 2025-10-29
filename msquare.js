/*const div=document.createElement('h1');
const word=document.createTextNode('I love You');
div.appendChild(word);
const tagcollection=document.getElementsByTagName('body');
console.log(tagcollection);
const bodyElement=tagcollection[0];
bodyElement.appendChild(div);
document.querySelector('h1').style.color='blue';*/
let input=document.querySelector('input');
let button=document.querySelector('button');


  



  function check(){
    return input.value.length;
    
}

function result(){
    
if(input.value==='3'){
    alert(' Oh !Congrulation !သင်၏အဖြေမှန်ကန်ပါသည်။ သင်သည်ဗဟုသုတကြွယ်သူဖြစ်ရပေလိမ့်မည်။');
    
}}
function wrong(){
if(input.value==='1' || input.value==='2' || input.value==='4'){alert('Oh ! Sorry!သင်၏အဖြေမှားနေပါသည်။ စိတ်မကောင်းပါဘူး ထပ်မံကြိုးစားပါခင်ဗျာ။');}}

function click(){
     if(check()>0 && input.value==='3'){
       result();
       
     }
     else if(check()>0){
      wrong();
     }
}
button.addEventListener('click',click);

btgGreet.onclick=function(){
  let userInput=document.getElementById('userInput');
  
  let btgGreet=document.getElementById('btgGreet');

  userInput=parseInt(userInput.value);
  console.log(userInput);

  if(userInput===2){
      alert('Oh !Congrulation !သင်၏အဖြေမှန်ကန်ပါသည်။ သင်သည်ဗဟုသုတကြွယ်သူဖြစ်ရပေလိမ့်မည်။');
  }
   if(userInput===1 || userInput===3 || userInput===4){
      alert('Oh ! Sorry!သင်၏အဖြေမှားနေပါသည်။ စိတ်မကောင်းပါဘူး ထပ်မံကြိုးစားပါခင်ဗျာ။');
  }
}

  
btg.onclick=function(){
  let userInput=document.getElementById('Input');
  
  let btgGreet=document.getElementById('btg');

  userInput=parseInt(userInput.value);
  console.log(userInput);
  
  if(userInput===3){
    alert('Oh !Congrulation !သင်၏အဖြေမှန်ကန်ပါသည်။ သင်သည်ဗဟုသုတကြွယ်သူဖြစ်ရပေလိမ့်မည်။');
}
 if(userInput===1 || userInput===2 || userInput===4){
    alert('Oh ! Sorry!သင်၏အဖြေမှားနေပါသည်။ စိတ်မကောင်းပါဘူး ထပ်မံကြိုးစားပါခင်ဗျာ။');
}
}

btg2.onclick=function(){
  let userInput=document.getElementById('Input2');
  
  let btgGreet=document.getElementById('btg2');

  userInput=parseInt(userInput.value);
  console.log(userInput);
  
  if(userInput===4){
    alert('Oh !Congrulation !သင်၏အဖြေမှန်ကန်ပါသည်။ သင်သည်ဗဟုသုတကြွယ်သူဖြစ်ရပေလိမ့်မည်။');
}
 if(userInput===1 || userInput===2 || userInput===3){
    alert('Oh ! Sorry!သင်၏အဖြေမှားနေပါသည်။ စိတ်မကောင်းပါဘူး ထပ်မံကြိုးစားပါခင်ဗျာ။');
}
}

btg3.onclick=function(){
  let userInput=document.getElementById('Input3');
  
  let btgGreet=document.getElementById('btg3');

  userInput=parseInt(userInput.value);
  console.log(userInput);
  
  if(userInput===1){
    alert('Oh !Congrulation !သင်၏အဖြေမှန်ကန်ပါသည်။ သင်သည်ဗဟုသုတကြွယ်သူဖြစ်ရပေလိမ့်မည်။');
}
 if(userInput===3  || userInput===2 || userInput===4){
    alert('Oh ! Sorry!သင်၏အဖြေမှားနေပါသည်။ စိတ်မကောင်းပါဘူး ထပ်မံကြိုးစားပါခင်ဗျာ။');
}
}

btg4.onclick=function(){
  let userInput=document.getElementById('Input4');
  
  let btgGreet=document.getElementById('btg4');

  userInput=parseInt(userInput.value);
  console.log(userInput);
  
  if(userInput===2){
    alert('Oh !Congrulation !သင်၏အဖြေမှန်ကန်ပါသည်။ သင်သည်ဗဟုသုတကြွယ်သူဖြစ်ရပေလိမ့်မည်။');
}
 if(userInput===3  || userInput===1 || userInput===4){
    alert('Oh ! Sorry!သင်၏အဖြေမှားနေပါသည်။ စိတ်မကောင်းပါဘူး ထပ်မံကြိုးစားပါခင်ဗျာ။');
}
}

btg5.onclick=function(){
  let userInput=document.getElementById('Input5');
  
  let btgGreet=document.getElementById('btg5');

  userInput=parseInt(userInput.value);
  console.log(userInput);
  
  if(userInput===1){
    alert('Oh !Congrulation !သင်၏အဖြေမှန်ကန်ပါသည်။ သင်သည်ဗဟုသုတကြွယ်သူဖြစ်ရပေလိမ့်မည်။');
}
 if(userInput===3  || userInput===2 || userInput===4){
    alert('Oh ! Sorry!သင်၏အဖြေမှားနေပါသည်။ စိတ်မကောင်းပါဘူး ထပ်မံကြိုးစားပါခင်ဗျာ။');
}
}

btg6.onclick=function(){
  let userInput=document.getElementById('Input6');
  
  let btgGreet=document.getElementById('btg6');

  userInput=parseInt(userInput.value);
  console.log(userInput);
  
  if(userInput===3){
    alert('Oh !Congrulation !သင်၏အဖြေမှန်ကန်ပါသည်။ သင်သည်ဗဟုသုတကြွယ်သူဖြစ်ရပေလိမ့်မည်။');
}
 if(userInput===1  || userInput===2 || userInput===4){
    alert('Oh ! Sorry!သင်၏အဖြေမှားနေပါသည်။ စိတ်မကောင်းပါဘူး ထပ်မံကြိုးစားပါခင်ဗျာ။');
}
}

btg7.onclick=function(){
  let userInput=document.getElementById('Input7');
  
  let btgGreet=document.getElementById('btg7');

  userInput=parseInt(userInput.value);
  console.log(userInput);
  
  if(userInput===1){
    alert('Oh !Congrulation !သင်၏အဖြေမှန်ကန်ပါသည်။ သင်သည်ဗဟုသုတကြွယ်သူဖြစ်ရပေလိမ့်မည်။');
}
 if(userInput===3  || userInput===2 || userInput===4){
    alert('Oh ! Sorry!သင်၏အဖြေမှားနေပါသည်။ စိတ်မကောင်းပါဘူး ထပ်မံကြိုးစားပါခင်ဗျာ။');
}}

btg8.onclick=function(){
  let userInput=document.getElementById('Input8');
  
  let btgGreet=document.getElementById('btg8');

  userInput=parseInt(userInput.value);
  console.log(userInput);
  
  if(userInput===4){
    alert('Oh !Congrulation !သင်၏အဖြေမှန်ကန်ပါသည်။ သင်သည်ဗဟုသုတကြွယ်သူဖြစ်ရပေလိမ့်မည်။');
}
 if(userInput===1  || userInput===2 || userInput===3){
    alert('Oh ! Sorry!သင်၏အဖြေမှားနေပါသည်။ စိတ်မကောင်းပါဘူး ထပ်မံကြိုးစားပါခင်ဗျာ။');
 }}

 