//*************************************TAGS FOR HTML*********************************************//

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
