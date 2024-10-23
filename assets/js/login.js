document.getElementById('submit').addEventListener('click',function(){
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    if(email === "nayeem@gmail.com" && password === "Nayeem")
    {
        window.location.href = "/bank.html"
    }
    else{
        alert("Your email or password is wrong. You are not authorized to proceed")
    }

})