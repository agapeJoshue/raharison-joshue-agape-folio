import { autoflow } from './projects/autoflow';
import { medibook } from './projects/medibook';
import { planning } from './projects/planning';
import { smartshop } from './projects/smartshop';
import { stockflow } from './projects/stockflow';

type Image = { light: string; dark: string };

export type Project = {
    uuid: string;
    project_name: string;
    project_description: string;
    category: 'Application Web' | 'Application Mobile' | 'Service Web';
    rating: number;
    images: Image;
    links: { code: string; demo: string };
    introduction: ProjectIntroductionDemo;
};

export type ProjectIntroductionDemo = {
    images: Image;
    goals: string[];
    needs?: {
        requirements?: { title: string; description: string }[];
        not_requirements?: { title: string; description: string }[];
    };
    means?: {
        intro_material?: string[];
        intro_software?: string[];
        materials?: {
            type: string;
            processor: string;
            ram: string;
            disk: string;
            graph: string;
            number: number;
        }[];
        software?: { design: string; usage: string }[];
    };
    results?: {
        intro?: string[];
        lists?: { title: string; description: string }[];
    };
};

export const projectsData: Project[] = [medibook, smartshop, autoflow, planning, stockflow];
