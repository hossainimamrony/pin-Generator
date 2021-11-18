const matchingScreen = document.getElementById('matching_screen');
const generateScreen = document.getElementById('generate-screen');
const pinGenaretor = document.getElementById('generate-btn').addEventListener('click',function(){
    const pin = Math.round(Math.random()* (10000 - 1000))+1000;
    document.getElementById('generate-screen').value = pin;
})
const submit = document.getElementById('submitBtn').addEventListener('click',function(){
    if(matchingScreen.value == generateScreen.value){
        document.getElementById('match').style.display = 'block';
        document.getElementById('dontMatch').style.display = 'none';
        
    } 
    else{
        document.getElementById('match').style.display = 'none'
        document.getElementById('dontMatch').style.display = 'block';
        document.getElementById('action-left').style.display = 'block'
    }
})

const DELbtn = document.getElementById('DEL').addEventListener('click', function(){
    del();
})
const allClear = document.getElementById('all_clear').addEventListener('click',function(){
    document.getElementById('matching_screen').value = '';
})

        //function

function del(){
    let display =  document.getElementById('matching_screen').value;
     let lengthD = display.slice(0, display.length - 1);
     document.getElementById('matching_screen').value = lengthD;
}

const bntnum = document.getElementsByClassName('num');
for (let i = 0; i < bntnum.length; i++) {
    let element = bntnum[i];
    let btn = element.innerText;
     element.addEventListener('click',function(){
         matchingScreen.value += btn;
     })
}