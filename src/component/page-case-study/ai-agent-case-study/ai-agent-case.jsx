import { 
  FaUserTie, 
  FaUsers, 
  FaGraduationCap, 
  FaPenFancy, 
  FaRobot, 
  FaBolt, 
  FaKeyboard, 
  FaProjectDiagram, 
  FaLightbulb, 
  FaBullhorn, 
} from "react-icons/fa";

export const caseStudyProps = {
  bannerData: {
    title: "Supercharge Your Workflow with AI",
    description: "Smarter, faster, better. Unlock the power of AI to supercharge your workflow. From ideas to results, let AI help you achieve more in less time.",
    primaryButtonText: "Start Using Smarter AI",
    secondaryButtonText: "Download Free Guide",
    projectDescription: "The AI Workflow Supercharger project is a web-based solution designed to help individuals and teams maximize productivity using AI-powered tools. This case study outlines the project's goals, design approach, features, and outcomes."
  },
  objectiveData: {
    title: "Project Objectives",
    objectives: [
      "Simplify AI adoption for professionals, creators, students, and teams.",
      "Showcase the practical benefits of AI through real-world use cases.",
      "Build a modern, responsive, and visually engaging portfolio project.",
      "Drive user engagement with clear calls-to-action (CTAs)."
    ],
    imageUrl: null, // Add image path if available
    imageAlt: "Project Objectives"
  },
  audienceData: [
    {
      icon: <FaUserTie/>,
      title: "Professionals",
      description: ["Automating emails,", "drafting proposals,", "analyzing data."],
    },
    {
      icon: <FaUsers />,
      title: "Teams",
      description: ["Generating meeting notes,", "sharing project updates,", "team collaboration."],
      darkText: true,
    },
    {
      icon: <FaGraduationCap />,
      title: "Students",
      description: ["Study assistance,", "flashcards,", "research help."],
    },
    {
      icon: <FaPenFancy />,
      title: "Content Creators",
      description: ["Blog ideas,", "video concepts,", "script writing."],
      darkText: true,
    }
  ],
  challengesData: {
    title: "Challenges",
    leftCards: [
      "Balancing aesthetic appeal with functionality.",
      "Creating content that is both educational and promotional.",
      "Built a template that can serve as a SaaS landing page or AI startup website."
    ],
    rightCards: [
      "Ensuring mobile responsiveness across all sections.",
      "Delivered a professional portfolio-ready project with strong branding.",
      "Demonstrated expertise in web design, content structuring, and conversion optimization."
    ],
    imageUrl: null, // Add image path if available
    imageAlt: "Challenges"
  },
  featuresData: {
    topCards: [
      {
        icon: <FaRobot className="icon" />,
        title: "AI Agent Hacks",
        description: "Natural language prompts, contextual queries, and multi-purpose use.",
        topColor: "#bcbcbcff",
        bottomColor: "#00bfff",
        textColor: "#000"
      },
      {
        icon: <FaBolt className="icon" />,
        title: "Productivity Power Moves",
        description: "Automating daily tasks, brainstorming ideas, report generation, voice commands.",
        topColor: "#a56c6cff",
        bottomColor: "#004080",
        textColor: "#000"
      },
      {
        icon: <FaKeyboard className="icon" />,
        title: "Quick Commands",
        description: "Ready-to-use AI prompts for meetings, emails, planning, and translation.",
        topColor: "#512424ff",
        bottomColor: "#0077b6",
        textColor: "#000"
      }
    ],
    bottomCards: [
      {
        icon: <FaProjectDiagram className="icon" />,
        title: "Use Cases",
        description: "Practical applications across Creators, Students, Teams, and Professionals.",
        topColor: "#218a60ff",
        bottomColor: "#0c1c2c",
        textColor: "#fff"
      },
      {
        icon: <FaLightbulb className="icon" />,
        title: "Pro Tips",
        description: "Advanced strategies like integrations, saving templates, and multi-device access.",
        topColor: "#859b4eff",
        bottomColor: "#0c7c9c",
        textColor: "#fff"
      },
      {
        icon: <FaBullhorn className="icon" />,
        title: "Call-to-Action",
        description: "Strong CTAs with social proof (50,000+ users, 4.9/5 rating).",
        topColor: "#2c4f94ff",
        bottomColor: "#0c1c2c",
        textColor: "#fff"
      }
    ]
  },
  ctaData: {
    text: "What can we do for you?",
    buttonText: "Contact Us"
  }
};