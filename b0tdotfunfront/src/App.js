import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TokenTable from './components/TokenTable';
import './App.css';

const App = () => {
  const [botName, setBotName] = useState('');
  const [tokenData, setTokenData] = useState({});
  const [tokenCount, setTokenCount] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://renton.com.ar/dotfunapi/getProfitsByBot.php?bot=${botName}`);
      const { tokenCount, data } = response.data;
      setTokenData(data);
      setTokenCount(tokenCount);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (botName) {
      fetchData();
    }
  }, [botName]);

  const handleInputChange = (e) => {
    setBotName(e.target.value);
  };

  const handleRefresh = () => {
    fetchData();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Token Transactions</h1>
        <input
          type="text"
          value={botName}
          onChange={handleInputChange}
          placeholder="Enter bot name"
        />
        <button onClick={fetchData}>Fetch Data</button>
        <button onClick={handleRefresh}>Refresh</button>
        {botName && <h2>{`Bot: ${botName} (Tokens: ${tokenCount})`}</h2>}
        <TokenTable tokenData={tokenData} />
      </header>
    </div>
  );
};

export default App;