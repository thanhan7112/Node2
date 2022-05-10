
import { React, useState, useEffect, useReducer } from 'react'
import Axios from "axios";
import { Card, Button } from 'react-bootstrap';
import { FaPlusCircle, FaCartArrowDown, FaHandHoldingUsd, FaMinusCircle } from "react-icons/fa";
const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
}

function getTotal(cart) {
  const total = cart.reduce((totalCost, item) => totalCost + item.Price, 0);
  return total.toLocaleString(undefined, currencyOptions)
}
function cartReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, action.post];
    case 'remove':
      const postIndex = state.findIndex(item => item.Name === action.post.Name);
      if (postIndex < 0) {
        return state;
      }
      const update = [...state];
      update.splice(postIndex, 1)
      return update
    default:
      return state;
  }
}
function List(props) {
  const [cart, setCart] = useReducer(cartReducer, []);

  function add(post) {
    setCart({ post, type: 'add' });
  }

  function remove(post) {
    setCart({ post, type: 'remove' });
  }
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const { data } = await Axios.get(
      "http://localhost:7000/posts"
    );
    const posts = data;
    setPosts(posts);
    console.log(posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filteredData = posts.filter((el) => {
    if (props.input === '') {
      return el;
    } else {
      return el.Name.toLowerCase().includes(props.input)
    }
  })
  return (
    <div className='row' style={{ margin: '0 auto' }}>
      <div style={{ marginLeft: '95%', marginTop: '-2%' }}><FaCartArrowDown></FaCartArrowDown> {cart.length}</div>
      <div style={{ marginLeft: '95%', marginTop: '-1%' }}><FaHandHoldingUsd></FaHandHoldingUsd>
        {getTotal(cart)}</div>
      {filteredData.map((post) => (
        <Card key={post.Name} style={{ width: '22rem', marginLeft: '4rem', color: 'black', marginTop: '3rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{post.Name}</Card.Title>
            <Card.Title>{post.Author}</Card.Title>
            <Card.Text>
              {post.Price} $
            </Card.Text>
            <Button variant="white" onClick={() => add(post)}><FaPlusCircle></FaPlusCircle></Button>
            <Button variant="white" onClick={() => remove(post)}><FaMinusCircle></FaMinusCircle></Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}
export default List;