import { Row, Col, Button, Carousel } from "react-bootstrap";
import car1 from '../assets/car1.png';
import car2 from '../assets/car2.png';
import car3 from '../assets/car3.png';
import c1 from '../assets/c1.png';
import c2 from '../assets/c2.png';
import c3 from '../assets/c3.png';
import c4 from '../assets/c4.png';
import c5 from '../assets/c5.png';
import c6 from '../assets/c6.png';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
export default function Home({user}) {
    const navigate = useNavigate()
    const handleClick = () =>{
        if(user){
            navigate('/products')
        }else{
            navigate('/')
        }
    }

    return (
        <div className="home-container">
            <Carousel>
                <Carousel.Item>
                    <Row>
                        <Col lg={6}>
                            <div style={{ padding: 100 }}>
                                <h4 style={{ fontWeight:700 }}>SHOP WITH UTMOST</h4>
                                <h3 style={{ color: '#1976D2', fontWeight:700  }}>CONFIDENCE</h3>
                                <h6 >Shop for the latest trendy cloths to the best gadgets.</h6>
                                <div>
                                    <Button onClick={handleClick} style={{  width:200 }} variant="primary">Browse Products</Button>
                                </div>
                                <div>
                                    <h3 >Products Available from</h3>
                                    <div>
                                        <img alt="" src={c1} height={30} />
                                        <img alt="" src={c2} height={30} />
                                        <img alt="" src={c3} height={30} />
                                        <img alt="" src={c4} height={30} />
                                        <img alt="" src={c5} height={30} />
                                        <img alt="" src={c6} height={30} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} >
                            <img alt="" src={car1} style={{height:"80vh"}}  />
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col lg={6} >
                            <div style={{ padding: 100 }}>
                                <h4 style={{  fontWeight:700  }}>SHOP WITH UTMOST</h4>
                                <h3 style={{  color: '#1976D2', fontWeight:700  }}>STYLE</h3>
                                <h6 >Shop with lates trendy products.</h6>
                                <Button onClick={handleClick} style={{ width:200,   }} variant="primary">Browse Products</Button>
                                <div>
                                    <h3>Products Available from</h3>
                                    <div>
                                        <img alt="" src={c1} height={30} />
                                        <img alt="" src={c2} height={30} />
                                        <img alt="" src={c3} height={30} />
                                        <img alt="" src={c4} height={30} />
                                        <img alt="" src={c5} height={30} />
                                        <img alt="" src={c6} height={30} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} >
                            <img alt="" src={car2} style={{height:"80vh"}}  />
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col  lg={6}>
                            <div  style={{ padding: 100 }}>
                                <h4 style={{   fontWeight:700  }}>SHOP WITH UTMOST</h4>
                                <h3 style={{  color: '#1976D2', fontWeight:700  }}>DISCOUNTS</h3>
                                <h6  >Shop for the latest trendy cloths to the best gadgets.</h6>
                                <Button onClick={handleClick} style={{ width:200 }} variant="primary">Browse Products</Button>
                                <div>
                                    <h3 >Products Available from</h3>
                                    <div>
                                        <img alt="" src={c1} height={30} />
                                        <img alt="" src={c2} height={30} />
                                        <img alt="" src={c3} height={30} />
                                        <img alt="" src={c4} height={30} />
                                        <img alt="" src={c5} height={30} />
                                        <img alt="" src={c6} height={30} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} >
                            <img alt="" src={car3} style={{height:"80vh"}} />
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </div>

    )
}

Home.propTypes = {
    user: PropTypes.string.isRequired
    };