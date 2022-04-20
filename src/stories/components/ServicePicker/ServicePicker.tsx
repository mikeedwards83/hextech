import { KeyboardEventHandler, ReactNode } from "react"
import FieldSearch from "../../atoms/FieldSearch/FieldSearch";
import Icon from "../../atoms/Icon/Icon";
import Link from "../../atoms/Link/Link";
import ServiceIcon from "../../atoms/ServiceIcon/ServiceIcon";
import { Button } from "../../Button";
import { IService } from "../../interfaces/IService";

const ServicePicker = (props: {
  className?: string
  services: IService[]
  onAdd: (service: IService) => void;
  onFilter: (term: string) => void;
}) => {

  const {
    className = "",
    services,
    onAdd,
    onFilter
  } = props;

  return (
    <div className={`ServicePicker ${className}`}>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <div className="row align-items-center">
            <div className="col-6">
              <h6 className="m-0 font-weight-bold text-primary d-inline">Find a badge</h6>
            </div>
            <div className="col-6">
              <div className="d-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <FieldSearch onChange={onFilter} placeholder="Filter List..." />
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <div className="row">
              <div className="col-sm-12">
                <table className="table table-bordered dataTable" id="dataTable" role="grid" aria-describedby="dataTable_info" >
                  <thead>
                    <tr>
                      <th >Type</th>
                      <th >Tool</th>
                      <th >Description</th>
                      <th>Website</th>
                      <th>Add</th>
                    </tr>
                  </thead>
                  <tbody>
                    {services && services.map(service => <ServiceRow service={service} onAdd={onAdd} />)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const ServiceRow = (props: {
  service: IService
  onAdd: (service: IService) => void;
}) => {

  const { service, onAdd } = props;

  return (
    <tr className="even">
      <td className="sorting_1">
        <ServiceIcon service={service} />
      </td>
      <td>{service.name}</td>
      <td>{service.description}</td>
      <td>{service.website && <Link link={service.website} />}</td>
      <td>
        <Button label="Add" onClick={() => onAdd(service)} />
      </td>
    </tr>
  )
}

export default ServicePicker;