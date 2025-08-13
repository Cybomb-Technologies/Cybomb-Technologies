import React, { useState } from "react";
import CareerFilters from "./career-filters";
import CareerCard from "./career-card";
import Testimonials from "./testimonials";
import styles from "./career-content.module.css";
import Gallery from './gallery';

const CareerContent = ({ jobs = [], onViewJob, onApplyJob }) => {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");

  const clearFilters = () => {
    setSearch("");
    setDepartment("");
    setLocation("");
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.short.toLowerCase().includes(search.toLowerCase()) ||
      job.skills?.some((skill) =>
        skill.toLowerCase().includes(search.toLowerCase())
      );

    const matchesDepartment =
      !department || job.department.toLowerCase() === department.toLowerCase();
    const matchesLocation =
      !location || job.location.toLowerCase().includes(location.toLowerCase());

    return matchesSearch && matchesDepartment && matchesLocation;
  });

  return (
    <div className={`container my-5 ${styles.careerSection}`} id="openings">
      {/* Filters */}
      <CareerFilters
        search={search}
        setSearch={setSearch}
        department={department}
        setDepartment={setDepartment}
        location={location}
        setLocation={setLocation}
        clearFilters={clearFilters}
      />

    
<div className="mb-5">
  <h3 className={`mb-4 mt-4 ${styles.sectionTitle}`}>Current Openings</h3>
  {filteredJobs.length > 0 ? (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {filteredJobs.map((job) => (
        <div key={job.id} className="col">
          <CareerCard job={job} onView={onViewJob} onApply={onApplyJob} />
        </div>
      ))}
    </div>
  ) : (
    <div className="text-center py-5">
      <h4 className="text-muted mb-3">No jobs match your criteria</h4>
      <button
        className="btn btn-outline-primary"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  )}
</div>

      {/* Why Join Us */}
      <section className="my-5 py-4">
        <h3 className={`mb-5 text-center ${styles.sectionTitle}`}>
          Why Join Our Team?
        </h3>
        <div className="row g-4">
          {[
            {
              icon: "👥",
              title: "Collaborative Culture",
              description:
                "Work with talented professionals in an environment that values teamwork and innovation.",
            },
            {
              icon: "📈",
              title: "Career Growth",
              description:
                "Continuous learning opportunities with mentorship programs and skill development.",
            },
            {
              icon: "⚖️",
              title: "Work-Life Balance",
              description:
                "Flexible work arrangements and generous time-off policies.",
            },
            {
              icon: "💡",
              title: "Innovative Projects",
              description:
                "Work on cutting-edge technologies that make a real impact.",
            },
            {
              icon: "🏆",
              title: "Competitive Benefits",
              description:
                "Comprehensive health coverage, retirement plans, and performance bonuses.",
            },
            {
              icon: "🌎",
              title: "Global Impact",
              description:
                "Contribute to solutions that reach users around the world.",
            },
          ].map((item, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className={`card h-100 p-4 ${styles.benefitCard}`}>
                <div className="fs-1 mb-3">{item.icon}</div>
                <h5 className="mb-3">{item.title}</h5>
                <p className="text-muted mb-0">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hiring Process */}
<section className="my-5 py-4">
  <h3 className={`mb-5 text-center ${styles.sectionTitle}`}>
    Our Hiring Process
  </h3>
  <div className={`${styles.processStack} container`}>
    {[
      {
        step: 1,
        title: "Application Review",
        description:
          "We carefully review each application against the role requirements.",
      },
      {
        step: 2,
        title: "Initial Screening",
        description:
          "A recruiter will reach out for a phone/video call to discuss your experience.",
      },
      {
        step: 3,
        title: "Technical Assessment",
        description:
          "For technical roles, we'll evaluate your skills through practical tests.",
      },
      {
        step: 4,
        title: "Team Interviews",
        description:
          "You'll meet with potential team members and managers for in-depth discussions.",
      },
      {
        step: 5,
        title: "Culture Fit",
        description:
          "We assess mutual fit to ensure you'll thrive in our environment.",
      },
      {
        step: 6,
        title: "Offer",
        description:
          "Successful candidates receive a competitive offer package.",
      },
    ].map((item) => (
      <div key={item.step} className={`${styles.processStepStack}`}>
        <div className={styles.stepCircle}>{item.step}</div>
        <div className={styles.stepContent}>
          <h5>{item.title}</h5>
          <p className="text-muted mb-0">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* Testimonials */}
       {/* <Testimonials /> */}

      {/* <Gallery/> */}
    </div>
  );
};

export default CareerContent;
