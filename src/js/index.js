const themeButton = document.getElementById('themeButton')
const body = document.querySelector('body')

themeButton.addEventListener('click', () =>{
    const imgButton = document.querySelector('.imgButton')
    const darkModeOn = body.classList.contains('darkMode')

    body.classList.toggle('darkMode')

    if(darkModeOn){
        imgButton.setAttribute('src', './src/imagens/sun.png')
    }

    else{
        imgButton.setAttribute('src', "./src/imagens/moon.png")
    }
})
