interface Props {
  children: string
}

export function Title({ children } : Props) {
  return <div className="text-3xl font-bold">{children}</div>
}