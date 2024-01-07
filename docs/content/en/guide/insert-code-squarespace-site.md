---
layout: doc

lang: en
alternates:
  - hreflang: en
    href: en/guide
  - hreflang: fr
    href: fr/guide
  - hreflang: x-default
    href: en/guide

title: Guide
description: Step by step how to add multilingual navigation to a squarespace website
---

# Code insertion


Add this javascript snippet to you site.

If you are a premimum member:
You can add this under Website > Website Tools > Code Injection



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

