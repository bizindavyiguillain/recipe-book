# Recipes Book

Le but de ce TP est d'afficher une liste de recettes puis de récupérer une recette aléatoire venant d'une API tierce.

La stack technique est composée de :
  - Typescript
  - ReactJS et Redux (redux-loop)

Le TP se décompose en trois parties :
  - la première partie a pour objectif de lister des recettes
  - la seconde partie consiste à sélectionner une recette dans la liste et l'afficher.
  - la troisième partie va permettre de récupérer une recette aléatoire depuis une API tierce

Pour faciliter le travail, des données fake sont disponibles dans le fichier `api/recipes.ts`. Elles sont accessibles via les fonctions exposées par l'API dans `api/index.ts`.

Les types des entités sont définis dans `types.ts` et vouss retrouverez le type des actions dans `actions.types.ts`.

## Run
```
npm install
npm start
```


Afin de faciliter la compréhension du travail à réaliser, il y a des commentaires dans le code correspondant aux questions. Par exemple, pour la question Q1 :
```
// ## HERE Q1 ## //
```


## Questions


## I. Lister les recettes
Le but en premier lieu est d'afficher la liste des recettes.

**Q1.** Définir une action qui permettrait de récupérer ensuite la liste des recettes. Pour t'aider tu peux t'appuyer sur le fichier `actions.types.ts` qui définit tous les types des actions. L'action doit être du type `GetAllRecipesRequest`.


**Q2.** Dans le reducer, ajouter l'action précédemment créée et définir comment elle agit sur l'état global.

Pour rappel, afin de traiter proprement les effets de bord, on utilise la librarie `redux-loop`. Un appel API est un effet de bord, il faut donc surement utiliser cette librairie pour cette question.

**Q3.** Dans le fichier `commands` se trouve les fonctions utiles pour fetch l'API. Définir la fonction `cmdFetchRecipes` afin de pour récupérer les recettes. Le résultat de cet appel sera stocké dans le `payload` de l'action.

Pour rappel, `Cmd.run` peut prendre des paramètres supplémentaires, notamment `sucessActionCreator` qui permet de dispatch une action si la fonction réussi, `failActionCreator` qui dispatch une action si la fonction échoue. Le lien vers la doc est [ici](https://redux-loop.js.org/docs/api-docs/cmds.html#cmdrunfunc-options)

**Q4.** Stocker les recettes dans l'état global de l'application via le reducer et écrire un sélecteur permettant de récupérer les recettes depuis l'état global.

**Q5.** Dans le composant `recipes.tsx`, récupérer les recettes à l'aide du sélécteur précemment défini. Vous pouvez utiliser le hook `useAppSelector` défini dans `hooks.ts`

**Q6.** Ce composant comporte un useEffect avec `[]`, ce qui signifie que l'effet est exécuté seulement au montage du composant. Dans ce useEffect, dispatchez l'action définie à la Q1, pour récupérer la liste des recettes. Vous pourrez utiliser le hook `useAppDispatch` comme ceci :
```
const dispatch = useAppDispatch();
```

## II. Selection d'une recette
La seconde partie porte sur la sélection et l'affichage d'une recette.

**Q7.** Définir une action permettant de sélectionner une recette. On prendra en paramètre une recette entière pour simplifier (et pas seulement son id).

**Q8.** Ajouter la recette sélectionnée dans l'état global via le reducer et écrire un sélecteur pour pouvoir le récupérer.

**Q9.** Dans le composant `recipe.tsx`, récupérer la recette selectionnée afin de l'afficher. Ici aussi, `useAppSelector` peut aider.

**Q10.** Dans le composant `recipe-card.tsx`, dispatchez l'action pour sélectionner une recette, au moment d'un clic sur une `Card`.

## III. BONUS - Affichage d'une recette aléatoire

**Q11.** Définir une action permettant de récupérer une recette aléatoire venant d'une API tierce. N'oubliez pas de compléter le reducer également.

**Q12.** Complétez la fonction `cmdFetchRandom` du fichier `commands.ts`. Cette fonction permet de :
- fetch une recette
- vérifier le statut de la requête HTTP
- transformer la réponse en JSON
- parser le JSON en `Recipe` à l'aide de `parseRecipe`
Lorsque le fetch est réussi, l'action commit est dispatch avec la recette dans le `payload`.
A vous de compléter la fonction.
N'oubliez pas d'ajouter l'action commit dans le reducer si ce n'est pas encore fait. Le sélecteur est déjà écrit.

**Q13.** Complétez `parseRecipe` avec de parser correctement une recette.

**Q14.** Dispatchez votre action définie à la question Q11 dans le composant `button.tsx` afin qu'un clic sur le bouton récupère et affiche une recette aléatoire.
