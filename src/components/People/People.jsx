import React from "react";
import { comments, sliderSettings } from "../../utils/data";
import css from "./People.module.scss";
import Slider from "react-slick";
import { motion } from "framer-motion";
import {
  footerVariants,
  staggerChildren,
} from "../../utils/motion";
const People = () => {
  return (
    <section
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="people"></a>

      <div
        className={`yPaddings innerWidth ${css.container}`}
      >
        <div style={{ textAlign: "center" }} className={` ${css.heading}`}>
          <span className="primaryText">Отзывы</span>
          <p style={{ marginTop: "2rem" }}>Esk Professional Продукция</p>
        </div>

        <div className={`yPaddings ${css.comments}`}>
          <Slider {...sliderSettings} className={css.slider}>
            {comments.map((comment, i) => {
              return (
                <div className={`flexCenter ${css.comment}`} key={i}>
                  <img loading="lazy" src={comment.img} alt="" />
                  <p>{comment.comment}</p>
                  <div className={css.line}></div>
                  <div className={css.bio}>
                    <span>{comment.name}</span>
                    <span>{comment.post}</span>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default People;
