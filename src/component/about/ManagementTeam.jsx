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
            </div>
          </div>
        </div>

       <div className="container py-5">
         <div className="row">
             <div className="col-md-4 col-lg-4">
               <div className="manage-card">
                 <div className="manage-profile-pic">
                   <img src="/images/about-team/team-2.png" alt="Manoj M R" />
                 </div>
                 <h5 className="manage-name text-black">Meenaskhi Sundaram</h5>
                 <p className="manage-role">COO</p>
               </div>
             </div>
               <div className="col-md-4 col-lg-4">
               <div className="manage-card">
                 <div className="manage-profile-pic">
                   <img src="/images/about-team/team-7.png" alt="Manoj M R" />
                 </div>
                 <h5 className="manage-name text-black">Pavan Pradeep Naik</h5>
                 <p className="manage-role">CTO</p>
               </div>
             </div>
             <div className="col-md-4 col-lg-4">
               <div className="manage-card">
                 <div className="manage-profile-pic">
                   <img src="/images/about-team/team-4.jpg" alt="Manoj M R" />
                 </div>
                 <h5 className="manage-name text-black">Sudesh T</h5>
                 <p className="manage-role">VP</p>
               </div>
             </div>
         </div>
       </div>
      </section>
    </>
  );
}

export default ManagementTeam;
