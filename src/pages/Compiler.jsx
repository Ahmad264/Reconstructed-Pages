import React, { useState, useRef, useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaChevronDown, FaFolderOpen, FaBook, FaCode, FaTimes, FaArrowLeft, FaSave, FaCheck, FaRedo, FaExpand } from "react-icons/fa";

const initialCode = {
  html: `<!-- Create your card component here -->
<div class="card">
  <img src="https://via.placeholder.com/300x200" alt="Card Image" />
  <div class="card-content">
    <h2 class="card-title">Card Title</h2>
    <p class="card-description">This is a sample card description.</p>
    <button class="card-button">Learn More</button>
  </div>
</div>`,
  css: `body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.card {
  max-width: 300px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}
.card:hover {
  transform: translateY(-4px);
}
.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-content {
  padding: 20px;
}
.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}
.card-description {
  color: #666;
  margin-bottom: 15px;
  line-height: 1.5;
}
.card-button {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
}
.card-button:hover {
  background: #2563eb;
}`,
  js: `// Add interactivity to your card
console.log('Card component loaded!');
document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('.card-button');
  if (button) {
    button.addEventListener('click', function() {
      alert('Button clicked! You can add more functionality here.');
    });
  }
});`
};

const files = [
  { name: "index.html", icon: <FaHtml5 className="text-orange-400" />, key: "html" },
  { name: "style.css", icon: <FaCss3Alt className="text-blue-400" />, key: "css" },
  { name: "script.js", icon: <FaJsSquare className="text-yellow-400" />, key: "js" }
];

export default function Compiler() {
  const [mainTab, setMainTab] = useState("theory");
  const [fileTab, setFileTab] = useState("html")
  const [code, setCode] = useState(initialCode);
  const iframeRef = useRef();

  // Update preview
  useEffect(() => {
    const doc = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Preview</title>
        <style>${code.css}</style>
      </head>
      <body>
        ${code.html}
        <script>
        try {
          ${code.js}
        } catch(e) { console.error(e); }
        </script>
      </body>
      </html>
    `;
    const blob = new Blob([doc], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    if (iframeRef.current) {
      iframeRef.current.src = url;
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }
  }, [code]);

  const handleCodeChange = (key, value) => {
    setCode((prev) => ({ ...prev, [key]: value }));
  };

  // Layout
  return (
    <div className="w-full h-screen flex flex-col bg-gradient-to-br from-[#0e0f1a] to-[#121218]">
      {/* Header */}
      <div className="h-[50px] flex items-center justify-between px-6 bg-[#1f2235]/90 border-b border-blue-300/10 shadow-lg relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 text-white font-semibold text-base window-title select-none">
          HTML Basics: Creating Your First Webpage
        </div>
        <div className="flex gap-3 ml-auto">
          <button className="action-btn bg-gradient-to-br from-blue-400/10 to-cyan-400/10 border border-blue-400/20 text-blue-300 px-3 py-1 rounded-xl hover:bg-blue-400/20 transition" title="Back to Dashboard">
          <FaArrowLeft />
          </button>
          <button className="action-btn bg-gradient-to-br from-blue-400/10 to-cyan-400/10 border border-blue-400/20 text-blue-300 px-3 py-1 rounded-xl hover:bg-blue-400/20 transition" title="Save Progress">
          <FaSave />
          </button>
          <button className="action-btn bg-gradient-to-br from-blue-400/10 to-cyan-400/10 border border-blue-400/20 text-blue-300 px-3 py-1 rounded-xl hover:bg-blue-400/20 transition" title="Complete Exercise">
          <FaCheck />
          </button>
          </div>
        </div>

      {/* Main Layout */}
      <div className="flex-1 grid grid-cols-[280px_1fr_400px] h-[calc(100vh-50px)] bg-blue-400/5">
        {/* Sidebar */}
        <aside className="sidebar bg-[#1f2235]/80 border-r border-blue-300/10 flex flex-col">
          <div className="sidebar-header h-[50px] flex items-center px-5 border-b border-blue-300/10 bg-purple-500/10">
            <div className="sidebar-title text-purple-400 text-xs font-bold tracking-widest uppercase">
              EXPLORER
            </div>
          </div>
          <div className="file-explorer flex-1 py-4">
            <div className="project-folder px-2">
              <div className="folder-header flex items-center gap-2 px-3 py-2 text-white font-semibold rounded-lg cursor-pointer hover:bg-blue-400/10">
                <FaChevronDown className="text-blue-400 text-xs" />
                <FaFolderOpen className="text-cyan-400 text-lg" />
                <span>project</span>
              </div>
              <div className="file-list ml-5 mt-2">
                {files.map((file) => (
                  <div
                    key={file.key}
                    className={`file-item flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer mb-1 transition relative text-sm ${
                      fileTab === file.key
                        ? "bg-gradient-to-br from-blue-400/20 to-purple-400/20 text-white border-l-4 border-blue-400"
                        : "text-blue-100 hover:bg-blue-400/10"
                    }`}
                    onClick={() => {
                      setMainTab("editor");
                      setFileTab(file.key);
                    }}
                  >
                    {file.icon}
                    <span>{file.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <main className="main-area flex flex-col bg-[#1f2235]/60">
          {/* Tab Bar */}
          <div className="tab-bar h-[60px] flex items-center px-5 border-b border-blue-300/10 bg-[#1f2235]/90">
            <div className="tab-group flex gap-2">
              <button
                className={`tab flex items-center gap-2 px-6 py-2 rounded-xl font-medium transition text-base ${
                  mainTab === "theory"
                    ? "bg-gradient-to-br from-blue-400/20 to-purple-400/20 text-white border border-blue-400/30"
                    : "text-blue-100 hover:bg-blue-400/10"
                }`}
                onClick={() => setMainTab("theory")}
              >
                <FaBook className="text-blue-400" />
                Theory
              </button>
              <button
                className={`tab flex items-center gap-2 px-6 py-2 rounded-xl font-medium transition text-base ${
                  mainTab === "editor"
                    ? "bg-gradient-to-br from-blue-400/20 to-purple-400/20 text-white border border-blue-400/30"
                    : "text-blue-100 hover:bg-blue-400/10"
                }`}
                onClick={() => setMainTab("editor")}
              >
                <FaCode className="text-blue-400" />
                Code Editor
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="content-area flex-1 relative">
            {/* Theory */}
            <div className={`content-panel theory-panel absolute inset-0 p-8 overflow-y-auto transition-all duration-300 ${mainTab === "theory" ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-8"}`}>
              <div className="theory-content max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">Card Component Exercise</h3>
                <p className="mb-4 text-blue-100">In this exercise, you'll create a modern card component using HTML for structure and CSS for styling.</p>
                {/* --- START --- */}
                <div className="flex items-center mb-2">
                  <span className="inline-block h-6 w-1 bg-sky-400 rounded mr-3"></span>
                  <span className="text-sky-400 font-semibold text-lg">Requirements:</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-blue-100 pl-2">
                    <li>Create a card container with proper structure</li>
                    <li>Add an image, title, description, and button</li>
                    <li>Style the card with CSS for a modern look</li>
                    <li>Add hover effects for better interactivity</li>
                    </ul>
                    {/* --- END --- */}
              </div>
          </div>

            {/* Editor Panel */}
            <div className={`content-panel editor-panel absolute inset-0 flex flex-col transition-all duration-300 ${mainTab === "editor" ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-8"}`}>
              {/* Tabs */}
              <div className="file-tabs h-[50px] flex items-center px-4 gap-2 border-b border-blue-300/10 bg-[#1f2235]/90">
                {files.map((file) => (
                  <button
                    key={file.key}
                    className={`file-tab flex items-center gap-2 px-5 py-2 rounded-lg font-medium transition text-base relative ${
                      fileTab === file.key
                        ? "bg-gradient-to-br from-blue-400/15 to-purple-400/15 text-white border border-blue-400/30 shadow"
                        : "text-blue-100 hover:bg-blue-400/10"
                    }`}
                    onClick={() => setFileTab(file.key)}
                  >
                    {file.icon}
                    {file.name}
                    <FaTimes className="ml-2 text-xs opacity-0 pointer-events-none" />
                  </button>
                ))}
              </div>
              {/* Editors */}
              <div className="editor-container flex-1 relative bg-[#1f2235] rounded-2xl m-4 border border-blue-300/10 shadow-inner">
                {files.map((file) => (
                  <div
                    key={file.key}
                    className={`editor-wrapper absolute inset-0 transition-all duration-300 ${
                      fileTab === file.key ? "opacity-100 pointer-events-auto scale-100" : "opacity-0 pointer-events-none scale-98"
                    }`}
                  >
                    <textarea
                      className="w-full h-full bg-transparent text-white p-6 font-mono text-base resize-none outline-none"
                      value={code[file.key]}
                      onChange={(e) => handleCodeChange(file.key, e.target.value)}
                      spellCheck={false}
                      placeholder={`Write your ${file.name} code here...`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Preview */}
        <aside className="preview-panel bg-[#1f2235]/80 border-l border-blue-300/10 flex flex-col">
          <div className="preview-header h-[60px] flex items-center justify-between px-6 border-b border-blue-300/10 bg-[#1f2235]/90">
            <div className="preview-title text-lg font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Preview
            </div>
            <div className="preview-controls flex gap-2">
              <button className="control-btn bg-gradient-to-br from-cyan-400/10 to-purple-400/10 border border-cyan-400/20 text-cyan-300 w-9 h-9 rounded-lg flex items-center justify-center hover:bg-cyan-400/20 transition" title="Refresh" onClick={() => setCode({ ...code })}>
                <FaRedo />
              </button>
              <button className="control-btn bg-gradient-to-br from-cyan-400/10 to-purple-400/10 border border-cyan-400/20 text-cyan-300 w-9 h-9 rounded-lg flex items-center justify-center hover:bg-cyan-400/20 transition" title="Fullscreen" onClick={() => {
                const el = iframeRef.current?.parentNode;
                if (el?.requestFullscreen) el.requestFullscreen();
              }}>
                <FaExpand />
              </button>
            </div>
          </div>
          <div className="preview-container flex-1 bg-white m-4 rounded-2xl overflow-hidden border border-blue-300/10 shadow-lg">
            <iframe
              ref={iframeRef}
              title="Live Preview"
              className="w-full h-full rounded-2xl"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        </aside>
      </div>
    </div>
  );
}