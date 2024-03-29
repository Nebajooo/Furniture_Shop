import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import { Link } from "react-router-dom";
import { IoMdCall, IoIosMail } from "react-icons/io";
import { GoLocation } from "react-icons/go";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaRegAddressBook,
} from "react-icons/fa";

const services = [
  {
    icon: <IoMdCall />,
    title: "Call At",
    info: "XXXXXXXXXX",
  },
  {
    icon: <IoIosMail />,
    title: "Mail Us At",
    info: "nebajoo2015@gmail.com",
  },
  {
    icon: <FaWhatsapp />,
    title: "Join WhatsApp Group",
    info: (
      <Link to="/joinwhatsapp" target="_blank" className="btn-primary">
        Join
      </Link>
    ),
  },
  {
    icon: <FaInstagram />,
    title: "Instagram",
    info: (
      <Link to="/joininsta" target="_blank" className="btn-primary">
        Follow
      </Link>
    ),
  },
  {
    icon: <FaFacebookF />,
    title: "Facebook",
    info: (
      <Link to="/joinfacebook" target="_blank" className="btn-primary">
        Follow
      </Link>
    ),
  },
  {
    icon: <FaRegAddressBook />,
    title: "Address",
    info: "Street 1010, Addis Ababa",
  },
  {
    icon: <GoLocation />,
    title: "Find Us",
    info: (
      <Link to="/locate" target="_blank" className="btn-primary">
        Locate
      </Link>
    ),
  },
];

const opening = [
  {
    icon: "Mon",
    title: "10am - 10pm",
    info: "",
  },
  {
    icon: "Tue",
    title: "10am - 10pm",
    info: "",
  },
  {
    icon: "Wed",
    title: "10am - 10pm",
    info: "",
  },
  {
    icon: "Thurs",
    title: "10am - 10pm",
    info: "",
  },
  {
    icon: "Fri",
    title: "10am - 10pm",
    info: "",
  },
  {
    icon: "Sat",
    title: "10am - 10pm",
    info: "",
  },
  {
    icon: "Sun",
    title: "10am - 10pm",
    info: "",
  },
];

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Hero>
        <Banner title="Contact Us" subtitle="We are always there for you">
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </Banner>
      </Hero>
      <Services services={services} title="Contact Us" />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <Services services={opening} title="Opening Hours" />
      <Footer />
    </>
  );
};

export default Contact;
