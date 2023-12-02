import { html, render } from 'lit';
import {styleMap} from 'lit/directives/style-map.js'


interface Link {
  label: string
  href: string
}

interface Alternate {
  lang: string
  href: string
}


export default class MlNav {
  links: Link[]
  alternates: Alternate[]
  current: Alternate

  constructor() {
    this.links = [
      { label: 'Home', href: '/en/home'},
      { label: 'Services', href: '/en/services'}
    ];
    this.current = { lang: 'it', href: '/it/inizio'}
    this.alternates = [
      { lang: 'gb', href: '/en/home'},
      { lang: 'fr', href: '/fr/home'},
      { lang: 'sa', href: '/ar/home'},
      { lang: 'es', href: '/es/inicio'},
      
    ]
  }
  

  getAlternates () {
      // get current alternates
      // switcher
  }
  
    
  navLinks () {
    return html`
        <nav class="header-nav-list">
          ${this.links.map((link) => 
            html `
            <div class="header-nav-item header-nav-item--collection header-nav-item--homepage">
              <a href="${link.href}" data-animation-role="header-element">
              ${link.label}
              </a>
            </div>
            `
          )}
        </nav>
      `;
  }

  switcher () {
    const styles: {[elclass:string]: { [property: string]: string}} = {
      dropbtn: {
        'display': 'flex',
        'align-items': 'center',
        background: 'transparent',
        border: '2px',
        'border-color': 'white'
      },
      'dropdown': {
        'position': 'relative',
        'display': 'inline-block',
        'margin-left': '2rem'
      },
      'dropdown-content': {
        'display': 'none',
        'position': 'absolute',
        'background-color': ' var(--siteBackgroundColor, white)',
        'box-shadow': '0px 8px 16px 0px rgba(0,0,0,0.2)',
        'z-index': '1'
      },
      'dropdown-content-link': {
        'color': 'black',
        'padding': '12px 16px',
        'text-decoration': 'none',
        'display': 'block'
      },
      'flagIcon': {
        'display': 'flex',
        'width': '40px',
        'height': '40px',
        'border-radius': '50%',
        'justify-content': 'center',
        'align-items': 'center',
        'overflow': 'hidden'
      },
      'flagIconImg': {
        'flex-shrink': '0',
        'object-fit': 'cover',
        'min-width': '100%',
        'min-height': '100%'
      }
    }
    
    return html`
        <div style=${styleMap(styles.dropdown)}>
        <button id="mlswitcher" style=${styleMap(styles.dropbtn)} >
          <div style=${styleMap(styles.flagIcon)} >
            <img style=${styleMap(styles.flagIconImg)}  src="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.0.0/flags/1x1/${this.current.lang}.svg" />
          </div>
          <div style="display: inline-block; fill: var(--navigationLinkColor, white)">
            <svg fill="current" width="30px" height="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M759.2 419.8L697.4 358 512 543.4 326.6 358l-61.8 61.8L512 667z"/></svg>
          </div>
        </button>
        <div id="mlswitcher-content" style=${styleMap(styles['dropdown-content'])}>
        ${this.alternates.map((alternate) => html`
          <a style=${styleMap(styles['dropdown-content-link'])} href="${alternate.href}">
            <div style=${styleMap(styles.flagIcon)} >
              <img style=${styleMap(styles.flagIconImg)} src="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.0.0/flags/1x1/${alternate.lang}.svg" />
            </div>
          </a>
        `)}
          
        </div>
      </div>
      `
  }


  topNav () {
    return html`
      <div class="header-nav">
        <div class="header-nav-wrapper">
          ${this.navLinks()}
          ${this.switcher()}
        </div>
      </div>
    `;
  }

  renderTopNav (container: HTMLElement, anchor: HTMLElement | undefined) {
    render (this.topNav(), container, anchor)
    document.getElementById('mlswitcher')?.addEventListener('click', () => {
      const el = document.getElementById('mlswitcher-content')
      if (el) {
        el.style.display = el.style.display === 'block' ? 'none' : 'block'
      }
    })
  }

}
