import Servicesaside from "./services-aside";
import "./services.css";
function Servicesmaincontent({details}) {
  return (
    <>
      <section className="services-main">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Servicesaside />
            </div>
            <div className="col-md-8">
              <img
                src={details.serviceImageUrl}
                alt=""
                className="img-fluid rounded"
              />
              <div>
                <h2 className="mt-4 text-primary">{details.serviceSubHeding}</h2>
                <div className="d-flex mt-3">
                  <div className="pt-2">
                    <i className="bi bi-arrow-right text-white bg-primary p-1 arrow-icon"></i>
                  </div>
                  <div className="ms-3">
                    <p className="text-secondary">
                     {details.servicesPara1}
                    </p>
                  </div>
                </div>
                 <div className="d-flex">
                  <div className="pt-2">
                    <i className="bi bi-arrow-right text-white bg-primary p-1 arrow-icon"></i>
                  </div>
                  <div className="ms-3">
                    <p className="text-secondary">
                      {details.servicesPara2}
                    </p>
                  </div>
                </div>
                 <div className="d-flex">
                  <div className="pt-2">
                    <i className="bi bi-arrow-right text-white bg-primary p-1 arrow-icon"></i>
                  </div>
                  <div className="ms-3">
                    <p className="text-secondary">
                      {details.servicesPara3}
                    </p>
                  </div>
                </div>
                 <div className="d-flex">
                  <div className="pt-2">
                    <i className="bi bi-arrow-right text-white bg-primary p-1 arrow-icon"></i>
                  </div>
                  <div className="ms-3">
                    <p className="text-secondary">
                      {details.servicesPara4}
                    </p>
                  </div>
                </div>  
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Servicesmaincontent;
