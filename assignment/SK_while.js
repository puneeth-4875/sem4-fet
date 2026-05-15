let btn = document.getElementById("loginBtn");
let passwordInput = document.getElementById("password");
let statusText = document.getElementById("status");
let attemptsText = document.getElementById("attempts");
let attempts = 3;
btn.addEventListener("click", function(){
    while(attempts > 0){
        let password = passwordInput.value;
        if(password === "@123"){
            statusText.textContent = "✅ Login Successful!";
            statusText.style.color = "green";
            btn.disabled = true;
            passwordInput.disabled = true;
            break;
        }
        else{
            attempts--;
            attemptsText.textContent =
            `Attempts Left : ${attempts}`;
            if(attempts > 0){
                statusText.textContent = "❌ Wrong Password!";
                statusText.style.color = "red";
                passwordInput.value = "";
            }
            else{
                statusText.textContent ="🚫 Login Failed!";
                statusText.style.color = "red";
                btn.disabled = true;
                passwordInput.disabled = true;
            }
            break;
        }
    }
});
