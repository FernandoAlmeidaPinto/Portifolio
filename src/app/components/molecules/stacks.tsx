import { Stack } from "../atoms/stack";

import { FaPython } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { SiFsharp } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { SiMicrosoftazure } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiOracle } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiRedis } from "react-icons/si";
import { SiRabbitmq } from "react-icons/si";
import { IoCodeSlash } from "react-icons/io5";
import { Title } from "../atoms/title";

export function Stacks() {
  return (
    <div className="my-4">
     <div className="flex justify-center w-full gap-4">
        <Title>Technologies</Title>
        <IoCodeSlash className="w-8 h-8" />
     </div>
      <div className="flex justify-center p-4 w-full gap-8 flex-wrap">
        <Stack name="Python" icon={FaPython} />
        <Stack name="C#" icon={SiCsharp} />
        <Stack name="F#" icon={SiFsharp} />
        <Stack name="TypeScript" icon={SiTypescript} />
        <Stack name="Nest Js" icon={SiNestjs} />
        <Stack name="Django" icon={SiDjango} />
        <Stack name=".Net" icon={SiDotnet} />
        <Stack name="Angular" icon={FaAngular} />
        <Stack name="React" icon={FaReact} />
        <Stack name="Git" icon={FaGitAlt} />
        <Stack name="Github" icon={FaGithub} />
        <Stack name="Docker" icon={FaDocker} />
        <Stack name="Kubernetes" icon={SiKubernetes} />
        <Stack name="AWS" icon={FaAws} />
        <Stack name="Azure" icon={SiMicrosoftazure} />
        <Stack name="Postgres" icon={BiLogoPostgresql} />
        <Stack name="Oracle" icon={SiOracle} />
        <Stack name="MongoDB" icon={SiMongodb} />
        <Stack name="Redis" icon={SiRedis} />
        <Stack name="RabbitMQ" icon={SiRabbitmq} />
      </div>
    </div>
  )
}