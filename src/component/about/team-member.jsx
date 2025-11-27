import "./team-member.css";

function TeamMember() {
  return (
    <section className="teammember">
      <div className="container">
        <h1 className="text-center mb-5">Core Team Members</h1>

        {/* Row 1 */}
        <div className="row mt-4 d-flex justify-content-center mt-5">
          <div className="col-md-4 col-lg-4">
            <div className="team-card">
              <div className="profile-pic">
                <img src="https://res.cloudinary.com/duomzq5mm/image/upload/v1755750259/team-1_rkkmff.png" alt="Santhosh K" />
              </div>
              <h5 className="team-name text-black">Santhosh K</h5>
              <p className="team-role">Web App Developer</p>

              {/* <a
                href=" https://www.linkedin.com/in/santhosh-k-b8bab724a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="mx-3 bi bi-linkedin fs-4 text-primary"></i>
              </a> */}
            </div>
          </div>

          <div className="col-md-4 col-lg-4">
            <div className="team-card">
              <div className="profile-pic">
                <img src="https://res.cloudinary.com/duomzq5mm/image/upload/v1755750368/team-3_ayj93s.png" alt="Manoj M R" />
              </div>
              <h5 className="team-name text-black">Manoj M R</h5>
              <p className="team-role">UI & UX Designer</p>
               {/* <a
                href="https://www.linkedin.com/in/manoj-m-r/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="mx-3 bi bi-linkedin fs-4 text-primary"></i>
              </a> */}
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row g-4 mt-4">
          <div className="col-md-4 col-lg-4">
            <div className="team-card">
              <div className="profile-pic">
                <img
                  src="https://res.cloudinary.com/duomzq5mm/image/upload/v1755750475/team-5_mttqoe.jpg"
                  alt="Divyadharshini Subramani"
                />
              </div>
              <h5 className="team-name text-black">Divyadharshini Subramani</h5>
              <p className="team-role">Website Developer</p>
              {/* <a
                href=" https://www.linkedin.com/in/divyadharshini-s-80a177348"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="mx-3 bi bi-linkedin fs-4 text-primary"></i>
              </a> */}
            </div>
          </div>

          <div className="col-md-4 col-lg-4">
            <div className="team-card">
              <div className="profile-pic">
                <img
                  src="https://res.cloudinary.com/duomzq5mm/image/upload/v1756106400/divya_daydeb.jpg"
                  alt="Divya Baskaran"
                />
              </div>
              <h5 className="team-name text-black">Divya Baskaran</h5>
              <p className="team-role">Mobile App Developer</p>
              {/* <a
                href="https://www.linkedin.com/in/divya-baskaran-765572283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
 "
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="mx-3 bi bi-linkedin fs-4 text-primary"></i>
              </a> */}
            </div>
          </div>

          <div className="col-md-4 col-lg-4">
            <div className="team-card">
              <div className="profile-pic">
                <img src="https://res.cloudinary.com/duomzq5mm/image/upload/v1755750572/team-8_hpix5t.png" alt="Divya Baskaran" />
              </div>
              <h5 className="team-name text-black">Devashree Salunke</h5>
              <p className="team-role">IOS Developer</p>
               {/* <a
                href=" https://www.linkedin.com/in/devashree-salunke-1b0308247"
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
  );
}

export default TeamMember;
