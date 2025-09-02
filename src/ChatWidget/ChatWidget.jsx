import { useState } from "react";
import styles from "./ChatWidget.module.css";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you with Cybomb Technologies?" }
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
        "https://n8n.cybomb.com/webhook/80bcb73f-a9f6-49ea-91a4-724feb1ff13c/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question: input })
        }
      );

      const data = await res.json();
      console.log("n8n response:", data);

      // Extract bot response from n8n
      const botText = data.output || "Sorry, I couldn't process that request.";

      setMessages((prev) => [...prev, { sender: "bot", text: botText }]);
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
