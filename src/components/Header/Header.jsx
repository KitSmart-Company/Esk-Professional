import React, { useState } from "react";
import css from "./Header.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import svgLogo from "../../../public/logo-black.png";
import { IoLogoInstagram } from "react-icons/io";

const Header = () => {
  const headerShadow = useHeaderShadow();

  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const handleChangeMenu = () => {
    setIsOpen(!isOpen);
  };

  window.onresize = () => {
    setWidth(window.innerWidth);
    if (width <= 900) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className={css.bpx}></div>
      <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView="show"
        className={`bg-primary ${css.wrapper}`}
        viewport={{ once: true, amount: 0.25 }}
        style={{ boxShadow: headerShadow }}
      >
        <div className={`${css.navbar}`}>
          <div className={css.name}>
            <a style={{ textDecoration: "none", color: "#0D2F3F" }} href="/">
              <div className={css.alBarakaContainer}>
                <img loading="lazy" width={60} src={svgLogo} alt="logo" />
                <span className={css.alBarakaText}>
                  Esk Professional <br />{" "}
                  <p style={{ fontSize: "10px" }}>ПРОДУКЦИЯ</p>
                </span>
              </div>
            </a>
          </div>
          <ul className={`${css.links}`}>
            <li>
              <a href="#experties">ПОДАТЬ ЗАЯВКУ</a>
            </li>
            <li>
              <a href="#work">О НАС</a>
            </li>
            <li>
              <a href="#papular">ПОПУЛЯРНЫЕ</a>
            </li>
            <li>
              <a href="#products">ПРОДУКТЫ</a>
            </li>
            <li className={css.links}>
              <a style={{ fontWeight: "500" }} href="tel:+7 (962) 455-76-70">
              +7 (962) 455-76-70
              </a>
            </li>
            <li className={css.svgHeader}>
              <a
                target="_blank"
                href="http://wa.me/+79624557670"
              >
                <FaWhatsapp size={20} />
              </a>
            </li>
            <li className={css.svgHeader}>
              <a target="_blank" href="https://t.me/Alya2737">
                <FaTelegram size={20} />
              </a>
            </li>
            <li className={css.svgHeader}>
              <a target="_blank" href="https://www.instagram.com/p/ClRoSUnMX4r/?igsh=aGZtY3FmdTcxOHN1">
                <IoLogoInstagram size={20} />
              </a>
            </li>
          </ul>
          <div className={css.menuIcon}>
            <BiMenuAltRight
              style={{ cursor: "pointer" }}
              size={25}
              onClick={handleChangeMenu}
            />
          </div>
        </div>
        <div className={`${css.dropDownMenu} ${isOpen ? css.open : ""}`}>
          <ul className={`${css.links}`}>
            <li>
              <a href="#experties">ПОДАТЬ ЗАЯВКУ</a>
            </li>
            <li>
              <a href="#work">О НАС</a>
            </li>
            <li>
              <a href="#papular">ПОПУЛЯРНЫЕ</a>
            </li>
            <li>
              <a href="#products">ПРОДУКТЫ</a>
            </li>
            <li className={`${css.links}`}>
            <a href="tel:+7 (962) 455-76-70">
              +7 (962) 455-76-70
              </a>
            </li>
            <div style={{ display: "flex", gap: "1rem" }}>
              <li className={css.svgHeader}>
                <a
                  target="_blank"
                  href="http://wa.me/+79624557670"
                >
                  <FaWhatsapp size={20} />
                </a>
              </li>
              <li className={css.svgHeader}>
                <a target="_blank" href="https://t.me/Alya2737">
                  <FaTelegram size={20} />
                </a>
              </li>
              <li className={css.svgHeader}>
                <a target="_blank" href="https://www.instagram.com/p/ClRoSUnMX4r/?igsh=aGZtY3FmdTcxOHN1">
                  <IoLogoInstagram size={20} />
                </a>
              </li>
            </div>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
