import { Experience } from "../atoms/experience"
import { FaHammer } from "react-icons/fa6";
import { Title } from "../atoms/title";

interface Props {
  experiences: Experience[]
}

export function Experiences({ experiences } : Props ) {
  return (
    <div>
        <div className="flex justify-center gap-4">
          <Title>Experience</Title>
          <FaHammer className="w-8 h-8" />
        </div>
        <div className='flex flex-wrap gap-x-10 justify-center'>
          {experiences.map((experience, index) => <Experience key={index} {...experience} />)}
        </div>
      </div>
  )
}