import Card from 'react-bootstrap/Card';
import './style.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';




export default function Hosting(){
    return(
        <>
          <div className='hosting '>
            <h3 className='h3'>Hosting Pricing</h3>
            <Row xs={1} md={2} lg={2} className="g-4 row ">
            
                <Col sm='12' md='6' lg='3'>
                
                <Card className='card1' >
                    
                
                    <Card.Body  >
                    
                    <Card.Title>Basic</Card.Title>
                    
                    <Card.Title >for very small businesses
                        and freelancers.</Card.Title>  
                    <Card.Text className='mb-0'>Disk Space: 500 M.B</Card.Text>
                        <Card.Text className='mb-1'>Bandwidth: 500 G.B</Card.Text>
                        <Card.Text className='mb-1'>SubDomains: Unlimited</Card.Text>
                        <Card.Text className='mb-1'>Parked Domains: Unlimited</Card.Text>
                        <Card.Text className='mb-1'>E-mail Accounts: Unlimited</Card.Text>
                        <Card.Text className='mb-1'>Cpanel (control panel): Yes</Card.Text>
                        <Card.Text className='mb-7'>Money Back Guarantee: 14 Days</Card.Text>
                    
                        <Button variant="outline-warning" className='w-100 basic pb-9'>You will have 1 Gift</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col sm='12' md='6' lg='3'>
                
                <Card className='card2' >
                    
                
                    <Card.Body  >
                    
                    <Card.Title>Pro</Card.Title>
                    
                    <Card.Title className='mb-1'>for Individuals that need sharing vlogs or need huge portfolio.</Card.Title>  
                    <Card.Text className='mb-0'>Disk Space: 3000 M.B</Card.Text>
                        <Card.Text className='mb-0'>Bandwidth: 3 TERA</Card.Text>
                        <Card.Text className='mb-0'>SubDomains: Unlimited</Card.Text>
                        <Card.Text className='mb-0'>Parked Domains: Unlimited</Card.Text>
                        <Card.Text className='mb-0'>E-mail Accounts: Unlimited</Card.Text>
                        <Card.Text className='mb-0'>Cpanel (control panel): Yes</Card.Text>
                        <Card.Text className='mb-7'>Money Back Guarantee: 14 Days</Card.Text>
                    
                        <Button variant="outline-warning" className='w-100 pro'>Warning</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col sm='12' md='6' lg='3'>
                
                <Card className='card3' >
                    
                
                    <Card.Body  >
                    
                    <Card.Title>Business</Card.Title>
                    
                    <Card.Title>for Team that need sharing and reporting.</Card.Title>  
                    <Card.Text className='mb-0'>Disk Space: 5000 M.B</Card.Text>
                        <Card.Text className='mb-1'>Bandwidth: 5 TERA</Card.Text>
                        <Card.Text className='mb-1'>SubDomains: Unlimited</Card.Text>
                        <Card.Text className='mb-1'>Parked Domains: Unlimited</Card.Text>
                        <Card.Text className='mb-1'>E-mail Accounts: Unlimited</Card.Text>
                        <Card.Text className='mb-1'>Cpanel (control panel): Yes</Card.Text>
                        <Card.Text className='mb-7'>Money Back Guarantee: 14 Days</Card.Text>
                    
                        <Button variant="outline-warning" className='w-100 Business'>3 Gifts per/mo for year</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col sm='12' md='6' lg='3'>
                
                <Card className='card4' >
                    
                
                    <Card.Body  >
                    
                    <Card.Title>Enterprise</Card.Title>
                    
                    <Card.Title>for large companies that need admins & security.</Card.Title>  
                    
                        <Card.Text className='mb-1'>Disk Space: 10000 M.B</Card.Text>
                        <Card.Text className='mb-1'>Bandwidth: 10 TERA</Card.Text>
                        <Card.Text className='mb-1'>SubDomains: Unlimited</Card.Text>
                        <Card.Text className='mb-1'>Parked Domains: Unlimited</Card.Text>
                        <Card.Text className='mb-1'>E-mail Accounts: Unlimited</Card.Text>
                        <Card.Text className='mb-0'>Cpanel (control panel): Yes</Card.Text>
                        <Card.Text className='mb-7'>Money Back Guarantee: 14 Days</Card.Text>
                    
                        <Button variant="outline-warning" className='w-100 Enterprise'>Just Call Us</Button>
                    </Card.Body>
                </Card>
                </Col>
                
        </Row>
        <p className='p'>Support all the features of personal websites, corporate sites, news and commercial sites with 24 hours technical support.</p>
            <p className='p1'>Go Online, choose your plan and Contact us on:contact@focal-x.com | +963 935 033 139</p>
        
          </div>
        </>
    )
}