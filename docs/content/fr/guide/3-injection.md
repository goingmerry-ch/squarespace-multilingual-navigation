---
layout: doc

lang: en
alternates:
  - hreflang: en
    href: en/guide/3-injection
  - hreflang: fr
    href: fr/guide/3-injection
  - hreflang: x-default
    href: en/guide/3-injection

title: Guide
description: Step by step how to add multilingual navigation to a squarespace website
---

<script setup>
import packageInfo from '../../../../package.json';
</script>

# Insertion de code

Ajoutez ce fragment de code JavaScript à votre site.

Si vous êtes membre premium :
Vous pouvez l'ajouter dans Site Web > Outils du site > Injection de code


```html-vue
<script>
    // ce code gere les liens de la navigation en en-tete
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

    // ce code gère le lien du logo (vers la homepage de la langue)
    _MLNAV_HOME = {
      en: '/en/home',
      fr: '/fr/acceuil'
    }

</script>

<script type="module" src="https://unpkg.com/@goingmerry/squarespace-multilingual-navigation@{{ packageInfo.version }}/dist/main.js"></script>
```

