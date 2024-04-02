'use client';

import PhotoProfile from '../assets/images/1689107612941.jpeg';
import { Header } from "./components/atoms/header";
import { Hero } from "./components/molecules/hero";
import { Stacks } from './components/molecules/stacks';
import { metadata } from "./dataPage";

import { IoSchool } from "react-icons/io5";

import { FaHeart } from "react-icons/fa";

import { Experiences } from './components/molecules/experiences';
import { Experience } from './components/atoms/experience';
import { Title } from './components/atoms/title';

export default function Home() {
  return (
    <main className="flex flex-col gap-4 select-none">
      <Header linkedin={metadata.linkedin} github={metadata.github} />
      <Hero presentation={{ title: metadata.title, description: metadata.description }} photo={PhotoProfile}  />
      <Stacks />
      <Experiences experiences={metadata.experiences} />
      <div className='flex flex-col items-center'>
        <div className='flex gap-4'>
          <Title>Education</Title>
          <IoSchool className='w-8 h-8'/>
        </div>
        <Experience {...metadata.education} />
      </div>
      <div className='flex gap-1 justify-center'>Developed by <i>Fernando Almeida</i><FaHeart className='fill-color5' /></div>
    </main>
  );
}
