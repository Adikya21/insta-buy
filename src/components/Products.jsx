import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function Products(){
    const navigate = useNavigate();
    const [products, setProducts] = useState([])
    useEffect(()=>{
        async function getProducts(){
            const response  =  await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=20');
            setProducts(response.data)
            console.log(response.data)
        }
        getProducts()
    }, [])
    
    return(
        <div style={{padding: 50}}>
            <h1>Select  a product</h1>
            <div style={{display:'flex', flexWrap:'wrap'}}>
                {products.map((product)=>{
                    return(
                        <Card key={product.id} style={{width:'22rem', border:'none', margin:10}}>
                            <Card.Img src={product.images[0]}/>
                            <Card.Title>{product.title.split(" ").slice(0, 3).join(" ")}</Card.Title>
                            <Card.Text>${product.price}</Card.Text>
                            <Button onClick={()=> navigate(`/products/${product.id}`,{state:product})} style={{width:160}}>View Item</Button>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}