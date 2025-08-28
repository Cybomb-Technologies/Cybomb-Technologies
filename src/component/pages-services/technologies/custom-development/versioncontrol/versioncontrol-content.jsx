import React from "react";
import Banner from "../../../../common-ui/custom-development/banner";
import InfoStats from "../../../../common-ui/custom-development/info-stats";
import HiringModels from "../../../../common-ui/custom-development/hiring";
import placeholderImage from "./../../../../../assets/placeholder-image.webp";
import WhatWeOffer from "../../../../common-ui/custom-development/whatweoffer";
import ServicesOfferings from "../../../../common-ui/custom-development/services-offerings";
import DevelopmentProcess from "../../../../common-ui/custom-development/development-process";
import OnlinePresence from "../../../../common-ui/custom-development/online-presence";
import VersionControlTech from "./versioncontrol-technology";
import AboutTech from "../../../../common-ui/custom-development/about-tech";

const hiringData = [
  { title: "Collaboration", description: "Enable seamless teamwork with branching, merging, and pull requests." },
  { title: "Automation", description: "Automate builds, tests, and deployments with GitHub Actions CI/CD." },
  { title: "Reliability", description: "Ensure code consistency and reduce human errors in deployment pipelines." },
  { title: "Scalability", description: "Support projects of any size with robust version control workflows." },
  { title: "Security", description: "Role-based access, secrets management, and vulnerability scanning." },
];

const offerData = [
  { title: "Git Workflow Setup", description: "Branching strategies (Gitflow, trunk-based) tailored for your team." },
  { title: "CI/CD Pipelines", description: "Custom pipelines for build, test, and deploy automation." },
  { title: "GitHub Actions", description: "Integrating automated workflows directly in your repositories." },
  { title: "Release Management", description: "Version tagging, changelog generation, and structured releases." },
  { title: "DevOps Integration", description: "Link version control with cloud deployments and monitoring." },
  { title: "Code Quality", description: "Static analysis, automated testing, and code review enforcement." },
];

const offerings = [
  { title: "Version Control Experts", description: "Set up and manage Git repositories for distributed teams." },
  { title: "CI/CD Engineers", description: "Implement pipelines across staging and production environments." },
  { title: "DevOps Solutions", description: "Integrate GitHub Actions with AWS, Azure, or GCP." },
  { title: "Migration Services", description: "Move legacy projects into modern version control systems." },
  { title: "Automation Consulting", description: "Reduce manual tasks with event-driven workflows." },
  { title: "24/7 Support", description: "Monitor and maintain pipelines to ensure zero downtime." },
];

const useCases = [
  "Agile Teams – Automate deployments for faster sprints.",
  "Startups – Streamline code reviews and releases.",
  "Enterprises – Scalable CI/CD pipelines across multiple projects.",
  "Open Source – Enable transparent collaboration with GitHub workflows.",
  "DevOps – Integrate continuous testing and delivery into workflows.",
];

const versionControlDescription = [
  {
    name: "Git",
    description: "Distributed version control system enabling efficient source code management and collaboration.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    iconColors: "linear-gradient(135deg, #fdd6d6ff, #fcbabae7)"
  },
  {
    name: "GitHub",
    description: "Popular platform for hosting Git repositories with collaboration, code reviews, and project management.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    iconColors: "linear-gradient(135deg, #d0d0d0ff, #f5f5f5ff)"
  },
  {
    name: "GitLab",
    description: "DevOps platform providing Git repository management, CI/CD, and issue tracking.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
    iconColors: "linear-gradient(135deg, #f9d2b5ff, #fbc1aaff)"
  },
  {
    name: "Bitbucket",
    description: "Git-based source code repository hosting service with Jira and Trello integration.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg",
    iconColors: "linear-gradient(135deg, #c1e3faff, #a8d8faff)"
  },
  {
    name: "GitHub Actions",
    description: "CI/CD automation tool integrated with GitHub for building, testing, and deploying code.",
    icon: "https://avatars.githubusercontent.com/u/44036562?s=200&v=4",
    iconColors: "linear-gradient(135deg, #c7e8faff, #a3e6f7ff)"
  },
  {
    name: "GitLab CI/CD",
    description: "Continuous integration and deployment pipelines integrated into GitLab.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
    iconColors: "linear-gradient(135deg, #ffe2ccff, #f7c7b5ff)"
  }  
];


function VersionControlContent() {
  return (
    <section>
      <Banner
        heading="Version Control & CI/CD Services"
        subtext="Streamline development with Git, GitHub Actions, and automated CI/CD pipelines."
        buttonText="Consult Our Experts"
        note="Our team specializes in setting up Git workflows, GitHub Actions, and CI/CD pipelines that ensure efficient collaboration, fast deployments, and reliable delivery."
      />
      <InfoStats
        stats={[
          { number: "95%", label: "Development teams use Git" },
          { number: "80%", label: "Faster release cycles with CI/CD" },
          { number: "70%", label: "Automation reduces deployment errors" },
        ]}
        caption="Trusted by"
        highlight="Startups & Enterprises"
      />
      <HiringModels
        title="Why Choose Git & CI/CD"
        cards={hiringData}
        image={placeholderImage}
      />
      <WhatWeOffer
        title="Our Version Control & Automation Services"
        items={offerData}
        image={placeholderImage}
      />
      <ServicesOfferings title="Our Expertise" items={offerings} />
      <VersionControlTech />
      <AboutTech technologies={versionControlDescription} />
      <DevelopmentProcess title="Common Use Cases" Process={useCases} />
      <OnlinePresence
        title="Ready to Optimize Your Workflow?"
        buttonText="CONTACT OUR CI/CD TEAM"
        buttonLink="#"
        imageSrc={placeholderImage}
        imageAlt="Version control and CI/CD services"
      />
    </section>
  );
}

export default VersionControlContent;
