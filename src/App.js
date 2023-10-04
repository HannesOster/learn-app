import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import "./App.css";

const data = [
  { question: "Frage 1", answer: "Antwort 1" },
  { question: "Frage 2", answer: "Antwort 2" },
  { question: "Frage 3", answer: "Antwort 3" },
];

function App() {
  const [showAnswer, setShowAnswer] = useState(Array(data.length).fill(false));

  const toggleAnswer = (index) => {
    const newShowAnswer = [...showAnswer];
    newShowAnswer[index] = !newShowAnswer[index];
    setShowAnswer(newShowAnswer);
  };

  return (
    <div className="app">
      {data.map((item, index) => (
        <Card key={index} className="card">
          <Card.Body>
            <Card.Title>{item.question}</Card.Title>
            {showAnswer[index] && <Card.Text>{item.answer}</Card.Text>}
            <Button variant="primary" onClick={() => toggleAnswer(index)}>
              {showAnswer[index] ? "Verbergen" : "Antwort anzeigen"}
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default App;
