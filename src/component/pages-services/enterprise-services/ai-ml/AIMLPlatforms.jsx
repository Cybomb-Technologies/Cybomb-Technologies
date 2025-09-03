import React from "react";
import styles from "../../../common-ui/enterprise-services/crm-platforms.module.css";

const aiMlTech = [
  {
    name: "TensorFlow",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
  },
  {
    name: "PyTorch",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg",
  },
  {
    name: "scikit-learn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
  },
  {
    name: "OpenAI",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSobT6Nq7W-FJnK5lLapZlwySLwB0W4sKCYDg&s",
  },
  {
    name: "Hugging Face Transformers",
    logo: "https://huggingface.co/front/assets/huggingface_logo.svg",
  },
  {
    name: "AWS SageMaker",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSkbYruYOCV_vfxm3hpKA7Tfzq8PF_0ZoJag&s",
  },
  {
    name: "Azure ML",
    logo: "https://azurecomcdn.azureedge.net/cvt-091c16dc2b37446b8a118cfc7f1e949bc05cbed7bdfeb977d4d46e2d528d28ae/images/shared/services/machine-learning/machine-learning.svg",
  },
  {
    name: "Google Vertex AI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Vertex_AI_Logo.svg/2048px-Vertex_AI_Logo.svg.png",
  },
  {
    name: "Pandas",
    logo: "https://cdn.worldvectorlogo.com/logos/pandas.svg",
  },
  {
    name: "NumPy",
    logo: "https://img.icons8.com/?size=512&id=aR9CXyMagKIS&format=png",
  },
  {
    name: "Matplotlib",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg",
  },
  {
    name: "Seaborn",
    logo: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
  },
  {
    name: "Apache Spark MLlib",
    logo: "https://spark.apache.org/images/spark-logo-trademark.png",
  },
  {
    name: "Docker",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmg0SrXaYcnUt5NFG_V5fUN3FH8hOJyszTxQ&s",
  },
  {
    name: "Kubernetes",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/500px-Kubernetes_logo_without_workmark.svg.png",
  },
  {
    name: "MLflow",
    logo: "https://images.chainguard.dev/logos/mlflow.svg",
  },
  {
    name: "LangChain",
    logo: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/langchain-ipuhh4qo1jz5ssl4x0g2a.png/langchain-dp1uxj2zn3752pntqnpfu2.png?_a=DATAg1AAZAA0",
  },
  {
    name: "LLaMA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Llama1-logo.png",
  },
  {
    name: "GPT-based Models",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
  },
];

function AIMLPlatforms() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Platforms &amp; Technologies We Work With
        </h2>
        <div className={styles.marquee}>
          <div className={styles.track}>
            {aiMlTech.map((tech, index) => (
              <div key={index} className={styles.card}>
                <img src={tech.logo} alt={tech.name} />
              </div>
            ))}
            {aiMlTech.map((tech, index) => (
              <div key={`dup-${index}`} className={styles.card}>
                <img src={tech.logo} alt={tech.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AIMLPlatforms;
