import { useState } from "react";
import useChat from "../hooks/useChat";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const {
    messages,
    loading,
    startNewChat,
    sendMessage,
  } = useChat();

  const handleSend = () => {
    if (!message.trim()) return;
    sendMessage(message);
    setMessage("");
  };

  return (
    <>
      <div className="floating-icon" onClick={() => setOpen(true)}>
        <img src="/icons/chat.svg" alt="chat" />
      </div>

      {open && (
        <div className="chat-widget">
          {/* Header */}
          <div className="chat-header">
            <div className="chat-title">مساعد ذكي</div>
            <button className="close-chat" onClick={() => setOpen(false)}>
              &times;
            </button>
          </div>

          {/* Buttons */}
          <div className="chat-buttons">
            <button className="old-chat">دردشة قديمة</button>
            <button className="new-chat" onClick={startNewChat}>
              دردشة جديدة
            </button>
          </div>

          {/* Body */}
          <div className="chat-body">
            {messages.length === 0 && !loading && (
              <div className="chat-center">
                <div className="chat-images">
                  <img src="/icons/robot.svg" alt="robot" />
                  <img src="/images/logo.svg" alt="logo" />
                </div>
                <p>بحاجة إلى مساعدة!</p>
              </div>
            )}

            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`chat-message ${msg.type === "user" ? "user" : "bot"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="chat-input">
            <input
              type="text"
              placeholder="اسأل مساعدك الذكي"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
