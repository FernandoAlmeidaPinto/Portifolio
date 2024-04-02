import { StaticImageData } from "next/image";
import { HeroPhoto } from "../atoms/heroPhoto";
import { HeroPresentation, HeroPresentationProps } from "../atoms/heroPresentation";

interface HeroProps {
  presentation: HeroPresentationProps,
  photo: StaticImageData
}

export function Hero({ presentation, photo } : HeroProps) {
  return (
    <div className="flex flex-col lg:flex-row justify-around items-center lg:gap-0 gap-4">
      <HeroPresentation title={presentation.title} description={presentation.description} />
      <HeroPhoto photo={photo} />
    </div>
  )
}