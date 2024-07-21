// src/components/BotInput.js
import React, { useState } from 'react';

const BotInput = ({ onSubmit }) => {
    const [bot, setBot] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(bot);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={bot}
                onChange={(e) => setBot(e.target.value)}
                placeholder="Enter bot name"
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default BotInput;