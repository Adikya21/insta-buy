import { Row, Col } from "react-bootstrap"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import signupImage from '../assets/signup.png'
import { useState } from "react";
import PropTypes from 'prop-types';
export default function Signup({setUser}) {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');

    const handleClick = () => {
        navigate('/')
    }
    return (
        <div style={{ backgroundColor: '#2979FF' }}>
            <Row style={{ padding: '75px' }}>
                <Col style={{ padding: 100 }}>
                    <div>
                        <h1 style={{color:'white'}}>InstaBuy!</h1>
                        <h3 style={{color:'white'}}>Once place all you needs</h3>
                        <Form >
                            <div style={{display:'flex', justifyContent:'space-between', width:'70%'}}>
                                <Form.Group style={{width:'49%'}} className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" onChange={(e)=> setEmail(e.currentTarget.value)}/>
                                </Form.Group>
                                <Form.Group style={{width:'49%'}} className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </div>
                            <Form.Group style={{width:'70%'}} className="mb-3" controlId="formBasicConfirmPassword">
                                    <Form.Control type="password" placeholder="Confirm Password" />
                                </Form.Group>
                            <Button   onClick={()=> 
                            {
                                localStorage.setItem('userEmail', email);
                                setUser(email)
                                navigate('/')
                            }} 
                            style={{width:'70%', marginBottom:26, border:'1px solid white'}} variant="primary" type="submit">Start Shopping</Button>
                            <div style={{color:'white'}}>
                                Join The Club, || <a onClick={() => handleClick()} style={{ cursor: 'pointer', color: 'white' }}>Click Here</a>
                            </div>
                        </Form>
                    </div>
                </Col>
                <Col >
                    <img src={signupImage} style={{height:'80vh'}} alt="Login" />
                </Col>
            </Row>
        </div>
    );
}

Signup.propTypes = {
    setUser: PropTypes.func.isRequired
    };