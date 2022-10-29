const btn = document.querySelector(".change_color")
const descript = document.querySelector('.description')
const hexText = document.querySelector('.hex_text')

let arrayLettr = ['0','1','2','3','4','5','6','7',
'8','9','a','b','c','d','e','f']

let hex_code = ''



btn.addEventListener('click', () =>{
    for(let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * arrayLettr.length)
    
        hex_code += arrayLettr[random]
    
    }
    
    // hexText.style.color = '#32a88d'
    console.log(hex_code)
    hex_code=''
})



