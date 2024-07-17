import { useState } from "react";
import mockData from "./mockData";
import './styles.css'
import ScrollToBottom from "react-scroll-to-bottom";

const AskMe = () => {
  const [convo, setConvo] = useState([]);
  const [recentQuestions, setRecentQuestions] = useState([]);
  const [userInput, setUserInput] = useState('');
  //test
  const KeyQuestion = ({question}) => {
    return (
      <>
        <button 
        style={{width: '100%'}} 
        onClick={() => setConvo(convo => 
        [...convo,
        <div className="mine messages">
          <div className="message">
            {question}
          </div>
        </div>])}
        class="button-29"
        >
          {question}
        </button>
      </>
    );
  };

  const onUserSubmit = () => {
    setConvo(convo => 
      [...convo, 
        <div className="mine messages">
          <div className="message">
            {userInput}
          </div>
        </div>
      ]);
    if (userInput.includes('?')) {
      setRecentQuestions(recentQuestions => [
          ...recentQuestions,
          <button 
          style={{width: '100%'}} 
          onClick={() => setConvo(convo => [...convo, 
            <div className="mine messages">
              <div className="message">
                {userInput}
              </div>
            </div>])}
          class="button-29"
          >
            {userInput}
          </button>
        ]
      )
    }
    setUserInput('');
  }

  const keyQuestions = [];

  for (let q of mockData) {
    keyQuestions.push(<KeyQuestion question={q}/>);
  }

  return (
    <>
      <div>
        <h2 style={{textAlign: 'center'}}>Ask Me</h2>
        <h6 style={{textAlign: 'center'}}>Bookmarked Questions</h6>
        <div>
          {keyQuestions}
        </div>
        {recentQuestions.length ? <h6 style={{textAlign: 'center', marginTop: '8px'}}>Recent Questions</h6> : ''}
          {recentQuestions}
        <ScrollToBottom className='chat'>
            {convo}
        </ScrollToBottom>

        <div>
        <input placeholder="Type here..." className='user-text-input' style={{width: '100%', border: 'solid #0D6EFD 1px'}} onSubmit={() => setConvo(convo => [...convo])} onChange={(e) => setUserInput(e.target.value)} value={userInput}></input>
        <button 
        onClick={() => onUserSubmit()}
        style={{width: '100%'}}
        class="button-29"
        >
          Send Message
        </button>
        </div>
      </div>
    </>
  );
};

export default AskMe;