import UiUxDesignContent from "./ui-ux-content";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import Metatags from "../../../../SEO/meta-tags";
import AgileProcess1 from "../../../common-ui/agile-process/agile-process1";

export default function UiUxDesign() {
  const metaPropsData = {
    title:
      "Best UI/UX & Interactive Design Service in Chennai | Cybomb Technologies",
    description:
      "Cybomb Tech in Chennai offers intuitive UX/UI research, web and app design, prototyping, branding, and user-centered mobile and web UI/UX design and consulting.",
    keyword:
      "ui ux design services in chennai, user experience design, user interface design, web app ui design, mobile app ux design, ui prototyping",
    url: "https://www.cybomb.com/services/ui-ux-design",
    image: "https://www.cybomb.com/images/logo-11.png",
  };

  const tabsData = [
    {
      id: "planning",
      title: "Planning & Consultation",
      description:
        "Our initial phase focuses on understanding your vision and creating a solid foundation for your project.",
      cards: [
        {
          title: "Vision and Goals Discussion",
          description:
            "We collaborate with you to understand your business objectives, target audience, and project vision to align our development strategy.",
        },
        {
          title: "Scope Definition",
          description:
            "We clearly outline project boundaries, deliverables, and requirements to establish a shared understanding of what will be built.",
        },
        {
          title: "Project Roadmap Creation",
          description:
            "We develop a comprehensive timeline with milestones and deliverables to keep your project on track and transparent.",
        },
        {
          title: "Resource Allocation",
          description:
            "We assign the right team members with appropriate skills to each aspect of your project for optimal efficiency.",
        },
      ],
    },
    {
      id: "design",
      title: "UI/UX Design",
      description:
        "Our design phase transforms requirements into intuitive user experiences and visually appealing interfaces.",
      cards: [
        {
          title: "User Research & Persona Creation",
          description:
            "We conduct detailed user research and create personas to ensure the design caters to the needs, behaviors, and expectations of your target users.",
        },
        {
          title: "Wireframing & Prototyping",
          description:
            "Our team creates low-fidelity wireframes and interactive prototypes to visualize user flows and test usability before the final design.",
        },
        {
          title: "Visual Interface Design",
          description:
            "We craft clean, modern, and brand-aligned UI designs with attention to typography, color, layout, and consistency across all screens.",
        },
        {
          title: "User Experience Optimization",
          description:
            "We refine structure, hierarchy, and interactions to enhance usability and deliver a seamless experience that delights users.",
        },
      ],
    },
    {
      id: "development",
      title: "Development",
      description:
        "Our development team builds your solution using agile methodologies for flexibility and continuous improvement.",
      cards: [
        {
          title: "Frontend Development",
          description:
            "We develop the user-facing components using modern frameworks to ensure fast, responsive, and accessible interfaces.",
        },
        {
          title: "Backend Development",
          description:
            "Our backend engineers build secure, scalable server-side logic, APIs, and databases to power your application.",
        },
        {
          title: "Agile & Iterative Approach",
          description:
            "We follow agile practices for incremental releases, incorporating feedback and quickly adapting to change.",
        },
        {
          title: "Code Review & Collaboration",
          description:
            "Our team performs regular code reviews to ensure code quality, maintainability, and consistency across the project.",
        },
      ],
    },
    {
      id: "testing",
      title: "Testing",
      description:
        "We rigorously test your solution to ensure quality, performance, and reliability across all devices and scenarios.",
      cards: [
        {
          title: "Functional Testing",
          description:
            "We validate all features to ensure they meet the specified requirements and work exactly as expected.",
        },
        {
          title: "Usability & Accessibility Testing",
          description:
            "We test the interface to ensure it is user-friendly and accessible to all users, including those with disabilities.",
        },
        {
          title: "Performance & Security Testing",
          description:
            "We conduct stress, load, and security testing to ensure your application performs well and remains secure under any scenario.",
        },
        {
          title: "Cross-Browser & Device Testing",
          description:
            "We verify that your solution works consistently across different browsers, operating systems, and screen sizes.",
        },
      ],
    },
    {
      id: "deployment",
      title: "Deployment",
      description:
        "We carefully launch your solution, ensuring a smooth transition to production with minimal disruption.",
      cards: [
        {
          title: "Environment Setup",
          description:
            "We configure the production environment, servers, and infrastructure for optimal performance and stability.",
        },
        {
          title: "Launch & Go-Live Support",
          description:
            "We deploy your application and provide real-time monitoring to ensure everything runs perfectly during launch.",
        },
        {
          title: "Post-Launch Optimization",
          description:
            "We fine-tune performance and address any post-launch feedback for a seamless live experience.",
        },
        {
          title: "Version Control & Rollback",
          description:
            "We use robust version control systems to manage releases and provide quick rollback options in case of issues.",
        },
      ],
    },
    {
      id: "maintenance",
      title: "Maintenance",
      description:
        "We provide ongoing support, updates, and improvements to keep your solution performing optimally.",
      cards: [
        {
          title: "Bug Fixes & Enhancements",
          description:
            "We continuously monitor and resolve issues while enhancing features based on evolving user needs.",
        },
        {
          title: "Updates & Security Patches",
          description:
            "We regularly update software components and apply security patches to keep your system safe and reliable.",
        },
        {
          title: "Performance Monitoring & Support",
          description:
            "We provide ongoing technical support and performance tracking to ensure smooth operations in the long run.",
        },
        {
          title: "Scalability & Future-Proofing",
          description:
            "We ensure the architecture can handle future growth and new features, keeping your solution viable for years to come.",
        },
      ],
    },
  ];

  return (
    <>
      <UiUxDesignContent />
      <AgileProcess1
        title="Our Agile Process"
        TabsData={tabsData}
        defaultActiveTab="planning"
        accentColor="#1c85cb"
        cardView={true}
      />
      <StillNotSure />
      <Metatags metaProps={metaPropsData} />
    </>
  );
}
