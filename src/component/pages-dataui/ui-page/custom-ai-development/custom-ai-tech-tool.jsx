import React, { useState } from "react";
import styles from "./../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const aiDevCategories = {
  "AI Frameworks": [
    "TensorFlow",
    "PyTorch",
    "Keras",
    "Scikit-learn",
    "MXNet"
  ],
  "NLP": [
    "OpenAI GPT",
    "spaCy",
    "Hugging Face"
  ],
  "Vision Tools": [
    "OpenCV",
    "DeepVision"
  ],
  "Data & Analytics": [
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Databricks",
    "BigQuery"
  ],
  "AI Deployment & MLOps": [
    "MLflow",
    "Kubeflow",
    "Vertex AI",
    "Azure ML"
  ]
};

const aiDevLogos = {
  // AI Frameworks & Libraries
  TensorFlow: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
  PyTorch: "https://pytorch.org/assets/images/pytorch-logo.png",
  Keras: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",
  "Scikit-learn": "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
  MXNet: "https://avatars.githubusercontent.com/u/19956452?s=200&v=4",

  // NLP Tools & APIs
  "OpenAI GPT": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/openai-icon.png",
  spaCy: "https://raw.githubusercontent.com/github/explore/8cf1837393d83900e767cc895dcc814d053e2ffe/topics/spacy/spacy.png",
  "Hugging Face": "https://avatars.githubusercontent.com/u/25720743?s=200&v=4",


  // Computer Vision Tools
  OpenCV: "https://img.icons8.com/color/512/opencv.png",
  DeepVision: "https://avatars.githubusercontent.com/u/18133?s=200&v=4",

  // Data & Analytics Platforms
  Pandas: "https://pandas.pydata.org/static/img/pandas_mark.svg",
  NumPy: "https://numpy.org/images/logo.svg",
  Matplotlib: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Created_with_Matplotlib-logo.svg/2048px-Created_with_Matplotlib-logo.svg.png",
  Databricks: "https://cdn.brandfetch.io/id16h5D9Et/w/800/h/800/id4gqv0t8M.png",
  BigQuery: "https://cdn.worldvectorlogo.com/logos/google-bigquery-logo-1.svg",

  // AI Deployment & MLOps
  MLflow: "https://images.chainguard.dev/logos/mlflow.svg",
  Kubeflow: "https://www.kubeflow.org/docs/images/logos/kubeflow.png",
  "Vertex AI": "https://images.seeklogo.com/logo-png/52/2/vertex-ai-logo-png_seeklogo-523075.png",
  "Azure ML": "https://ms-toolsai.gallerycdn.vsassets.io/extensions/ms-toolsai/vscode-ai-remote-web/1.0.0/1724367048666/Microsoft.VisualStudio.Services.Icons.Default"
};

const CustomAIDevelopmentToolsSection = () => {
  const categories = Object.keys(aiDevCategories);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Custom AI Development Tools</h2>

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
          {aiDevCategories[selected].map((tool) => (
            <div key={tool} className={styles.techCard}>
              <img
                src={aiDevLogos[tool]}
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

export default CustomAIDevelopmentToolsSection;
