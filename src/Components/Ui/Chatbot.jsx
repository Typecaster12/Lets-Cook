import { useState, useRef, useEffect } from "react";
import { FaComments, FaTimes, FaPaperPlane } from "react-icons/fa";
import { getGeminiResponse } from "../../API/geminiApi";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const messagesEndRef = useRef(null);

  // Greeting message when chatbot opens for the first time
  useEffect(() => {
    if (isOpen && !hasGreeted) {
      const greetingMessage = {
        role: "bot",
        content: "👋 Hi there! I'm Guggi, your friendly cooking assistant! I'm here to help you navigate Let's Cook and answer any questions about recipes, features, or how to use this app. What would you like to know?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([greetingMessage]);
      setHasGreeted(true);
    }
  }, [isOpen, hasGreeted]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return;

    const userMessage = {
      role: "user",
      content: inputValue,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await getGeminiResponse(inputValue);
      const botMessage = {
        role: "bot",
        content: response,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        role: "bot",
        content: "Oops! I'm having trouble connecting right now. Please try again in a moment! 😅",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className={`chatbot-toggle ${isOpen ? 'hidden' : ''}`} onClick={toggleChatbot}>
        <FaComments />
        <span className="chatbot-badge">Guggi</span>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="chatbot-container">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">🤖</div>
              <div>
                <h3>Guggi</h3>
                <span className="chatbot-status">Online</span>
              </div>
            </div>
            <button className="chatbot-close" onClick={toggleChatbot}>
              <FaTimes />
            </button>
          </div>

          {/* Messages Area */}
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.role}`}>
                <div className="message-content">
                  <p>{message.content}</p>
                  <span className="message-time">{message.timestamp}</span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="message bot">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="chatbot-input-container">
            <input
              type="text"
              placeholder="Ask Guggi anything..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
            />
            <button 
              className="chatbot-send-btn" 
              onClick={handleSendMessage}
              disabled={isLoading || inputValue.trim() === ""}
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
