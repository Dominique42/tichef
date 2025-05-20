
fetch("data.json")
    .then(reponse => reponse.json())
    .then(data => {
        // afficher (data);
        console.log(data)
        afficher(data)

    })

//role : afficher les cartes produits 
//paramtre : le tableau des produits
//return : rien 

function afficher(tableauRecettes) {

    // une boucle pour récupére les objets du tableau 1 par 1  

    tableauRecettes.forEach(recette => {
        let produits = ""
        recette.ingredients.forEach(ingredient => {
            produits += `<li>${ingredient.quantite} ${ingredient.unite} ${ingredient.aliment}</li>`
        });
        let titre = recette.nom
        let description = recette.desc

    });
}


//cible l'endroit où je veux injecter mes cartes 

document.getElementById("cartes").innerHTML += `<section class="carte-recette">

            <!-- en tête de la recette -->
            <div class="flex spacebeTween w30">
                <h2 class="color">${titre}</h2>
                <img src="" alt="">
                <img src="assets/asset/share.png" alt="">
            </div>

            <!-- contenu recettes -->
            <div class="flex spacebeTween carte-recette">

                <!-- colonne gauche -->
                <div class="w30">
                    <div class="w100">
                        <img class="w100" src="${recette.img[0]}" alt="">
                        <p>${titre}</p>
                    </div>

                    <div class="flex spacebeTween">
                        <img class="w30" src="${recette.img[1]}" alt="">
                        <img class="w30" src="${recette.img[2]}" alt="">
                        <img class="w30" src="${recette.img[3]}" alt="">
                    </div>
                </div>

                <!-- colonne milieu -->
                <div class="w30">

                    <div class="flex">
                        <img src="assets/asset/nombre-icone.png" alt="">
                        <p>${recette.tempPreparation}</p>
                        <img src="assets/asset/cuisson-icone.png" alt="">
                        <p>${recette.tempPreparation}

                        <img src="assets/asset/duree-icone.png" alt="">
                        <p>${recette.tempPreparation}</p>
                    </div>
                    <div>
                        <h2>Détails</h2>
                        <p>${recette.description}</p>
                    </div>

                    <div>
                        <h2></h2>
                        <ul class="points">
                            ${produits}
                        </ul>
                    </div>

                </div>

                <!-- colonne droite -->

                <div class="w30">
                    <h2>Etape</h2>
                    <ul class="points">
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ullam, aliquid soluta
                            sapiente molestias quam possimus libero omnis quo, nobis</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ullam, aliquid soluta
                            sapiente molestias quam possimus libero omnis quo, nobis</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ullam, aliquid soluta
                            sapiente molestias quam possimus libero omnis quo, nobis</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ullam, aliquid soluta
                            sapiente molestias quam possimus libero omnis quo, nobis</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ullam, aliquid soluta
                            sapiente molestias quam possimus libero omnis quo, nobis</li>
                    </ul>
                </div>
            </div>

        </section>`

    < section >

    fetch("articles-data.json")
        .then(reponse =>reponse.json())
        .then(data => {
            // afficher (data);

            afficher(data)
        });

    </section >













