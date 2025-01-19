import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
import { IoLogoInstagram } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings ${css.wrapper}`}
      >
        <motion.div
          variants={footerVariants}
          className={`innerWidth yPaddings flexCenter ${css.container}`}
        >
          <div className={css.left}>
            <span className="primaryText">Esk Professional</span>
            <span className="primaryText">
              <a
                style={{ color: "#B157FE", fontSize: "20px" }}
                href="mailto:esk-professional@mail.ru"
              >
                esk-professional@mail.ru{" "}
              </a>
            </span>
          </div>

          <div className={css.right}>
            <div className={css.info}>
              <span className="secondaryText">Информация</span>
              <p>Адрес: г. Ставрополь, 50 лет ВЛКСМ 59а</p>
            </div>
            <ul className={css.menu}>
              <li>
                <a target="_blank" href="http://wa.me/+79624557670">
                  <FaWhatsapp color="#B157FE" size={25} />
                </a>
              </li>
              <li>
                {" "}
                <a target="_blank" href="https://t.me/Alya2737">
                  <FaTelegram color="#B157FE" size={25} />
                </a>
              </li>
              <li>
                {" "}
                <a
                  target="_blank"
                  href="https://www.instagram.com/p/ClRoSUnMX4r/?igsh=aGZtY3FmdTcxOHN1"
                >
                  <IoLogoInstagram color="#B157FE" size={25} />
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.section>
      <div className={css.bpx}></div>
    </>
  );
};

export default Footer;
