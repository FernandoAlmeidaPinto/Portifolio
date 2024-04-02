import { IconType } from "react-icons";

export interface StackProps {
  name: string;
  icon: IconType;
}

export function Stack({ name, icon } : StackProps) {
  const Icon = icon
  return (
    <div className="lg:w-24 lg:h-24 flex justify-center items-center flex-col select-none group hover:-translate-y-1 transition-all duration-300">
      <Icon className="w-12 h-12 group-hover:fill-color5 transition-all duration-300" />
      <span className="group-hover:text-color5 transition-all duration-300 pt-1">{name}</span>
    </div>
  )
}