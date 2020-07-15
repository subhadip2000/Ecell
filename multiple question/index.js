// let elementsArray = document.querySelectorAll(".op");
// let question=document.querySelectorAll('.question');
let inputt=document.querySelectorAll('input');
let submit=document.getElementById('submit');

submit.addEventListener("click",()=>{
    let count=0;
let count2=0;
    for(let i=0;i<20;i++)
    {
        if(i==0 && inputt[i].checked==true)
        {count++;
        continue;}
        if(i==7 && inputt[i].checked==true)
        {count++;
        continue;}
        if(i==10 && inputt[i].checked==true)
        {count++;
        continue;}
        if(i==13 && inputt[i].checked==true)
        {count++;
        continue;}
        if(i==18 && inputt[i].checked==true)
        {count++;
        continue;}
        if(inputt[i].checked==true)
        count2++;
    }
    document.getElementById('score').innerHTML=4*count-1*count2;
    document.getElementById('right').innerHTML=count;
    document.getElementById('wrong').innerHTML=count2;
    document.getElementById('notans').innerHTML=5-count-count2;
    inputt.forEach(function(e){
        e.checked=false;
    })
})

