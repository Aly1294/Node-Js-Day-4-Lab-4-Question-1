let register_form = document.getElementById("register_form");
let login_form = document.getElementById("login_form");

function go_to_login(event){
    event.preventDefault()
    register_form.style.display="none"
    login_form.style.display="block"
}

function go_to_register(event) {
    event.preventDefault()
    register_form.style.display="block"
    login_form.style.display="none"
}
