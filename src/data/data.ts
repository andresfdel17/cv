import { IData } from "../interfaces";

export const data: IData = {
    name: "Andrés Felipe Delgado Gutieérrez",
    profession: "FullStack Developer",
    address: "Armenia, Colombia.",
    email: "andresfdel13@hotmail.com",
    phone: "3058215370",
    image: "https://avatars.githubusercontent.com/u/53264064?v=4",
    profile: "Developer",
    certificate: [
        {
            date: "27 julio 2024",
            description: "Software analysis and development technologist",
            institution: "Centro de turismo y comercio",
            name: "ADSO",
        },
        {
            date: "Jan 2017",
            description: "Mechatronics enginering",
            institution: "universidad EIA",
            name: "University",
        },
        {
            date: "Jan 2020",
            description: "React Course",
            institution: "Platzi",
            name: "Remote study",
        },
    ],
    academic: [
        {
            degree: "Developer",
            description: "I'm qualified to develop in differents programation languages",
            endDate: "December 2023",
            institution: "SENA",
            startDate: "April 2022",
        },
    ],
    experience: [
        {
            company: "Independent",
            endDate: "Jan 2021",
            jobDescription: "one year of experience in software development in PHP",
            jobTitle: "Developer",
            startDate: "Jan 2020",
        },
        {
            company: "VMW SAS",
            endDate: "August 2022",
            jobDescription: "Develop and mantain PHP, mysql and HTML apps",
            jobTitle: "Full stack developer",
            startDate: "Jan 2021",
        },
        {
            company: "Coordinadora Mercantil",
            endDate: "Present",
            jobDescription: "Develop and mantain typescript backend apps and services",
            jobTitle: "Full stack developer",
            startDate: "Aug 2022",
        },

    ],
    skills: [
        {
            name: "HTML5",
            percentage: 90,
            variant: "danger"
        },
        {
            name: "Javascript",
            percentage: 90,
            variant: "warning"
        },
        {
            name: "C#",
            percentage: 40,
            variant: "success"
        },
        {
            name: "React",
            percentage: 80,
            variant: "info"
        },
        {
            name: "DB SQL,MySQL",
            percentage: 80,
            variant: "dark"
        },
        {
            name: "Typescript",
            percentage: 90,
            variant: "primary"
        },
        {
            name: "Docker",
            percentage: 50,
            variant: "primary"
        },

    ],
    interest: ["backend", "gcp", "postgres"],
    languages: [
        {
            name: "Spanish",
            percentage: 100
        },
        {
            name: "English",
            percentage: 80
        },
    ]
};