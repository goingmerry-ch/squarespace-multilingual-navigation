import { html, render } from 'lit'
import {styleMap} from 'lit/directives/style-map.js'
import languages from './lang/lang-flags.json' assert {type: 'json'}

interface Link {
  label: string
  href: string
}

interface Alternate {
  lang: string
  href: string
  nameNative: string
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
      console.log(languages)
      // get current alternates
      // Find all <link> elements with hreflang attribute
      const hreflangElements = document.querySelectorAll('link[hreflang]')

      // Extract href and hreflang attributes from each element
      return Array.from(hreflangElements)
      .map(el => {
        return {
            href: el.getAttribute('href'),
            lang: el.getAttribute('hreflang'),
        }
      }) 
      .map((item)=> {
        if (item.lang) {
          return { ...item, nameNative: languages[item.lang]?.nameNative }
        } else {
          return { ...item, nameNative: null}
        }
      })
      .filter((item) => item.lang && item.nameNative && item.href && item.lang !== 'x-default')
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
    console.log(this.alternates)
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
        'background-color': 'var(--siteBackgroundColor, white)',
        'box-shadow': '0px 8px 16px 0px rgba(0,0,0,0.2)',
        'z-index': '1'
      },
      'dropdown-content-link': {
        'color': 'var(--navigationLinkColor, white)',
        'padding': '12px 16px',
        'text-decoration': 'none',
        'display': 'block'
      },
      'globeIcon': {
        width: '40px',
        height: '40px',
        fill: 'var(--navigationLinkColor, white)'
      }
    }
    
    return html`
        <div style=${styleMap(styles.dropdown)}>
        <button id="mlswitcher" style=${styleMap(styles.dropbtn)} >
          <div style=${styleMap(styles.globeIcon)}>
            <svg version="1.0" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="current"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g> <path fill="current" d="M32,0C14.327,0,0,14.327,0,32s14.327,32,32,32s32-14.327,32-32S49.673,0,32,0z M49.972,31 c-0.138-5.582-1.414-10.878-3.613-15.667c2.652-1.022,5.169-2.317,7.515-3.854c4.824,5.14,7.854,11.976,8.102,19.521H49.972z M33.333,61.966c-0.11,0.005-0.222,0.005-0.333,0.009V50.035c3.324,0.087,6.547,0.581,9.605,1.47 C40.184,55.541,37.029,59.084,33.333,61.966z M44.549,52.141c2.283,0.801,4.462,1.817,6.523,3.018 c-3.991,3.29-8.849,5.563-14.178,6.438C39.902,58.861,42.484,55.672,44.549,52.141z M21.394,51.505 c3.059-0.89,6.282-1.383,9.606-1.47v11.939c-0.111-0.004-0.223-0.004-0.333-0.009C26.97,59.084,23.816,55.541,21.394,51.505z M27.105,61.596c-5.329-0.874-10.187-3.147-14.178-6.438c2.062-1.2,4.24-2.217,6.523-3.017 C21.515,55.672,24.098,58.861,27.105,61.596z M2.025,31c0.248-7.545,3.277-14.381,8.102-19.521c2.346,1.536,4.862,2.831,7.515,3.854 C15.442,20.122,14.166,25.418,14.028,31H2.025z M43.57,14.196c-3.345,1.069-6.894,1.67-10.57,1.766V2.025 c0.111,0.004,0.223,0.004,0.333,0.009C37.541,5.314,41.047,9.453,43.57,14.196z M36.895,2.404 c5.944,0.976,11.298,3.696,15.521,7.622c-2.176,1.391-4.496,2.57-6.944,3.499C43.278,9.326,40.369,5.562,36.895,2.404z M31,2.025 v13.937c-3.677-0.096-7.226-0.696-10.57-1.766c2.523-4.743,6.029-8.882,10.237-12.162C30.777,2.029,30.889,2.029,31,2.025z M18.529,13.525c-2.448-0.929-4.769-2.108-6.944-3.499c4.223-3.926,9.576-6.646,15.521-7.622 C23.631,5.562,20.722,9.326,18.529,13.525z M19.532,16.009c3.622,1.189,7.472,1.873,11.468,1.972V31H16.031 C16.17,25.654,17.403,20.584,19.532,16.009z M31,33v15.036c-3.684,0.092-7.245,0.665-10.615,1.689 C17.732,44.712,16.188,39.029,16.031,33H31z M33,48.036V33h14.969c-0.156,6.029-1.701,11.712-4.354,16.726 C40.245,48.701,36.684,48.128,33,48.036z M33,31V17.98c3.996-0.099,7.846-0.782,11.468-1.972c2.129,4.575,3.362,9.646,3.501,14.991 H33z M2.025,33h12.003c0.154,6.253,1.74,12.146,4.447,17.369c-2.496,0.899-4.871,2.044-7.109,3.396 C5.827,48.513,2.294,41.172,2.025,33z M52.634,53.766c-2.238-1.353-4.613-2.497-7.109-3.396c2.707-5.224,4.293-11.116,4.447-17.369 h12.003C61.706,41.172,58.173,48.513,52.634,53.766z"></path> </g></svg>
          </div>
          <div style="display: inline-block; fill: var(--navigationLinkColor, white)">
            <svg fill="current" width="30px" height="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M759.2 419.8L697.4 358 512 543.4 326.6 358l-61.8 61.8L512 667z"/></svg>
          </div>
        </button>
        <div id="mlswitcher-content" style=${styleMap(styles['dropdown-content'])}>
        ${this.alternates.map((alternate) => html`
          <a style=${styleMap(styles['dropdown-content-link'])} href="${alternate.href}">
            ${alternate.nameNative}
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
    console.log('switche', this.alternates)
    render (this.topNav(), container, anchor)
    document.getElementById('mlswitcher')?.addEventListener('click', () => {
      const el = document.getElementById('mlswitcher-content')
      if (el) {
        el.style.display = el.style.display === 'block' ? 'none' : 'block'
      }
    })
  }

}
