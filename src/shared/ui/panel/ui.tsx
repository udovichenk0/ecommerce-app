import { Link } from "react-router-dom"

export const Panel = ({ title, link }: { title: string; link: string }) => {
  return (
    <div className="mb-10 flex items-center justify-between">
      <div className="text-[32px] font-medium text-main-dark">{title}</div>
      <Link to={link}>
        <div className="text-xl font-bold text-tr-dark underline">See all</div>
      </Link>
    </div>
  )
}
