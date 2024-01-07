---
layout: doc

lang: en
alternates:
  - hreflang: en
    href: en/guide/2-insert-code-squarespace-site
  - hreflang: fr
    href: fr/guide/2-inserer-code-squarespace
  - hreflang: x-default
    href: en/guide/2-insert-code-squarespace-site

title: Guide
description: Step by step how to add multilingual navigation to a squarespace website
---

# Insertion de code

Ajoutez ce fragment de code JavaScript à votre site.

Si vous êtes membre premium :
Vous pouvez l'ajouter dans Site Web > Outils du site > Injection de code

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
