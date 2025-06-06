import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as Babel from '@babel/standalone';


const workLinks = [
  { label: 'Home', path: '/' },
  { label: 'Introduction', path: '/codeintro' },
  { label: 'Working Space', path: '/codespace' },
];

const taskData = [
  {
    title: 'Task 1: Write a functional React component that displays “Hello, React!”',
    defaultCode: ``,
  },
  {
    title: 'Task 2: Build a counter with two buttons: ➕ Increase and ➖ Decrease. Display the current count using useState',
    defaultCode: ``,
  },
  {
    title: 'Task 3: Create a form that accepts a user’s name and displays it below the input field in real-time.',
    defaultCode: ``,
  },
  {
    title: 'Task 4: React app',
    defaultCode: ``,
  },
];

const Workingspace = () => {
 
  const router = useRouter();
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedTaskIndex, setExpandedTaskIndex] = useState(null);

  useEffect(() => {
    setCode(`import React from 'react';

        function App() {
          return <h2>Go To The Task’s Section--- ↓ </h2>;
          <h2>Complete the all task’s</h2>
        }
          

        const root = document.getElementById('root');
        ReactDOM.render(<App />, root);`);

    setOutput('');
    window.scrollTo(0, 0);
  }, []);

  const runCode = () => {
    try {
      const cleanedCode = code
        .split('\n')
        .filter(line => !line.trim().startsWith('import') && !line.trim().startsWith('export'))
        .join('\n');

      const compiled = Babel.transform(cleanedCode, {
        presets: ['react', 'env'],
      }).code;

      const html = `
        <html>
          <head><meta charset="UTF-8" /></head>
            <body>
              <div id="root"></div>
              <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
              <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
              <script>${compiled}</script>
            </body>
        </html>
      `;

      setOutput(html);
    } catch (err) {
      setOutput(`<pre style="color: red;">${err.message}</pre>`);
    } 
  };

  return (
    <div key={router.asPath} className="working-container">
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </div>

      <aside className={`dashboard-left ${menuOpen ? 'open' : ''}`}>
        <nav className="headlines">
          <h3 className="side-head">React Basics</h3>
          {workLinks.map((item, index) => (
           <Link
              href={item.path}
              key={index}
              className="side-link"
              onClick={() => setMenuOpen(false)}
            >
              <h3 className="side-link-label">{item.label}</h3>
            </Link>

          ))}
        </nav>
      </aside>

      <div className="work-right">
        <h2 className="right-head">React Code Runner</h2>
          <h4 className="work-h4">
            Create your own website and React.js applications with a Node.js environment in frontline technologies
          </h4>

        <div className="run-btn">
          <button onClick={runCode} className="run-button">Run</button>
        </div>

        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          rows={10}
          className="code-editor"
        />

        <iframe
          srcDoc={output}
          sandbox="allow-scripts"
          title="code-output"
          className="output-area"
        />

        <div className="task-container">
          <h2 className="task-head">Tasks;</h2>
          {taskData.map((_, index) => (
            <Task
              key={index}
              index={index}
              expanded={expandedTaskIndex === index}
              onToggle={() =>
                setExpandedTaskIndex(expandedTaskIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Task = ({ index, expanded, onToggle }) => {
  const [code, setCode] = useState(taskData[index].defaultCode.trim());
  const [output, setOutput] = useState('');
  const [done, setDone] = useState(false);

  const runTaskCode = () => {
    try {
      const cleanedCode = code
        .split('\n')
        .filter(line => !line.trim().startsWith('import') && !line.trim().startsWith('export'))
        .join('\n');

      const compiled = Babel.transform(cleanedCode, {
        presets: ['react', 'env'],
      }).code;

      const html = `
        <html> 
          <head><meta charset="UTF-8" /></head>
          <body>
            <div id="root"></div>
            <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
            <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
            <script>${compiled}</script>
          </body>
        </html>
      `;

      setOutput(html);
      setDone(true);
    } catch (err) {
      setOutput(`<pre style="color:red;">${err.message}</pre>`);
    }
  };

  return (
    <div className="task">
      <div className="task-header" onClick={onToggle}>
        <h3 className='task-title'>
          {taskData[index].title} {done && <span style={{ color: 'green' }}>✅</span>}
        </h3>
      </div>
      <div
        className="task-body"
        style={{
          maxHeight: expanded ? '1000px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.4s ease',
        }}
      >
        {expanded && (
          <div>
            <textarea
              rows={8}
              className="code-editor"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <div className="run-btn">
              <button onClick={runTaskCode} className="run-button">Run</button>
            </div>
            <iframe
              srcDoc={output}
              sandbox="allow-scripts"
              title={`task-output-${index}`}
              className="output-area"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Workingspace;
