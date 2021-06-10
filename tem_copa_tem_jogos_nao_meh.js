function solucao(ano) {
    if((ano - 2018) % 4 == 0) {   
        console.log("COPA");
    } else if((ano - 2020) % 4 == 0) {
        console.log("JOGOS");
    } else {
        console.log("MEH");
    }
}