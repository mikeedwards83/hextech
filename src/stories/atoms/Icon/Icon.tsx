import { ReactNode } from "react"
import { faCheckSquare, faCoffee, faHome, faGears, IconDefinition, faPeopleGroup, faPen, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Icons } from "./Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";






const Icon = (props: {
  className?: string,
  icon: Icons
}) => {

  const {
    className = "",
    icon
  } = props;

  let fwIcon: IconDefinition;

  switch (icon) {
    case "home":
      fwIcon = faHome;
      break;
    case "configure":
      fwIcon = faGears;
      break;
    case "team":
      fwIcon = faPeopleGroup;
      break;
    case "create":
      fwIcon = faPen;
      break;
    case "search":
      fwIcon = faSearch;
      break;
  }

  return (
    <FontAwesomeIcon icon={fwIcon} />
  )
}

export default Icon;