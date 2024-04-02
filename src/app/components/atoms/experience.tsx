import { getDateExperience } from "@/app/utils/getDateExperience";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface Experience {
  image: StaticImageData,
  name: string;
  role: string;
  start: Date;
  finished?: Date;
  link: string;
}


export function Experience({image, name, role, start, finished, link} : Experience ) {
  return (
    <Link href={link} target="_blank" className='flex py-4 hover:text-color5 transition-all duration-300'>
      <Image className="w-20 h-20 rounded-full" src={image} alt="Profile Photo" />
      <div className='flex flex-col justify-center px-4'>
        <h1 className='font-black'>{name}</h1>
        <h2>{role}</h2>
        <h2 className='italic'>{getDateExperience(start)} to {getDateExperience(finished) ?? 'Present'}</h2>
      </div>
    </Link>
  )
}