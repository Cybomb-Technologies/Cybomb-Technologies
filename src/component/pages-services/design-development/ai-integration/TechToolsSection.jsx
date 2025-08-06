import React, { useState } from "react";
import styles from "./../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const techData = {
  "LLMs & NLP": ["OpenAI GPT-4", "Claude", "Mistral", "Cohere", "Google Gemini"],
  "ML Platforms": ["TensorFlow", "PyTorch", "Vertex AI", "Azure ML"],
  Automation: ["Zapier", "Make", "LangChain", "AutoGPT", "Airflow"],
  "Vision/OCR": ["Google Vision API", "AWS Rekognition", "Tesseract"],
  Voice: ["Whisper", "ElevenLabs", "Speechly", "Twilio"],
  Deployment: ["Docker", "FastAPI", "Flask", "Hugging Face Spaces", "Streamlit"],
};

const techLogos = {
  // LLMs & NLP
  "OpenAI GPT-4":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/OpenAI_logo_2025_%28symbol%29.svg/250px-OpenAI_logo_2025_%28symbol%29.svg.png",
  Claude: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/claude-color.png",
  Mistral: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Mistral_AI_logo_%282025%E2%80%93%29.svg/768px-Mistral_AI_logo_%282025%E2%80%93%29.svg.png?20250207103322",
  Cohere: "https://cdn.brandfetch.io/idfDTLvPCK/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  "Google Gemini":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Google-gemini-icon.svg/2048px-Google-gemini-icon.svg.png",

  // ML Platforms
  TensorFlow:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  PyTorch: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  "Vertex AI":
    "https://cloud.google.com/_static/cloud/images/social-icon-google-cloud-1200-630.png",
  "Azure ML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",

  // Automation
  Zapier: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLQDKOSSTsLcrYcEo7qDL0rcAYKMlNZk18Xg&s",
  Make: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/make-color.png",
  LangChain: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/langchain-ipuhh4qo1jz5ssl4x0g2a.png/langchain-dp1uxj2zn3752pntqnpfu2.png?_a=DATAg1AAZAA0",
  AutoGPT:
    "https://upload.wikimedia.org/wikipedia/commons/8/80/Auto_GPT_Logo.png",
  Airflow: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg",

  // Vision/OCR
  "Google Vision API":
    "https://cloud.google.com/_static/cloud/images/social-icon-google-cloud-1200-630.png",
  "AWS Rekognition": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/768px-Amazon_Web_Services_Logo.svg.png",
  Tesseract:
    "https://cdn.brandfetch.io/idb8-nAVUM/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",

  // Voice
  Whisper:
    "https://wp.logos-download.com/wp-content/uploads/2024/03/Whisper_Logo-2775x3000.png",
  ElevenLabs:
    "https://cdn.brandfetch.io/idl_sWY35e/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
  Speechly: "https://dreamy-cori-a02de1.netlify.app/logo512.png",
  Twilio: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twilio/twilio-original.svg",

  // Deployment
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  FastAPI: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  Flask: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  "Hugging Face Spaces":
    "https://huggingface.co/front/assets/huggingface_logo.svg",
  Streamlit: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg",
};


const TechToolsSection = () => {
  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Technologies & Tools</h2>

        {/* Tabs */}
        <div className={styles.tabWrapper}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.tab} ${selected === cat ? styles.activeTab : ""}`}
              onClick={() => setSelected(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Cards */}
        <div className={styles.cardGrid}>
          {techData[selected].map((item) => (
            <div key={item} className={styles.techCard}>
              <img
                src={techLogos[item]}
                alt={`${item} logo`}
                className={styles.logo}
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechToolsSection;
