import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const data = [
  [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 }
  ],
  [
    { name: 'Bob', age: 40 }
  ]
];

function reverseSentence(sentence) {
  const reversed = sentence.split(' ').reverse().join(' ');
  return reversed.charAt(0).toUpperCase() + reversed.slice(1);
}

function extractNames(data) {
  return data.flat().map(person => person.name);
}

export default function MarkdownEditor() {
  const [markdown, setMarkdown] = useState("type markdown here");

  const handleReverse = () => {
    setMarkdown(reverseSentence(markdown));
  };

  console.log(extractNames(data)); // Example usage of extractNames function

  return (
    <div>
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        rows="10"
        cols="50"
      />
      <button onClick={handleReverse}>Reverse Sentence</button>
      <div>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}
