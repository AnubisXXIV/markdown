import './App.css';
import TextBox from './components/Textbox';
import MarkdownText from './components/Markdown';
import { useState } from 'react';

function App() {

  const initialText = "# h1\n## h2\ninline `<div></div>` code\n\nDas ist ein [test-link](https://www.youtube.com)s\n\n```\nmultiline\ncode\n```\n- Normal List Item\n> This is a block quote!\n\nThis text is **bold**\n![Twitter logo](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1024px-Logo_of_Twitter.svg.png)"



  const [userInput, setUserInput] = useState(initialText);

  function handleInput(e) {
    setUserInput(e.target.value);
    console.log(userInput);
  }

  return (
    <div className="App">
      <div className="textbox">
        <h1 className='box-heading'>Write your markdown here</h1>
        <TextBox onChange={handleInput} initialText={userInput} />
      </div>
      <div className="markdown">
        <h1 className='box-heading'>Markdown Preview</h1>
        <MarkdownText text={userInput} />
      </div>

    </div>
  );
}

export default App;
