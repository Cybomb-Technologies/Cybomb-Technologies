import React, { useState } from "react";
import CareerFilters from "./career-filters";
import CareerCard from "./career-card";
import styles from "./career-content.module.css";

const CareerContent = ({ jobs = [], loading = false, error = null, onRetry, onViewJob, onApplyJob }) => {
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
      ) ||
      job.department.toLowerCase().includes(search.toLowerCase());

    const matchesDepartment =
      !department || job.department.toLowerCase() === department.toLowerCase();
    const matchesLocation =
      !location || job.location.toLowerCase().includes(location.toLowerCase());

    return matchesSearch && matchesDepartment && matchesLocation;
  });

  // Get unique departments from jobs
  const departments = ["All Departments", ...new Set(jobs.map(job => job.department))];
  
  // Get unique locations from jobs
  const locations = ["All Locations", ...new Set(jobs.map(job => job.location))];

  return (
    <div className={`container mb-0my-5 ${styles.careerSection}`} id="openings">
      {/* Filters */}
      <CareerFilters
        search={search}
        setSearch={setSearch}
        department={department}
        setDepartment={setDepartment}
        location={location}
        setLocation={setLocation}
        departments={departments}
        locations={locations}
        clearFilters={clearFilters}
      />

      <div className="mb-5">
        <h3 className={`mb-4 mt-4 ${styles.sectionTitle}`}>Current Openings</h3>
        
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3 text-muted">Loading job openings...</p>
          </div>
        ) : error ? (
          <div className="text-center py-5">
            <div className="alert alert-danger" role="alert">
              <h4 className="alert-heading">Unable to load job openings</h4>
              <p className="mb-3">{error}</p>
              <button
                className="btn btn-primary"
                onClick={onRetry}
              >
                Try Again
              </button>
            </div>
          </div>
        ) : filteredJobs.length > 0 ? (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {filteredJobs.map((job) => (
              <div key={job.id} className="col">
                <CareerCard job={job} onView={onViewJob} onApply={onApplyJob} />
              </div>
            ))}
          </div>
        ) : jobs.length > 0 ? (
          <div className="text-center py-5">
            <h4 className="text-muted mb-3">No jobs match your criteria</h4>
            <p className="text-muted mb-4">
              Try adjusting your filters to see more results.
            </p>
            <button
              className="btn btn-outline-primary"
              onClick={clearFilters}
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="text-center py-5">
            <h4 className="text-muted mb-3">No current job openings</h4>
            <p className="text-muted">
              We don't have any open positions at the moment. Please check back later!
            </p>
            <button
              className="btn btn-outline-primary mt-2"
              onClick={onRetry}
            >
              Refresh
            </button>
          </div>
        )}
      </div>

      {/* Why Join Us */}
      <section className="my-0 py-0">
        <h3 className={`mb-5 text-center ${styles.sectionTitle}`}>
          Why Join Our Team?
        </h3>
        <div className="row g-2 g-md-4">
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
                <div className="d-flex align-items-center mb-0">
                  <div className="fs-1 me-3">{item.icon}</div>
                  <h5 className="mb-0">{item.title}</h5>
                </div>
                <p className="text-light mb-0">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CareerContent;