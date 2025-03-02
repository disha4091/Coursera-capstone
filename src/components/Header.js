import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../assests/restauranfood.jpg"

const Header = () => {
  return (
    <header className="header">
      <section className="">
        <div className="banner">
          <h2>Little Lemon</h2>

          <h6>Chicago</h6>
          <p>
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes servred with a modern twist.
          </p>

          <Link to="/booking">
                <button aria-label="On click">Reserve Table</button>
          </Link>
        </div>
        <div className="banner-img">
            <img src={bannerImg} alt="food" />
        </div>
      </section>
    </header>
  );
};

export default Header;
