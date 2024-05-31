import Card from 'react-bootstrap/Card';
import './style.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default function Services(){
    return(
        <>
    <div className='services container1 position-relative  ' >
      <h3 className='text-center'>Our services</h3>
    
    <Row xs={1} md={2} lg={2} className="g-4 row ">
    
        <Col sm='12' md='6' lg='5' >
        
          <Card className='card1' >
          
            
            <Card.Body  >
              <Card.Title>Branding</Card.Title>
              <Card.Text>
              <Card.Title>The brand is hope,</Card.Title>
                
                It is also the source of inspiration for everything you do when you
                deal with your customers and that is the important and emotional
                thing. Your Brand and Visual identity represents an intrinsic Value
                to your company.
              </Card.Text>
              <Card.Title >In focal X agency, we provide:</Card.Title>
              <Card.Text className='mb-0'>Visual identity design.</Card.Text>
                <Card.Text className='mb-0'>Define Brand Identity.</Card.Text>
                <Card.Text className='mb-0'>Define Brand personality.</Card.Text>
                <Card.Text className='mb-0'>Building Your brand strategy.</Card.Text>
               <Card.Text className='mb-8'>Market research and competitors study.</Card.Text>
               <Card.Img variant='right'  src="/public/brandingOrange.png" className=" position-absolute  end-0 bottom-0 cardImg"  />
              
              <Card.Title>We walk with you from A to Z.</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Card.Img variant="top" src="/public/brandingpattren.png" className=' position-absolute top-0 img-card1 '  />
      
        <Col sm='12' md='6' lg='5' >
        
          <Card className='  card1' >
          
            
            <Card.Body  >
              <Card.Title>Marketing</Card.Title>
              <Card.Text>
              
                
              Talk to your customers and tell them you and your company's
              story through us the way you want.
              Let us plan the content that will bring your audience closer to you.
              </Card.Text>
              <Card.Title>In our marketing agency, we provide:</Card.Title>
                <Card.Text className='mb-0'> E-mail marketing.</Card.Text>
                <Card.Text className='mb-0'>Affiliate marketing.</Card.Text>
                <Card.Text className='mb-0'>Influencer marketing.</Card.Text>
                <Card.Text className='mb-0'>Market research and Analysis.</Card.Text>
               <Card.Text className='mb-0'>App store optimization ( ASO ).</Card.Text>
               <Card.Text className='mb-0'>Search engine Marketing ( SEM ).</Card.Text>
               <Card.Text className='mb-0'>Search engine optimization ( SEO ).</Card.Text>
               <Card.Text className='mb-0'>Social media marketing & campaigns.</Card.Text>
               <Card.Img variant='right'  src="/public/markiting.png" className=" position-absolute  end-0 bottom-0 cardImg "  />
              
              <Card.Title>We walk with you from A to Z.</Card.Title>
            </Card.Body>
            
          </Card>
          <Card.Img variant="right" src="/public/markrtingpattren.png" className=' position-absolute top-0 end-0  img-card2  '  />
        </Col>
        {/* <Card.Img variant="right" src="/public/markrtingpattren.png" className=' position-absolute top-0 end-0  img-card2  '  /> */}
      
    
      
        
          
      
    </Row>

        
    </div>





        </>
    )
}