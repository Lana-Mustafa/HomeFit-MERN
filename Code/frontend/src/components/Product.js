import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Row, Col, ListGroup, Card, Form, Button } from 'react-bootstrap'
import Rating from './Rating'
const Product = ({ product, history, match }) => {
  const [qty, setQty] = useState(1)
  const addToCartHandler = (proId) => {
    const id = proId.target.value
    history.push(`/cart/${id}?qty=${qty}`)
  }
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} style={{ height: 177 }} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div' style={{ height: 50 }}>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <div className='my-3'>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </div>
        </Card.Text>
        <Card.Text as='h3'>${product.price}</Card.Text>
        {product.countInStock > 0 && (
          <ListGroup.Item>
            <Row>
              <Col lg={5}>Qty</Col>
              <Col lg={7}>
                <Form.Control
                  as='select'
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                  custom
                >
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            </Row>
          </ListGroup.Item>
        )}
        <ListGroup.Item>
          <Button
            onClick={addToCartHandler}
            className='btn-block'
            value={product._id}
            type='button'
            active={product.countInStock > 0}
            disabled={product.countInStock === 0}
          >
            Add To Cart
          </Button>
        </ListGroup.Item>
      </Card.Body>
    </Card>
  )
}
export default withRouter(Product)