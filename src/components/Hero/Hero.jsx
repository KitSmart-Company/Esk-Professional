import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import { IoIosTimer } from "react-icons/io";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span
            className="primaryText"
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            Продукция
            <br />
            Esk Professional
          </motion.span>
          <motion.span
            className="secondaryText"
            variants={fadeIn("left", "tween", 0.4, 1)}
          >
         Кератин для волос.
         <br/> Восстановление структуры волос.
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img
            width={500}
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src="https://psv4.userapi.com/s/v1/d/16EAf-9ww6UOmEkhB6QB-wjBQHUMUzsUn4SryQKBNc9FQG35z5kAHEUHYscSNTXxqOrWQpyZIWQZAhAv6U48yF4IrXXj71wAVEW7QZ32piN2u7TI4IcwxQ/bckeratin1000ml-1000x1000.png"
            alt=""
          />
        </motion.div>

        <a className={css.email} href="mailto:esk-professional@mail.ru">
        esk-professional@mail.ru
        </a>

        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}
          >
            <div className="primaryText">16</div>
            <div className="secondaryText">
              <div>ЛЕТ</div>
              <div>НА РЫНКЕ</div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}
          >
           <IoIosTimer size={50}/>
            <span>Работаем с</span>
            <span>9:00 до 19:00</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
