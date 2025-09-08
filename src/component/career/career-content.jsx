import React, { useState } from "react";
import CareerBanner from "./career-banner";
import CareerContent from "./content";
import JobDetailModal from "./job-detail-modal";
import StillNotSure from './../common-ui/stillnotsure/StillNotSure';
import HiringProcess from "./hiring-process";
import Testimonials from "./testimonials"

export default function CareerPage() {
  const [jobs] = useState([
    {
      id: "fullstack-1",
      title: "Fullstack Developer",
      type: "Full-time",
      location: "Remote / Hybrid",
      experience: "3–5 years",
      department: "Engineering",
      short: "Work across the stack to design, build, and scale modern web applications with robust backend and dynamic frontend.",
      isNew: true,
      skills: ["React", "Node.js", "Express", "MongoDB", "REST/GraphQL", "TypeScript"],
      responsibilities: [
        "Develop and maintain scalable fullstack applications",
        "Design RESTful and GraphQL APIs",
        "Build reusable frontend components and backend services",
        "Ensure application security and data protection",
        "Collaborate with designers, frontend, and DevOps teams"
      ]
    },
    {
      id: "mobile-dev-2",
      title: "Mobile App Developer",
      type: "Full-time",
      location: "Remote / Chennai",
      experience: "2–4 years",
      department: "Engineering",
      short: "Develop high-quality mobile applications for iOS and Android using React Native or Flutter.",
      isNew: false,
      skills: ["React Native", "Flutter", "iOS/Android SDKs", "APIs", "Firebase"],
      responsibilities: [
        "Design and build advanced mobile applications",
        "Integrate third-party APIs and services",
        "Ensure mobile applications are optimized for performance and usability",
        "Collaborate with backend developers for data integration",
        "Write unit tests and ensure code quality"
      ]
    },
    {
      id: "ui-ux-3",
      title: "Senior UI/UX Designer",
      type: "Full-time",
      location: "Remote / Chennai",
      experience: "5+ years",
      department: "Design",
      short: "Lead the design of innovative product experiences, creating wireframes, prototypes, and high-fidelity designs for our platform.",
      isNew: true,
      skills: ["Figma", "User Research", "Prototyping", "UI Design", "UX Writing"],
      responsibilities: [
        "Lead end-to-end design process from research to implementation",
        "Create user flows, wireframes, and high-fidelity prototypes",
        "Conduct user research and usability testing",
        "Collaborate with product managers and engineers",
        "Maintain and evolve our design system"
      ]
    },
    {
      id: "react-dev-4",
      title: "React Developer",
      type: "Full-time",
      location: "Remote / Hybrid",
      experience: "3+ years",
      department: "Engineering",
      short: "Build modern, responsive single-page applications using React and Next.js, focusing on performance and accessibility.",
      isNew: false,
      skills: ["React", "TypeScript", "Next.js", "GraphQL", "Jest"],
      responsibilities: [
        "Develop new user-facing features with React",
        "Build reusable components and front-end libraries",
        "Optimize applications for maximum performance",
        "Collaborate with backend developers on API design",
        "Write unit and integration tests"
      ]
    },
    {
      id: "devops-5",
      title: "DevOps Engineer",
      type: "Full-time",
      location: "Remote",
      experience: "4+ years",
      department: "Engineering",
      short: "Design and maintain our cloud infrastructure, CI/CD pipelines, and monitoring systems to ensure high availability.",
      isNew: true,
      skills: ["AWS", "Terraform", "Kubernetes", "CI/CD", "Monitoring"],
      responsibilities: [
        "Design and implement cloud infrastructure",
        "Automate deployment and scaling processes",
        "Monitor system performance and troubleshoot issues",
        "Implement security best practices",
        "Collaborate with development teams on deployment strategies"
      ]
    },
  ]
);

  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);

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

  const handleApplicationSubmit = () => {
    // In a real app, you would handle the submission here
    console.log("Application submitted for:", selectedJob?.title);
  };

  return (
    <>
      <CareerBanner />
      
      <CareerContent
        jobs={jobs}
        onViewJob={handleViewJob}
        onApplyJob={handleApplyJob}
      />

      {showModal && (
        <JobDetailModal
          job={selectedJob}
          onClose={handleCloseModal}
          onApply={handleApplicationSubmit}
        />
        
      )}
      <HiringProcess/>
      <Testimonials/>
      <StillNotSure/>
    </>
  );
}