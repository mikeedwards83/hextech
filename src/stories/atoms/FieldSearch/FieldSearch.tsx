import { ReactNode } from "react"
import Icon from "../Icon/Icon";

const FieldSearch = (props: {
  className?: string,
  onChange?: (value: string) => void,
  placeholder:string
}) => {

  const {
    className = "",
    onChange,
    placeholder
  } = props;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  }


  return (
    <div className={`FieldSearch input-group ${className}`}>
      <input type="text" className="form-control bg-light border-1 small" placeholder={placeholder} aria-label="Search" aria-describedby="basic-addon2" onChange={handleOnChange} />
      <div className="input-group-append">
        <button className="btn btn-primary" type="button">
          <Icon icon="search" />
        </button>
      </div>
    </div>
  )
}

export default FieldSearch;