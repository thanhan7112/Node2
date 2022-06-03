
import { React, useState, useEffect, useReducer } from 'react'
import Axios from "axios";
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import '../Style/main.css';
import { FaEthereum } from "react-icons/fa";
import { FaPlusCircle, FaCartArrowDown, FaHandHoldingUsd, FaMinusCircle } from "react-icons/fa";
const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
}
// function getTotal(cart) {
//   const total = cart.reduce((totalCost, item) => totalCost + item.Price, 0);
//   return total.toLocaleString(undefined, currencyOptions)
// }
function cartReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, action.product];
    case 'remove':
      const productIndex = state.findIndex(item => item.Name === action.product.Name);
      if (productIndex < 0) {
        return state;
      }
      const update = [...state];
      update.splice(productIndex, 1)
      return update
    default:
      return state;
  }
}
function List(props) {
  const [cart, setCart] = useReducer(cartReducer, []);

  function add(product) {
    setCart({ product, type: 'add' });
  }

  function remove(product) {
    setCart({ product, type: 'remove' });
  }
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const { data } = await Axios.get(
      "http://localhost:8090/api/products"
    );
    const products = data;
    setProducts(products);
    console.log(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  const str = undefined;
  const filteredData = products.filter((el) => {
    if (props.input === '') {
      return el;
    } else {
      return el.Name.toLowerCase().includes(props.input)
    }
  })
  return (
    <div className='row' style={{ margin: '0 auto'}}>
      {filteredData.map((product) => (
        <Card className='btn-card' key={product.Name} style={{ width: '18rem', marginLeft: '4rem', color: 'black', marginTop: '3rem', height:'25rem' }}>
          <Card.Img style={{height:'50%', marginBottom:'20px', marginTop:'10px'}} variant="top" src={product.profileImg} />
          <center>
          <Card.Body >
            <Card.Title className='text'>{product.Name}</Card.Title>
            <Card.Title className='text'>{product.Author}</Card.Title>
            <Card.Text className='text'>
              {product.Price} <FaEthereum style={{marginTop:'-4px'}}></FaEthereum>
            </Card.Text>
            {/* <Button variant="white" onClick={() => add(post)}><FaPlusCircle></FaPlusCircle></Button>
            <Button variant="white" onClick={() => remove(post)}><FaMinusCircle></FaMinusCircle></Button> */}
            <Link style={{width:'8rem', height:'2.5rem'}} to={"/PayWithMetaMask/" + product._id} className="btn ">Metamask</Link>
          </Card.Body>
          </center>
        </Card>
      ))}
    </div>
  )
}
export default List;