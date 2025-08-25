import { useState } from "react";
import styles from "./ChatWidget.module.css";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    // Add user message
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch(
        "https://sudesh.app.n8n.cloud/webhook/01e0542c-9729-4200-b7a3-891147ae0062",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question: input })
        }
      );

      const data = await res.json();
      console.log("n8n response:", data);

      // Check if this is the webhook echo (the current issue)
      if (data.body && data.body.question === input) {
        // This means your n8n workflow is not properly configured
        // The webhook is just echoing back your request
        setMessages((prev) => [
          ...prev,
          { 
            sender: "bot", 
            text: "The chatbot service is not responding correctly. Please check the n8n workflow configuration."
          }
        ]);
      } else {
        // Try to extract response from various possible structures
        let botText = "Sorry, I couldn't process that request.";
        
        // Check different possible response structures
        if (data.response) {
          botText = data.response;
        } else if (data.answer) {
          botText = data.answer;
        } else if (data.message) {
          botText = data.message;
        } else if (data.text) {
          botText = data.text;
        } else if (typeof data === "string") {
          botText = data;
        }
        
        setMessages((prev) => [...prev, { sender: "bot", text: botText }]);
      }
    } catch (error) {
      console.error("Error connecting to AI:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Error connecting to chatbot service. Please try again later." }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.chatWidget}>
      <button
        className={styles.chatButton}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        💬
      </button>

      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            Cybomb.com
            <span className={styles.closeBtn} onClick={() => setIsOpen(false)}>
              ✖
            </span>
          </div>

          <div className={styles.chatBody}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={msg.sender === "user" ? styles.userMsg : styles.botMsg}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className={styles.botMsg}>
                Thinking...
              </div>
            )}
          </div>

          <div className={styles.chatFooter}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              disabled={isLoading}
            />
            <button onClick={sendMessage} disabled={isLoading}>
              {isLoading ? "⏳" : "➤"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}