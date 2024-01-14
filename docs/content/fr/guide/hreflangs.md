---
layout: doc

lang: fr
alternates:
  - hreflang: en
    href: en/guide/hreflangs
  - hreflang: fr
    href: fr/guide/hreflangs
  - hreflang: x-default
    href: en/guide/hreflangs

title: Guide - Ajouter des langues alternatives
description: Comment ajouter des langues alternatives à une page Squarespace pour activer la navigation multilingue
---

# Ajout d'alternatives linguistiques

## Que sont les alternatives linguistiques

Ce sont simplement des balises sur la page web qui sont utilisées pour indiquer aux robots d'indexation des moteurs de recherche quelles pages sont des traductions les unes des autres.

Voici à quoi cela ressemblerait pour la page d'accueil :

```html
<link rel="alternate" href="http://example.com/en/home" hreflang="en" />
<link rel="alternate" href="http://example.com/fr/accueil" hreflang="fr" />
<link rel="alternate" href="http://example.com/en/home" hreflang="x-default" />
```


L'élément `link` avec `rel="alternate"` est utilisé pour définir des versions alternatives d'une page pour différentes langues ou régions. Voici une explication des attributs utilisés dans chaque balise :

1. `href` : Spécifie l'URL de la version alternative de la page.
2. `hreflang` : Indique la langue (et éventuellement la région) de l'URL alternative.
3. `x-default` : Utilisé dans `hreflang` pour spécifier une URL par défaut lorsqu'aucune autre URL ne correspond mieux.

Vous devez mettre ces mêmes balises sur toutes les pages interconnectées par des traductions.

## Comment ajouter des alternatives linguistiques sur Squarespace

Les alternatives linguistiques doivent être mises à jour pour **chaque page** en utilisant les paramètres de la page.

Voici à quoi cela ressemble sur Squarespace :

>![mise à jour hreflang sur squarespace](../../assets/hreflang-update.png)

## Une nécessité pour toutes les pages

Toutes les pages doivent avoir cela.

C'est un exercice fastidieux mais nécessaire pour un indexage correct de vos pages par le moteur de recherche.

Même si vous finissez par ne pas utiliser l'outil multilingue présenté ici, vous devriez quand même le faire.

L'outil vous signalera les alternatives manquantes soit par une navigation manquante (cela signifie que la page actuelle n'est pas référencée) ou s'il manque une langue dans le sélecteur (cela signifie que la langue alternative n'est pas fournie).

## Comment l'ordre est important

L'ordre des balises définira l'ordre des langues dans le sélecteur de langue.







