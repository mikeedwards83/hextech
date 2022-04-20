import { ReactNode } from "react"
import Icon from "../Icon/Icon";
import { Icons } from "../Icon/Icons";

const Button = (props: {
  className?: string
  label: string,
  icon?: Icons
  onClick: () => void
}) => {

  const {
    className = "",
    label,
    icon,
    onClick
  } = props;

  return (
    <button className="btn btn-primary btn-icon-split" onClick={onClick}>
      {icon && <span className="icon text-white-50">
        <Icon icon={icon} />
      </span>
      }
      <span className="text">{label}</span>
    </button>
  )
}

export default Button;