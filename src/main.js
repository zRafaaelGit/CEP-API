const cep = document.querySelector("#cep")

const showData = (resultado) => {
    for(const campo in resultado){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = resultado[campo]
        }
    }
}

cep.addEventListener("blur", (e)=>{
    let correction = cep.value.replace("-", "")
    const option = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${correction}/json/`, option)
    .then(resposta =>{resposta.json()
        .then( data => showData(data))
    })
    .catch(e => console.log('error: '+ e,message))
})