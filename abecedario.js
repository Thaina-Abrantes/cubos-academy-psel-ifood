function solucao(letra, palavras) {
	let quantidade = 0;
    for(let i = 0; i < palavras.length; i++) {
        if(palavras[i][0] !== letra){
            quantidade++;
        }
    }
    console.log(quantidade);
}