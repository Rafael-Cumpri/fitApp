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
                console.log('funfou')
            } else {
                console.log('funfou2')
            }
        }
    }
    
}

const daniel = new Users('Daniel', '123')