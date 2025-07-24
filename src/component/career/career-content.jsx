import "./career.css";

function Careercontent() {
    return (
        <section className="py-5 career-section">
            <div className="container">

                <div className="jumbotron jumbotron-bg text-white p-5 rounded-3 mb-5">
                    <h1 className="display-5 text-secondary text-center">Build Your Future at Cybomb Technologies</h1>
                    <p className="lead text-secondary text-center">Join our team of innovators and help shape the future of cybersecurity solutions</p>
                </div>

                <div className="row mb-5">
                    <div className="col-lg-10 mx-auto text-center">
                        <h2 className="mb-4 border-bottom pb-2 text-primary">Why Join Cybomb Technologies?</h2>
                        <p className="fs-5">
                            Cybomb Technologies is a leading cybersecurity firm dedicated to developing cutting-edge 
                            solutions to protect businesses from evolving digital threats. We foster a culture of 
                            innovation, collaboration, and continuous learning.
                        </p>
                    </div>
                </div>

              
                <div className="row mb-5">
                    <div className="col-12">
                        <h2 className="text-center mb-5 border-bottom pb-2">Our Benefits</h2>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h3 className="card-title h5 text-primary">Competitive Salary</h3>
                                <p className="card-text">We offer industry-leading compensation packages</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h3 className="card-title h5 text-primary">Flexible Work</h3>
                                <p className="card-text">Hybrid work models with remote options</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h3 className="card-title h5 text-primary">Learning Budget</h3>
                                <p className="card-text">Annual stipend for professional development</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h3 className="card-title h5 text-primary">Health Coverage</h3>
                                <p className="card-text">Comprehensive medical, dental, and vision plans</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-12">
                        <h2 className="text-center mb-5 border-bottom pb-2">Current Opportunities</h2>
                    </div>
                    
                    <div className="col-lg-6 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h3 className="h4">Senior Cybersecurity Analyst</h3>
                                <div className="d-flex gap-3 mb-3">
                                    <span className="badge bg-success">Full-time</span>
                                    <span className="badge bg-secondary">Bangalore</span>
                                    <span className="badge bg-info text-dark">5+ years experience</span>
                                </div>
                                <p className="card-text">
                                    Lead threat detection and response initiatives, develop security protocols, 
                                    and mentor junior team members.
                                </p>
                                <a href="#apply" className="btn btn-primary">Apply Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h3 className="h4">Frontend Developer (React)</h3>
                                <div className="d-flex gap-3 mb-3">
                                    <span className="badge bg-success">Full-time</span>
                                    <span className="badge bg-secondary">Remote</span>
                                    <span className="badge bg-info text-dark">3+ years experience</span>
                                </div>
                                <p className="card-text">
                                    Build intuitive interfaces for our security dashboards and client portals 
                                    using modern React practices.
                                </p>
                                <a href="#apply" className="btn btn-primary">Apply Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h3 className="h4">DevOps Engineer</h3>
                                <div className="d-flex gap-3 mb-3">
                                    <span className="badge bg-warning text-dark">Contract</span>
                                    <span className="badge bg-secondary">Hybrid</span>
                                    <span className="badge bg-info text-dark">4+ years experience</span>
                                </div>
                                <p className="card-text">
                                    Implement and maintain CI/CD pipelines, ensure system reliability, and 
                                    automate security testing processes.
                                </p>
                                <a href="#apply" className="btn btn-primary">Apply Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h3 className="h4">Security Researcher</h3>
                                <div className="d-flex gap-3 mb-3">
                                    <span className="badge bg-success">Full-time</span>
                                    <span className="badge bg-secondary">Chennai</span>
                                    <span className="badge bg-info text-dark">2+ years experience</span>
                                </div>
                                <p className="card-text">
                                    Discover and analyze new vulnerabilities, develop proof-of-concepts, 
                                    and contribute to our threat intelligence.
                                </p>
                                <a href="#apply" className="btn btn-primary">Apply Now</a>
                            </div>
                        </div>
                    </div>
                </div>

        
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center p-5 bg-light rounded-3">
                        <h2 className="mb-3">Don't See Your Perfect Role?</h2>
                        <p className="lead mb-4">
                            We're always looking for talented individuals. Send us your resume and 
                            we'll contact you when a matching position opens.
                        </p>
                        <button className="btn btn-danger btn-lg">Submit Your Resume</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Careercontent;