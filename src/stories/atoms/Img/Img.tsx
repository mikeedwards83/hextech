import { ReactNode } from "react"

const Img = (props: { 
  className?:string
}) => {

    const { 
      className=""
    } = props;

    return (
      <div className={`Img ${className}`}>
        Img
      </div>
    )
}

export default Img;