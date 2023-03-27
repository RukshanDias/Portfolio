import img1 from "../assets/projects/readme_generator.png";
import img2 from "../assets/projects/movie_web.png";
import img3 from "../assets/projects/skin_consultation.png";
import img4 from "../assets/projects/fuel_management.png";
import img5 from "../assets/projects/ceylonoholic.png";

const projects = [
    {
        name: "GitHub ReadMe Generator",
        description: "Web app that can generate the ReadMe file for GitHub profile, by filling a form.",
        img: img1,
        techStack: [
            "https://cdn.jsdelivr.net/npm/devicon@2.10.0/icons/react/react-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
        ],
        github: "https://github.com/RukshanDias/GitHub-ReadMe-Generator",
        deploy: "https://github-readme-generator.onrender.com/",
    },
    {
        name: "Movie Website",
        description:
            "Movie website with a image and short description of movie. Searching, filter by genre have included. Have used API to get movie information.",
        img: img2,
        techStack: [
            "https://cdn.jsdelivr.net/npm/devicon@2.10.0/icons/react/react-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        ],
        github: "https://github.com/RukshanDias/React-Movie-Website",
        deploy: "https://rukshandias.github.io/React-Movie-Website/",
    },
    {
        name: "Skin Consultation Management System",
        description: "Java console and Swing GUI programme developed using core OOP principles.",
        img: img3,
        techStack: ["https://cdn.jsdelivr.net/npm/devicon@2.10.0/icons/java/java-original.svg"],
        github: "https://github.com/RukshanDias/Skin-Consultation-Management-System",
        deploy: null,
    },
    {
        name: "Fuel Queue Management System",
        description: "Java console and JavaFx GUI programme developed using core OOP principles.",
        img: img4,
        techStack: ["https://cdn.jsdelivr.net/npm/devicon@2.10.0/icons/java/java-original.svg"],
        github: "https://github.com/RukshanDias/Fuel-Queue-Management-System",
        deploy: null,
    },
    {
        name: "Ceylonoholic",
        description: "Travle website to promote the destination. Gallery, Store, Events and Quiz is included.",
        img: img5,
        techStack: [
            "https://cdn.jsdelivr.net/npm/devicon@2.10.0/icons/html5/html5-original.svg",
            "https://cdn.jsdelivr.net/npm/devicon@2.10.0/icons/css3/css3-original.svg",
            "https://cdn.jsdelivr.net/npm/devicon@2.10.0/icons/javascript/javascript-plain.svg",
        ],
        github: "https://github.com/RukshanDias/Ceylonoholic",
        deploy: null,
    },
];

export { projects };
