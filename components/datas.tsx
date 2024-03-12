import project1 from "../images/project-1.png"
import project2 from "../images/project-2.webp"
import project3 from "../images/project-3.png"
import html from "../images/html.png"
import css from "../images/css.png"
import javascript from "../images/javascript.png"
import react from "../images/reactjs.png"
import nextjs from "../images/nextjs.png"
import typescript from "../images/typescript.png"
import python from "../images/python.png"
import django from "../images/djangoo.png"
import git from "../images/git.png"
import postman from "../images/postman.png"
import material from "../images/material.png"
import tailwind from "../images/tailwind.png"
import bootstrap from "../images/bootstrap.png"
import psql from "../images/psql.png"

export const ProjectDatas = [
    {
        id:"1",
        image: project1,
        title:"Ecommerce Shoping Website",
        live:"http://13.200.161.172/",
        admin:"http://13.235.209.32/admin/login/?next=/admin/",
        technologies_backend: "Django, Postgresql, Django rest framework, Python Jinja",
        technologies_frontend: " Nextjs 14, Javascript, Stripe, Material ui, Bootstrap, Media Query",
        desc: "The ecommerce project includes features such as listing categories and products, integrating a Stripe payment gateway, sending checkout invoices to user emails, forget password with otp, user signin and signup, implementing user and admin authentication, products filtering by price, allowing user to update cart, allowing users to edit profiles and view their profiles, ensuring responsive page design, providing product and category offers, enabling users to add items to their cart and wishlist, access their order history, track orders, manage addresses, and administer orders and users. And hosted in AWS EC2 server."
    },
    {
        id:"2",
        image: project2,
        title: "Movie Watch [UI]",
        live:"https://movie-watch-sigma.vercel.app/",
        technologies_frontend: "Html, Css, Javascipt",
        desc: "Our movie watch website UI design features fully responsive pages, meticulously designed with HTML, CSS, and JavaScript. The home page and detail page boast captivating animations, enhancing user engagement. With seamless transitions and interactive elements, our design prioritizes both functionality and aesthetics, ensuring an exceptional viewing experience across devices."
    }
    ,
    {
        id: "3",
        image: project3,
        title: "Netflix Landing Page",
        live:"https://netflix-landing-page-gamma.vercel.app/",
        technologies_frontend: "Html, Css, Javascipt",
        desc: "Crafted with HTML, CSS, and JavaScript, this Netflix landing page boasts seamless responsiveness on all devices. Enhanced UI elements and smooth scrolling animations elevate user experience. Explore dynamic buttons and interactive menus. With modern technologies, it ensures compatibility and accessibility across browsers, delivering a captivating browsing journey."
    }
]

export const SkillDatas = [
    {
        image: nextjs,
        percentage: "Proficient",
        id:"1"
    },
    {
        image: react,
        percentage: "Proficient",
        id:"2"
    },
    {
        image: django,
        percentage: "Proficient",
        id:"3"
    },
    {
        image: typescript,
        percentage: "Proficient",
        id:"4"
    },
    {
        image: python,
        percentage: "Proficient",
        id:"5",
    },
    {
        image: javascript,
        percentage: "Proficient",
        id:"6"
    },
    {
        image: psql,
        percentage: "Proficient",
        id:"7"
    },
    {
        image: bootstrap,
        percentage: "Proficient",
        id:"8"
    },
    {
        image: git,
        percentage: "Intermediate",
        id:"9"
    },
    {
        image: material,
        percentage: "Proficient",
        id:"10"
    },
    {
        image: postman,
        percentage: "Proficient",
        id:"11"
    },
    {
        image: html,
        percentage: "Proficient",
        id:"12"
    },
    {
        image: tailwind,
        percentage: "Intermediate",
        id:"13"
    },
    {
        image: css,
        percentage: "Proficient",
        id:"14"
    },
    
]