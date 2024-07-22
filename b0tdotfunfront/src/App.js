import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TokenTable from './components/TokenTable';
import './App.css';

const App = () => {
  const [botName, setBotName] = useState('');
  const [tokenData, setTokenData] = useState({});
  const [tokenCount, setTokenCount] = useState(0);

  const botNames = ["Orca", "GetGuD"];

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

  const handleSelectChange = (e) => {
    setBotName(e.target.value);
  };

  const handleRefresh = () => {
    fetchData();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Token Transactions</h1>
        <select value={botName} onChange={handleSelectChange}>
          <option value="" disabled>Select a bot</option>
          {botNames.map((name, index) => (
            <option key={index} value={name}>{name}</option>
          ))}
        </select>
        <button onClick={fetchData}>Fetch Data</button>
        <button onClick={handleRefresh}>Refresh</button>
        {botName && <h2>{`Bot: ${botName} (Tokens: ${tokenCount})`}</h2>}
        <TokenTable tokenData={tokenData} />
      </header>
    </div>
  );
};

export default App;