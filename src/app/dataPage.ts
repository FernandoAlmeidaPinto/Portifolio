import { StaticImageData } from 'next/image';
import MirarLogo from '../assets/images/mirae_asset_wealth_management_brazil_cctvm_ltda_logo.jpeg';
import VcnafaculLogo from '../assets/icons/Grupo 53.svg';
import LuzLogo from '../assets/images/luz_solucoes_financeiras_logo.jpeg';
import UfscarLogo from '../assets/images/1649448016709.jpeg'
import { Experience } from './components/atoms/experience';



interface Metadata {
  title: string;
  description: string;
  linkedin: string;
  github: string;
  experiences: Experience[],
  education: Experience
}

export const metadata : Metadata = {
  title: "Fernando Almeida",
  description: "With a degree in Physics from the Federal University of São Carlos and a profound enthusiasm for Programming and Problem Solving, I have dedicated myself to mastering the art of Backend Development." +
  "Currently, I am engaged in crafting solutions utilizing a diverse tech stack. I apply industry-leading methodologies such as DDD, TDD, SOLID, Design Patterns, and Clean Code to ensure the delivery of elegant and scalable systems." +
  "Beyond my professional pursuits, I am deeply involved in personal projects that leverage Node with TypeScript and Angular, complemented by experiences with React." +
  "At the heart of my professional journey is a core belief in the importance of nurturing human connections — a sentiment captured by my personal motto: 'Cherish People More.'",
  linkedin: 'https://www.linkedin.com/in/fernandoalmeidapinto/',
  github: 'https://github.com/FernandoAlmeidaPinto',
  experiences: [
    { image: MirarLogo, 
      name: 'Mirae Asset Wealth Management (Brazil) C.C.T.V.M. Ltda', 
      role: 'Mid-Level Software Developer | C# / .NET',
      start: new Date('2023-07-02'),
      link: "https://corretora.miraeasset.com.br/"
    },
    { image: VcnafaculLogo, 
      name: 'Você na Facul Project - Owner', 
      role: 'Lead Full Stack Developer | Social Impact Initiative',
      start: new Date('2020-07-2'),
      link: "https://vcnafacul.com.br/"
    },
    { image: LuzLogo, 
      name: 'LUZ Soluções Financeiras', 
      role: 'Mid-Level Development Analyst | Full-Stack Developer Specialized in Distributed Systems',
      start: new Date('2020-10-14'),
      finished: new Date('2023-04-02'),
      link: "https://luz-ef.com/"
    }
  ],
  education: {
    image: UfscarLogo,
    name: 'Federal University of Sao Carlos (UFSCar)',
    role: 'Bachelor’s Degree in Physics',
    start: new Date('2013-03-02'),
    finished: new Date('2019-07-02'),
    link: 'https://www.ufscar.br/'
  }
};