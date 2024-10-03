import PropTypes from 'prop-types';
import { Table, Col, Row, Button } from 'react-bootstrap';
import cartImage from '../assets/cart.png';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cart({ cartItems }) {
    // console.log(cartItems);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const navigate = useNavigate()

    useEffect(() => {
        let tempPrice = 0;
        let tempQuantity = 0;

        Object.keys(cartItems).forEach((cartItemId) => {
            const details = cartItems[cartItemId];
            if (details) {
                tempQuantity += details.quantity;
                tempPrice += details.quantity * details.price;
            }
        });

        setTotalPrice(tempPrice);
        setTotalQuantity(tempQuantity);
    }, [cartItems]);

    return (
        <div style={{ margin: 40 }}>
            <Row>
                <Col>
                    <h3>Your Cart</h3>
                    <div style={{ margin: 40 }}>
                        <Table >
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(cartItems).map((cartItemId, index) => {
                                    const itemDetails = cartItems[cartItemId];
                                    return (
                                        <tr key={index}>
                                            <td>{itemDetails?.title}</td>
                                            <td>{itemDetails?.quantity}</td>
                                            <td>{itemDetails?.quantity * itemDetails?.price}</td>
                                        </tr>
                                    );
                                })}
                                <tr>
                                    <td>Total</td>
                                    <td>{totalQuantity}</td>
                                    <td>{totalPrice}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <Button onClick={() => navigate('/success')}>Checkout</Button>
                </Col>
                <Col>
                    <img src={cartImage} height={600} alt="Cart" />
                </Col>
            </Row>
        </div>
    );
}

Cart.propTypes = {
    cartItems: PropTypes.object.isRequired,
};
