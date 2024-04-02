'use client';

import { useEffect, useState } from "react";
import { IoMoon } from "react-icons/io5";
import { MdSunny } from "react-icons/md";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

interface Props {
  linkedin: string;
  github: string;
}

export function Header({linkedin, github } : Props) {
  const [ darkMode, setDarkMode ] = useState<boolean>()

  const changeTheme = (mode: boolean) => {
    setDarkMode(mode)
    if(mode) {
      window.localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    } else {
      localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
    }
  }

  useEffect(() => {
    if(localStorage?.getItem('theme') === 'dark' 
    || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      changeTheme(true)
    }
    else {
      changeTheme(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div className="h-16 flex justify-end items-center gap-4">
      <Link target="_blank" href={linkedin}><FaLinkedin className="w-6 h-6 cursor-pointer" /></Link>
      <Link target="_blank"  href={github}><FaGithub className="w-6 h-6 cursor-pointer" /></Link>
      
      { !darkMode ? 
          <IoMoon className="w-6 h-6 cursor-pointer fill-color3" onClick={() => { changeTheme(true) }} /> : 
          <MdSunny className="w-6 h-6 cursor-pointer hover:animate-rotate fill-color7" onClick={() => { changeTheme(false) }}/>}
    </div>
  )
}