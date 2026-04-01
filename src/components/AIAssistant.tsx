import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

const SYSTEM_INSTRUCTION = `You are an AI assistant for Muhammed Ajmal's portfolio website. 
Muhammed Ajmal is a Python Developer and Full Stack Engineer based in Kerala, India.
Skills: Python, Django, React.js, JavaScript, HTML, CSS, Bootstrap, FastAPI, MySQL, Firebase, AWS.
Experience: Junior Software Engineer at sinnoteq IT consulting, Python Full Stack Developer Intern at Techolas Technologies.
Projects: Event Booking Web App, PyHub, Smart Irrigation System.
Contact: ajmalmhdin@gmail.com, Phone: 9745167255, LinkedIn: https://linkedin.com/in/ajmallmhd.
Answer questions about his skills, experience, and projects. Be polite, concise, and helpful. If asked something outside his portfolio, politely redirect to his professional skills.`;

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'assistant', content: "Hi! I'm Ajmal's AI assistant. Ask me anything about his skills, experience, or projects!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const chatHistory = messages.map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`).join('\n');
      const prompt = `${chatHistory}\nUser: ${userMsg}\nAssistant:`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        }
      });

      setMessages(prev => [...prev, { 
        id: (Date.now() + 1).toString(), 
        role: 'assistant', 
        content: response.text || "I'm sorry, I couldn't generate a response." 
      }]);
    } catch (error) {
      console.error("Error calling Gemini:", error);
      setMessages(prev => [...prev, { 
        id: (Date.now() + 1).toString(), 
        role: 'assistant', 
        content: "Oops! Something went wrong while connecting to my brain. Please try again later or contact Ajmal directly." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 rounded-full bg-[var(--color-accent-blue)] text-white shadow-lg z-50 ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Open AI Assistant"
      >
        <MessageSquare size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 w-80 sm:w-96 h-[500px] max-h-[80vh] bg-[var(--color-surface)] border border-[var(--color-surface-hover)] rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            <div className="p-4 bg-[var(--color-bg)] border-b border-[var(--color-surface-hover)] flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-[var(--color-accent-blue)]/10 text-[var(--color-accent-blue)] rounded-lg">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-primary)] text-sm">AI Assistant</h3>
                  <p className="text-xs text-[var(--color-secondary)]">Ask about Ajmal</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-[var(--color-accent-blue)] text-white rounded-tr-sm' 
                      : 'bg-[var(--color-bg)] border border-[var(--color-surface-hover)] text-[var(--color-primary)] rounded-tl-sm'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] p-3 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-surface-hover)] text-[var(--color-primary)] rounded-tl-sm flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-[var(--color-accent-blue)]" />
                    <span className="text-sm text-[var(--color-secondary)]">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-[var(--color-bg)] border-t border-[var(--color-surface-hover)]">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 bg-[var(--color-surface)] border border-[var(--color-surface-hover)] rounded-xl px-4 py-2 text-sm text-[var(--color-primary)] focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors"
                />
                <button 
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="p-2 bg-[var(--color-accent-blue)] text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
