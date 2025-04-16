document.getElementById("home").addEventListener("click", function(){
    window.location.href = "file:///C:/Users/A618apulia/Desktop/Progetto%20Esame/main/main.html";
})

let prodotti_natura = JSON.parse(localStorage.getItem("prodotti_natura")) || [
    {
        nome: "Primavera",
        categoria: "natura",
        prezzo1: 15,
        prezzo2: 25,
        grandezza1: "1024x1024",
        quantita1: 0,
        grandezza2: "1920x1920",
        quantita2: 0,
        immagine: "imgs/foresta.jpg",
        carrello: "imgs/Carrello_1.png",
    },
    {
        nome: "Luna",
        categoria: "natura",
        prezzo1: 15,
        prezzo2: 25,
        grandezza1: "1024x1024",
        quantita1: 0,
        grandezza2: "1920x1920",
        quantita2: 0,
        immagine: "imgs/Luna.jpg",
        carrello: "imgs/Carrello_1.png",
    },
    {
        nome: "Boreale",
        categoria: "natura",
        prezzo1: 15,
        prezzo2: 25,
        grandezza1: "1024x1024",
        quantita1: 0,
        grandezza2: "1920x1920",
        quantita2: 0,
        immagine: "imgs/boreale.jpg",
        carrello: "imgs/Carrello_1.png",
    },
    {
        nome: "Mare Blu",
        categoria: "natura",
        prezzo1: 15,
        prezzo2: 25,
        grandezza1: "1024x1024",
        quantita1: 0,
        grandezza2: "1920x1920",
        quantita2: 0,
        immagine: "imgs/cielonuvole.jpg",
        carrello: "imgs/Carrello_1.png",
    },
    {
        nome: "Apple",
        categoria: "tecnologia",
        prezzo1: 15,
        prezzo2: 25,
        grandezza1: "1024x1024",
        quantita1: 0,
        grandezza2: "1920x1920",
        quantita2: 0,
        immagine: "imgs/appleLogo.jpg",
        carrello: "imgs/Carrello_1.png",
    },
    {
        nome: "Bitcoin",
        categoria: "tecnologia",
        prezzo1: 15,
        prezzo2: 25,
        grandezza1: "1024x1024",
        quantita1: 0,
        grandezza2: "1920x1920",
        quantita2: 0,
        immagine: "imgs/Bitocoin.jpg",
        carrello: "imgs/Carrello_1.png",
    },
    {
        nome: "Script",
        categoria: "tecnologia",
        prezzo1: 15,
        prezzo2: 25,
        grandezza1: "1024x1024",
        quantita1: 0,
        grandezza2: "1920x1920",
        quantita2: 0,
        immagine: "imgs/scriptsad.jpg",
        carrello: "imgs/Carrello_1.png",
    },
    {
        nome: "Tecnologia",
        categoria: "tecnologia",
        prezzo1: 15,
        prezzo2: 25,
        grandezza1: "1024x1024",
        quantita1: 0,
        grandezza2: "1920x1920",
        quantita2: 0,
        immagine: "imgs/tech.jpg",
        carrello: "imgs/Carrello_1.png",
    },
    {
        nome: "Retro Games",
        categoria: "videogiochi",
        prezzo1: 15,
        prezzo2: 25,
        grandezza1: "1024x1024",
        quantita1: 0,
        grandezza2: "1920x1920",
        quantita2: 0,
        immagine: "imgs/RetroGames.jpg",
        carrello: "imgs/Carrello_1.png",
    },
    {
        nome: "Spider-Man",
        categoria: "videogiochi",
        prezzo1: 15,
        prezzo2: 25,
        grandezza1: "1024x1024",
        quantita1: 0,
        grandezza2: "1920x1920",
        quantita2: 0,
        immagine: "imgs/spiderman.jpg",
        carrello: "imgs/Carrello_1.png",
    },
    {
        nome: "Game Over",
        categoria: "videogiochi",
        prezzo1: 15,
        prezzo2: 25,
        grandezza1: "1024x1024",
        quantita1: 0,
        grandezza2: "1920x1920",
        quantita2: 0,
        immagine: "imgs/GameOver.jpg",
        carrello: "imgs/Carrello_1.png",
    },
    {
        nome: "GTA",
        categoria: "videogiochi",
        prezzo1: 15,
        prezzo2: 25,
        grandezza1: "1024x1024",
        quantita1: 0,
        grandezza2: "1920x1920",
        quantita2: 0,
        immagine: "imgs/GTA.jpg",
        carrello: "imgs/Carrello_1.png",
    },
];


stampaProdotti(prodotti_natura);
    
function stampaProdotti(prodotti) {
    const contenitore = document.getElementById("magazzino");
    contenitore.innerHTML = "";

    prodotti.forEach((prodotto, index) => {
        const fila = document.createElement("div");
        fila.classList.add("fila");

        let prezzoIniziale = prodotto.prezzo1;
        let quantitaIniziale = prodotto.quantita1;

        fila.innerHTML = `
            <img src="${prodotto.immagine}" alt="${prodotto.nome}">
            <h2>${prodotto.nome}</h2>
            <h2 class="prezzo" id="prezzo-${index}">${prezzoIniziale}$</h2>
            <div class="destra">
                <select id="select-${index}">
                    <option value="1024">1024x1024</option>
                    <option value="1920">1920x1920</option>
                </select>
                <input type="number" id="quantita-${index}" value="${quantitaIniziale}" min="0">
                <button id="modifica-${index}">Modifica</button>
            </div>
            <img style="height: 4vh; cursor: pointer;" id="cestino-${index}" src="imgs/cestino.svg" alt="cestino">
        `;

        contenitore.appendChild(fila);

        const select = document.getElementById(`select-${index}`);
        const prezzo = document.getElementById(`prezzo-${index}`);
        const inputQuantita = document.getElementById(`quantita-${index}`);
        const modificaBtn = document.getElementById(`modifica-${index}`);

        select.addEventListener("change", () => {
            if (select.value === "1024") {
                prezzo.innerText = `${prodotto.prezzo1}$`;
                inputQuantita.value = prodotto.quantita1;
            } else {
                prezzo.innerText = `${prodotto.prezzo2}$`;
                inputQuantita.value = prodotto.quantita2;
            }
        });

        modificaBtn.addEventListener("click", () => {
            const nuovaQuantita = parseInt(inputQuantita.value);
            if (select.value === "1024") {
                prodotto.quantita1 = nuovaQuantita;
            } else {
                prodotto.quantita2 = nuovaQuantita;
            }
            localStorage.setItem("prodotti_natura", JSON.stringify(prodotti));
            alert(`Quantità aggiornata per ${prodotto.nome}`);
        });

        function eliminaProdotto(index) {
            // Chiedi conferma prima di eliminare
            if (!confirm("Sei sicuro di voler eliminare questo prodotto?")) {
                return;
            }
        
            // Recupera l'array dal localStorage
            let prodotti_natura = JSON.parse(localStorage.getItem("prodotti_natura")) || [];
            
            // Rimuovi il prodotto all'indice specificato
            prodotti_natura.splice(index, 1);
            
            // Salva l'array aggiornato nel localStorage
            localStorage.setItem("prodotti_natura", JSON.stringify(prodotti_natura));
            
            // Ricarica la lista dei prodotti
            stampaProdotti(prodotti_natura);
            
            alert("Prodotto eliminato con successo!");
        }

        document.getElementById(`cestino-${index}`).addEventListener("click", () => {
            eliminaProdotto(index);
        });
    });
}

document.getElementById("btnaggiungi").addEventListener("click", function(){
    if(document.getElementById("fila_aggiungi").style.display == "flex"){
        document.getElementById("fila_aggiungi").style.display = "none"
    } else{
        document.getElementById("fila_aggiungi").style.display = "flex"
    }
})

document.getElementById("aggbtn").addEventListener("click", function() {
    // Recupera i valori dai campi di input
    const nuovoNome = document.getElementById("nuovoNome").value;
    const nuovoPrezzo1 = parseFloat(document.getElementById("nuovoPrezzo1").value);
    const nuovoPrezzo2 = parseFloat(document.getElementById("nuovoPrezzo2").value);
    const nuovaCategoria = document.getElementById("nuovaCategoria").value;
    const nuovoImmagineUrl = document.getElementById("nuovoImmagineUrl").value;

    // Verifica che tutti i campi siano compilati
    if (!nuovoNome || isNaN(nuovoPrezzo1) || isNaN(nuovoPrezzo2) || !nuovoImmagineUrl) {
        alert("Per favore compila tutti i campi!");
        return;
    }

    // Crea il nuovo prodotto
    const nuovoProdotto = {
        nome: nuovoNome,
        categoria: nuovaCategoria,
        prezzo1: nuovoPrezzo1,
        prezzo2: nuovoPrezzo2,
        grandezza1: "1024x1024",
        quantita1: 0,
        grandezza2: "1920x1920",
        quantita2: 0,
        immagine: nuovoImmagineUrl,
        carrello: "imgs/Carrello_1.png"
    };

    // Recupera l'array esistente dal localStorage
    let prodotti_natura = JSON.parse(localStorage.getItem("prodotti_natura")) || [];

    // Aggiungi il nuovo prodotto
    prodotti_natura.push(nuovoProdotto);

    // Salva l'array aggiornato nel localStorage
    localStorage.setItem("prodotti_natura", JSON.stringify(prodotti_natura));

    // Ricarica i prodotti
    stampaProdotti(prodotti_natura);

    // Resetta i campi e nascondi il form
    document.getElementById("nuovoNome").value = "";
    document.getElementById("nuovoPrezzo1").value = "";
    document.getElementById("nuovoPrezzo2").value = "";
    document.getElementById("nuovoImmagineUrl").value = "";
    document.getElementById("fila_aggiungi").style.display = "none";

    alert("Prodotto aggiunto con successo!");
});

