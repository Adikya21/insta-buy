import axios from "axios";
import { useEffect } from "react";
import { Row, Col, Button, Card } from "react-bootstrap"
import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react";
import PropTypes from 'prop-types';
export default function ProductDetails({handleAddToCart, cartItems}) {
    const navigate = useNavigate();
    const location = useLocation();
    // const product = location.state;
    // console.log(product)
    const { title, price, description, images, category, id } = location.state;
    const [otherProducts, setOtherProducts] = useState([]);
    useEffect(() => {
        async function getData() {
            const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${category.id || 1}/products?limit=20&offset=0`)
            setOtherProducts(response.data)
            // console.log(response.data)
        }
        getData()
    }, [category.id])
    return (
        <div style={{ padding: 50 }}>
            <Row>
                <Col lg={2}>
                    {images.map((image => {
                        return (
                            <div key={image}>
                                <img src={image} width={150} alt="" style={{ marginBottom: 20, borderRadius: 8 }} />
                            </div>
                        )
                    }))}
                </Col>
                <Col lg={5}>
                    <div>
                        <img src={images[0]} alt="" width={350} style={{ marginBottom: 20, borderRadius: 8 }} />
                        <h4>{title}</h4>
                        <h3 style={{ color: '#1976D2' }}>${price}</h3>
                        <h5>{description}</h5>
                        <Button style={{ marginTop: 30 }} onClick={() => {
                            if(id in cartItems){
                                const currentItem = cartItems[id];
                                handleAddToCart({[id]:  {title,price,quantity: currentItem.quantity + 1}})
                            }else{
                                handleAddToCart({[id]:  {title,price,quantity:1}})
                            }
                            
                        }}>Add To Cart </Button>
                    </div>
                </Col>
                <Col lg={5}>
                    <div>
                        <h2>Other products in same category</h2>
                        <div style={{ display: "flex", flexWrap: 'wrap' }}>
                            {otherProducts.map((product) => {
                                if (product.id == id) return
                                return (
                                    <Card key={product.id} style={{ width: '15rem', border: 'none', margin: 10 }}>
                                        <Card.Img src={product.images[0]} />
                                        <Card.Title>{product.title.split(" ").slice(0, 2).join(" ")}</Card.Title>
                                        <Card.Text style={{color: '#1976D2'}}>${product.price}</Card.Text>
                                        <Button onClick={() => navigate(`/products/${product.id}`, { state: product })} style={{ width: 160 }}>View Item</Button>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
ProductDetails.propTypes = {
    handleAddToCart: PropTypes.func.isRequired,
    cartItems: PropTypes.object.isRequired
    };