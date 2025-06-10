import React, { useState } from 'react';
import Link from 'next/link';




const introLinks = [
  { label: 'Home', path: '/' },
  { label: 'Introduction', path: '/codeintro' },
  { label: 'Working Space', path: '/codespace' },
];
  
const Intro = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="intro-container">
    
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            &#9776;
          </div>

      
              <aside className={`dashboard-left ${menuOpen ? 'open' : ''}`}  >
                <nav className="headlines">
                  <h3 className="side-head" data-sal-delay="200" data-sal="slide-up" data-sal-duration="1000">React Basics</h3>
                 
                   {introLinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.path}
                    className="side-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    <h3 className="side-link-label" data-sal-delay="200" data-sal="slide-right" data-sal-duration="1000">{item.label}</h3>
                  </Link>
                ))}

                
                </nav>
              </aside>

      
    <main className="intro-right">
        <header className="intro-header">
          <h1 className="intro-head" data-sal-delay="500" data-sal="slide-up" data-sal-duration="1000">ReactJS – Introduction</h1>
        </header>

        <section className="intro-section what-is-react">
          <h2 className="section-title" data-sal-delay="700" data-sal="slide-left" data-sal-duration="1000">What is React?</h2>
          
          <ul className="intro-list"  >
              <li className="intro-list-item" data-sal-delay="800" data-sal="slide-right" data-sal-duration="1000">
                <span className="highlight">React is a front-end JavaScript library.</span>{' '}
              </li>
              <li className="intro-list-item" data-sal-delay="800" data-sal="slide-right" data-sal-duration="1000">React was developed by the Facebook Software Engineer Jordan Walke.</li>
              <li className="intro-list-item" data-sal-delay="900" data-sal="slide-right" data-sal-duration="1000">React is also known as React.js or ReactJS.</li>
              <li className="intro-list-item" data-sal-delay="950" data-sal="slide-right" data-sal-duration="1000">React is a tool for building UI components.</li>
              <li className="intro-list-item" data-sal-delay="1000" data-sal="slide-right" data-sal-duration="1000">React only changes what needs to be changed!</li>
        </ul>

          {/* <p className="section-paragraph">
            <span className="highlight">React</span> is a JavaScript library developed by Facebook for building fast and interactive user interfaces...
          </p> */}
        </section>

           <section className="intro-section what-is-react">
          <h2 className="section-title"  data-sal-delay="700" data-sal="slide-left" data-sal-duration="1000">What You Should Already Know</h2>

           <p className="section-paragraph" data-sal-delay="800" data-sal="slide-up" data-sal-duration="1000">Before you continue you should have a basic understanding of the following</p>

          <ul className="intro-list">
              
              <li className="intro-list-item" data-sal-delay="800" data-sal="slide-right" data-sal-duration="1000">HTML ✓</li>
              <li className="intro-list-item" data-sal-delay="900" data-sal="slide-right" data-sal-duration="1000">CSS ✓</li>
              <li className="intro-list-item" data-sal-delay="950" data-sal="slide-right" data-sal-duration="1000">JAVASCRIPT ✓</li>

            <li className="highlight-step" data-sal-delay="1000" data-sal="slide-right" data-sal-duration="1000">
              If you want to study these subjects first, find the tutorials on our{' '}
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="intro-link"
            >
             Website
            </a>
          </li>

        </ul>
      

      </section>

      <section className="intro-section how-to-learn">
        <h2 className="section-title" data-sal-delay="700" data-sal="slide-left" data-sal-duration="1000">How to Learn React</h2>
        <ul className="intro-list">
          <li className="intro-list-item" data-sal-delay="750" data-sal="slide-right" data-sal-duration="1000">
            <span className="highlight">Start with the official docs:</span>{' '}
            <a data-sal-delay="800" data-sal="slide-right" data-sal-duration="1000"
              href="https://reactjs.org/docs/getting-started.html"
              target="_blank"
              rel="noopener noreferrer"
              className="intro-link"
            >
              React Docs
            </a>
          </li>
          <li className="intro-list-item" data-sal-delay="850" data-sal="slide-right" data-sal-duration="1000">Follow beginner tutorials on YouTube</li>
          <li className="intro-list-item" data-sal-delay="900" data-sal="slide-right" data-sal-duration="1000">Practice by building small apps</li>
          <li className="intro-list-item" data-sal-delay="950" data-sal="slide-right" data-sal-duration="1000">Learn JSX, props, and state</li>
          <li className="intro-list-item" data-sal-delay="1000" data-sal="slide-right" data-sal-duration="1000">
            Explore hooks (<code>useState</code>, <code>useEffect</code>)
          </li>
        </ul>
      </section>

      

      <section className="intro-section install-react">
        <h2 className="section-title" data-sal-delay="250" data-sal="slide-left" data-sal-duration="1000">How to Install React (Windows)</h2>
        <ol className="intro-steps">
          <li className="highlight-step" data-sal-delay="750" data-sal="slide-right" data-sal-duration="1000">
            Install Node.js from{' '}
            <a data-sal-delay="800" data-sal="slide-right" data-sal-duration="1000"
              href="https://nodejs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="intro-link"
            >
              nodejs.org
            </a>
          </li>
          <li className="intro-step" data-sal-delay="850" data-sal="slide-right" data-sal-duration="1000">Open terminal/command prompt</li>
          <li className="highlight-step" data-sal-delay="900" data-sal="slide-right" data-sal-duration="1000">
            Run: <code className="code-tag">npx create-react-app my-app</code>
          </li>
          <li className="intro-step" data-sal-delay="950" data-sal="slide-right" data-sal-duration="1000">
            Navigate into the project: <code className="code-tag">cd my-app</code>
          </li>
          <li className="highlight-step" data-sal-delay="950" data-sal="slide-right" data-sal-duration="1000">
            Start the app: <code className="code-tag">npm start</code>
          </li>
          <li className="highlight-step" data-sal-delay="1000" data-sal="slide-right" data-sal-duration="1000">
            Open <code className="code-tag">localhost:3000</code> in your browser
          </li>
        </ol>

        <div className="img-box">
          <h3 className="img-title">The Result:</h3>
          <img src="/assets/images/code-runner/react.jpg" alt="React App Screenshot" className="react-logo"  data-sal-delay="300" data-sal="slide-up" data-sal-duration="1000"/>
        </div>
      </section>

        <section className="intro-section modify-app">
          <h2 className="section-title" data-sal-delay="250" data-sal="slide-left" data-sal-duration="1000">Modify the Application</h2>
          <ul className="intro-list">
            <li className="intro-list-item" data-sal-delay="800" data-sal="slide-right" data-sal-duration="1000">Open <span className="important" >src/App.js</span> in your project</li>
            <li className="intro-list-item" data-sal-delay="850" data-sal="slide-right" data-sal-duration="1000"><span className="important" >/myReactApp/src/App.js:</span></li>
          </ul>
          <div className="code-box">
            <pre className="code-block" data-sal-delay="850" data-sal="slide-right" data-sal-duration="1000">
                    {`
                import logo from './logo.svg';
                import './App.css';

                    function App() {
                      return (
                          <div className="App">
                              <header className="App-header">
                                  <img src={logo} className="App-logo" alt="logo" />
                                    <p>
                                       Edit <code>src/App.js</code> and save to reload.
                                     </p>
                                  <a
                                    c lassName="App-link"
                                    href="https://reactjs.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                     Learn React
                                  </a>
                                </header>
                          </div>
                      );
                    }

                    export default App;`}
            </pre>
          </div>
        </section>

        <section className="intro-section react-example">
          <ol className="intro-steps">
            <li className="highlight-step" data-sal-delay="850" data-sal="slide-right" data-sal-duration="1000">Changes are visible immediately after saving the file.</li>
          </ol>
        </section>

      <section className="intro-section code-demo">
            <h2 className="section-title" data-sal-delay="250" data-sal="slide-left" data-sal-duration="1000">Example</h2>
                <ul className="intro-list">
                   <li className="intro-list-item" data-sal-delay="800" data-sal="slide-right" data-sal-duration="1000">Replace content inside <span className="important">  {`<div className="App">`}</span> with <span className="important">{`<h1>`}</span></li>
                   <li className="intro-list-item" data-sal-delay="850" data-sal="slide-right" data-sal-duration="1000">See changes in the browser</li>
                </ul>

                     <div className="code-box">
                          <pre className="code-block" data-sal-delay="700" data-sal="slide-left" data-sal-duration="1000">
                              {`
                              import React from 'react';

                                 function App() {
                                          return (
                                               <div className="App">
                                                   <h1>Hello, World!</h1>
                                                </div>
                                              );
                                             }

                                 export default App;`}
                         </pre>
                       </div>

          <h3 className="step-title" data-sal-delay="250" data-sal="slide-left" data-sal-duration="1000">📘 Step-by-Step Explanation:</h3>
              <ol className="intro-steps">
                  <li className="intro-step" data-sal-delay="600" data-sal="slide-right" data-sal-duration="1000"><span className="highlight">import React from 'react';</span> – Imports React library</li>
                  <li className="intro-step" data-sal-delay="650" data-sal="slide-right" data-sal-duration="1000"><span className="highlight">function App()</span> – Functional component</li>
                  <li className="intro-step" data-sal-delay="700" data-sal="slide-right" data-sal-duration="1000"><span className="highlight">&lt;div&gt;&lt;h1&gt;Hello, World!&lt;/h1&gt;&lt;/div&gt;</span> – JSX return syntax</li>
                  <li className="intro-step" data-sal-delay="750" data-sal="slide-right" data-sal-duration="1000"><span className="highlight">export default App;</span> – Allows usage in other files</li>
              </ol>

           <p className="section-paragraph" data-sal-delay="950" data-sal="slide-right" data-sal-duration="1000">Rendered in <code>index.js</code> like:</p>

          <div className="code-box">
              <pre className="code-block" data-sal-delay="250" data-sal="slide-left" data-sal-duration="1000">
                  {`
                  
                    import React from 'react';
                    import ReactDOM from 'react-dom/client';
                    import App from './App';

                    const root = ReactDOM.createRoot(document.getElementById('root'));
                    root.render(<App />);`}
               </pre>
           </div>
        </section>

        <section className="intro-section final-output">
           <div className="img-box">
               <h3 className="img-title" data-sal-delay="250" data-sal="slide-left" data-sal-duration="1000">The Result:</h3>
               <img src="/assets/images/code-runner/react1.jpg" alt="React App Example" className="react-logo" data-sal-delay="300" data-sal="slide-up" data-sal-duration="1000" />
            </div>
        </section>

        <section className="intro-section wrap-up">
            <ul className="intro-list">
               <li className="highlight">Now you have a React Environment on your computer and are ready to build apps!</li>
            </ul>
        </section>
      </main>
    </div>
  );
};

export default Intro;
