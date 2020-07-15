
let submit=document.getElementById('submit');
submit.addEventListener("click",()=>{
    let email=document.getElementById('email').value;
    function validateEmail(){
        var reg = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
    
        if (reg.test(email) == false) 
        {
            console.log(10)
        }
    
    }

})
