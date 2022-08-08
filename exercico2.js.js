
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] - Tente Novamente Ninja!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.width = "300px"
        
        if (fsex[0].checked) {
            genero = 'Shinobi'
            if (idade >= 0 && idade < 4) {
                //baby
                img.setAttribute('src', 'baby-m.jpg')
            } else if (idade < 13){
                //criança
                img.setAttribute('src', 'criança-m.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (idade < 55){
                //adulto
                img.setAttribute('src', 'adulto-m.jpg')
            } else if (idade < 75){
                //velho
                img.setAttribute('src', 'velho-m.jpg')
            } else if (idade > 75){
                //muito velho 
                img.setAttribute('src', 'muitovelho-m.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Kunoichi'
            if (idade >= 0 && idade < 4) {
                //baby
                img.setAttribute('src', 'baby-f.jpg')
            } else if (idade < 13){
                //criança
                img.setAttribute('src', 'criança-f.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-f.jpg')
            } else if (idade < 55){
                //adulto
                img.setAttribute('src', 'adulto-f.jpg')
            } else if (idade < 75){
                //velho
                img.setAttribute('src', 'velho-f.jpg')
            } else if (idade > 75){
                //muito velho 
                img.setAttribute('src', 'muitovelho-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Ninja ${genero} com ${idade} anos.`
        res.appendChild(img)
        
    }
}
