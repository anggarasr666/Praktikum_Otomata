import React from "react";
import { motion, AnimatePresence } from "framer-motion";

class Message extends React.Component {
    render() {
        return (
            <AnimatePresence>
                {this.props.isPalindrome !== null && (
                    <motion.p
                        className="mt-4 text-xl"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                    >
                        {this.props.isPalindrome
                            ? <span className="text-green-500">Yes, it's a palindrome!</span>
                            : <span className="text-red-500">No, it's not a palindrome!</span>
                        }
                    </motion.p>
                )}
            </AnimatePresence>
        );
    }
}

export default Message;
