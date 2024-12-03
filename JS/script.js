//Après Chargement de la page, init :
window.addEventListener("load", function(){

    //Efface le contenu de <body>
    const body = document.querySelector("body");
    body.innerHTML = "";

    // création de la balise <header> sous body
    createTag("header", body);
    
	// création de la balise <h1 class="title">Poch'Lib</h1> sous header
    const header = document.querySelector("header");
    createTagWithClassAttributeAndInnertext("h1", header, "title", "Poch'Lib");

    // création de la balise <main id="myBooks"> sous body
    createTagWithIdAttribute("main", body, "myBooks");

    // création de la balise <section id="newBook"> sous main id="myBooks"
    const myBooksMain = document.getElementById("myBooks");
    createTagWithIdAttribute("section", myBooksMain, "newBook");

    // création de la balise <h2 class="h2">Nouveau Livre</h2> sous section id="newBook"
    const newBookSection = document.getElementById("newBook");
    createTagWithClassAttributeAndInnertext("h2", newBookSection, "h2", "Nouveau Livre");

    // création de la balise <div class="addBookAndSearchForm"> sous section id="newBook"
    createTagWithClassAttribute("div", newBookSection, "addBookAndSearchForm");

    //création de la balise <input class="addBookButton" type="button" value="Ajouter un livre"/> sous div class="addBookAndSearchForm"
    //Au clic sur “Ajouter un livre”, le formulaire de recherche s’affiche :
    const addBookAndSearchFormDiv = document.querySelector(".addBookAndSearchForm");
    createInputButton("addBookButton", "Ajouter un livre", addBookAndSearchFormDiv, showSearchForm);

    // création de la balise <section id="content"> sous main id="myBooks"
    createTagWithIdAttribute("section", myBooksMain, "content");

	// création de la balise <hr> sous section id="content"
    const contentSection = document.getElementById("content");
    createTag("hr", contentSection);

	// création de la balise <h2 class="myPochList">Ma poch'liste</h2> sous section id="content"
    createTagWithClassAttributeAndInnertext("h2", contentSection, "myPochList", "Ma poch'liste");

    showSavedBooks();

    console.log(localStorage.getItem("likedBook"));
    
    // création de la balise <footer> sous body
    createTag("footer", body);

	// création de la balise <a class="lien-icone" href="index.html"> sous footer
    const aElement = document.createElement("a");
    aElement.className = "lien-icone";
    aElement.href = "index.html";
    const footer = document.querySelector("footer");
    footer.appendChild(aElement);

	// création de la balise <img src="images/logo.png" alt="Logo Poch'Lib"> sous a class="lien-icone"
    const lienIconeA = document.querySelector(".lien-icone");
    createImg("images/logo.png", "Logo Poch'Lib", lienIconeA);

});


//*************************************FUNCTIONS******************************************//


/**
 * Affiche le formulaire de recherche
 */
function showSearchForm() {

    console.log("showSearchForm");

    //Efface le contenu de <div class="addBookAndSearchForm">
    const divSection = document.querySelector(".addBookAndSearchForm");
    divSection.innerHTML = "";

    // <form class="searchForm"> sous div class="addBookAndSearchForm"
    createTagWithClassAttribute("form", divSection, "searchForm");
        
    // <label for="title">Titre du livre</label> sous form class="searchForm"
    const form = document.querySelector(".searchForm");
    createLabel(form, "title", "Titre du livre");
    
    // <input type="text" name="title" id="title"> sous form class="searchForm"
    createInputText("title", "title", form);

    // <label for="author">Auteur</label> sous form class="searchForm"
    createLabel(form, "author", "Auteur");

    // <input type="text" name="author" id="author"> sous form class="searchForm"
    createInputText("author", "author", form);

    // <input class="searchButton" type="button" value="Rechercher"/> sous form class="searchForm"
    createInputButton("searchButton", "Rechercher", form, googleBooksApiCall);

    // <input class="cancelButton" type="button" value="Annuler"/> sous form class="searchForm"
    createInputButton("cancelButton", "Annuler", form, cancel);
    
}


/**
 * Affiche la section Résultats de recherche si response = OK
 */
function showSearchResults(results) {

    console.log("showSearchResults");
    
    //Si section searchResults existe déjà alors efface le contenu
    if (document.getElementById("searchResults")) {
        
        document.getElementById("searchResults").innerHTML="";

    } else {

        // sinon création de la balise <section id="searchResults"> en dessous de section id="newBook"
        const newBookSection = document.getElementById("newBook");
        const sectionElement = document.createElement("section");
        sectionElement.id = "searchResults";
        newBookSection.insertAdjacentElement("afterend", sectionElement);

    }
    
    const searchResultsSection = document.getElementById("searchResults");

    // création de la balise <hr> sous section id="searchResults"
    createTag("hr", searchResultsSection);

    // création de la balise <h2 class="resultsOfSearch">Résultats de recherche</h2> sous section id="searchResults"
    createTagWithClassAttributeAndInnertext("h2", searchResultsSection, "resultsOfSearch", "Résultats de recherche");

    if (results.totalItems == 0) {

        // création de la balise <h3 class="noBook">Aucun livre n'a été trouvé !</h3> sous section id="searchResults"
        createTagWithClassAttributeAndInnertext("h3", searchResultsSection, "noBook", "Aucun livre n'a été trouvé !");
        
    } else {
        
        // création de la balise <div class="books" id="googleBooks"> sous section id="searchResults"
        const divElement = document.createElement("div");
        divElement.className = "books";
        divElement.id = "googleBooks";
        searchResultsSection.appendChild(divElement);
        
        let isBookmark = true;

        for (let i = 0; i < results.items.length; i++) {
                        
            createBookArticle(results.items[i], isBookmark);
            
        }

    }

}


/**
 * Arrête la recherche dans l'API et affiche seulement le bouton "Ajouter un livre"
 */
function cancel() {

    console.log("cancel");
    
    //arrêt de la recherche dans l'API
    googleBooksApiAbort();

    //Efface le contenu de <div class="addBookAndSearchForm">
    const divSection = document.querySelector(".addBookAndSearchForm");
    divSection.innerHTML = "";

    //création de la balise <input class="addBookButton" type="button" value="Ajouter un livre"/>
    //Au clic sur “Ajouter un livre”, le formulaire de recherche s’affiche :
    createInputButton("addBookButton", "Ajouter un livre", divSection, showSearchForm);

    //supprime la section Résultats de recherche
    if (document.getElementById("searchResults")) {
        
        document.getElementById("searchResults").remove();
    
    }
    
}


/**
 * Affiche par livre avec information et bouton icone
 */
function createBookArticle(book, isBookmark) {

    console.log("createBookArticle : " + book.id);
    
    const title = book.volumeInfo.title ? book.volumeInfo.title : "Information manquante";
    const author = book.volumeInfo.authors ? book.volumeInfo.authors[0] : "Information manquante";
    const description = book.volumeInfo.description ? book.volumeInfo.description.substring(0,200)+"..." : "Information manquante";
    const image = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "images/unavailable.png";

    const article = document.createElement("article");

    // Création du contenu
    article.innerHTML = `
        <div class="titleIdAuthorButton">
            <div class="titleIdAuthor">
                <h3 class="bookTitle">Titre : ${title}</h3>
                <h4 class="id">Id : ${book.id}</h4>
                <h5 class="bookAuthor">Auteur : ${author}</h5>
            </div>
            <button type="button" class="iconeButton" id="${book.id}">
                <i class="fa-solid ${isBookmark ? 'fa-bookmark' : 'fa-trash'}"></i>
            </button>
        </div>
        <p class="description">
            Description : ${description}
        </p>
        <img src="${image}" alt="image du livre">
    `; 

    const parent = isBookmark ? document.getElementById("googleBooks") : document.getElementById("savedBooks");
    parent.appendChild(article);
    
    const addToPochListeButton = article.querySelector(".iconeButton");
    addToPochListeButton.addEventListener("click", (event) => {
        
        // On empêche le comportement par défaut (le navigateur veut envoyer les données au serveur et refresh la page)
        event.preventDefault();

        if (isBookmark) {

            saveTheBook(book);

        } else {

            removeTheBook(book);

        }

    });
     
}


function saveTheBook(book) {

    console.log("saveTheBook : " + book.id);

    //Récupération du (JSON) string du local storage api :
    let likedBook = localStorage.getItem("likedBook");
    //extraction du tableau
    likedBook = JSON.parse(likedBook);

    //Si pas de tableau (likedBook) dans le local storage
    if (likedBook === null) {

        let newLikedBook = [];
        newLikedBook.push(book);
        localStorage.setItem("likedBook",JSON.stringify(newLikedBook));
        showSavedBooks();
        
        console.log("1er livre ajouté dans le local storage !");
                
    } else {

        let alreadyBookmarked = false;
        
        //check si le livre est déjà présent dans le local storage
        for (let i = 0; i < likedBook.length; i++) {

            //si oui : envoie message
            if (book.id == likedBook[i].id) {

                alreadyBookmarked = true;
                alert("Vous ne pouvez ajouter deux fois le même livre.");
                
                console.log(" Vous ne pouvez ajouter deux fois le même livre !");
                
                break;

            }
            
        }
        
        //sinon : ajoute le livre dans le local storage :
        if (!alreadyBookmarked) {

            likedBook.push(book);
            localStorage.setItem("likedBook",JSON.stringify(likedBook));
            showSavedBooks();
            
            console.log("livre ajouté :" + book.id);
            
        }

    }
    
}


function showSavedBooks() {

    console.log("showSavedBooks");

    //Récupération du (JSON) string du local storage api :
    let likedBook = localStorage.getItem("likedBook");
    //extraction du tableau
    likedBook = JSON.parse(likedBook);

    if (likedBook != null) {

        //Si div id="savedBooks" existe déjà alors efface le contenu
        if (document.getElementById("savedBooks")) {
            
            document.getElementById("savedBooks").innerHTML="";

        } else {

            // sinon création de la balise <div class="books" id="savedBooks"> sous section id="content"
            const contentSection = document.getElementById("content");
            const savedBooksDivElement = document.createElement("div");
            savedBooksDivElement.id = "savedBooks";
            savedBooksDivElement.className = "books";
            contentSection.appendChild(savedBooksDivElement);

        }

        let isBookmark = false;

        for (let i = 0; i < likedBook.length; i++) {
            
            createBookArticle(likedBook[i], isBookmark);
            
        }

    }
    
}


function removeTheBook(book){

    console.log("remove the book :" + book.id);

    //Récupération du (JSON) string du local storage api :
    let likedBook = localStorage.getItem("likedBook");
    //extraction du tableau
    likedBook = JSON.parse(likedBook);

    if (likedBook != null) {

        for (let i=0; i<likedBook.length; i++){
        
            if(book.id == likedBook[i].id){
                
                //on supprime le livre
                likedBook.splice(i,1);
                break;
            }
        }

        //On le sauvegarde dans le localstorage
        localStorage.setItem("likedBook",JSON.stringify(likedBook));
        showSavedBooks();

        //Si le panier est vide dans le localstorage :
        if(likedBook.length===0){

            //alors on vide le localstorage
            localStorage.clear();
            
            console.log("local storage clean !");
            
        }
    
    }

}


