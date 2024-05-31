import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import './style.css'
import { faBehance, faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Hero() {
    return (
        <>
            <section className='hero'>
                <div className='AM-hero'>
                    <div className='AM-h3p '>
                        <h3>Hey !! Mario still here, But don’t forget that</h3>
                        <p>At focal X agency, we are working to build somthing different. Here you’ll have a group of creative people who specialize in:
                            Branding, Digital Marketing, Web/App Development, Ui/Ux
                            Content creation, Graphic design, Social media and More........
                            So you can take a tour in our website, OR just Press Start :)</p>
                    </div>
                    <div className='imgs' >
                        <img src="/public/pattren.png" alt="" className='img1'/>
                        <img src="/public/gameBoy-min.png" alt="" className='img2' />
                        <img src="/public/pressStart.svg" alt="" className='img3' />
                        <p className='start'>Start</p>
                    </div>
                    
                </div>
                <div className='hero-fotter'>
                    <img src="/public/fotter.svg" alt="" className='img-hero-footer'/>
                    
                    <div className='hero-icon container' >
                        <div className='icon-border'><a href="#">  <FontAwesomeIcon icon={faTwitter} /> </a></div>
                        <div className='icon-border'><a href=""> <FontAwesomeIcon icon={faInstagram} /> </a></div>
                        <div className='icon-border'><a href=""> <FontAwesomeIcon icon={faLinkedin} /></a></div>
                        <div className='icon-border'><a href=""> <FontAwesomeIcon icon={faBehance} /></a></div>
                        <div className='icon-border'><a href=""> <FontAwesomeIcon icon={faFacebook} /></a></div>

                    </div>
                    <p>© 2021 - 2022 focal X agency All Right Reserved</p>
                </div>
            </section>
        
        
        
        
        
        
        
        
        
        
        </>

    )}