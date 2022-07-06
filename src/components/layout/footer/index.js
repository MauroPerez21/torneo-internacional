import React from 'react'
import { Link } from 'react-router-dom';
import SocialIcons from '../networks'
//import { Button } from '../button/Button';
import './Footer.styles.css'

function Footer() {
    return (
      <div className='footer-container'>
        <div className="footerInfo">
          <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
              54° Festival Internacional del Joropo
            </p>
            <p className='footer-subscription-text'>
              Quieres recibir notificaciones via email?
            </p>
            <div className='input-areas'>
              <form>
                <input
                  className='footer-input'
                  name='email'
                  type='email'
                  placeholder='Your Email'
                />
              </form>
            </div>
            <div className='footer-logo'>
                <Link to='/lugares' className='social-logo'>
                  Villavicencio - Meta
                  <i className='fab fa-typo3' />
                </Link>
              </div>
          </section>

          <section>
            <div className='footer-links'>
              <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                  <h2>Nosotros</h2>
                  <Link to='/'>Gobernaci&oacute;n</Link>
                  <Link to='/'>Municipios</Link>
                  <Link to='/'>Eco-turismo</Link>
                  <Link to='/'>T&eacute;rminos y condiciones</Link>
                </div>
                <div className='footer-link-items'>
                  <h2>Contacto</h2>
                  <Link to='/'>Contacto</Link>
                  <Link to='/'>Patrocinadores</Link>
                  <Link to='/'>Sitios de inter&eacute;s</Link>
                </div>
                <div className='footer-link-items'>
                  <h2>Videos</h2>
                  <Link to='/'>Ir al canal</Link>
                  <Link to='/'>Ganadores</Link>
                  <Link to='/'>Agencia</Link>
                </div>
            </div>
          </div>
          </section>
        </div>
        

        <section className='social-media'>
          <div className='social-media-wrap'>
            
            
            
            <h2>Mapa del Sito:</h2>
            <div className='footer-link-sitemap'>
              
              <Link to='/inicio'>Inicio</Link>
              <Link to='/eventos'>eventos</Link>
              <Link to='/lugares'>guia</Link>
              <Link to='/galeria'>galeria de im&aacute;genes y video-clips</Link>
            </div>
            <div className='social-icons'>
              <SocialIcons/>
            </div>
            <small className='website-rights'>Copyright © 2022</small>
            

          </div>
          
        </section>

      </div>
    );
  }
  
  export default Footer;
  