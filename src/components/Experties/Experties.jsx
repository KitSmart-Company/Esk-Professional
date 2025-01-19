import React from "react";
import { WhatDoIHelp } from "../../utils/data";
import css from "./Experties.module.scss";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { MdOutlineCastForEducation } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { WiTime10 } from "react-icons/wi";
import { IoCallSharp } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  bgcolor: "background.paper",
  boxShadow: 24,
  marginTop: "65px",
  borderRadius: "30px",
  p: 2,
  outline: "none",
};

const Experties = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);

  return (
    <section className={css.wrapper}>
      <a className="anchor"></a>
      <div
        className={`paddings yPaddings innerWidth flexCenter ${css.container}`}
      >
        <div className={css.leftSide}>
          <div onClick={handleOpen} className={css.exp}>
            <div className={css.flexCenter}>
              <MdOutlineCastForEducation size={25} color="white" />
            </div>
            <div>
              <span>Обучение</span>
            </div>
          </div>
          <div className={css.exp} onClick={handleOpen2}>
            <div className={css.flexCenter}>
              <IoCallOutline size={25} color="white" />
            </div>
            <div>
              <span>Контакты</span>
            </div>
          </div>
          <div className={css.exp} onClick={handleOpen3}>
            <div className={css.flexCenter}>
              <GrGallery size={25} color="white" />
            </div>
            <div>
              <span>Галерея</span>
            </div>
          </div>
        </div>

        <div className={css.rightSide}>
          <span className="primaryText">
            Для чего используют ESK Professional ?{" "}
          </span>
          {WhatDoIHelp.map((paragraph, i) => (
            <span className="secondaryText" key={i}>
              {paragraph}
            </span>
          ))}
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={`${css.modalRow} innerWidth`}>
            <button
              style={{ position: "absolute", top: "-3.5rem" }}
              className="close-button"
              onClick={handleClose}
            >
              ×
            </button>
            <div className={`${css.modalContainer}`}>
              <img src="./training.jpg" alt="" />
              <div>
                <h1>Обучение в Академии Esk Professional</h1>
                <p>
                  Уважаемые ученики Академии Esk Professional! Мы рады сообщить,
                  что всем участникам семинаров, вебинаров, курсов по обучению
                  на технолога и индивидуальных занятий предоставляются
                  бесплатные именные сертификаты.
                </p>

                <h3>
                  Обучение в Академии Esk Professional: откройте для себя мир
                  красоты!
                </h3>
                <span>
                  Хотите стать частью этой увлекательной сферы и приобрести
                  востребованную профессию или повысить свою квалификацию?
                </span>
              </div>
            </div>

            <p>
              Тогда мы ждем вас в нашей Академии! 🏨❗️ Мы знаем о красоте все!
              💃🏻💃🏼💃🏻
            </p>
            <p>
              Вы можете выбрать индивидуальное обучение, подбирая удобную для
              вас дату. 🙌 Запись осуществляется по предоплате 💳💸‼️
            </p>

            <h4>Стоимость обучения:</h4>
            <ul>
              <li>🔸 Индивидуально: 12000₽</li>
              <li>🔸 В группе: 9000₽ 🙌</li>
            </ul>
            <h4>Что входит в обучение:</h4>
            <ul>
              <li>🔸 Кератиновое выпрямление-BC Original</li>
              <li>🔸 Нанопластика-Alpen Gold</li>
              <li>🔸 Горячий ботокс-Alpa Ton</li>
              <li>🔸 Холодный ботокс-ReLief</li>
              <li>🔸 Флисинг (прикорневой объём)</li>
            </ul>
            <h4>Программа семинара:</h4>
            <ul>
              <li>🔸 Знакомство с продуктами Esk Professional</li>
              <li style={{ display: "flex", alignItems: "center" }}>
                🔸{" "}
                <p style={{ margin: "0" }}>
                  Основы физиологии кожи и волос, структура и строение волоса
                </p>
              </li>
              <li>🔸 Техника исполнения</li>
              <li>🔸 Ошибки мастеров</li>
              <li style={{ display: "flex", alignItems: "center" }}>
                🔸{" "}
                <p style={{ margin: "0" }}>
                  Работа с поврежденными волосами и со сложными кудрями.
                </p>
              </li>
              <li>🔸 Флисинг для волос.</li>
              <li>🔸 Отработка на моделях</li>
              <li style={{ display: "flex", alignItems: "center" }}>
                🔸{" "}
                <p style={{ margin: "0" }}>
                  Маркетинговая часть программы: расчет и себестоимости процедур
                </p>
              </li>
              <li>🔸 Выдача сертификатов (3 сертификата)</li>
              <li>🔸 Фото на память</li>
            </ul>
            <p className={css.secondaryText}>
              Курс подходит как для учениц с нулевой базой, так и для повышения
              квалификации Возможно также пройти данное обучение индивидуально,
              выбрав удобную для себя дату прохождения обучения.
            </p>
          </div>
        </Box>
      </Modal>
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={`${css.modalRow} innerWidth`}>
            <button
              style={{ position: "absolute", top: "-3.5rem" }}
              className="close-button"
              onClick={handleClose2}
            >
              ×
            </button>
            <div className={`${css.modalContainer}`}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A9fdfa952cde25f77fb8e4fbbd0eb368d578d2eff704d222d322615ff0b2e35a1&amp;source=constructor"
                width="100%"
                height="386"
                frameborder="0"
                style={{ borderRadius: "20px" }}
              ></iframe>
            </div>
            <h1 style={{ marginTop: "1rem", marginBottom: "1rem" }}>
              Офис в Ставропле
            </h1>
            <p>г. Ставрополь, 50 лет ВЛКСМ 59а</p>

            <h4
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <WiTime10 size={25} color="purple" /> Время работы
            </h4>
            <ul>
              <li>Пн—Пт: с 09:00 до 19:00</li>
              <li>Сб—Вс: Выходные дни</li>
            </ul>
            <b
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "10rem",
              }}
            >
              <IoCallSharp size={25} color="purple" />
              +7 (962) 455-76-70
            </b>
          </div>
        </Box>
      </Modal>

      <Modal
        open={open3}
        onClose={handleClose3}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={`${css.modalRow} innerWidth`}>
            <button
              style={{ position: "absolute", top: "-3.5rem" }}
              className="close-button"
              onClick={handleClose3}
            >
              ×
            </button>
            <div className={css.gallery}>
              <figure>
                <img
                  src="https://eskprof.ru/image/cache/catalog/29marta-1500x1496.jpg"
                  alt=""
                />
                <figcaption>
                  <p>Нанопластика Alpha Gold</p>
                  <span>
                    Alpha Gold приятно пахнет и не включает в свой состав
                    формальдегид. Способ выравнивания волос продуктами Alpha
                    Gold разнится с техниками работы с аналогами. Отличительная
                    черта и преимущество состоят в двух этапном методе
                    выполнения процедуры.
                  </span>
                </figcaption>
              </figure>
              <figure>
                <img
                  src="https://eskprof.ru/image/cache/catalog/sos27.11-1500x1496.jpg"
                  alt=""
                />
                <figcaption>
                  <p>Маска интенсивного восстанвления SOS Rescue cream</p>
                  <span>
                    SOS Rescue cream - интенсивное восстановление и глубокое
                    увлажнение волос по всей длине. Комплекс двусернистых
                    аминокислот, входящих в состав, восстанавливает дисульфидные
                    связи в структуре волоса.
                  </span>
                </figcaption>
              </figure>
              <figure>
                <img
                  src="https://eskprof.ru/image/cache/catalog/5oktjabrja1-1500x1496.jpg"
                  alt=""
                />
                <figcaption>
                  <p>
                    Ботокс для экстремального восстановления и бриллиантового
                    блеска BTX Crema.{" "}
                  </p>
                  <span>
                    Alpha Gold приятно пахнет и не включает в свой состав
                    формальдегид. Способ выравнивания волос продуктами Alpha
                    Gold разнится с техниками работы с аналогами. Отличительная
                    черта и преимущество состоят в двух этапном методе
                    выполнения процедуры.
                  </span>
                </figcaption>
              </figure>
              <figure>
                <img
                  src="https://eskprof.ru/image/cache/catalog/sosbk-1500x1496.jpg"
                  alt=""
                />
                <figcaption>
                  <p>Маска интенсивного восстанвления SOS Rescue cream</p>
                  <span>
                    SOS Rescue cream - интенсивное восстановление и глубокое
                    увлажнение волос по всей длине. Комплекс двусернистых
                    аминокислот, входящих в состав, восстанавливает дисульфидные
                    связи в структуре волоса.
                  </span>
                </figcaption>
              </figure>

              <figure>
                <img
                  src="https://eskprof.ru/image/cache/catalog/bkoriginal-1500x1496.jpg"
                  alt=""
                />
                <figcaption>
                  <p>
                    Классическое кератиновое выпрямление премиум-класса BC
                    Original!
                  </p>
                  <span>
                    Качественный продукт, который производится в Бразилии,
                    стране, признанной мировым лидером в сфере кератинового
                    выпрямления волос.
                  </span>
                </figcaption>
              </figure>
              <figure>
                <img
                  src="https://eskprof.ru/image/cache/catalog/do_p12osle-1500x1496.jpg"
                  alt=""
                />
                <figcaption>
                  <p>
                    Классическое кератиновое выпрямление премиум-класса BC
                    Original!
                  </p>
                  <span>
                    Качественный продукт, который производится в Бразилии,
                    стране, признанной мировым лидером в сфере кератинового
                    выпрямления волос.
                  </span>
                </figcaption>
              </figure>
              <figure>
                <img
                  src="https://eskprof.ru/image/cache/catalog/27dekabrja-1500x1496.jpg"
                  alt=""
                />
                <figcaption>
                  <p>Ботокс для волос с эффектом эластинизации RELIFE </p>
                  <span>
                    В состав ботокса для волос входят необходимые для
                    оздоровления волос протеины и минералы, которые воздействуют
                    на волосы на уровне кутикулы. Активные вещества заполняют
                    поврежденные участки волос, благодаря чему каждый волос
                    становится упругим и гладким.
                  </span>
                </figcaption>
              </figure>
              <figure>
                <img
                  src="https://eskprof.ru/image/cache/catalog/24okt3-1500x1496.jpg"
                  alt=""
                />
                <figcaption>
                  <p>Нанопластика Alpha Gold</p>
                  <span>
                    Alpha Gold приятно пахнет и не включает в свой состав
                    формальдегид. Способ выравнивания волос продуктами Alpha
                    Gold разнится с техниками работы с аналогами. Отличительная
                    черта и преимущество состоят в двух этапном методе
                    выполнения процедуры.
                  </span>
                </figcaption>
              </figure>
            </div>
            <div style={{ marginBottom: "6rem" }}></div>
          </div>
        </Box>
      </Modal>
    </section>
  );
};

export default Experties;
