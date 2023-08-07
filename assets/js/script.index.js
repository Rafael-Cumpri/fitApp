function verify() {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    if (username == "Daniel" && password == "123") {
        document.getElementById('error').innerHTML = ''
    } else {
        document.getElementById('error').innerHTML = "Senha ou Usuário incorretos"
    }
}