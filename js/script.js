function contar() {
    let inicio = document.getElementById("inicio");
    let fim = document.getElementById("fim");
    let passo = document.getElementById("passo");

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('Faltam dados!')
        res.innerHTML = "Não foi possível contar."
    } else {
        res.innerHTML = 'Contando: <br/>';
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        
        if (p <= f) {
            alert('Passo inválido! Considerando Passo = 1.')
        }

        if (i < f){
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}