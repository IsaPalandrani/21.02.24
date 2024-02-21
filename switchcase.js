const sortear = () => {
    let nomes = ["Dora", "Duda", "Ana", "Sasah", "Gigi", "Gabriel", "Bibi", "Nemo", "Lolo", "Mari", "Jão", "Gui", "Miguel", "Nadyeska", "Vitória", "Calebe", "Felipe", "Laura", "Bernardo", "Jheni"];

    let h1Nome = document.getElementById("nome");

    let achouNumero = false;
    let numeroSorteado;

    while (achouNumero == false) {
        numeroSorteado = Math.floor(Math.random() * 100);
        if (numeroSorteado < nomes.length) {
            achouNumero = true;
        }
    }

    switch (numeroSorteado) {
        case 0:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 1:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 2:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 3:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 4:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 5:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 6:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 7:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 8:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 9:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 10:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 11:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 12:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 13:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 14:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 15:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 16:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 17:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 18:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 19:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 20:
            h1Nome.innerText = nomes[numeroSorteado];
            break;


        default:
            h1Nome.innerText = "Ops! Nome não consta na lista.";
            break;
    }

    h1Nome.innerText += " O Número sorteado foi:" + numeroSorteado;
}