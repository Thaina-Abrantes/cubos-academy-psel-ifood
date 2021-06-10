function solucao(tempo, distancia) {
    if(tempo < 5) {
        console.log("600");
    } else if (tempo <= 60) {
        console.log(100 * tempo + 50 * distancia);
    } else {
        if(distancia < 100) {
            console.log(200 * distancia);
        } else {
            console.log( 150 * distancia);
        }
    }

}