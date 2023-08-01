export interface IData{
    name: string;
    profession: string;
    address: string;
    email: string;
    phone: string;
    image: string;
    profile: string;
    certificate: Certificate[];
    academic: Academic[];
    experience: Experience[];
    skills: Skill[];
    interest: string[];
    languages: Skill[];
}

export interface Certificate {
    date: string;
    description: string;
    institution: string;
    name: string;
}

export interface Academic {
    degree: string;
    description: string;
    endDate: string;
    institution: string;
    startDate: string;
}

export interface Experience {
    company: string;
    endDate: string;
    jobDescription: string;
    jobTitle: string;
    startDate: string;
}

export interface Skill {
    name: string;
    percentage: number;
    variant?: string;
}