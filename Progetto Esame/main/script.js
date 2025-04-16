if (!localStorage.getItem("prodotti_natura")) {
    const prodotti_iniziali = [
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

    localStorage.setItem("prodotti_natura", JSON.stringify(prodotti_iniziali));
}

const prodotti_natura = JSON.parse(localStorage.getItem("prodotti_natura"));


document.addEventListener("DOMContentLoaded", function () {
    // Modifica nella parte di rendering dei prodotti
    prodotti_natura.forEach((prodotto, index) => {
        // Usa la categoria definita nell'oggetto prodotto
        const categoria = prodotto.categoria;
        
        // Controlla se il prodotto è disponibile (almeno una quantità > 0)
        const disponibile = prodotto.quantita1 > 0 || prodotto.quantita2 > 0;
        
        // Aggiungi il prodotto al container della sua categoria
        document.getElementById(categoria).innerHTML += `
            <div class="cat_natura">
                <div class="prodotto">
                    <img src="${prodotto.immagine}" style="${!disponibile ? 'filter: grayscale(100%);' : ''}">
                    <div class="nomeprod">
                        <div>
                            <h2>${prodotto.nome}</h2>
                            <h4>da ${prodotto.prezzo1}$ a ${prodotto.prezzo2}$</h4>
                            ${!disponibile ? '<h4 style="color: red;">ESAURITO</h4>' : ''}
                        </div>
                        <div id="divcarrello-${index}">
                            <select id="risoluzione-${index}" class="risoluzione" ${!disponibile ? 'disabled' : ''}>
                                <option value="none">Seleziona</option>
                                <option value="${prodotto.grandezza1}" ${prodotto.quantita1 <= 0 ? 'disabled' : ''}>
                                    ${prodotto.grandezza1} ${prodotto.quantita1 <= 0 ? '(esaurito)' : ''}
                                </option>
                                <option value="${prodotto.grandezza2}" ${prodotto.quantita2 <= 0 ? 'disabled' : ''}>
                                    ${prodotto.grandezza2} ${prodotto.quantita2 <= 0 ? '(esaurito)' : ''}
                                </option>
                            </select>
                            <img id="carrello-${index}" class="carrello" src="${prodotto.carrello}" 
                                 alt="carrello" ${!disponibile ? 'style="opacity: 0.5; cursor: not-allowed;"' : ''}>
                        </div>
                    </div>
                    <p id="errore-${index}" class="errore">seleziona una risoluzione</p>  
                </div>
            </div>
        `;
    
        // Eventi per aggiungere al carrello solo se il prodotto è disponibile
        setTimeout(() => {
            if (disponibile) {
                const btnCarrello = document.getElementById(`carrello-${index}`);
                const selectRisoluzione = document.getElementById(`risoluzione-${index}`);
                const errore = document.getElementById(`errore-${index}`);
    
                btnCarrello.addEventListener("click", () => {
                    if (selectRisoluzione.value !== "none") {
                        aggiungialCarrello(prodotto, selectRisoluzione.value);
                    } else {
                        errore.style.display = "block";
                        setTimeout(() => {
                            errore.style.display = "none";
                        }, 2000);
                    }
                });
            }
        }, 0);
    });

    // Carica il carrello al primo avvio
    visualizzaCarrello();
});

// === Funzioni Globali ===

function caricaCarrello() {
    let carrello = localStorage.getItem('carrello');
    return carrello ? JSON.parse(carrello) : [];
}

function aggiornaCarrello(carrello) {
    localStorage.setItem('carrello', JSON.stringify(carrello));
}

function aggiungialCarrello(prodotto, risoluzione) {
    let prezzo = risoluzione === prodotto.grandezza1 ? prodotto.prezzo1 : prodotto.prezzo2;

    let prodottoCarrello = {
        immagine: prodotto.immagine,
        nome: prodotto.nome,
        prezzo: prezzo,
    };

    let carrello = caricaCarrello();
    carrello.push(prodottoCarrello);
    aggiornaCarrello(carrello);
    visualizzaCarrello();
}

function visualizzaCarrello() {
    let carrello = caricaCarrello();
    let scontrino = document.getElementById("scontrino");
    scontrino.innerHTML = ''; // Pulisce

    let totale = 0;

    carrello.forEach((item, index) => {
        totale += item.prezzo;
        scontrino.innerHTML += `
            <div class="riga" id="riga-${index}">
                <img src="${item.immagine}" alt="${item.immagine}">
                <h3>${item.nome}</h3>
                <h4>${item.prezzo}$</h4>
                <img class="cestino" data-index="${index}" src="imgs/cestino.svg" alt="cestino">
            </div>
        `;
    });

    document.getElementById("totale").innerText = `${totale}$`;

    // Rimozione prodotto dal carrello
    document.querySelectorAll(".cestino").forEach(img => {
        img.addEventListener("click", (e) => {
            let index = parseInt(e.target.getAttribute("data-index"));
            rimuoviDalCarrello(index);
        });
    });
}

function rimuoviDalCarrello(index) {
    let carrello = caricaCarrello();
    carrello.splice(index, 1);
    aggiornaCarrello(carrello);
    visualizzaCarrello();
}


const categorie = document.getElementById("lista-prodotti");



document.getElementById("menu").style.display = "none";

document.getElementById("lista-prodotti").addEventListener("click", function(){
    if(document.getElementById("cat-prodotti").style.display == "block"){
        document.getElementById("cat-prodotti").style.display = "none";
        i = true;
    } else {
        document.getElementById("cat-prodotti").style.display = "block";
    }
})

document.getElementById("plus").addEventListener("click", function(){
    document.getElementById("plus").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("header").style.borderRadius = "30px";
    document.getElementById("success").style.display = "flex";
})

document.getElementById("success").addEventListener("click", function(){
    document.getElementById("success").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("plus").style.display = "flex";
})

document.getElementById("naturaclick").addEventListener("click", function(){
    document.getElementById("tecnologia").style.display = "none";
    document.getElementById("videogiochi").style.display = "none";
    document.getElementById("natura").style.display = "flex";
    document.getElementById("vis_cat").innerText = "Natura";
})

document.getElementById("tecnologiaclick").addEventListener("click", function(){
    document.getElementById("tecnologia").style.display = "flex";
    document.getElementById("videogiochi").style.display = "none";
    document.getElementById("natura").style.display = "none";
    document.getElementById("vis_cat").innerText = "Tecnologia";
})

document.getElementById("videogiochiclick").addEventListener("click", function(){
    document.getElementById("tecnologia").style.display = "none";
    document.getElementById("videogiochi").style.display = "flex";
    document.getElementById("natura").style.display = "none";
    document.getElementById("vis_cat").innerText = "Videogiochi";
})

document.getElementById("tuttoclick").addEventListener("click", function(){
    document.getElementById("tecnologia").style.display = "flex";
    document.getElementById("videogiochi").style.display = "flex";
    document.getElementById("natura").style.display = "flex";
    document.getElementById("vis_cat").innerText = "Tutto";

})

document.getElementById("pagina_car").addEventListener("click", function(){
    if(document.getElementById("footer").style.display == "block") {
        document.getElementById("footer").style.display="none";
    } else {
        document.getElementById("footer").style.display="block";
    }
})

document.getElementById("login").addEventListener("click",function(){

    if (document.getElementById("login").innerText === "Login"){
        window.location.href = "file:///C:/Users/A618apulia/Desktop/Progetto%20Esame/login/login.html";
    } else {
        localStorage.setItem("username", "")
        document.getElementById("login").innerText = "Login"
        document.getElementById("magazzino").style.display = "none"
    }
})

const nome_utente = localStorage.getItem("username")

if (nome_utente === "admin"){
    document.getElementById("login").innerText = "Logout"
    document.getElementById("magazzino").style.display = "block"
}

document.getElementById("magazzino").addEventListener("click",function(){
    window.location.href = "file:///C:/Users/A618apulia/Desktop/Progetto%20Esame/magazzino/magazzino.html"
})

document.getElementById("freccia").addEventListener("click", function(){
    document.getElementById("footer").style.display = "none";
    if(document.getElementById("menu").style.display == "block"){
        document.getElementById("menu").style.display = "none"
    }
})