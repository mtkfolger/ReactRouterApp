import React from "react";
import "../App.css";
import CoffeeHero from '../../src/coffee1.jpg'


function Home() {
    return (
    <div>
      <img className="main-image" src={CoffeeHero} alt="Coffee=Pour"></img>
        
            <h2 className="home-para">Products</h2>

            </div>
    );

    
}

  export default Home;