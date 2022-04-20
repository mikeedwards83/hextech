import { ReactNode } from "react"
import { ServiceTypes } from "../../../api/Services/ServiceTypes";
import { IImage } from "../../interfaces/IImage";
import { IService } from "../../interfaces/IService";

const ServiceIcon = (props: { 
  className?:string
  service:IService
}) => {

    const { 
      className=""
    } = props;

    return (
      <div className={`ServiceIcon ${className}`}>
        SI
      </div>
    )
}

export default ServiceIcon;