import { useState } from "react";

const styles = {
  app: {
    display: "flex",
    height: "100vh",
    background: "#0d1117",
    color: "white",
    fontFamily: "Arial",
  },

  sidebar: {
    width: "260px",
    background: "#161b22",
    borderRight: "1px solid #30363d",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  navItem: (active) => ({
    padding: "12px",
    borderRadius: "10px",
    cursor: "pointer",
    background: active ? "#2563eb" : "transparent",
    transition: "0.2s",
  }),

  main: {
    flex: 1,
    padding: "30px",
    overflowY: "auto",
  },

  header: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
  },

  card: {
    background: "#161b22",
    border: "1px solid #30363d",
    borderRadius: "14px",
    padding: "20px",
    marginTop: "20px",
  },

  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #30363d",
    background: "#0d1117",
    color: "white",
    marginTop: "10px",
  },

  button: {
    marginTop: "10px",
    padding: "10px 14px",
    borderRadius: "10px",
    border: "none",
    background: "#2563eb",
    color: "white",
    cursor: "pointer",
  },

  floatingBar: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#161b22",
    border: "1px solid #30363d",
    padding: "10px",
    borderRadius: "12px",
    display: "flex",
    gap: "10px",
  },
};

/* ---------------- MODULES ---------------- */

function Dashboard() {
  const [progress, setProgress] = useState(65);

  return (
    <div>
      <div style={styles.header}>📊 Dashboard</div>

      <div style={styles.card}>
        <p>Learning Progress</p>

        <div style={{ background: "#30363d", height: 10, borderRadius: 20 }}>
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background: "#22c55e",
              borderRadius: 20,
              transition: "0.3s",
            }}
          />
        </div>

        <p>{progress}% complete</p>

        <button style={styles.button} onClick={() => setProgress(p => Math.min(p + 10, 100))}>
          Boost Progress ⚡
        </button>
      </div>
    </div>
  );
}

function Chat() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);

  const send = () => {
    if (!msg) return;

    setChat([...chat, { u: msg, a: "AI response generated ✔" }]);
    setMsg("");
  };

  return (
    <div>
      <div style={styles.header}>🎭 Roleplay Chat</div>

      <div style={styles.card}>
        <input
          style={styles.input}
          placeholder="Type message..."
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />

        <button style={styles.button} onClick={send}>
          Send 🚀
        </button>

        <div style={{ marginTop: 15 }}>
          {chat.map((c, i) => (
            <div key={i} style={{ marginBottom: 10 }}>
              <div>🧑 {c.u}</div>
              <div>🤖 {c.a}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Glossary() {
  const [items, setItems] = useState(["Fuse", "Grounding", "Circuit"]);
  const [input, setInput] = useState("");

  return (
    <div>
      <div style={styles.header}>📚 Glossary</div>

      <div style={styles.card}>
        <ul>
          {items.map((i, idx) => (
            <li key={idx} style={{ padding: 6 }}>
              🔹 {i}
            </li>
          ))}
        </ul>

        <input
          style={styles.input}
          placeholder="Add word..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          style={styles.button}
          onClick={() => {
            setItems([...items, input]);
            setInput("");
          }}
        >
          Add ➕
        </button>
      </div>
    </div>
  );
}

function AI() {
  return (
    <div>
      <div style={styles.header}>🤖 AI Assistant</div>

      <div style={styles.card}>
        <p>Ask anything about electrical work or safety.</p>

        <button style={styles.button}>Open AI Chat ✨</button>
      </div>
    </div>
  );
}

/* ---------------- MAIN APP ---------------- */

export default function App() {
  const [tab, setTab] = useState("dashboard");

  const render = () => {
    if (tab === "dashboard") return <Dashboard />;
    if (tab === "chat") return <Chat />;
    if (tab === "glossary") return <Glossary />;
    if (tab === "ai") return <AI />;
  };

  return (
    <div style={styles.app}>
      {/* SIDEBAR */}
      <div style={styles.sidebar}>
        <h2>🌉 TechBridge</h2>

        <div
          style={styles.navItem(tab === "dashboard")}
          onClick={() => setTab("dashboard")}
        >
          📊 Dashboard
        </div>

        <div
          style={styles.navItem(tab === "chat")}
          onClick={() => setTab("chat")}
        >
          🎭 Roleplay
        </div>

        <div
          style={styles.navItem(tab === "glossary")}
          onClick={() => setTab("glossary")}
        >
          📚 Glossary
        </div>

        <div
          style={styles.navItem(tab === "ai")}
          onClick={() => setTab("ai")}
        >
          🤖 AI
        </div>
      </div>

      {/* MAIN AREA */}
      <div style={styles.main}>{render()}</div>

      {/* FLOATING ACTION BAR */}
      <div style={styles.floatingBar}>
        <button style={styles.button} onClick={() => setTab("chat")}>
          💬 Chat
        </button>
        <button style={styles.button} onClick={() => setTab("glossary")}>
          📚 Learn
        </button>
      </div>
    </div>
  );
}