// career-content.jsx (no changes needed for this file, keeping as is)
import React, { useState, useEffect } from "react";
import CareerBanner from "./career-banner";
import CareerContent from "./content";
import JobDetailModal from "./job-detail-modal";
import StillNotSure from './../common-ui/stillnotsure/StillNotSure';
import HiringProcess from "./hiring-process";
import Testimonials from "./testimonials"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function CareerPage() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch job openings from API
  useEffect(() => {
    fetchJobOpenings();
  }, []);

  const fetchJobOpenings = async () => {
    try {
      setLoading(true);
      setError(null);
       const response = await fetch(`${API_BASE_URL}/api/applications/openings`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch job openings: ${response.status}`);
      }
      
      const data = await response.json();

      if (data.success) {
        // Transform backend data to frontend format
        const transformedJobs = data.data.map((job) => ({
          id: job._id,
          title: job.title,
          type: job.type,
          location: job.location,
          experience: job.experienceLevel || "Not specified",
          department: job.department,
          short: job.description,
          isNew: job.isNew || false,
          skills: job.skills || [],
          responsibilities: job.responsibilities || [],
          requirements: job.requirements || [],
          benefits: job.benefits || [],
          salary: job.salary,
          applicationDeadline: job.applicationDeadline,
          isActive: job.isActive
        }));
        
        setJobs(transformedJobs);
      } else {
        throw new Error(data.message || 'Failed to fetch job openings');
      }
    } catch (error) {
      console.error("Error fetching job openings:", error);
      setError(error.message);
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  const handleViewJob = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const handleApplyJob = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
    setShowModal(false);
  };

  const retryFetch = () => {
    fetchJobOpenings();
  };

  return (
    <>
      <CareerBanner />
      
      <CareerContent
        jobs={jobs}
        loading={loading}
        error={error}
        onRetry={retryFetch}
        onViewJob={handleViewJob}
        onApplyJob={handleApplyJob}
      />

      {showModal && (
        <JobDetailModal
          job={selectedJob}
          onClose={handleCloseModal}
        />
      )}
      <HiringProcess/>
      <Testimonials/>
      <StillNotSure/>
    </>
  );
}