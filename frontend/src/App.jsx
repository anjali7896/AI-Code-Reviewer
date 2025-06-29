/*import { useState, useEffect } from 'react';
import 'prismjs/themes/prism-tomorrow.css';
import Editor from "react-simple-code-editor"
import prism from 'prismjs';
import axios from 'axios';
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import './App.css';

function App() {
// const [count, setCount] = useState(0); // Remove if not needed
 const [code,setCode]=useState(`function sum(){
  return 1+1}`)
  const [ review,setReview]=useState(``);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode(){
  const response=await axios.post('http://localhost:3000/ai/get-review',{code})
  setReview(response.data)
  
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
           <Editor
           value={code}
           onValueChange={code=>setCode(code)}
           highlight={code=>prism.highlight(code,prism.languages.javascript,"javascript")}
           padding={10}

          style={{
            fontfamily :'"Fira code","Fira Mono",monospace',
            fontSize:12,
            backgroundColor:"#f5f5f5",
            border:"1px solid #ddd",
            height:"100%",
            width:"100%"
          }}
          />
          </div>

          <div 
          onClick={reviewCode}>

          </div>

          <div className="review">Review</div>
        </div>

        <div className="right">
          <Markdown
           
          rehypePlugins={[ rehypeHighlight ]}
          
          >{review}</Markdown>
        </div>
      </main>
    </>
  );
}

export default App;   */


import { useState, useEffect } from 'react';
import 'prismjs/themes/prism-tomorrow.css';
import Editor from "react-simple-code-editor";
import Prism from 'prismjs';
import axios from 'axios';
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import './App.css';

function App() {
  const [code, setCode] = useState(`function sum() {\n  return 1 + 1;\n}`);
  const [review, setReview] = useState('');

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  async function reviewCode() {
    try {
    const response = await axios.post('http://localhost:3000/ai/get-review', { code });

      setReview(response.data);
    } catch (error) {
      setReview("Error fetching review. Please check the backend.");
      console.error(error);
    }
  }

  return (
    <main>
      <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={setCode}
            highlight={code => Prism.highlight(code, Prism.languages.javascript, 'javascript')}
            padding={10}
            style={{
              fontFamily: '"Fira Code", "Fira Mono", monospace',
              fontSize: 14,
              backgroundColor: '#1e1e1e',
              color: 'white',
              borderRadius: '0.7rem',
              height: '100%',
              width: '100%',
              overflow: 'auto'
            }}
          />
        </div>

        <button className="review-btn" onClick={reviewCode}>
          Review
        </button>
      </div>

      <div className="right">
        <Markdown rehypePlugins={[rehypeHighlight]}>
          {review}
        </Markdown>
      </div>
    </main>
  );
}

export default App;

