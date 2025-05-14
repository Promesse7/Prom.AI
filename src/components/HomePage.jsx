import React from 'react';

function HomePage() {
  return (
    <nav className="middle-container">
        <div className="description">
         <a href="./generativeai/index.html"><h2 className="landing">- PromAI Demo -</h2></a>
            <br />
            <h3 className="AI">AI Chatting Landing Page</h3>
            <br />
            <p>PromAI is a Demo for an AI Chatbot landing page with conversing user interface pages.</p>
             <br />
             <br />
             <br />
            <div className="button"><h1><a href="./generativeai/index.html">Request Demo</a></h1></div>
        </div>
        <div className="boxes">
            <div className="windows">
             <a href="./generativeai/ask.html">
               <h2 style={{ paddingLeft: '3vw' }}>Ask Anything &gt;</h2>
             </a>
            </div>

            <div className="windows">
                <a href="./image-generator.html"><h2 style={{ paddingLeft: '1vw' }}>Image Generator &gt;</h2></a>
                </div>

            <div className="windows">
                 <h2 style={{ paddingLeft: '2vw' }}>Code Generator &gt;</h2>
                </div>

            <div className="windows">
                <h2 style={{ paddingLeft: '2vw' }}> Content Writer &gt;</h2>
                    </div>
        </div>
    </nav>
  );
}

export default HomePage;