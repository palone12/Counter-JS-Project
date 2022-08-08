let count =0 ;

const value =document.querySelector("#value");
const btns =document.querySelectorAll('.btn');


btns.forEach(function (btn){
    btn.addEventListener('click',function(e){
        const styles =e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
            
        }
        else if (styles.contains('increase')){
            count++;
        }
        else{
            count =0;
        }
        if(count>0){
            value.style.color='green';
        }
        if(count<0){
            value.style.color ='red';
        }
        if(count===0){
            value.style.color ='black';
        }
        value.textContent=count;
    })
})

// function increase(){
//     count =count +1;
//     let counts =document.getElementById('value');
//     counts.innerHTML =count;
// }
// function decrease(){
//     if(count>0){
//         count =count -1;
//     }
    
//     let counts =document.getElementById('value');
//     counts.innerHTML =count;
// }

// function reset(){
//     count =0;
//     let counts= document.getElementById('value');
//     counts.innerHTML=count;
// }