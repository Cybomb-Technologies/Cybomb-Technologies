import React, { useState } from "react";
import styles from "./../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const llmCategories = {
  "LLM Frameworks": [
    "OpenAI GPT",
    "Hugging Face",
    "LangChain",
    "Cohere",
    "Anthropic Claude"
  ],
  "Model Training": [
    "TensorFlow",
    "PyTorch",
    "Keras",
    "LoRA"
  ],
  "MLOps": [
    "MLflow",
    "Kubeflow",
    "Vertex AI",
    "Azure ML",
  ],
  "Data & Embeddings": [
    "Pinecone",
    "Weaviate",
    "ChromaDB",
    "BigQuery"
  ]  
};

const llmLogos = {
  // LLM Frameworks
  "OpenAI GPT": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/openai-icon.png",
  "Hugging Face": "https://avatars.githubusercontent.com/u/25720743?s=200&v=4",
  LangChain: "https://images.seeklogo.com/logo-png/52/2/langchain-logo-png_seeklogo-528369.png",
  Cohere: "https://cdn.brandfetch.io/cohere.ai/full/logo/cohere.ai.jpeg",
  "Anthropic Claude": "https://brandlogo.org/wp-content/uploads/2025/05/Anthropic-Icon-2021.png.webp",

  // Model Training & Fine-Tuning
  TensorFlow: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
  PyTorch: "https://pytorch.org/assets/images/pytorch-logo.png",
  Keras: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",
  LoRA: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",

  // MLOps & Deployment
  MLflow: "https://images.chainguard.dev/logos/mlflow.svg",
  Kubeflow: "https://www.kubeflow.org/docs/images/logos/kubeflow.png",
  "Vertex AI": "https://images.seeklogo.com/logo-png/52/2/vertex-ai-logo-png_seeklogo-523075.png",
  "Azure ML": "https://ms-toolsai.gallerycdn.vsassets.io/extensions/ms-toolsai/vscode-ai-remote-web/1.0.0/1724367048666/Microsoft.VisualStudio.Services.Icons.Default",
  
  // Data & Embeddings
  Pinecone: "https://images.seeklogo.com/logo-png/48/2/pinecone-icon-logo-png_seeklogo-482365.png",
  Weaviate: "https://avatars.githubusercontent.com/u/37794290?v=4",
  ChromaDB: "https://www.trychroma.com/img/favicon.ico",
  BigQuery: "https://cdn.worldvectorlogo.com/logos/google-bigquery-logo-1.svg",

};

const LLMToolsSection = () => {
  const categories = Object.keys(llmCategories);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>LLM Tech Tools & Frameworks</h2>

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

        {/* Tool Cards */}
        <div className={styles.cardGrid}>
          {llmCategories[selected].map((tool) => (
            <div key={tool} className={styles.techCard}>
              <img
                src={llmLogos[tool]}
                alt={`${tool} logo`}
                className={styles.logo}
              />
              <span>{tool}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LLMToolsSection;
