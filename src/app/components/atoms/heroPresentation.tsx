export interface HeroPresentationProps {
  title: string;
  description: string;
}

export function HeroPresentation({ title, description } : HeroPresentationProps) {
  return (
    <div className="flex flex-col max-w-3xl w-fit pr-4">
      <div className="text-3xl font-bold">Hi, I am</div>
      <div className="text-3xl font-bold text-color5">{title}</div>
      <div className="text-sm font-thin text-justify">{description}</div>
    </div>
  )
}