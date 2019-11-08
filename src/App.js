import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import MemberList from './components/MemberList';

function App() {
  const [submission, setSubmission] = useState();

  const newSubmission = (newMember) => {
    setSubmission(newMember);
  }

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <Form newSubmission={newSubmission} />
      <MemberList submission={submission}/>

    </div>
  );
}

export default App;
