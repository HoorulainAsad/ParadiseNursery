import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      
      <div className='head' >
      <h2 style={{fontSize:50}}>Welcome To Paradise Nursery</h2>
      <h3>Where Green Meets Serenity</h3>
      <button onClick={() => navigate('/products')}>Get Started</button>
      </div>


      <div  className='para'>
          <p>
            Welcome to the Paradise Nursery, where green meets serenity.
          </p>

          <p>
          Paradise Nursery offers a vibrant collection of plants designed to bring natural beauty into your home and office. From lush houseplants to exotic blooms, we provide a wide variety that suits every taste and space. Whether you're a seasoned gardener or a beginner, our plants promise freshness and vitality.
          <br/>
          At Paradise Nursery, we understand that greenery has a profound impact on well-being. Our mission is to connect people with nature, offering high-quality plants and expert advice. Explore our selection and transform your living spaces into serene sanctuaries, bringing the tranquility of nature right to your doorstep.
          <br/>
          At Paradise Nursery, we specialize in a diverse range of plants that enhance any environment. Our selection includes flowering plants, succulents, herbs, and more, each carefully nurtured for your home or garden.
          </p>
      </div>
    </div>
    


  );
};

export default LandingPage;
