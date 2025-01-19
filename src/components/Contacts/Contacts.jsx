import React, { ReactElement } from "react";
import axios from "axios";
import { InputMask } from "primereact/inputmask";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { MdExpandMore } from "react-icons/md";
import "./Contacts.scss";

const accordionData = [
  {
    title: "Ознакомление с продукцией",
    description:
      "Посетите раздел Продукция: Перейдите на сайт Esk Professional и изучите ассортимент товаров. Обратите внимание на описания, состав и преимущества каждого продукта, чтобы понять, какие из них могут удовлетворить ваши потребности. Чтение отзывов: Ознакомьтесь с отзывами других клиентов, чтобы получить представление о реальных результатах использования продукции. Это поможет вам сделать осознанный выбор."
  },
  {
    title: "Получение ответов на вопросы",
    description:
      "Обратитесь в поддержку: Если у вас остались вопросы, воспользуйтесь функцией онлайн-чата или формой обратной связи, чтобы получить консультацию от специалистов Esk Professional. Они готовы ответить на все ваши вопросы и помочь с выбором.",
  },
  {
    title: "Оставление заявки на покупку",
    description:
      "Заполнение заявки: После того как вы получили всю необходимую информацию, выберите интересующий вас продукт и нажмите кнопку Купить. Заполните простую форму заявки, указав свои контактные данные. Подтверждение и оплата: После отправки заявки ожидайте подтверждения от менеджера, который свяжется с вами для уточнения деталей и предоставления информации о способах оплаты. Это сделает процесс покупки легким и удобным.",
  },
];

const Contacts = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const notify = () =>
    toast.success("Спасибо за заявку! Менеджер свяжется с вами в ближайшее время!", {
      position: "top-center",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!name || !message) {
      toast.error("Пожалуйста, заполните все поля!", {
        position: "top-center",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    const serviceId = "service_2msiwma";
    const templateId = "template_mjadxcy";
    const publicKey = "nR2YGh1KWctgAziIS";

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "Esk Professional",
        message: message,
      },
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log(res.data);

      notify();

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.log(error);
      toast.error(
        "Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз.",
        {
          position: "top-center",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
    }
  };

  return (
    <section className="container contact innerWidth">
      <div id="experties" className="contactContainer">
        <div >
          {accordionData.map((item, index) => (
            <Accordion
              key={index}
              defaultExpanded={index === 2}
              className="accordion"
            >
              <AccordionSummary
                expandIcon={<MdExpandMore color="#4F46E5" size={35} />}
              >
                <h2 className="accordion-title">{item.title}</h2>
              </AccordionSummary>
              <AccordionDetails>
                <p className="accordion-description">{item.description}</p>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        <div className="postFromContainer">
          <h1 className="postFromContainer-title">
            Подать заявку
          </h1>
          <form  onSubmit={sendEmail}>
            <div className="postFromContainer-form">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="ФИО клиента"
                required
                className="postFromContainer-input"
              />
              <InputMask
                id="phone"
                mask="+7 (999) 999-99-99"
                placeholder="Номер телефона"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="postFromContainer-input"
              />
            </div>

            <button type="submit" className="postFromContainer-button">
            Оформить заявку
            </button>
          </form>
          <ToastContainer />
          <span className="postFromContainer-description">
          Оставьте заявку на консультацию с Esk Professional и получите профессиональные рекомендации для вашего ухода!
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
