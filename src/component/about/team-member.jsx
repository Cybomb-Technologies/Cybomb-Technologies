import "./team-member.css";

function TeamMember() {
  return (
    <section className="teammember">
      <div className="container">
        <h1 className="text-center mb-5">Team Members</h1>

        {/* Row 1 */}
        <div className="row g-4">
          <div className="col-md-4 col-lg-4">
            <div className="team-card">
              <div className="profile-pic">
                <img src="/images/about-team/team-1.png" alt="Santhosh K" />
              </div>
              <h5 className="team-name text-black">Santhosh K</h5>
              <p className="team-role">Full Stack Developer</p>
            </div>
          </div>

          <div className="col-md-4 col-lg-4">
            <div className="team-card">
              <div className="profile-pic">
                <img src="/images/about-team/team-3.png" alt="Manoj M R" />
              </div>
              <h5 className="team-name text-black">Manoj M R</h5>
              <p className="team-role">UI & UX Designer</p>
            </div>
          </div>

          <div className="col-md-4 col-lg-4">
            <div className="team-card">
              <div className="profile-pic">
                <img
                  src="/images/about-team/team-2.png"
                  alt="Meenakshisundram"
                />
              </div>
              <h5 className="team-name text-black">Meenakshi Sundaram</h5>
              <p className="team-role">Mobile App Developer</p>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row mt-4 d-flex justify-content-center mt-5">
          <div className="col-md-4 col-lg-4">
            <div className="team-card">
              <div className="profile-pic">
                <img src="/images/about-team/team-4.png" alt="Sudesh" />
              </div>
              <h5 className="team-name text-black">Sudesh</h5>
              <p className="team-role">Full Stack Developer</p>
            </div>
          </div>

          <div className="col-md-4 col-lg-4">
            <div className="team-card">
              <div className="profile-pic">
                <img src="/images/about-team/team-7.png" alt="Pavan" />
              </div>
              <h5 className="team-name text-black">Pavan</h5>
              <p className="team-role">Full Stack Developer</p>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="row g-4 mt-4">
          <div className="col-md-4 col-lg-4">
            <div className="team-card">
              <div className="profile-pic">
                <img
                  src="/images/about-team/team-5.jpg"
                  alt="Divyadharshini Subramani"
                />
              </div>
              <h5 className="team-name text-black">Divyadharshini Subramani</h5>
              <p className="team-role">Full Stack Developer</p>
            </div>
          </div>
          <div className="col-md-4 col-lg-4">
            <div className="team-card">
              <div className="profile-pic">
                <img
                  src="/images/about-team/team-6.jpeg"
                  alt="Divya Baskaran"
                />
              </div>
              <h5 className="team-name text-black">Divya Baskaran</h5>
              <p className="team-role">Full Stack Developer</p>
            </div>
          </div>
          <div className="col-md-4 col-lg-4">
            <div className="team-card">
              <div className="profile-pic">
                <img src="/images/about-team/team-8.png" alt="Divya Baskaran" />
              </div>
              <h5 className="team-name text-black">Devashree Salunke</h5>
              <p className="team-role">Full Stack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamMember;
