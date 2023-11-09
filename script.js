function calcular(){

    let txtaltura = document.getElementById('txtAltura')
    let txtpeso = document.getElementById('txtPeso')
    let res = document.getElementById('res')
    let altura = (txtaltura.value)/100
    let peso = txtpeso.value

    if(txtaltura.value.length == 0 || txtpeso.value.length == 0){
        //Verifica se os campos estão preenchidos
        window.alert('ERRO! Faltam dados, por favor verifique os campos.')
    } else if (altura < 0 || altura > 300){
        //Verifica se a altura é menor que 0 ou maior 300cm
        window.alert('ERRO! A altura pode estar incorreta.')
    } else if (peso < 0 || peso >700){
        //Verifica se o peso é menor que 0 ou maior que 700kg
        window.alert('ERRO! O peso pode estar incorreto.')
    } else{     
        //Cálculo do IMC
        let imc = peso/(altura*altura)
        //Remove a resposta anterior
        if(res.className == 'card'){
            window.alert('ERRO! A resposta já foi gerada, por favor aperte o botão limpar e tente novamente.')
            res.classList.remove('card')
            res.innerHTML = ""
        }
        //Gerando a resposta
        res.classList.add('card')
        res.innerHTML += `Seu IMC é: ${imc.toFixed(2)}`
        
        let classificacao = ""

            //Classificação
                //Abaixo de 18,5
            if(imc <= 18.5){
                classificacao = "<strong>Abaixo do peso</strong>"
                //Entre 18,6 e 24,9
            } else if (imc >= 18.6 && imc <= 24.9){
                classificacao = "no <strong>Peso ideal</strong>"
                //Entre 25 e 29,9
            } else if (imc >= 25 && imc <= 29.9){
                classificacao = "<strong>Acima do peso</strong>"
                //Entre 30 e 34,9
            } else if (imc >= 30 && imc <= 34.9){
                classificacao = "com <strong>Obesidade grau I</strong>"
                //Entre 35 e 39,9
            } else if (imc >= 35 && imc <= 39.9){
                classificacao = "com <strong>Obesidade grau II (severa)</strong>"
            } else if (imc >= 40){
                classificacao = "com <strong>Obesidade grau III (mórbida)</strong>"
            }
        
        res.innerHTML += `<br><br>De acordo com a classificação da OMS, você está ${classificacao}`
    }
}

function limpar(){
    let txtaltura = document.getElementById('txtAltura')
    let txtpeso = document.getElementById('txtPeso')
    let res = document.getElementById('res')

    txtaltura.value = ""
    txtpeso.value = ""

    res.classList.remove('card')
    res.innerHTML = ""
}