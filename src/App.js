import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { motion } from 'framer-motion';
import TextBox from './components/TextBox';
import Message from './components/Message';

function App() {
  const [isPalindrome, setIsPalindrome] = useState(null);

  const changePalindromeState = (newStatus) => {
    setIsPalindrome(newStatus);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-700">
      <motion.div
        className="max-w-md w-full bg-white rounded-lg p-8 shadow-lg text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <header>
          <h1 className="text-3xl font-semibold text-gray-800">Palindrome Checker</h1>
          <p className="mt-2 text-gray-600">A palindrome is a word or phrase that reads the same backwards as forwards, e.g. level, refer.</p>
        </header>
        <div className="mt-6">
          <TextBox changePalindromeState={changePalindromeState} />
        </div>
        <Message isPalindrome={isPalindrome} />
      </motion.div>
    </div>
  );
}

export default App;
