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

# Guide

[[toc]]
Here is the simplest and free way to add multilingual navigation to you site.

It goes in 3 steps:

1. Add a menu
2. Inject a code snippet
3. Updating the pages' hreflang


Lets' go into the process

Add this javascript snippet to you site.

If you are a premimum member:
You can add this under Website > Website Tools > Code Injection

If you are a free or basic member:
You will need to add into every page by editing the footer, adding custom code.



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

