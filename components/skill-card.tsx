import { ReactElement } from "react";

interface SkillCardProps  {
  icon?: ReactElement,
  name?: string,
}

const SkillCard = ({icon, name}: SkillCardProps) => {
  return (
    <div className="p-5 flex items-center rounded-lg bg-gr-900 shadow-lg">
      <div className="w-16 h-16 bg-gray-700 mr-8 rounded-full flex-shrink-0">
        {icon ?? ''}
      </div>

      <h4 className="text-2xl font-bold text-gray-200">{name}</h4>
    </div>
  )
}

export default SkillCard;