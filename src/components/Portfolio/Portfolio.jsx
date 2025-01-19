import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import {
  fadeIn,
  textVariant,
} from "../../utils/motion";
const Portfolio = () => {
  return (
    <section id="papular" className={`paddings ${css.wrapper}`}>
      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        <div variants={textVariant(0.4)} className={` ${css.heading}`}>
          <div style={{ textAlign: "center" }}>
            <span className="primaryText">Популярные</span>
            <p style={{ marginTop: "10px" }}>
              Часто покупаемые товары Esk Professional
            </p>
          </div>
        </div>

        <div className={`flexCenter ${css.showCase}`}>
          <motion.img
            loading="lazy"
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src="https://basket-15.wbbasket.ru/vol2302/part230294/230294385/images/big/1.webp"
            alt="project"
          />
          <motion.img
            loading="lazy"
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            src="https://basket-05.wbbasket.ru/vol956/part95600/95600958/images/big/1.webp"
            alt="project"
          />
          <motion.img
            loading="lazy"
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            src="https://basket-02.wbbasket.ru/vol160/part16043/16043644/images/big/1.webp"
            alt="project"
          />
          <motion.img
            loading="lazy"
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src="https://basket-04.wbbasket.ru/vol690/part69069/69069590/images/big/1.webp"
            alt="project"
          />
          <motion.img
            loading="lazy"
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            src="https://basket-04.wbbasket.ru/vol690/part69069/69069333/images/big/1.webp"
            alt="project"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
