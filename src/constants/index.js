import {
    javascript,
    typescript,
    reactjs,
    nodejs,
    mongodb,
    git,
    meta,
    starbucks,
    tesla,
    shopify,
    yourplaces,
    expo,
    fullstack,
    codesplainer,
    culinarygpt,
    express,
    graphql,
    restapi,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Frontend Developer",
        icon: reactjs,
    },
    {
        title: "Mobile Developer",
        icon: expo,
    },
    {
        title: "Backend Developer",
        icon: nodejs,
    },
    {
        title: "Full Stack Developer",
        icon: fullstack,
    },
];

const technologies = [
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: 'Express JS',
        icon: express
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "GraphQL",
        icon: graphql,
    },
    {
        name: "REST API",
        icon: restapi,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: 'React Native',
        icon: expo
    },
    
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Yosef proved me wrong.",
        name: "Noa Meltzer",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Yosef does.",
        name: "Ofek Berkovich",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Yosef optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Limor Cohen",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "CulinaryGPT",
        description:
            `"CulinaryGPT" is a AI Based application that helps users discover personalized dishes based on dietary preferences, ingredient availability, and nutritional requirements.`,
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: 'express',
                color: 'green-text-gradient'
            },
            {
                name: "mongodb",
                color: "pink-text-gradient",
            },
        ],
        image: culinarygpt,
        source_code_link: "https://github.com/YosefHershberg/culinary_gpt_app",
        deploy_link: "https://culinary-gpt.vercel.app/",
    },
    {
        name: "CodeSplainer",
        description:
            `This AI powered project is an app that helps new developers understand any code uploaded to github `,
        tags: [
            {
                name: "tailwind",
                color: "blue-text-gradient",
            },
            {
                name: "react-query",
                color: "green-text-gradient",
            },
            {
                name: "framer-motion",
                color: "pink-text-gradient",
            },
        ],
        image: codesplainer,
        source_code_link: "https://github.com/YosefHershberg/code_explain_app",
        deploy_link: "https://code-explain-app.vercel.app/",
    },
    {
        name: "YourPlaces",
        description:
            `YourPlaces is a platform that allows users to share and discover places and locations between travelers.`,
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "node",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "pink-text-gradient",
            },
        ],
        image: yourplaces,
        source_code_link: "https://github.com/YosefHershberg/places_app_new",
    },
];

export { services, technologies, experiences, testimonials, projects };