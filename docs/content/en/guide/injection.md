---
layout: doc

lang: en
alternates:
  - hreflang: en
    href: en/guide/injection
  - hreflang: fr
    href: fr/guide/injection
  - hreflang: x-default
    href: en/guide/injection

title: Guide
description: Step by step how to add multilingual navigation to a squarespace website
---

<script setup>
import packageInfo from '../../../../package.json';
</script>


# Code insertion

You will need to be able to insert a code snippet in your site.  

At the time of writing, this is only possible for premium subscriptions.

You can add this under Website > Website Tools > Code Injection



```html-vue
<script>
    // this manages the header navigation links
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

    // this manages the logo link  back to the homepage
    _MLNAV_HOME = {
      en: '/en/home',
      fr: '/fr/acceuil'
    }

</script>


<script type="module" src="https://unpkg.com/@goingmerry/squarespace-multilingual-navigation@{{ packageInfo.version }}/dist/main.js"></script>
```

