import { v } from "../styles/variables";
import {
  AiOutlineHome,
  AiOutlineApartment,
  AiOutlineSetting,
  AiFillHtml5,
} from "react-icons/ai";
import { PiTidalLogoBold } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { MdOutlineAnalytics } from "react-icons/md";
import { RiDashboard3Line } from "react-icons/ri";
import { TbPig } from "react-icons/tb";
import { RiFlutterFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { SiCsharp, SiPython } from "react-icons/si";
import { CgHello } from "react-icons/cg";
import { CiRoute } from "react-icons/ci";
import { BiBasket } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import { TbBrandXamarin } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";
import { GoTools } from "react-icons/go";
import { MdOutlinePreview } from "react-icons/md";
import { PiShoppingCartBold } from "react-icons/pi";
import { BsBoxSeam } from "react-icons/bs";
import { FcShop } from "react-icons/fc";
import { Icon } from "@iconify/react";
import Sprinkle from "../assets/Sprinkle.svg"
import fondocruz from "../assets/fondocruz.svg"
import fondocuadros from "../assets/fondocuadrosvarios.svg"
import fondoamarillo from "../assets/liquid-cheese.svg"
import fondoverde from "../assets/zig-zag.svg"
import { FaNodeJs } from "react-icons/fa6";

export const CursosData = [
  {
    url: "Mi perfil",
    img: "https://i.ibb.co/F3VVTv0/HGERTHDDFGG.png",
    avatar: "https://i.ibb.co/H2ZT0Xq/cerdo-7.png",
    title: "Sistema para el control de gastos con REACT(js) y PostgreSQL",
    fecha: "Caduca el 07 de octubre 2023 10:58 am",
    price: "9.99",
  },

  {
    url: "Mi perfil",
    img: "https://i.ibb.co/F3VVTv0/HGERTHDDFGG.png",
    avatar: "https://i.ibb.co/H2ZT0Xq/cerdo-7.png",
    title: "Sistema para el control de gastos con REACT(js) y PostgreSQL",
    fecha: "Caduca el 07 de octubre 2023 10:58 am",
    price: "9.99",
  },
  {
    url: "Mi perfil",
    img: "https://i.ibb.co/F3VVTv0/HGERTHDDFGG.png",
    avatar: "https://i.ibb.co/H2ZT0Xq/cerdo-7.png",
    title: "Sistema para el control de gastos con REACT(js) y PostgreSQL",
    fecha: "Caduca el 07 de octubre 2023 10:58 am",
    price: "9.99",
  },
  {
    url: "Mi perfil",
    img: "https://i.ibb.co/F3VVTv0/HGERTHDDFGG.png",
    avatar: "https://i.ibb.co/H2ZT0Xq/cerdo-7.png",
    title: "Sistema para el control de gastos con REACT(js) y PostgreSQL",
    fecha: "Caduca el 07 de octubre 2023 10:58 am",
    price: "9.99",
  },
  {
    url: "Mi perfil",
    img: "https://i.ibb.co/F3VVTv0/HGERTHDDFGG.png",
    avatar: "https://i.ibb.co/H2ZT0Xq/cerdo-7.png",
    title: "Sistema para el control de gastos con REACT(js) y PostgreSQL",
    fecha: "Caduca el 07 de octubre 2023 10:58 am",
    price: "9.99",
  },
];

//categorias data
export const CategoriasCursos = [
  {
    id: 1,
    label: "Todos",
    icon: <PiTidalLogoBold />,
    to: "/",
    etiquetas: "#todos",
    color: "#1CB0F6",
    color2: "#1CB0F6",
  },

  {
    id: 2,
    label: "Html+css",
    icon: <Icon icon="logos:html-5" />,
    to: "/cursos",
    etiquetas: "#html",
    color: "#f6c31c",
    color2: "#ed5513",
  },
  {
    id: 3,
    label: "JavaScript",
    icon: <Icon icon="logos:javascript" />,
    to: "/movimientos",
    etiquetas: "#javascript",
    color: "#f6c31c",
    color2: "#f26224",
  },
  {
    id: 4,
    label: "TypeScript",
    icon: <Icon icon="logos:typescript-icon" />,
    to: "/informes",
    etiquetas: "#typescript",
    color: "#1caaf6",
    color2: "#0b69cd",
  },
  {
    id: 5,
    label: "React",
    icon: <Icon icon="logos:react" />,
    to: "/informes",
    etiquetas: "#react",
    color: "#2b45ae",
    color2: "#2b45ae",
  },
  {
    id: 6,
    label: "MySQL",
    icon: <GrMysql />,
    to: "/informes",
    etiquetas: "#mysql",
    color: "#1CB0F6",
  },
  {
    id: 7,
    label: "Flutter",
    icon: <RiFlutterFill />,
    to: "/informes",
    etiquetas: "#flutter",
    color: "#1CB0F6",
  },
  {
    id: 8,
    label: "C#",
    icon: <SiCsharp />,
    to: "/informes",
    etiquetas: "#c#",
    color: "#1CB0F6",
  },
  {
    id: 9,
    label: "Python",
    icon: <Icon icon="logos:python" />,
    to: "/informes",
    etiquetas: "#python",
    color: "#173349",
    color2: "#06274c",
  },
  // {
  //   label: "Dashboard",
  //   icon: <RiDashboard3Line />,
  //   to: "/dashboard",
  // },
];
export const CategoriasApuntes = [
  {
    id: 1,
    label: "React native",
    icon: <TbBrandReactNative />,
    etiquetas: "#reactnative",
  },
  {
    id: 2,
    label: "React",
    icon: <FaReact />,
    etiquetas: "#react",
  },
  {
    id: 3,
    label: "Html+css",
    icon: <AiFillHtml5 />,
    etiquetas: "#htmlcss",
  },
  {
    id: 4,
    label: "JavaScript",
    icon: <IoLogoJavascript />,
    etiquetas: "#javascript",
  },
  {
    id: 5,
    label: "Xamarin forms",
    icon: <TbBrandXamarin />,
    etiquetas: "#xamarinforms",
  },
  {
    id: 6,
    label: "Inventarios REACT",
    icon: <BsBoxSeam />,
    etiquetas: "#inventarios",
  },
  {
    id: 7,
    label: "Herramientas",
    icon: <GoTools />,
    etiquetas: "#herramientas",
  },
  {
    id: 8,
    label: "POS React",
    icon: <FcShop />,
    etiquetas: "#posreact",
  },
  {
    id: 9,
    label: "ZUSTAND TANSTACK",
    icon: <CgHello />,
    etiquetas: "#zustand-tanstack",
  },
  {
    id: 10,
    label: "NODE Y EXPRESS",
    icon: <FaNodeJs />,
    etiquetas: "#node-express",
    to:"/node-express"
  },
];
//data SIDEBAR
export const LinksArray = [
  {
    label: "Cursos",
    icon: "meteocons:star-fill",
    to: "/",
  },
  {
    label: "Rutas",
    icon: "tabler:route-alt-left",
    to: "/rutas",
  },
  // {
  //   label: "Tienda",
  //   icon: "fluent-emoji:shorts" ,
  //   to: "/tienda",
  // },
];
export const SecondarylinksArray = [
  {
    label: "AnimalaCSS",
    icon: "fluent-emoji:shooting-star",
    to: "/animalacss",
  },

  {
    label: "Apuntes",
    icon: "fluent-emoji:books",
    to: "/apuntes",
  },
  {
    label: "Comunidad",
    icon: "fluent-emoji:pig-face",
    to: "/comunidad",
  },
  {
    label: "Fondos SVG",
    icon: "fluent-emoji:alien",
    to: "/fondossvg",
  },

  // {
  //   label: "Cards VIP",
  //   icon: "noto-v1:credit-card",
  //   to: "/cards",
  // },
  // {
  //   label: "Pre-Estrenos",
  //   icon: <MdOutlinePreview />,
  //   to: "/preestrenos",
  // },
];
//temas
export const TemasData = [
  {
    icono: "🌞",
    descripcion: "light",
  },
  {
    icono: "🌚",
    descripcion: "dark",
  },
];

//COORDENADAS DE RUTA
export const CoordenadasRuta = [
  {
    id: 1,
    left: "0",
    descripcion: "html",
    icono: v.iconohtml,
    tipo: "normal",
    detalle: "Con html le das el maquetado a tus paginas web.",
    url: "https://www.udemy.com/course/curso-intensivo-de-html-y-css-camino-hacia-react/?couponCode=",
    valor: "-140px",
  },
  {
    id: 2,
    left: "-50px",
    descripcion: "css",
    icono: v.iconocss,
    tipo: "normal",
    detalle:
      "Con CSS le das los estilos a tu pagina web para que se vea incleible.",
    url: "https://www.udemy.com/course/curso-intensivo-de-html-y-css-camino-hacia-react/?couponCode=",
    valor: "-90px",
  },
  {
    id: 3,
    left: "-80px",
    descripcion: "JavaScript",
    icono: v.iconojavascript,
    tipo: "normal",
    detalle:
      "Con Js le das dinamismo a tus paginas web para que interactue el usuario.",
    url: "https://www.udemy.com/course/javascript-intensivo-camino-hacia-react/?couponCode=",
    valor: "-60px",
  },
  {
    id: 4,
    left: "-50px",
    descripcion: "MySQL",
    icono: v.iconomysql,
    tipo: "normal",
    detalle:
      "Con MySQL creas bases de datos para que tus proyectos sean interactivos.",
    url: "https://www.udemy.com/course/mysql-desde-0-hasta-supabase-domina-las-bases-de-datos/?couponCode=",
    valor: "-90px",
  },
  {
    id: 5,
    left: "0",
    descripcion: "REACT",
    icono: v.iconoreact,
    tipo: "normal",
    detalle:
      "Con *REACT* creas paginas web mucho mas potentes y ordenadas usando html+css+javaScript",
    url: "https://www.udemy.com/course/react-intensivo-desde-cero-y-actualizado-para-principiantes/?couponCode=",
    valor: "-140px",
  },

  {
    id: 6,
    left: "50px",
    descripcion: "Cerdyn",
    icono: v.iconocerdyncurso,
    tipo: "proyecto",
    detalle:
      "FELICIDADES!!! ya estas listo para crear el proyecto.*CERDYN* es un sistema para controlar gastos utilizando todo lo aprendido.",
    url: "https://www.udemy.com/course/sistema-para-el-control-de-gastos-con-reactjs-y-postgresql/?couponCode=",
    valor: "-190px",
  },
  {
    id: 6,
    left: "80px",
    descripcion: "Stock PRO",
    icono: v.iconocaja,
    tipo: "proyecto",
    detalle:
      "FELICIDADES!!! ya estas listo para crear el proyecto.*STOCK PRO* es un sistema para controlar inventarios utilizando todo lo aprendido.",
    url: "https://www.udemy.com/course/sistema-para-inventarios-con-react-nivel-intermedio/?couponCode=",
    valor: "-190px",
  },
  {
    id: 7,
    left: "65px",
    descripcion: "PUNTO VENTA REACT",
    icono: v.iconoposreact,
    tipo: "proyecto",
    detalle:
      "EN CONTRUCCION: crea un punto de venta profesional ahora en web inspirado en ada369",
    url: "https://www.udemy.com/course/punto-de-venta-con-react-full-stack/?couponCode=",
    valor: "-205px",
  },
  {
    id: 7,
    left: "45px",
    descripcion: "TypeScript",
    icono: v.iconotypescript,
    tipo: "normal",
    detalle:
      "Con typeScript le das más poder a javascript logrando el tan ansiado tipado.",
    url: "https://www.udemy.com/course/typescript-para-principiantes-desde-0/?couponCode=",
    valor: "-185px",
  },
];

//data apuntes
export const ApuntesData = [
  {
    imagen: "https://i.ibb.co/4Yptz0K/gf34tret.png",
    etiquetas: "#html",
    tipo: "imagen",
    titulo:
      "Es decir, si utilizamos repeat(auto-fill, minmax(300px, 1fr), el navegador se va a encargar de que los elementos hijos con el tamaño mínimo quepan en la primera fila, y los que no quepan, se desplacen a las siguientes filas del grid, de modo que se aproveche lo mejor posible el contenedor, y consigamos un efecto similar al que se consigue con media queries, pero de una forma más directa y con menos código.",
    parrafo: "her",
  },
  {
    imagen: "https://i.ibb.co/4Yptz0K/gf34tret.png",
    etiquetas: "#html",
    tipo: "imagen",
    titulo: "Fonts google sdasds",
    parrafo: "er",
  },
  {
    imagen: "https://i.ibb.co/4Yptz0K/gf34tret.png",
    etiquetas: "#html",
    tipo: "text",
    titulo: "css se importa los fonts",
    parrafo:
      "https://fonts.googleapis.com/css2?family=Poppins:wght@200;300; 400;500;600;700;800;900&display=swap uso",
  },
  {
    imagen: "https://i.ibb.co/4Yptz0K/gf34tret.png",
    etiquetas: "#html",
    tipo: "text",
    titulo: "g",
    parrafo: "g",
  },
];

//dataredessociales
export const DataRedesSociales = [
  {
    icono: v.iconoyoutube,
    url: "https://www.youtube.com/@Codigo369/videos",
  },
  {
    icono: v.iconofacebook,
    url: "https://www.facebook.com/codigo369oficial/",
  },
  {
    icono: v.iconoinstagram,
    url: "https://www.instagram.com/codigo369/",
  },
  {
    icono: v.iconotiktok,
    url: "https://www.tiktok.com/@codigo369",
  },
];

//datasimulada-cards-fondos-svg
export const DataFondosSvg = [
  {
    imagen: fondoamarillo,
  },
  {
    imagen: Sprinkle,
  },
  {
    imagen: fondocruz,
  },
  {
    imagen: fondoverde,
  },
  {
    imagen: fondocuadros,
  },
  {
    imagen: fondocuadros,
  },
];
