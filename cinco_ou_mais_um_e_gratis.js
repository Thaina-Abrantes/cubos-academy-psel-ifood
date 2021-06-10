function solucao(precos) {
    let total = 0;
    let desconto = Number.MAX_VALUE;
    for(let i = 0; i < precos.length; i++) {
        total = total + precos[i]; 
        if(precos[i] < desconto) {
            desconto = precos[i];
        }
    }
    if(precos.length >= 5){
        total = total - desconto;
    }
    console.log(total);
}