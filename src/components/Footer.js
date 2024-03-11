import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Link to="/contact" className="btn-primary">
        Contact Us
      </Link>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
        deserunt.
      </p>
      <p>Call At: Nebil</p>
      <p>
        Copyright© 2024 by Furniture Shop. <br />
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
