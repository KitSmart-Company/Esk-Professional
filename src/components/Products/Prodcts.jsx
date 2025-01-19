import React, { useState } from "react";
import css from "./Prodcts.module.scss";
import ModalContainer from "../Modal";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { InputMask } from "primereact/inputmask";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 370,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 8,
};

const Prodcts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const products = [
    {
      id: 1,
      image:
        "https://eskprof.ru/image/cache/catalog/bcpack1000ml-1000x1000.png",
      image2: "https://sun9-25.userapi.com/s/v1/ig2/bQeAsbvxnCDH8D5Ek0eGF2q0UAaJ1KJNzMUDpY0gKKZ_hdOt1NKUXpa0V8Tb5ZljgoESpPVmdwPclDqayaeFC1wU.jpg?quality=95&as=32x38,48x56,72x85,108x127,160x188,240x282,360x423,480x564,540x635,640x752,720x847,1080x1270,1280x1505,1440x1693,1906x2241&from=bu&u=sDgITCIctrH0Eh_CT7dkcmPfInF_BTxE-TQntrQSoVU&cs=1837x2160",
      image3: "https://eskprofessional.com/images/katalog/cacao-oil.jpg",
      image4: "https://eskprofessional.com/images/katalog/keratin.jpg",
      image5: "https://eskprofessional.com/images/katalog/d-pantenol.jpg",
      title: "Профессиональный набор кератина BC Original 1000 мл",
      price: "15 600",
      description1: "Набор BC Original ",
      description2:
        "BC Original – качественный продукт, который производится в Бразилии, стране, признанной мировым лидером в сфере кератинового выпрямления волос. Оригинальная формула состава содержит комплекс специально подобранных компонентов, которые за одну процедуру восстанавливают поврежденную структуру волос.",
      description3: "Преимущества BC Original",
      description4: "Высокое качество;",
      description5: "Выгодная цена;",
      description6: "Состав, который не требует выдержки;",
      description7:
        "После проведения процедуры BC Original волосы становятся прямыми, блестящими и восстановленными на 100%!",
      description8: "Состав",
      description9:
        "Набор BC Original включает 3 продукта для проведения процедуры:",
      description10:
        "Deep Cleaning Shampoo - подготавливающий шампунь, реконструктор с кератином и маску для нормализации pH баланса.",
      description11: "Brazilian Mask Regeneration - кератин.",
      description12:
        "Restoration Mask - Закрепляющая маска нормализует pH баланс волос.",
      description13: "Ак тивные компоненты в составе",
      description14:
        "Масло какао Натуральный комплекс аминокислот и витаминов, которые увлажняют, смягчают и защищают волосы от внешних факторов.",
      description15:
        "Гидролизованный кератин Натуральный комплекс аминокислот и витаминов, которые увлажняют, смягчают и защищают волосы от внешних факторов.",
      description16:
        "D – пантенол D – пантенол активный компонент, созданный на основе витаминов группы В. Восстанавливает поврежденные участки волосяного стрежня, придает волосам гибкость за счет увлажнения и питания.",
    },
    {
      id: 2,
      image:
        "https://eskprof.ru/image/cache/catalog/bcshampoo1000-1000x1000.png",
      title: "Подготавливающий шампунь BC Original Deep Cleaning Shampoo 1000 мл",
      price: "2 600",
      description1: "Шампунь BC Original 1 шаг",
      description2:
        "Подготавливающий шампунь Deep Cleaning Shampoo из серии BC Original хорошо очищает волосы от загрязнений, таких как – остатки укладочных средств, пыль, атмосферные осадки. Шампунь мягко очищает и раскрывает кутикулярный слой, что необходимо для проведения второго этапа.",
    },
    {
      id: 3,
      image:
        "https://eskprof.ru/image/cache/catalog/bckeratin1000ml-400x400.png",
      title: "Кератин BC Original Brazilian Mask Regeneration 1000 мл",
      price: "12 500",
      description1: "BC Original Brazilian Mask Regeneration 2 шаг",
      description2:
        "Активный состав Brazilian Mask Regeneration из серии BC Original – оригинальная формула с кератином, которая проникает в глубь волоса и восстанавливает его по всей длине. Состав легко наносится и распределяется по длине волос, во время запечатывания происходит восстановительный процесс с эффектом выпрямления.",
    },
    {
      id: 4,
      image: "https://eskprof.ru/image/cache/catalog/bcmask1000ml-400x400.png",
      title: "Кератиновая маска для процедуры BC Original Restoration Mask 1000 мл",
      price: "3 600",
      description1: "BC Original Restoration Mask 3 шаг",
      description2:
        "Маска Restoration Mask из серии BC Original завершает процедуру выпрямления и восстановления волос. Маска уравновешивает кислотно-щелочной баланс волосяного полотна, что позволяет закончить процедуру демонстрацией гладких и блестящих волос.",
    },
    {
      id: 5,
      image: "https://eskprof.ru/image/cache/catalog/bcpack500ml-1000x1000.png",
      image2: "https://sun9-25.userapi.com/s/v1/ig2/bQeAsbvxnCDH8D5Ek0eGF2q0UAaJ1KJNzMUDpY0gKKZ_hdOt1NKUXpa0V8Tb5ZljgoESpPVmdwPclDqayaeFC1wU.jpg?quality=95&as=32x38,48x56,72x85,108x127,160x188,240x282,360x423,480x564,540x635,640x752,720x847,1080x1270,1280x1505,1440x1693,1906x2241&from=bu&u=sDgITCIctrH0Eh_CT7dkcmPfInF_BTxE-TQntrQSoVU&cs=1837x2160",
      image3: "https://eskprofessional.com/images/katalog/cacao-oil.jpg",
      image4: "https://eskprofessional.com/images/katalog/keratin.jpg",
      image5: "https://eskprofessional.com/images/katalog/d-pantenol.jpg",
      title: "Профессиональный набор кератина BC Original 500 мл",
      price: "9 290",
      description1: "Набор BC Original ",
      description2:
        "BC Original – качественный продукт, который производится в Бразилии, стране, признанной мировым лидером в сфере кератинового выпрямления волос. Оригинальная формула состава содержит комплекс специально подобранных компонентов, которые за одну процедуру восстанавливают поврежденную структуру волос.",
      description3: "Преимущества BC Original",
      description4: "Высокое качество;",
      description5: "Выгодная цена;",
      description6: "Состав, который не требует выдержки;",
      description7:
        "После проведения процедуры BC Original волосы становятся прямыми, блестящими и восстановленными на 100%!",
      description8: "Состав",
      description9:
        "Набор BC Original включает 3 продукта для проведения процедуры:",
      description10:
        "Deep Cleaning Shampoo - подготавливающий шампунь, реконструктор с кератином и маску для нормализации pH баланса.",
      description11: "Brazilian Mask Regeneration - кератин.",
      description12:
        "Restoration Mask - Закрепляющая маска нормализует pH баланс волос.",
      description13: "Ак тивные компоненты в составе",
      description14:
        "Масло какао Натуральный комплекс аминокислот и витаминов, которые увлажняют, смягчают и защищают волосы от внешних факторов.",
      description15:
        "Гидролизованный кератин Натуральный комплекс аминокислот и витаминов, которые увлажняют, смягчают и защищают волосы от внешних факторов.",
      description16:
        "D – пантенол D – пантенол активный компонент, созданный на основе витаминов группы В. Восстанавливает поврежденные участки волосяного стрежня, придает волосам гибкость за счет увлажнения и питания.",
    },
    {
      id: 6,
      image:
        "https://eskprof.ru/image/cache/catalog/bcoriginal500/esk8981-400x400.jpg",
      title: "BC Original шампунь глубокой очистки 500 мл",
      price: "1 450",
      description1: "Шампунь BC Original 1 шаг",
      description2:
        "Подготавливающий шампунь Deep Cleaning Shampoo из серии BC Original хорошо очищает волосы от загрязнений, таких как – остатки укладочных средств, пыль, атмосферные осадки. Шампунь мягко очищает и раскрывает кутикулярный слой, что необходимо для проведения второго этапа.",
    },

    {
      id: 21,
      image:
        "https://eskprof.ru/image/cache/catalog/bcoriginal500/esk8982-400x400.jpg",
      title: "Кератин BC Original Brazilian Mask Regeneration 500 мл.",
      price: "7 290",
    },
    {
      id: 22,
      image: "https://eskprof.ru/image/cache/catalog/bcmask500ml-400x400.png",
      title: "BC Original закрепляющая маска 500 мл",
      price: "1 850",
    },
    {
      id: 23,
      image:
        "https://eskprof.ru/image/cache/catalog/bcpack5001000500-400x400.png",
      title: "Профессиональный набор кератина BC Original 500/1000/500 мл",
      price: "13 900",
      image2: "https://sun9-25.userapi.com/s/v1/ig2/bQeAsbvxnCDH8D5Ek0eGF2q0UAaJ1KJNzMUDpY0gKKZ_hdOt1NKUXpa0V8Tb5ZljgoESpPVmdwPclDqayaeFC1wU.jpg?quality=95&as=32x38,48x56,72x85,108x127,160x188,240x282,360x423,480x564,540x635,640x752,720x847,1080x1270,1280x1505,1440x1693,1906x2241&from=bu&u=sDgITCIctrH0Eh_CT7dkcmPfInF_BTxE-TQntrQSoVU&cs=1837x2160",
      image3: "https://eskprofessional.com/images/katalog/cacao-oil.jpg",
      image4: "https://eskprofessional.com/images/katalog/keratin.jpg",
      image5: "https://eskprofessional.com/images/katalog/d-pantenol.jpg",
      description1: "Набор BC Original ",
      description2:
        "BC Original – качественный продукт, который производится в Бразилии, стране, признанной мировым лидером в сфере кератинового выпрямления волос. Оригинальная формула состава содержит комплекс специально подобранных компонентов, которые за одну процедуру восстанавливают поврежденную структуру волос.",
      description3: "Преимущества BC Original",
      description4: "Высокое качество;",
      description5: "Выгодная цена;",
      description6: "Состав, который не требует выдержки;",
      description7:
        "После проведения процедуры BC Original волосы становятся прямыми, блестящими и восстановленными на 100%!",
      description8: "Состав",
      description9:
        "Набор BC Original включает 3 продукта для проведения процедуры:",
      description10:
        "Deep Cleaning Shampoo 500мл - подготавливающий шампунь, реконструктор с кератином и маску для нормализации pH баланса.",
      description11: "Brazilian Mask Regeneration 1000мл - кератин.",
      description12:
        "Restoration Mask 500мл - Закрепляющая маска нормализует pH баланс волос.",
      description13: "Ак тивные компоненты в составе",
      description14:
        "Масло какао Натуральный комплекс аминокислот и витаминов, которые увлажняют, смягчают и защищают волосы от внешних факторов.",
      description15:
        "Гидролизованный кератин Натуральный комплекс аминокислот и витаминов, которые увлажняют, смягчают и защищают волосы от внешних факторов.",
      description16:
        "D – пантенол D – пантенол активный компонент, созданный на основе витаминов группы В. Восстанавливает поврежденные участки волосяного стрежня, придает волосам гибкость за счет увлажнения и питания.",
    },
    {
      id: 24,
      image: "https://eskprof.ru/image/cache/catalog/bcsmall-400x400.png",
      title: "Профессиональный набор кератина BC Original 100 мл",
      price: "3 200",
      image2: "https://sun9-25.userapi.com/s/v1/ig2/bQeAsbvxnCDH8D5Ek0eGF2q0UAaJ1KJNzMUDpY0gKKZ_hdOt1NKUXpa0V8Tb5ZljgoESpPVmdwPclDqayaeFC1wU.jpg?quality=95&as=32x38,48x56,72x85,108x127,160x188,240x282,360x423,480x564,540x635,640x752,720x847,1080x1270,1280x1505,1440x1693,1906x2241&from=bu&u=sDgITCIctrH0Eh_CT7dkcmPfInF_BTxE-TQntrQSoVU&cs=1837x2160",
      image3: "https://eskprofessional.com/images/katalog/cacao-oil.jpg",
      image4: "https://eskprofessional.com/images/katalog/keratin.jpg",
      image5: "https://eskprofessional.com/images/katalog/d-pantenol.jpg",
      description1: "Набор BC Original ",
      description2:
        "BC Original – качественный продукт, который производится в Бразилии, стране, признанной мировым лидером в сфере кератинового выпрямления волос. Оригинальная формула состава содержит комплекс специально подобранных компонентов, которые за одну процедуру восстанавливают поврежденную структуру волос.",
      description3: "Преимущества BC Original",
      description4: "Высокое качество;",
      description5: "Выгодная цена;",
      description6: "Состав, который не требует выдержки;",
      description7:
        "После проведения процедуры BC Original волосы становятся прямыми, блестящими и восстановленными на 100%!",
      description8: "Состав",
      description9:
        "Набор BC Original включает 3 продукта для проведения процедуры:",
      description10:
        "Deep Cleaning Shampoo - подготавливающий шампунь, реконструктор с кератином и маску для нормализации pH баланса.",
      description11: "Brazilian Mask Regeneration - кератин.",
      description12:
        "Restoration Mask - Закрепляющая маска нормализует pH баланс волос.",
      description13: "Ак тивные компоненты в составе",
      description14:
        "Масло какао Натуральный комплекс аминокислот и витаминов, которые увлажняют, смягчают и защищают волосы от внешних факторов.",
      description15:
        "Гидролизованный кератин Натуральный комплекс аминокислот и витаминов, которые увлажняют, смягчают и защищают волосы от внешних факторов.",
      description16:
        "D – пантенол D – пантенол активный компонент, созданный на основе витаминов группы В. Восстанавливает поврежденные участки волосяного стрежня, придает волосам гибкость за счет увлажнения и питания.",
    },
    {
      id: 7,
      image:
        "https://eskprof.ru/image/cache/catalog/kollagenoplastija500-400x400.jpg",
      title: "Коллагенопластия Alpha Keratin 500 мл",
      price: "6 800",
      description1: "2 шаг. Multi-Active Mask",
      description2:
        "Collagenoplastia Alpha Keratin - мультиактивный реконструктор с коллагеном и серицином,разработанный специально для волос славянского типа.",
      description22:
        "Эффективно выпрямляет лёгкую и среднюю волну. Обеспечивает волосам блеск,питание и лёгкое расчесывание, при этом сохраняя естественный объём.",
    },
    {
      id: 8,
      image:
        "https://eskprof.ru/image/cache/catalog/photo/3/load-iblock-8dd-8ddd8b503a1ba894d47de17ed922cba8-400x400.jpg",
      image3:
        "https://eskprofessional.com/upload/medialibrary/c73/c731800d37e3d27692d8999847982665.jpg",
      image4: "https://eskprofessional.com/images/sostav/chia-white-oil.jpg",
      image5: "https://eskprofessional.com/images/sostav/cocoa-oil.jpg",
      title: "Ботокс BC Original BTX Crema 950 гр",
      price: "6 690",
      description1: "Ботокс BTX Crema ",
      description2:
        "BTX Crema - универсальная система восстановления для всех типов волос. Бразильский ботокс для волос.",
      description4: "Продукт без едкого дыма и испарений!",
      description5: "Комфортность применения!",
      description6: "Видимый результат с первой процедуры!",
      description7: "Многогранность использования!",
      description9:
        "Система BC Original BTX CREMA обладает свойством необходимой витаминизации для волос, придавая здоровое сияние, разглаживая, возвращая мягкость и защищая их от вредного воздействия окружающей среды. Преимущества BC Original BTX CREMA",
      description14:
        "В переводе означает «жизнь». Содержит витамины А, Е, D, F, протеин, а также олеиновую и стеариновую кислоты. Очень благоприятно воздействует на структуру волос, улучшая и насыщая их необходимыми микро- и макроэлементами.",
      description15:
        "Другое название Испанский Шалфей. Обладает мощной концентрацией антиоксидантов и полезных кислот: пальмитиновая, вакценовая, альфа-ланолиновая, олеиновая, стеариновая, пальмитолеиновая, линолевоя, а также стерины и токоферолы, жирные кислоты омега -3. Воздействуя на волосы смягчает их и придает шелковистость.",
      description16:
        "Обогащено триглицеридами и комплексом насыщенных жирных кислот. Равномерно распределяясь по волосу, снижает потерю естественного белка и защищает от повреждений. Взаимодействуя в синергии, комплекс восстанавливает водный баланс химически, механически и термически поврежденных или обработаных волос, укрепляет и предотвращает сечение, возвращает и придает мягкость, блеск и шелковистость, защищает от всех пагубных внешних воздействий на стержень волоса.",
      description20: "Подходит для сухих, ломких и поврежденных волос!",
      description21: "Глубокое питание и увлажнение!",
      description22:
        "BC Original BTX CREMA - это активная система, направленная на реконструкцию волос. Обеспечивает гарантированный результат с первой процедуры для любого типа волос. Обладает легким эффектом разглаживания и глубоким кондиционирующим действием. Активные компоненты в составе В состав данной линии входит бесценная коллеция масел, таких как масло Ши, Чиа белой, фракционированное кокосовое масло. Они обладают уникальным богатым комплексом необходимых витаминов, антиоксидантов, минералов, полезных кислот и других питательных веществ, оказывающих огромнейший положительный эффект на состояние здоровья волос.",
      description23: "Масло Ши",
      description24: "Масло Чиа белой",
      description25: "Фракционированное кокосовое масло",
    },
    {
      id: 9,
      image:
        "https://eskprof.ru/image/cache/catalog/photo/9/load-iblock-63a-63a55e86890afbe49accc6f9d023bb28-1000x1000.jpg",
      title: "Маска SOS rescue cream 950 гр",
      price: "5 600",
      description1: "SOS Rescue Cream",
      description2:
        "SOS Rescue cream - интенсивное восстановление и глубокое увлажнение волос по всей длине. Комплекс двусернистых аминокислот, входящих в состав, восстанавливает дисульфидные связи в структуре волоса.",
      description8: "Активные компоненты:",
      description4:
        "Гидролизованный кератин - основной строительный материал волоса, в который входят пептиды, полипептиды и аминокислоты.",
      description5:
        "Масло семян Чиа (испанский шалфей) - содержит высокую концентрацию Омега - кислот и является мощным природным антиоксидантом.",
      description6:
        "Экстракт белой орхидеи - восстанавливает структуру волоса, улучшает гидроскопичность, укрепляет кутикулу волос.",
      description7:
        "Глицерин масла сои - содержит витамин Е и лецитин, питает структуру волос, делает их гладкимим и эластичными.",
      description20:
        "Молочная кислота - является проводником для всех питательных компонентов, размягчает и увлажняет волосы.",
      description21:
        "Ланолин - воск натурального происхождения, который повышает прочность волос. Содержит в себе жирные аминокислоты, отвечающие за эластичность волоса.",
      description24:
        "Пантенол - глубоко проникающий увлажнитель, который стимулирует обновление клеток.",
      description25: "О процедуре",
      description26:
        "Комплекс позволяет разгладить, восстановить и вернуть плотность волоса, придав эластичность и восполнив необходимые микроэлементы. Подходит для любого типа и структуры волос, включая ранее химически обработанные,а так же, утратившие природный блеск и эластичность.",
      description27:
        "Входящие в состав, тщательно подобранные активные компоненты: экстракт Белой орхидеи, уникальное по своим природным качествам масло семян Чиа (испанский шалфей), глицерин масла сои делают состав по истине драгоценным продуктом по уходу и восстановлению волос абсолютно любого типа и состояния.",
      description28:
        "Благодаря процедуре глубокого восстановления, волосы приобретут интенсивный блеск, мягкость, перестанут путаться и приобретут плотность.",
      description29: "Показания:",
      description30: "очень пористые волосы:",
      description31: "утратившие природный блеск и эластичность:",
      description32: "сухие и ломкие:",
      description33: "тонкие, слабые волосы:",
      description34:
        "после химического воздействия (хим. завивка, хим. выпрямление, окрашивание, блондирование):",
      description35:
        "нормальный тип волос, для придания дополнительного блеска:",
    },
    
    {
      id: 10,
      image:
        "https://eskprof.ru/image/cache/catalog/photo/2/load-iblock-aa1-aa185d8c4576427c4dfc458ba736e47d-400x400.jpg",
      title: "Нанопластика для волос Alpha Gold 1000 мл",
      image2:
        "https://eskprofessional.com/upload/medialibrary/696/696d4d44d9177da0e4025737fd47ccc2.jpg",
      image3:
        "https://eskprofessional.com/upload/medialibrary/07f/07f95c47f959210c29d5db0b85315cf7.jpg",
      image4:
        "https://eskprofessional.com/upload/medialibrary/c73/c731800d37e3d27692d8999847982665.jpg",
      image5:
        "https://eskprofessional.com/upload/medialibrary/ae0/ae093af8fe0768e4c34ca0ab8fdb25c2.jpg",
      price: "13 800",
      description1: "Маска Alpha Gold 2 шаг",
      description2:
        "Маска Alpha Gold (2 этап) – это второй шаг процедуры органического выпрямления волос. Благодаря активным компонентам, таким, как масло Ши, альфа-кертину и аргановому маслу, маска не только выпрямляет волосы, но и эффективно ухаживает за ними, питает, делая локаны блестящими, гладкими и мягкими. Так как в составе маски отсутствует формальдегид, при запечатывании волос утюжком не появляется резкого запаха и дыма, что обеспечивает комфортность процедуры.",
      description3: "Активные компоненты в составе",
      description13:
        "α-кератин Восполняет разрушенные участки волоса и возрождает процесс регенерации кортекса и кутикулярного слоя.",
      description14:
        "Аргановое масло Содержит природный протеин и участвует в процессе восстановления структуры волоса.",
      description15: "Масло Ши Смягчает и увлажняет волосы.",
      description16:
        "Масло орехов пальмы ожон обволакивает волосы и удерживает влагу внутри.",
    },
    
    {
      id: 11,
      image:
        "https://eskprof.ru/image/cache/catalog/photo/4/load-iblock-c6f-c6f02d9307866f7213288156fa135239-400x400.jpg",
      title: "Нанопластика для волос Alpha Gold 500 мл",
      price: "8 800",
      image2:
        "https://eskprofessional.com/upload/medialibrary/696/696d4d44d9177da0e4025737fd47ccc2.jpg",
      image3:
        "https://eskprofessional.com/upload/medialibrary/07f/07f95c47f959210c29d5db0b85315cf7.jpg",
      image4:
        "https://eskprofessional.com/upload/medialibrary/c73/c731800d37e3d27692d8999847982665.jpg",
      image5:
        "https://eskprofessional.com/upload/medialibrary/ae0/ae093af8fe0768e4c34ca0ab8fdb25c2.jpg",
      description1: "Маска Alpha Gold 2 шаг",
      description2:
        "Маска Alpha Gold (2 этап) – это второй шаг процедуры органического выпрямления волос. Благодаря активным компонентам, таким, как масло Ши, альфа-кертину и аргановому маслу, маска не только выпрямляет волосы, но и эффективно ухаживает за ними, питает, делая локаны блестящими, гладкими и мягкими. Так как в составе маски отсутствует формальдегид, при запечатывании волос утюжком не появляется резкого запаха и дыма, что обеспечивает комфортность процедуры.",
      description3: "Активные компоненты в составе",
      description13:
        "α-кератин Восполняет разрушенные участки волоса и возрождает процесс регенерации кортекса и кутикулярного слоя.",
      description14:
        "Аргановое масло Содержит природный протеин и участвует в процессе восстановления структуры волоса.",
      description15: "Масло Ши Смягчает и увлажняет волосы.",
      description16:
        "Масло орехов пальмы ожон обволакивает волосы и удерживает влагу внутри.",
    },
    {
      id: 12,
      image:
        "https://eskprof.ru/image/cache/catalog/photo/2/load-iblock-9fa-9fae3b35e0aee1f9b25ba17a29b8b277-400x400.jpg",
      title: "Профессиональный набор нанопластики Alpha Gold 120 мл",
      image1: "https://sun9-25.userapi.com/s/v1/ig2/bQeAsbvxnCDH8D5Ek0eGF2q0UAaJ1KJNzMUDpY0gKKZ_hdOt1NKUXpa0V8Tb5ZljgoESpPVmdwPclDqayaeFC1wU.jpg?quality=95&as=32x38,48x56,72x85,108x127,160x188,240x282,360x423,480x564,540x635,640x752,720x847,1080x1270,1280x1505,1440x1693,1906x2241&from=bu&u=sDgITCIctrH0Eh_CT7dkcmPfInF_BTxE-TQntrQSoVU&cs=1837x2160",
      image2:
        "https://eskprofessional.com/upload/medialibrary/696/696d4d44d9177da0e4025737fd47ccc2.jpg",
      image3:
        "https://eskprofessional.com/upload/medialibrary/07f/07f95c47f959210c29d5db0b85315cf7.jpg",
      image4:
        "https://eskprofessional.com/upload/medialibrary/c73/c731800d37e3d27692d8999847982665.jpg",
      image5:
        "https://eskprofessional.com/upload/medialibrary/ae0/ae093af8fe0768e4c34ca0ab8fdb25c2.jpg",
      price: "3 500",
      description1: "Нанопластика Alpha Gold",
      description3: "Активные компоненты в составе",
      description13:
        "α-кератин Восполняет разрушенные участки волоса и возрождает процесс регенерации кортекса и кутикулярного слоя.",
      description14:
        "Аргановое масло Содержит природный протеин и участвует в процессе восстановления структуры волоса.",
      description15: "Масло Ши Смягчает и увлажняет волосы.",
      description16:
        "Масло орехов пальмы ожон обволакивает волосы и удерживает влагу внутри.",

      description2:
        "Содержащая альфа - кератины, активная формула позволяет выпрямить волосы, дополнительно не пересушивая их. Кокосовое масло, масло ши и пальмы Elaeis способствуют увлажнению  волос. ",
      description13: "Активные компоненты в составе",
      description26:
        "В отличие от аналогичной продукции, линия Alpha Gold приятно пахнет и не включает в свой состав формальдегид. Способ выравнивания волос продуктами Alpha Gold разнится с техниками работы с аналогами. Отличительная черта и преимущество состоят в двух этапном методе выполнения процедуры. Первым этапом служит мойка и сушка. Второй этап подразумевает нанесение активного состава и запечатывания прядей парикмахерским утюжком.",
      description27:
        "Средства Alpha Gold зарекомендовали себя и пользуются большим спросом. Активный состав является лидером среди парикмахерских салонов, лабораторий красоты и рядовых покупателей.",
    },
    {
      id: 13,
      image:
        "https://eskprof.ru/image/cache/catalog/product/vosstanavlivajuschijshampunbcoriginal-400x400.jpg",
      title:
        "Восстанавливающий шампунь BC Original для роста и против выпадения волос 300 мл",
      price: "1 400",
      description4:
        "обладательницам комбинированной, сухой и обычной кожи головы. Также для окрашенных, обесцвеченных, механически и химически повреждённых волос. ",
      description5:
        "Сохраняет эффект от процедур кератинового выпрямления, нанопластики и ботокса.",
      description8: "КОМУ ПОДОЙДЁТ",

      description26:
        "Восстанавливающий шампунь BC Original для роста и против выпадения волос (рН-4.5), в объеме 300 мл. ",
      description27:
        "Шампунь подходит как для ухода за волосами после кератинового выпрямления составом BC Original, так и в качестве самостоятельного уходового средства.",
      description28:
        "Деликатно очищает кожу головы и волосы по длине, придаёт объём, дарит блеск, мягкость и гладкость.",
      description36:
        "Формула с гидролизованным протеином, аминокислотами  и маслом киноа обеспечивает волосам не только бережное очищение, но и профессиональный уход — питание и увлажнение, уплотнение и смягчение, восстановление и повышение эластичности.",
      description37:
        "Масло семян киноа - это масло обладает хорошими регенерирующими свойствами, оказывает успокающее и ранозаживляющее действие.  Благодаря  богатому составу ненасыщенных жирных кислот масло способствует  выработке коллагена в коже головы. ",
      description38:
        "Так же экстракт киноа содержит витамин B3, широко известное как ниацин. Известно, что ниацин помогает расширять кровеносные сосуды и поддерживать здоровый кровоток в коже головы. Все эти свойства способствуют уменьшению выпадения и усиленному росту волос.",
      description39:
        "При регулярном использовании волосы становятся здоровыми, крепкими, объёмными, гладкими и мягкими.",
    },
    {
      id: 14,
      image:
        "https://eskprof.ru/image/cache/catalog/product/vosstanavlivajuschajamaskadljarostavolosbcoriginal300ml-400x400.jpg",
      title: "Восстанавливающая маска для роста волос BC original 300 мл",
      price: "1 600",
    },
    {
      id: 17,
      image: "https://eskprof.ru/image/cache/catalog/homeshampbc-400x400.png",
      title: "Шампунь BC Original для домашнего ухода 250 мл",
      price: "1 200",
    },
    {
      id: 18,
      image: "https://eskprof.ru/image/cache/catalog/homecondbc-260x260.png",
      title: "Кондиционер BC Original для домашнего ухода 250 мл",
      price: "1 200",
    },
    {
      id: 16,
      image: "https://eskprof.ru/image/cache/catalog/homemaskbc-400x400.png",
      title: "Маска BC Original для домашнего ухода 250 гр",
      price: "1 200",
    },
    {
      id: 15,
      image:
        "https://eskprof.ru/image/cache/catalog/bcoriginal500/img_3997-400x400.png",
      title: "Маска SOS rescue cream 200 гр",
      price: "2 300",
    },
    {
      id: 20,
      image:
        "https://eskprof.ru/image/cache/catalog/bcoriginal500/img_3998-400x400.png",
      title: "Ботокс BC Original BTX Crema 200 гр",
      price: "2 500",
    },
    {
      id: 19,
      image:
        "https://eskprof.ru/image/cache/catalog/product/argan-1000x1000.png",
      title: "Ботокс - Глянец ARGAN OIL ZTOX 950 г.",
      price: "6 000",
    },
    {
      id: 25,
      image:
        "https://eskprof.ru/image/cache/catalog/utjuzhok-removebg-preview-400x400.jpg",
      title: "Брендированный стайлер ESK Professional",
      price: "4 500",
      description1: "Брендированный стайлер ESK Professional"
    },
    {
      id: 26,
      image:
        "https://eskprof.ru/image/cache/catalog/photo/1/load-iblock-552-55251f71fcb196f42dc52b5fd26e12a1-400x400.jpg",
      title: "Relief холодное восстановление для волос с эффектом эластинизации Rеlief 1000/200/1000/200 мл",
      price: "11 990",
      description1: "Минерально-протеиновое восстановление Relief"
    },
    {
      id: 27,
      image:
        "https://eskprof.ru/image/cache/catalog/s-l1600-removebg-preview-1000x1000.png",
      title: "Ботокс Argan Oil New Vip 1000 мл",
      price: "6 600",
    },
    {
      id: 28,
      image:
        "https://eskprof.ru/image/cache/catalog/photo/4/load-iblock-85c-85cd3ba6116157a0ad3e857b3d3a4d9f-1000x1000.jpg",
      title: "Шампунь для волос Relief 1000 мл",
      price: "3 990",
    },
    {
      id: 29,
      image:
        "https://eskprof.ru/image/cache/catalog/photo/6/load-iblock-f55-f559398b7672a97cde08c3bee7b4b77d-1000x1000.jpg",
      title: "Protein Mineral Relief 200 мл",
      price: "2 990",
    },
    {
      id: 30,
      image:
        "https://eskprof.ru/image/cache/catalog/photo/5/load-iblock-7f7-7f70f265c946ced3bfb660ef6cafacee-1000x1000.jpg",
      title: "Маска для волос Relief 1000 мл",
      price: "3 990",
    },
    {
      id: 31,
      image:
        "https://eskprof.ru/image/cache/catalog/photo/8/load-iblock-53c-53c3e492c48b24697546d100967ec9b2-1000x1000.jpg",
      title: "Protein Repair Relief 200 мл",
      price: "2 990",
    },
    {
      id: 32,
      image:
        "https://eskprof.ru/image/cache/catalog/photo/2/load-iblock-231-2311908453659823c087f4a5825cb9f0-1000x1000.jpg",
      title: "Relief холодное восстановление для волос с эффектом эластинизации Rеlief 250/200/250/200 мл",
      price: "8 990",
    },
    {
      id: 33,
      image:
        "https://eskprof.ru/image/cache/catalog/photo/5/load-iblock-722-72284480d196c24835112c680c9ec625-1000x1000.jpg",
      title: "Shampoo Relief 250 мл",
      price: "1 790",
    },
    {
      id: 34,
      image:
        "https://eskprof.ru/image/cache/catalog/photo/3/load-iblock-fe5-fe5b2f536d5e4fbe9ceca955e5488fc8-1000x1000.jpg",
      title: "Маска для волос Relief 250 мл",
      price: "1 790",
    },
    {
      id: 35,
      image:
        "https://eskprof.ru/image/cache/catalog/photo/9/load-iblock-41f-41f09b989def2033bb4ac69c5ec2729f-1000x1000.jpg",
      title: "Conditioner No Rinse Relief 200 мл",
      price: "1 890",
    },
    {
      id: 36,
      image:
        "https://eskprof.ru/image/cache/catalog/ts1000-1000x1000.png",
      title: "Therapy System Холодное восстановление для волос с коллагеном 1000/1000/75 мл",
      price: "7 650",
    },
    {
      id: 37,
      image:
        "https://eskprof.ru/image/cache/catalog/therapysmall-1000x1000.png",
      title: "Therapy System Холодное восстановление для волос с коллагеном 250/200/75 мл",
      price: "4 290",
    },
    {
      id: 38,
      image:
        "https://eskprof.ru/image/cache/catalog/belinha_1step-1000x1000.jpg",
      title: "Belinha Therapy. 1 шаг Шампунь Deep Cleansing, 1000 ml",
      price: "1 800",
    },
    {
      id: 39,
      image:
        "https://eskprof.ru/image/cache/catalog/dizajn_bez_nazvanija__94_-removebg-preview-1000x1000.png",
      title: "Шампунь для волос Therapy System 1000 мл",
      price: "3 990",
    },
    {
      id: 40,
      image:
        "https://eskprof.ru/image/cache/catalog/shampootrivalentenuovo-1000x1000.jpg",
      title: "Шампунь для блеска волос Therapy System 250 мл",
      price: "1 790",
    },
    {
      id: 41,
      image:
        "https://eskprof.ru/image/cache/catalog/17nojabrjauglublennyjseminar%282%29-1000x1000.png",
      title: "Маска-кондиционер Iside Detangling 1000 мл",
      price: "3 690",
    },
    {
      id: 42,
      image:
        "https://eskprof.ru/image/cache/catalog/eskprofessional1111111-1000x1000.png",
      title: "Концентрированный флюид Silkier Cream, 75 мл",
      price: "890",
    },    {
      id: 43,
      image:
        "https://eskprof.ru/image/cache/catalog/product/izobrazheniewhatsapp2024-10-11v16.49.05_5d151d4c-1000x1000.jpg",
      title: "Концентрированный флюид Silkier Cream 200 мл",
      price: "2 690",
    },
    {
      id: 44,
      image:
        "https://eskprof.ru/image/cache/catalog/photo/7/load-iblock-4ee-4ee6e2b30c5dc17806025919df74c85a-1000x1000.jpg",
      title: "Max Pro : классический+паровой стайлер",
      price: "6 500",
    },
    {
      id: 45,
      image:
        "https://eskprof.ru/image/cache/catalog/photo/1/load-iblock-a9b-a9b0ea68dcdfb34654eaead2c3295d6e-1000x1000.jpg",
      title: "Детокс кожи головы против выпадения волос Geo Vita Energizing 250/10 ампул/50 мл",
      price: "4 400",
    },
    {
      id: 46,
      image:
        "https://eskprof.ru/image/cache/catalog/photo/4/load-iblock-7c8-7c84ec1a5b51e1b5278e12390ca45442-1000x1000.jpg",
      title: "Эссенция против выпадения волос Geo Vita Energizing Essence 50 мл",
      price: "1 500",
    },
    {
      id: 47,
      image:
        "https://eskprof.ru/image/cache/catalog/photo/3/load-iblock-e0d-e0d0a2502e2a572d84b5c37f4c0182b6-1000x1000.jpg",
      title: "Лосьон против выпадения волос Geo Vita Energizing Lotion 10 ампул по 8 мл",
      price: "2000",
    },    {
      id: 48,
      image:
        "https://eskprof.ru/image/cache/catalog/photo/6/load-iblock-555-555ac680ab407ce0c4e52bb608f4f697-1000x1000.jpg",
      title: "Шампунь против выпадения волос Geo Vita Energizing 250 мл",
      price: "1 100",
    },
    {
      id: 49,
      image:
        "https://eskprof.ru/image/cache/catalog/photo/6/load-iblock-e32-e32d32360eeace27f18ae1834a563750-1000x1000.jpg",
      title: "Успокаивающий лосьон для кожи головы Geo Vita Soothing Lotion 10 ампул по 8 мл",
      price: "2000",
    },
    {
      id: 50,
      image:
        "https://eskprof.ru/image/cache/catalog/photo/1/load-iblock-fc9-fc94be70ae4fb58c5a4233b2ed008efe-1000x1000.jpg",
      title: "Эссенция для детоксикации кожи головы Geo Vita Geoplus Essence 50 мл",
      price: "1 800",
    },
    {
      id: 51,
      image:
        "https://eskprof.ru/image/cache/catalog/photo/8/load-iblock-bf0-bf0fdf95f569cb9bd1ca581e2b4b6830-1000x1000.jpg",
      title: "Шампунь против перхоти Geo Vita Purifying 250 мл",
      price: "1 200",
    },
    {
      id: 52,
      image:
        "https://eskprof.ru/image/cache/catalog/photo/7/load-iblock-071-071fd4b027c1743ec23a45b78512668a-1000x1000.jpg",
      title: "Успокаивающая эссенция для кожи головы Geo Vita Soothing Essence 50 мл",
      price: "1 500",
    },
    {
      id: 53,
      image:
        "https://eskprof.ru/image/cache/catalog/termozaschitasgidrolizovannym%2810%29-1000x1000.png",
      title: "Therapy System холодный уход для укрепления волос и придания блеска 250/100/1000",
      price: "3 900",
    },

    {
      id: 54,
      image:
        "https://eskprof.ru/image/cache/catalog/dizajn_bez_nazvanija__89_-removebg-preview-1000x1000.png",
      title: "Рабочая тетрадь мастера",
      price: "350",
    },
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div id="products" className={`${css.prodcts} paddings innerWidth`}>
      <div
        style={{ marginBottom: "3rem", textAlign: "center" }}
        className="primaryText"
      >
        Продукты ESK Professional
      </div>
      <div className={css.parent}>
        {products.map((product, index) => (
          <figure className={`${css.product}`} key={index}>
            <div className={css.productImage}>
              <p>в наличии</p>
              <img
                onClick={() => handleProductClick(product)}
                className={css.imageProducts}
                src={product.image}
                alt={product.title}
              />
            </div>
            <figcaption>
              <h2 className={css.descriptions}>{product.title}</h2>
              <div>
                <p className={css.price}>{product.price} ₽</p>
                <button onClick={handleOpen}>Купить</button>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
      <ModalContainer
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct}
      />
      <div>
        <ToastContainer />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className={css.modalModalRow}>
              <button className={css.closeButtonProduct} onClick={handleClose}>
                ×
              </button>
              <h1 style={{ textAlign: "center" }}>
                Подать заявку
              </h1>
              <form onSubmit={sendEmail}>
                <div className={css.postFromContainerRow}>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="ФИО клиента"
                    required
                    className={css.postFromContainerInputName}
                  />
                  <InputMask
                    id="phone"
                    mask="+7 (999) 999-99-99"
                    placeholder={message === "" ? "Номер телефона" : ""}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className={css.postFromContainerInputNumber}
                  />
                </div>

                <button type="submit" className={css.postFromContainerButton}>
                  Оформить заявку
                </button>
              </form>
              <span className="postFromContainer-description">
              Оставьте заявку на консультацию с Esk Professional и получите профессиональные рекомендации для вашего ухода!
              </span>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Prodcts;
