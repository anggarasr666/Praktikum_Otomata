import React from "react";
import { motion } from "framer-motion";

class TextBox extends React.Component {
    handleOnChange = (e) => {
        e.preventDefault();
        this.checkifPalindrome(e.target.value);
    }

    checkifPalindrome = (word) => {
        const cleanedWord = word.toLowerCase().replace(/[^A-Z0-9]/ig, "");
        if (cleanedWord && cleanedWord === cleanedWord.split('').reverse().join('')) {
            this.props.changePalindromeState(true);
        } else {
            this.props.changePalindromeState(false);
        }
    }

    render() {
        return (
            <motion.input 
                type="text" 
                onChange={this.handleOnChange} 
                placeholder="Enter text or number"
                spellCheck="false"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300 ease-in-out"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            />
        );
    }
}

export default TextBox;
