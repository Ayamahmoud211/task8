import Card from 'react-bootstrap/Card';
import './style.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'

import { faBehance, faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons';


export default function Footer(){
    return(
        <>
        <div className='container2 footer'>
         <Row xs={1} md={2} lg={2} className=" row p-0 m-0 ">
            
            <Col sm='12' md='6' lg='2' className='card'>
            <Card >
            <Card.Img variant='right'  src="/public/logo1.png" className=" position-absolute  start-0 top-0 footerImg"  />
                <Card.Body className='card1'>

                    <Card.Title style={{marginTop:"20px"}}>Head Office</Card.Title>
                    
                    <Card.Text>
                    Syria - Latakia - grh2+hjx
                    35.5199518
                    </Card.Text>
                   
                </Card.Body>
            </Card>
            </Col>
            <Col sm='12' md='6' lg='2' className='card'>
            <Card className='card1'>
                <Card.Body>
                    <Card.Title>Sales</Card.Title>
                    
                    <Card.Text>
                    contact@focal-x.com
                    +963 953 666 056
                    </Card.Text>
                    <Card.Title>Public Relations</Card.Title>
                    
                    <Card.Text>
                    pr@focal-x.com
                    +963 953 666 052
                    </Card.Text>
                   
                </Card.Body>
            </Card>
            </Col>
            <Col sm='12' md='6' lg='2' className='card'>
            <Card className='card1'>
                <Card.Body>
                    <Card.Title>Customer Support</Card.Title>
                    
                    <Card.Text>
                    info@focal-x.com
                    +963 953 666 054
                    </Card.Text>
                    <Card.Title>Human Resources</Card.Title>
                    
                    <Card.Text>
                    hr@focal-x.com
                    </Card.Text>
                   
                </Card.Body>
            </Card>
            </Col>
            <Col sm='12' md='6' lg='2' className='card'>
            <Card >
                <Card.Body>
                    <Card.Title>Useful Links</Card.Title>
                    
                    <Card.Text>
                    Clients & Partners
                    Check Certificat ID
                    Check for employee
                    Our Brand ID guidlines

                    </Card.Text>
                    
                   
                </Card.Body>
            </Card>
            </Col>
            <Col sm='12' md='6' lg='2' className='card'>
            <Card className='card1'>
                <Card.Body>
                    <Card.Title>Keep In Touch</Card.Title>
                    
                    <Card.Text>
                    <a href="#">  <FontAwesomeIcon icon={faTwitter} /> </a>
                    <a href=""> <FontAwesomeIcon icon={faInstagram} /> </a>
                    <a href=""> <FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href=""> <FontAwesomeIcon icon={faBehance} /></a>
                    <a href=""> <FontAwesomeIcon icon={faFacebook} /></a>
                    </Card.Text>
                   
                </Card.Body>
            </Card>
            </Col>
                
         </Row>
         <p className='p m-0'><a href=""><FontAwesomeIcon icon={faCopyright} /></a> 2021 - 2023 focal X L.L.C All Right Reserved</p>
        </div>
       
        
        
        </>)}