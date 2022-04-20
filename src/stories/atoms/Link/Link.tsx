import { ReactNode } from "react"
import { ILink } from "../../interfaces/ILink";
import Icon from "../Icon/Icon";

const Link = (props: {
  className?: string,
  link: ILink
}) => {

  const {
    className = "",
    link
  } = props;

  return (
    <a className={`Link ${className}`} href={link.url}>
      {link.icon && <> <Icon icon={link.icon} />&nbsp;</>}
      <span>{link.text}</span>
    </a>
  )
}

export default Link;