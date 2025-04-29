### TP4

### Question 1  
That is the main difference between local installation and global installation of packages with npm? What kind of packages do you generally install locally? What kind is generally installed globally?

**Réponse :**  
La différence principale réside dans l’emplacement et la portée des paquets :  
- **Installation locale (`npm install <package>`)**  
  - Le paquet est placé dans le dossier `node_modules` du projet courant et référencé dans `package.json`.  
  - Il n’est disponible que pour ce projet.  
  - **Usage typique** : bibliothèques et dépendances dont votre application a besoin pour fonctionner (ex. React, Vue, Lodash, Webpack…).

- **Installation globale (`npm install -g <package>`)**  
  - Le paquet est installé dans un répertoire partagé du système et rend ses exécutables accessibles en ligne de commande depuis n’importe quel dossier.  
  - **Usage typique** : outils en ligne de commande et utilitaires (ex. Vue CLI, ESLint, TypeScript, Nodemon, Angular CLI…).

---

### Question 2  
Webpack is internally used. Why is it required to deal with both multiple JavaScript files and special extensions like `.vue`?

**Réponse :**  
Webpack est un bundler qui permet de regrouper et d’optimiser tous les modules JavaScript (et leurs dépendances) en un ou plusieurs fichiers de sortie. Grâce à son système de **loaders**, il peut traiter non seulement des fichiers `.js` mais aussi des extensions spécifiques (comme `.vue`) en appliquant les transformations nécessaires (compilation de templates, extraction de styles, transpilation, etc.), puis les assembler dans un bundle utilisable par le navigateur.

---

### Question 3  
What is the role of babel and how browserslist may configure its output?

**Réponse :**  
Babel est un transpileur JavaScript qui convertit le code moderne (ES6+ et au-delà) en une version compatible avec d’anciens navigateurs. La configuration **browserslist** (dans `package.json` ou `.browserslistrc`) définit la liste des navigateurs cibles et leurs versions. Babel se sert de cette liste pour déterminer quels **plugins** ou **polyfills** inclure, afin d’ajuster automatiquement le niveau de transformation et de compatibilité.

---

### Question 4  
What is eslint and which set of rules are currently applied? The eslint configuration may be defined in a `.eslintrc.js` or in `package.json` depending on the setup.

**Réponse :**  
ESLint est un outil d’analyse statique (« linter ») pour JavaScript et frameworks associés, qui détecte les erreurs de syntaxe, les incohérences de style et les patterns problématiques.  
Dans un projet créé avec Vue CLI, la configuration par défaut utilise le preset `@vue/cli-plugin-eslint` :  
- Les règles de base d’`eslint:recommended`  
- Les règles du plugin Vue (par ex. `plugin:vue/vue3-recommended`)  
Ces règles peuvent être ajustées ou étendues dans le fichier `.eslintrc.js` ou dans la section `eslintConfig` de `package.json`.

---

### Question 5  
What is the difference between scoped and non-scoped CSS?

**Réponse :**  
Le CSS **scopé** (avec `<style scoped>`) est isolé au composant : Vue ajoute automatiquement un attribut data-… à chaque élément du template et qualifiera les sélecteurs pour n’affecter que ces éléments. Le CSS **non-scopé** est chargé globalement : ses règles s’appliquent à tous les éléments du DOM correspondant aux sélecteurs, quel que soit leur composant.

---

### Question 6  
How behave non-prop attributes passed down to a component, when its template has a single root element?

**Réponse :**  
Par défaut, tous les attributs qui ne sont pas déclarés comme props sont automatiquement transférés sur l’élément racine unique du composant. Par exemple, si vous passez `style="..."` ou `class="..."` à votre composant et que son template n’a qu’un seul `<div>`, ces attributs seront appliqués à ce `<div>`.

---

### Question 7  
Analyse how works the AsyncButton. How the child component is aware of the returned Promise by the parent onClick handler? When is executed the callback passed to `.finally()`? Why use `.finally()` instead of `.then()`? Etc.

**Réponse :**  
1. **Détection de la Promise** : AsyncButton émet l’événement `click` et récupère la valeur retournée par le handler parent. S’il s’agit d’une Promise, il passe en mode « loading ».  
2. **Callback `.finally()`** : la fonction fournie à `.finally()` s’exécute une fois que la Promise est **résolue** ou **rejetée**, garantissant le nettoyage de l’état « loading » quel que soit le résultat.  
3. **Pourquoi `.finally()`** : contrairement à `.then()`, qui ne couvre que le cas de succès (sauf à ajouter un `.catch()`), `.finally()` assure toujours l’exécution du même traitement de fin (arrêter l’animation, réactiver le bouton…), qu’il y ait succès ou erreur.

---

### Question 8  
Which bug is introduced if `inheritAttrs: false` is missing or set to true in AsyncButton? Why?

**Réponse :**  
Si `inheritAttrs: false` n’est pas défini (ou reste `true`), tous les attributs non-prop (classe, style, disabled…) sont appliqués à l’élément racine du composant (souvent une `<div>` de wrapper) au lieu du `<button>` interne. Cela casse le style et le comportement attendu (par exemple `disabled` sur le mauvais élément), car le véritable bouton n’hérite pas de ces attributs.  


### TP5

