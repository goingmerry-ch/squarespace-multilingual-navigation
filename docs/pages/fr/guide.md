---
layout: doc

lang: fr
alternates:
  - hreflang: en
    href: /en/guide
  - hreflang: fr
    href: /fr/guide
  - hreflang: x-default
    href: /en/guide
    
title: Guide
description: Étape par étape comment ajouter une navigation multilingue à un site web Squarespace
---

# Guide

[[toc]]
Voici la manière la plus simple et gratuite d'ajouter une navigation multilingue à votre site.

Cela se déroule en 3 étapes :

1. Ajouter un menu
2. Injecter un extrait de code
3. Mettre à jour l'attribut hreflang des pages


Allons dans le processus

Ajoutez cet extrait de javascript à votre site.

Si vous êtes membre premium :
Vous pouvez ajouter ceci sous Site Web > Outils du Site Web > Injection de Code

Si vous êtes membre gratuit ou de base :
Vous devrez l'ajouter dans chaque page en éditant le pied de page, en ajoutant du code personnalisé.




```js
<script>
    _MLNAV_BASE_NAVIGATION = {
        en: [
          { label: 'Home', href: '/en/home' },
          { label: 'Services', href: '/en/services' },
          { label: 'Specialties', href: '/en/specialties' },
          { label: 'About', href: '/en/about' },
          { label: 'Contact', href: '/en/contact' }
        ],
        fr: [
          { label: 'Home', href: '/fr/accueil' },
          { label: 'Services', href: '/fr/services' },
          { label: 'Specialités', href: '/fr/specialites' },
          { label: 'A Propos', href: '/fr/a-propos' },
          { label: 'Contact', href: '/fr/contact' }
        ]
    }

  </script>
  <script type="module" src="https://unpkg.com/@goingmerry/squarespace-multilingual-navigation@1.0.3/dist/main.js"></script>
  <style>
```

