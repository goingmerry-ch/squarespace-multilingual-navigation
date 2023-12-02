import { html, render } from 'lit'
import {styleMap} from 'lit/directives/style-map.js'
import './lang/lang-flags.css'

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
    ]
    
    //@ts-ignore
    this.alternates = this.getAlternates()
    //@ts-ignore
    this.current = this.alternates.find((alternate) => (alternate.href === location.pathname || alternate.lang === document.documentElement.getAttribute('lang')))
  }
  

  getAlternates () {
      // get current alternates
      // Find all <link> elements with hreflang attribute
      const hreflangElements = document.querySelectorAll('link[hreflang]')

      // Extract href and hreflang attributes from each element
      return Array.from(hreflangElements)
      .map(el => {
        return {
            href: el.getAttribute('href'),
            lang: el.getAttribute('hreflang')
        }
      })
      .filter((item) => item.lang && item.href && item.lang !== 'x-default')
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
      `
  }

  switcher () {
    const bgLangPngUrl = new URL('./lang/lang-flags.png', import.meta.url).toString();
    const styles: {[elclass:string]: { [property: string]: string}} = {
      dropbtn: {
        'display': 'flex',
        'align-items': 'center',
        'background': 'transparent',
        'border': '2px',
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
      'langicon': {
        'width': '25px',
        'height': '15px',
        'background-image': `url('${bgLangPngUrl})`
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
          <div class="lang-icon-${this.current.lang}" style=${styleMap(styles.langicon)} ></div>

          <div style="display: inline-block; fill: var(--navigationLinkColor, white)">
            <svg fill="current" width="30px" height="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M759.2 419.8L697.4 358 512 543.4 326.6 358l-61.8 61.8L512 667z"/></svg>
          </div>
        </button>
        <div id="mlswitcher-content" style=${styleMap(styles['dropdown-content'])}>
        ${this.alternates.map((alternate) => html`
          <a style=${styleMap(styles['dropdown-content-link'])} href="${alternate.href}">
            <div class="lang-icon-${alternate.lang}" style=${styleMap(styles.langicon)} ></div>
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
    `
  }

  renderTopNav (container: HTMLElement, anchor: HTMLElement | undefined) {
    console.log('switche', this.current)
    render (this.topNav(), container, anchor)
    document.getElementById('mlswitcher')?.addEventListener('click', () => {
      const el = document.getElementById('mlswitcher-content')
      if (el) {
        el.style.display = el.style.display === 'block' ? 'none' : 'block'
      }
    })
  }

}
