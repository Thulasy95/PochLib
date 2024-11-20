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


//*************************************TAG FOR HTML*********************************************//


/**
 * Création d'une balise 
 * @param { "String" } childTag - balise HTML entre " "
 * @param { String } parentTag - nom du parent où la balise HTML est rattachée
 */
function createTag(childTag, parentTag ){

    // création de la balise <childTag>
    const child = document.createElement(childTag);
    // rattachement de la balise au DOM (SOUS parentTag) :
    parentTag.appendChild(child);

}


/**
 * Création d'une balise avec un class attribut 
 * @param { "String" } childTag - balise HTML entre " "
 * @param { String } parentTag - nom du parent où la balise HTML est rattachée
 * @param { "String" } classValue - valeur de l'attribut class
 */
function createTagWithClassAttribute(childTag, parentTag, classValue){

    // création de la balise <childTag class="classValue">
    const child = document.createElement(childTag);
    child.className = classValue;
    // rattachement de la balise au DOM (SOUS parentTag) :
    parentTag.appendChild(child);

}


/**
 * Création d'une balise avec un class attribut et un innerText 
 * @param { "String" } childTag - balise HTML entre " "
 * @param { String } parentTag - nom du parent où la balise HTML est rattachée
 * @param { "String" } classValue - valeur de l'attribut class
 * @param { "String" } innerTextValue - valeur de l'attribut innerText
 */
function createTagWithClassAttributeAndInnertext(childTag, parentTag, classValue, innerTextValue){

    // création de la balise <childTag class="classValue">innerTextValue</childTag>
    const child = document.createElement(childTag);
    child.className = classValue;
    child.innerText = innerTextValue;
    // rattachement de la balise au DOM (SOUS parentTag) :
    parentTag.appendChild(child);

}


/**
 * Création d'une balise avec un id attribut 
 * @param { "String" } childTag - balise HTML entre " "
 * @param { String } parentTag - nom du parent où la balise HTML est rattachée
 * @param { "String" } idValue - valeur de l'attribut id
 */
function createTagWithIdAttribute(childTag, parentTag, idValue){

    // création de la balise <childTag id="idValue">
    const child = document.createElement(childTag);
    child.id = idValue;
    // rattachement de la balise au DOM (SOUS parentTag) :
    parentTag.appendChild(child);

}


/**
 * Création d'une balise input de type button 
 * @param { "String" } classValue - valeur de l'attribut class
 * @param { "String" } value - texte dans le bouton
 * @param { String } parent - nom du parent où la balise HTML est rattachée
 * @param { String } clickFunction - nom de la fonction qui s'éxecute au click
 */
function createInputButton(classValue, value, parent, clickFunction) {

    //création de la balise <input class="classValue" type="button" value="value"/> :
    const buttonElement = document.createElement("input");
    buttonElement.className = classValue;
    buttonElement.type = "button";
    buttonElement.value = value;

    // rattachement de la balise au DOM sous le parent :
    parent.appendChild(buttonElement);

    //Lors du clic sur le boutton, la fonction clickFunction s'execute :
    buttonElement.addEventListener("click", (event) => {
        // On empêche le comportement par défaut (le navigateur veut envoyer les données au serveur et refresh la page)
        event.preventDefault();
        clickFunction();
    });

}


/**
 * Création d'une balise label avec un for attribut 
 * @param { String } parentTag - nom du parent où la balise HTML est rattachée
 * @param { "String" } forValue - valeur de l'attribut for
 * @param { "String" } innerTextValue - valeur de l'attribut innerText
 */
function createLabel(parentTag, forValue, innerTextValue){

    // création de la balise <label for="forValue">innerTextValue</label>
    const child = document.createElement("label");
    child.htmlFor = forValue;
    child.innerText = innerTextValue;
    // rattachement de la balise au DOM (SOUS parentTag) :
    parentTag.appendChild(child);

}


/**
 * Création d'une balise input de type label
 * @param { "String" } nameValue - valeur de l'attribut name
 * @param { "String" } idValue - valeur de l'attribut id
 * @param { String } parent - nom du parent où la balise HTML est rattachée
 */
function createInputText(nameValue, idValue, parent){

    // création de la balise <input name="nameValue" id="idValue">
    const inputElement = document.createElement("input");
    inputElement.type = "text";
    inputElement.name = nameValue;
    inputElement.id = idValue;
    parent.appendChild(inputElement);

}


/**
 * Création d'une balise image
 * @param { "String" } srcValue - valeur de l'attribut src
 * @param { "String" } altValue - valeur de l'attribut alt
 * @param { String } parent - nom du parent où la balise HTML est rattachée
 */
function createImg(srcValue, altValue, parent){

    // création de la balise <img src="srcValue" alt="altValue">
    const imgElement = document.createElement("img");
    imgElement.src = srcValue;
    imgElement.alt = altValue;
    parent.appendChild(imgElement);

}


/**
 * Création d'une balise button avec icone dans innerText
 * @param { "String" } classValue - valeur de l'attribut class
 * @param { String } clickFunction - nom de la fonction qui s'éxecute au click
 * @param { "String" } innerTextValue - texte dans le bouton
 * @param { String } parent - nom du parent où la balise HTML est rattachée
 */
function createIconeButton(classValue, clickFunction, innerTextValue, parent) {

    //création de la balise <button type="button" class="classValue" onclick="clickFunction">innerTextValue</button> :
    const buttonElement = document.createElement("button");
    buttonElement.className = classValue;
    buttonElement.type = "button";
    buttonElement.onclick = clickFunction;
    buttonElement.innerHTML = innerTextValue;

    // rattachement de la balise au DOM sous le parent :
    parent.appendChild(buttonElement);

}


//*************************************BUTTONS FUNCTIONS******************************************//


/**
 * Affiche le formulaire de recherche
 */
function showSearchForm() {

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
        
        // 	création de la balise <div class="books" id="googleBooks"> sous section id="searchResults"
        const divElement = document.createElement("div");
        divElement.className = "books";
        divElement.id = "googleBooks";
        searchResultsSection.appendChild(divElement);
        const googleBooksDiv = document.getElementById("googleBooks");

        for (let i = 0; i < results.items.length; i++) {

            const bookArticle = createBookArticle(results.items[i]);
            googleBooksDiv.appendChild(bookArticle);
            
        }
    }
}


function createBookArticle(book) {

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
            <button type="button" class="bookmark" onclick="saveTheBook()">
                <i class="fa-solid fa-bookmark"></i>
            </button>
        </div>
        <p class="description">
            Description : ${description}
        </p>
        <img src="${image}" alt="image du livre">
    `; 

    return article;

}


/**
 * Arrête la recherche dans l'API et affiche seulement le bouton "Ajouter un livre"
 */
function cancel() {

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


function saveTheBook() {

    console.log( "booooookkk");

}


function showSavedBooks() {
    
}


function removeTheBook(){

}


