import React, { useEffect } from "react";

const Alert = ({ message, onClose }) => {
    useEffect(() => {
        // Auto-close alert after 5 seconds
        const timer = setTimeout(() => {
            onClose();
        }, 5000);

        return () => clearTimeout(timer); // Clean up the timer
    }, [onClose]);

    return (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg flex items-center justify-between w-80">
            <span>{message}</span>
            <button
                onClick={onClose}
                className="ml-4 text-xl font-bold bg-transparent text-white focus:outline-none"
            >
                &times;
            </button>
        </div>
    );
};

export default Alert;
