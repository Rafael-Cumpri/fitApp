function callverify() {
    let username = document.getElementById('username').value
    daniel.acessScreen(username)
}

class Users {
    constructor(name, pwd) {
        this.name = name
        let _pwd = pwd

        this.verify = (senhaDigitada) => {
            return senhaDigitada === _pwd;
        }

        this.acessScreen = (user) => {
            let password = document.getElementById('password').value
            if (this.verify(password) && this.name == user) {
                window.location.href = 'pages/index.home.html'
            } else {
                document.getElementById('error').innerHTML = 'Usuario ou senha incorretos.'
                document.getElementById('error').style.display = 'block'
                setTimeout(() => {
                    document.getElementById('error').style.display = 'none'
                }, 4000)
            }
        }
    }
    
}

const daniel = new Users('Daniel', '123')