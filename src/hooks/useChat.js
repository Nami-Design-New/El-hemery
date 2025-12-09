import { useState, useEffect } from "react";
import chatAxios from "../utils/chatAxios";

export default function useChat() {
  const [threads, setThreads] = useState([]);
  const [activeThreadId, setActiveThreadId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const getThreads = async () => {
    try {
      setLoading(true);
      const res = await chatAxios.get("/threads");
      setThreads(res.data.data.threads || []);
      setActiveThreadId(res.data.data.active_thread_id);
    } catch (err) {
      console.error("Get threads error", err);
    } finally {
      setLoading(false);
    }
  };

  const startNewChat = async () => {
    try {
      const res = await chatAxios.post("/new");
      const newId = res.data.data.new_thread_id;
      setActiveThreadId(newId);
      setMessages([]);
    } catch (err) {
      console.error("New chat error", err);
    }
  };

  const getMessages = async (threadId) => {
    if (!threadId) return;
    try {
      setLoading(true);
      const res = await chatAxios.get(`/messages/${threadId}`);
      setMessages(res.data.data.messages || []);
    } catch (err) {
      console.error("Get messages error", err);
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async (text) => {
    if (!text.trim() || !activeThreadId) return;

    try {
      setMessages((prev) => [...prev, { type: "user", text }]);

      const res = await chatAxios.post("/send", {
        message: text,
        thread_id: activeThreadId,
      });

      setMessages((prev) => [
        ...prev,
        { type: "bot", text: res.data.reply },
      ]);
    } catch (err) {
      console.error("Send message error", err);
    }
  };

  useEffect(() => {
    getThreads();
  }, []);

  useEffect(() => {
    if (activeThreadId) {
      getMessages(activeThreadId);
    }
  }, [activeThreadId]);

  return {
    threads,
    activeThreadId,
    messages,
    loading,
    getThreads,
    startNewChat,
    getMessages,
    sendMessage,
  };
}
