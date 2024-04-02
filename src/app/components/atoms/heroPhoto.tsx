import Image, { StaticImageData } from "next/image"

export interface HeroPhotoProps {
  photo: StaticImageData
}
export function HeroPhoto({ photo } : HeroPhotoProps) {
  return (
    <div className="w-full lg:w-fit flex justify-end lg:justify-center items-center">
      <Image className="w-56 h-56 rounded-full" src={photo} alt="Profile Photo" />
    </div>
  )
}