import { ReactNode } from "react"
import { Nav } from "react-bootstrap";
import Icon from "../../atoms/Icon/Icon";
import Link from "../../atoms/Link/Link";
import { ILink } from "../../interfaces/ILink";
import { ILinkSet } from "./ILinkSet";

const SideBar = (props: {
  className?: string,
  linkSets: ILinkSet[]
  links: ILink[],
  siteName: string,


}) => {

  const {
    className = "",
    siteName,
    linkSets,
    links

  } = props;

  return (

    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">{siteName}</div>
      </a>

      <hr className="sidebar-divider my-0" />

      {links && links.map(link => <SideBarLink link={link} />)}
    

      {linkSets.map(linkset => <SideBarLinkSet linkSet={linkset} />)}

      <hr className="sidebar-divider d-none d-md-block" />

      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

      <div className="sidebar-card d-none d-lg-flex">
        <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..." />
        <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
        <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
      </div>

    </ul>


  )
}

const SideBarLinkSet = (props: { linkSet: ILinkSet }) => {

  const { linkSet } = props;

  return (
    <>
      <hr className="sidebar-divider" />

      <div className="sidebar-heading">
        {linkSet.title}
      </div>

      {linkSet.links.map(link => <SideBarLink link={link} />)
      }
    </>
  )
}

const SideBarLink = (props: { link: ILink }) => {


  const { link } = props;

  return (
    <li className="nav-item">
      <Link link={link} className="nav-link" />
    </li>
  )
}


export default SideBar;