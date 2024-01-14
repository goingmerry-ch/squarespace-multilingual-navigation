---
layout: doc

lang: fr
alternates:
  - hreflang: en
    href: en/guide/preparation
  - hreflang: fr
    href: fr/guide/preparation
  - hreflang: x-default
    href: en/guide/preparation
title: Guide - Préparer le site Squarespace
description: Comment préparer un site web Squarespace pour ajouter une navigation multilingue
---

# Préparer le site web

## Stratégies de structure d'URL

Les liens et la structure des liens sont très importants pour l'expérience utilisateur et les moteurs de recherche.
Nous devons nous assurer que les moteurs de recherche comprennent pour quelle langue chaque page est affichée.
Et nous devons permettre aux visiteurs de naviguer uniquement dans une langue, jusqu'à ce qu'ils décident activement de changer.
Le défi concerne également la page d'accueil, c'est-à-dire l'URL racine

 c'est-à-dire, que montrons-nous aux utilisateurs lorsqu'ils atterrissent sur votre site web www.example.com

Pour satisfaire cette contrainte, il existe deux stratégies pour organiser les liens :

### Langue par défaut

C'est la stratégie recommandée compte tenu de toutes les limitations de Squarespace.

Le site serait organisé comme suit :

Pages dans la langue par défaut (exemple ici pour l'anglais) :
    - www.example.com/
    - www.example.com/services
    - www.example.com/about

Pages dans les autres langues (exemple ici pour le français) :
    - www.example.com/fr/
    - www.example.com/fr/services
    - www.example.com/fr/a-propos

Avantages :
- pas besoin d'une page d'atterrissage spéciale

Inconvénients :
- plus de risques que les visiteurs atterrissent sur la page d'accueil qui pourrait être dans la mauvaise langue pour eux

### Pas de langue par défaut

Cette stratégie est acceptable mais je ne la recommanderais pas car vous pourriez perdre plus de personnes sur la page d'atterrissage.
Voici comment Squarespace recommande de configurer manuellement les sites multilingues :

Le site serait organisé comme suit :

Page d'atterrissage :
    - www.example.com/
Cette page d'atterrissage serait neutre en termes de langue et offrirait à l'utilisateur la possibilité de choisir une langue

Pages dans la langue par défaut (exemple ici pour l'anglais) :
    - www.example.com/
    - www.example.com/services
    - www.example.com/about

Pages dans les autres langues (exemple ici pour le français) :
    - www.example.com/fr/
    - www.example.com/fr/services
    - www.example.com/fr/a-propos

## Supprimer les pages liées

Puisque la navigation sera gérée par l'outil, vous devriez supprimer la navigation des pages liées.

## Ajouter un menu