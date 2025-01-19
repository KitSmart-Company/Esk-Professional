      import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Обучение",
    projects: 76,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Mobile App Design",
    projects: 63,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Brand Identity",
    projects: 47,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "Продукция ESK Professional предлагает эффективные решения для кератинового выпрямления волос, ботокса и детокса кожи головы. Кератиновые средства восстанавливают и выпрямляют волосы, ботокс глубоко питает и увлажняет, а дет окс очищает кожу головы от загрязнений.",
];

export const workExp = [
  {
    place: "КОМПАНИЯ",
    tenure: "Esk Professiona",
    role: "Их действия",
    detail:
      "ESK Professional – официальный представитель и производитель составов для кератинового выпрямления волос, ботокса для волос и средств для детокса кожи головы и профессиональных инструментов для работы парикмахеров.",
  },
  {
    place: "СЕГОДНЯ",
    tenure: "Esk Professiona",
    role: "UI/UX Designer",
    detail:
      "Сегодня ESK Professional занимает лидирующие позиции среди компаний, которые занимаются продажей профессиональной косметики для волос. Высокие стандарты подразумевают доступную систему обучения для мастеров и профессионалов, которые начинают работу на продукции компании.",
  },
  {
    place: "БОТОКС",
    tenure: "Esk Professiona",
    role: "Sr. Product Designer",
    detail:
      " Продукты, такие как ботокс с эффектом эластинизации, предназначены для сильно поврежденных и сухих волос. Они питают и увлажняют волосы, улучшая их текстуру и внешний вид.",
  },
];

export const comments = [
  {
    name: "Анна",
    comment:
      "Использую продукцию Esk Professional несколько месяцев — результаты потрясающие! Шампунь и кондиционер отлично очищают и увлажняют волосы, они стали меньше ломаться и выглядят здоровыми. Обязательно закажу еще.",
      img: "./person3.jpeg",
  },
  {
    name: "Мария",
    comment:
      "Я в восторге от крема для укладки! Он не только придает объем, но и защищает волосы от теплового воздействия. Я использую его каждый день, и волосы выглядят прекрасно. Спасибо Esk Professional за такие замечательные продукты!",
    img: "./person1.jpeg",
  },
  {
    name: "Раяна",
    comment:
      "Продукция Esk Professional — находка для меня! Долго искала что-то для поврежденных волос. После первого применения ощутила разницу. Увлажняющий спрей спасает мои волосы от сухости. Спасибо за качественный продукт.",
      img: "./person4.jpeg",
  },
  {
    name: "Татьяна",
    comment:
      "Хочу выразить огромную благодарность лучшем преподавателю !Мне очень понравился семинар! Все было понятно и доступно! Спасибо за приобретённые знания !",
    img: "./person2.jpeg",
  },
  {
    name: "Юлия",
    comment:
      "Я очень рада, что прошла обучение у Вас- Вы замечательный человек и мастер своего дела я рада, что моим наставником стали именно Вы Желаю Вам успехов и процветания и как можно больше послушных учениц",
      img: "./person5.jpeg",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
