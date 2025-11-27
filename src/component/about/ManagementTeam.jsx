import "./ManagementTeam.css";
function ManagementTeam() {
  return (
    <>
      <section className="ManagementTeam">
        <h2 className="text-primary text-center pt-5">
          Meet our Leadership Team
        </h2>
        <div className="row" data-aos="fade-left">
          <div className="col-lg-3 mx-auto mt-5">
            <img
              src="images/about-img1.png"
              alt=""
              className="img-fluid w-100 rounded"
            />
            <div className="mt-3 text-center">
              <h4 className="text-black">Dev Venkatesan</h4>
              <h6 className="text-primary">CEO & Founder</h6>
              <p className="text-black">
                With over 8 years in software development and business
                leadership, Dev drives our strategic vision and growth
                initiatives.
              </p>
              <a
                href="https://in.linkedin.com/in/dev-venkatesan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="mx-3 bi bi-linkedin fs-4 text-primary"></i>
              </a>
            </div>
          </div>
        </div>

       <div className="container py-5">
         <div className="row justify-content-center">
             <div className="col-md-4 col-lg-4">
               <div className="manage-card">
                 <div className="manage-profile-pic">
                   <img src="https://res.cloudinary.com/duomzq5mm/image/upload/v1758172793/Gemini_Generated_Image_hmp2qvhmp2qvhmp2_heys1r.png" alt="Manoj M R" />
                 </div>
                 <h5 className="manage-name text-black">Meenaskhi Sundaram</h5>
                 <p className="manage-role">COO</p>
                   {/* <a
                href="https://www.linkedin.com/in/ms1670/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="mx-3 bi bi-linkedin fs-4 text-primary"></i>
              </a> */}
               </div>
             </div>


             <div className="col-md-4 col-lg-4">
               <div className="manage-card">
                 <div className="manage-profile-pic">
                   <img src="https://res.cloudinary.com/duomzq5mm/image/upload/v1758172854/image_15_lketxc.png" alt="Manoj M R" />
                 </div>
                 <h5 className="manage-name text-black">Sudesh T</h5>
                 <p className="manage-role">VP</p>
                   {/* <a
                href="https://www.linkedin.com/in/sudesh-t-317b14276/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="mx-3 bi bi-linkedin fs-4 text-primary"></i>
              </a> */}
               </div>
             </div>
         </div>
       </div>
      </section>
    </>
  );
}

export default ManagementTeam;
