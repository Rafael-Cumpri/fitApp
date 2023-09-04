let todayDate = new Date()
let today = todayDate.getDay()-1
let todayid = `day${today}`


function funtionalday() {
    let todayday = todayDate.getDate()
    let todaymonth = todayDate.getMonth()+1

    if (todayday < 10) {
        todayday = `0${todayday}`
    }

    if (todaymonth < 10) {
        todaymonth = `0${todaymonth}`
    }

    document.getElementById(todayid).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="0.75rem" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
    <h4>hoje</h4>
                                                    <p>${todayday}/${todaymonth}</p>`
    document.getElementById(todayid).style.backgroundColor = '#004177'
    document.getElementById(todayid).style.scale = '1.25'
    document.getElementById(todayid).style.borderRadius = '10px'
    
    for(let i = 0; i < 6; i++) {
        if (i < today) {
            let dayid = `day${i}`
            document.getElementById(dayid).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="0.75rem" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                                                        <h4>${getdayname(i)}</h4>`
        }
    }
}

function getdayname(weekday) {
    switch (weekday) {
        case 0:
            return 'Seg'
        case 1:
            return 'Ter'
        case 2:
            return 'Qua'
        case 3:
            return 'Qui'
        case 4:
            return 'Sex'
        case 5:
            return 'Sab'
        case 6:
            return 'Dom'
        default:
            return 'Erro'
    }
}
