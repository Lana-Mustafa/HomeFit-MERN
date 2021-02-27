import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel,  Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// import LoadingSpinner from '../components/LoadingSpinner';
// import Message from '../components/Message';
import * as productActions from '../store/actions/productActions';

const ProductCarousel = () => {
  const dispatch = useDispatch();

  // const productTopRated = useSelector((state) => state.productTopRated);
  // const { loading, error } = productTopRated;
  // const products = productTopRated.products || [];

  useEffect(() => {
    dispatch(productActions.listTopProducts());
  }, [dispatch]);

  return <Carousel fade >
 
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/4498609/pexels-photo-4498609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Second slide"
    />

    <Carousel.Caption className="captionh3">
      <h3 >Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      
  <Button className= "singinuser" ><a href="#"  className= "singinuser">Primary</a></Button>{' '}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src="https://images.pexels.com/photos/6740032/pexels-photo-6740032.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Second slide"
    />

    <Carousel.Caption className="captionh3">
      <h3 >Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      
  <Button className= "singinuser" ><a href="#"  className= "singinuser">Primary</a></Button>{' '}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://wpdemo.magikthemes.com/sports/wp-content/uploads/sites/60/2017/09/home-slide2.jpg"
      alt="Third slide"
    />

<Carousel.Caption className="captionh3">
      <h3 >Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      
      <Button className= "singinuser" ><a href="#"  className= "singinuser">Primary</a></Button>{' '}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
};

export default ProductCarousel;
