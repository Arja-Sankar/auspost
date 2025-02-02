import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);
  block.append(footer);

    //  var footerContent = document.querySelector('.footer-wrapper > .footer.block > div');
    // footerContent.style.display = 'none';
   //console.log(footerContent);
    
    var mainFooter = document.querySelector('.footer-wrapper > .footer.block');
  mainFooter.setAttribute('class','outline-footer');

  var footDiv = document.createElement('div');
  footDiv.setAttribute('class','inner-footer');
  mainFooter.appendChild(footDiv);

    var footDivone = document.createElement('div');
  footDivone.setAttribute('class','flex-container');
  footDivone.classList.add('flex-container--multi-50');
  footDiv.appendChild(footDivone);

    var footOne = document.createElement('div');
footDivone.appendChild(footOne);
  
    var footLogos = document.createElement('div');
  footLogos.setAttribute('class','footer-logos');
  footLogos.setAttribute('itemscope','');
  footLogos.setAttribute('itemtype','http://schema.org/Organization');
  footOne.appendChild(footLogos);
  footLogos.innerHTML = document.querySelector('.default-content-wrapper > p > picture');

      var footLinksDiv = document.createElement('div');
  footLinksDiv.setAttribute('class','links');
footDivone.appendChild(footLinksDiv);

  var footNav = document.createElement('nav');
  footLinksDiv.appendChild(footNav);

    var footUL = document.createElement('ul');
  footUL.setAttribute('class','footer-links');
  footNav.appendChild(footUL);
  footUL.innerHTML =  `  <li>
                        <a href="/about-us" title="About us" data-event="site interaction" data-category="footer navigation" data-description="About us" class="footer-link">About us
                            <span class="icon--10">
                              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M18.44 10.566l-.679-.714c-.011-.013-.028-.017-.044-.03L8.951.591a1.848 1.848 0 00-2.711 0l-.68.712a2.096 2.096 0 000 2.854l7.45 7.843-7.45 7.84a2.098 2.098 0 000 2.857l.68.71c.747.79 1.961.79 2.71 0l8.767-9.227c.014-.014.033-.018.044-.033l.68-.712c.375-.396.56-.916.559-1.435a2.065 2.065 0 00-.56-1.435z"></path>
                              </svg>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/terms-and-conditions" title="Terms &amp; conditions" data-event="site interaction" data-category="footer navigation" data-description="Terms &amp; conditions" class="footer-link">Terms &amp; conditions                            <span class="icon--10">
                              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M18.44 10.566l-.679-.714c-.011-.013-.028-.017-.044-.03L8.951.591a1.848 1.848 0 00-2.711 0l-.68.712a2.096 2.096 0 000 2.854l7.45 7.843-7.45 7.84a2.098 2.098 0 000 2.857l.68.71c.747.79 1.961.79 2.71 0l8.767-9.227c.014-.014.033-.018.044-.033l.68-.712c.375-.396.56-.916.559-1.435a2.065 2.065 0 00-.56-1.435z"></path>
                              </svg>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="https://auspost.com.au/privacy" title="Privacy" data-event="site interaction" data-category="footer navigation" data-description="Privacy" class="footer-link">Privacy
                            <span class="icon--10">
                              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M18.44 10.566l-.679-.714c-.011-.013-.028-.017-.044-.03L8.951.591a1.848 1.848 0 00-2.711 0l-.68.712a2.096 2.096 0 000 2.854l7.45 7.843-7.45 7.84a2.098 2.098 0 000 2.857l.68.71c.747.79 1.961.79 2.71 0l8.767-9.227c.014-.014.033-.018.044-.033l.68-.712c.375-.396.56-.916.559-1.435a2.065 2.065 0 00-.56-1.435z"></path>
                              </svg>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/complaints-and-feedback" title="Complaints and feedback" data-event="site interaction" data-category="footer navigation" data-description="Complaints and feedback" class="footer-link">Complaints and feedback                          <span class="icon--10">
                              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M18.44 10.566l-.679-.714c-.011-.013-.028-.017-.044-.03L8.951.591a1.848 1.848 0 00-2.711 0l-.68.712a2.096 2.096 0 000 2.854l7.45 7.843-7.45 7.84a2.098 2.098 0 000 2.857l.68.71c.747.79 1.961.79 2.71 0l8.767-9.227c.014-.014.033-.018.044-.033l.68-.712c.375-.396.56-.916.559-1.435a2.065 2.065 0 00-.56-1.435z"></path>
                              </svg>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/alerts" title="Alerts" data-event="site interaction" data-category="footer navigation" data-description="Alerts" class="footer-link">Alerts                            <span class="icon--10">
                              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M18.44 10.566l-.679-.714c-.011-.013-.028-.017-.044-.03L8.951.591a1.848 1.848 0 00-2.711 0l-.68.712a2.096 2.096 0 000 2.854l7.45 7.843-7.45 7.84a2.098 2.098 0 000 2.857l.68.71c.747.79 1.961.79 2.71 0l8.767-9.227c.014-.014.033-.018.044-.033l.68-.712c.375-.396.56-.916.559-1.435a2.065 2.065 0 00-.56-1.435z"></path>
                              </svg>
                            </span>
                        </a>
                    </li>`;

    var footcpyrightDiv = document.createElement('div');
  footcpyrightDiv.setAttribute('class','copyright');
footDivone.appendChild(footcpyrightDiv);
 footcpyrightDiv.innerHTML = document.querySelectorAll('.default-content-wrapper > p')[3].innerText;

  document.querySelectorAll('.default-content-wrapper > p')[3].style.display = 'none';
  
 
}
