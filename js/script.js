const arr = [];
// localStorage.setItem("all")
window.addEventListener('load' , () => {
    if(!localStorage.getItem('users')){
        localStorage.setItem('users',JSON.stringify(arr))
        window.location.reload()
    }else{
        let check = JSON.parse(localStorage.getItem('users'))
        console.log(check);
    }
})
const inputName = document.getElementById('loginName');
const inputEmail = document.getElementById('loginEmail');
const inputPass = document.getElementById('loginPass');
const inputPass2 = document.getElementById('loginPass2');
// const check = /(! # $% & '* + - / =? ^ _ `{| } ~)/




function submit1() {
    if (inputPass.value == '' || inputName.value == '' || inputEmail.value == '') {
        console.log('пусто')
    }
    else if (!inputEmail.value.includes('@')) {
        console.log("нет электронной почты")
    }

    else if (inputPass.value.length < 8 || inputPass2.value.length < 8) {
        console.log("пароль должен быть более 8 символов")
    }
    else if (inputPass.value !== inputPass2.value) {
        console.log("пароли должны быть одинаковыми")
    }
    else if(inputPass.value !== '' && inputName.value !== '' && inputEmail.value !== ''){
        let data = JSON.parse(localStorage.getItem('users'))
        console.log(data);
        data.push({
            userName: inputName.value,
            userEmail: inputEmail.value,
            userPass: inputPass.value
        })
        localStorage.setItem('users',JSON.stringify(data))
    }
}




