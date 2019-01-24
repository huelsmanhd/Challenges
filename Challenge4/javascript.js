//function ensuring pass and repeatPass match
//function disabling button when all fields are filled and correct

//submitBtn.addEventListener('submit', signUpBtn)

// function DisableButton(signUpBtn) {
//     document.getElementById(signUpBtn).disabled = 'true';
//     setTimeout(DisableButton, 1);
// }

// const button = document.getElementById(signUpBtn);
// button.addEventListener("click", function() {
// }, {once : true});

function checkPassword(form) {
    pass = form.pass.value;
    repeatPass = form.pass.value;

    if (pass == '')
        alert ('Please enter password');
        
    else if (repeatPass == '')
        alert ('Please re-enter password');

    else if (pass !== repeatPass) {
        alert ('Please ensure passwords match');
        return false
    }
    else {
        alert('Passwords match!')
        return true;
    }
}
    