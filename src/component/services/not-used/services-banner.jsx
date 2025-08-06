import { Link } from "react-router-dom";


function Servicesbanner({details}) { 
  return ( 
    <>
      <div className="about-banner-img" style={{ padding: "135px 0px 60px"}}>
        <div className="container">
          <h1 className="text-white text-center">{details.servicesBannerHeading}</h1>
         
        </div>
      </div>
      </>
  );
}

export default Servicesbanner; 