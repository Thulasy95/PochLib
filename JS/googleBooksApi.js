let controller;

//cherche la requête
function googleBooksApiCall() {

    //création d'un controller abort et du signal :
    controller = new AbortController();
    const signal = controller.signal;

    //Récupération des valeurs de Title et Author :
    const title = document.getElementById("title");
    const author = document.getElementById("author");

    //Vérification des champs :
    if (title.value !== "" && author.value !== "") {

        //Requête à l'API Google Book
        const url = `https://www.googleapis.com/books/v1/volumes?q=${title.value}+inauthor:${author.value}&key=AIzaSyC22WffRXCw5NU_2nMYtCGnx9VLhREOYjo`;
    
        // Appel à l'API Google Books
        fetch(url, { signal })
            .then((response) => {

                if (!response.ok) {
                    throw new Error("Erreur réseau");
                }
                console.log("Search complete", response);
                return response.json();

            })
            .then(results => {
                
                console.log("Résultats de la recherche :", results);
                showSearchResults(results);

            })
            .catch((err) => {

                if (err.name === "AbortError") {
                    console.log("Requête annulée.");
                } else {
                    console.error(`Erreur : ${err.message}`);
                }

            });
        
    } else {

        alert("Les champ 'Titre du livre' et 'Auteur' doivent être remplis.");
    }

}

// Annuler la requête
function googleBooksApiAbort() {

    if (controller) {
        controller.abort(); 
        console.log("Search aborted");
    } else {
        console.log("Aucune requête en cours à annuler.");
    }  
    
}




