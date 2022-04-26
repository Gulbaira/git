const inputName = document.getElementById('loginName');
const inputPass = document.getElementById('loginPass');


function submit1() {

    const name = localStorage.getItem('Name')
    const passw = localStorage.getItem('Password')

    if (inputPass.value == '' || inputName.value == '') {
        console.log('пусто')
    }else if (name.value !== inputName.value && passw.value !== inputPass.value){
        console.log("Не корректно")
    }
    
}
