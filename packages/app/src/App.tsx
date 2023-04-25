import "./App.css";
import React, { useEffect, useState, lazy, Suspense } from "react";

function App() {
  const [isReady, setIsReady] = useState(false);
  const url = new URL(window.location.href);
  const params = url.searchParams;

  const [selectedVersion, setSelectedVersion] = useState(
    params.get("version") || "01"
  );

  useEffect(() => {
    if (!isReady) {
      (
        window as any
      ).remoteUrl = `http://localhost:5000/assets/shared.js`;
      setIsReady(true);
    }
  }, []);
  
  useEffect(() => {
    if (`?version=${selectedVersion}` !== location.search || !location.search) {
      window.location.href = `?version=${selectedVersion}`;
    }
  }, [selectedVersion]);

  const handleButtonClick = (count) => {
    console.log("🚀 ~ Shell ~ count:", count);
    return;
  };

  if (!isReady) {
    return <p>Loading...</p>;
  }

  // @ts-ignore
  const Button = lazy(() => import("shared/Button"));

  return (
    <Suspense fallback={<p>Loading here....</p>}>
      <div className="App">
        <h1>Shell</h1>
        <label htmlFor="version-select">Select a version:</label>
        <select
          value={selectedVersion}
          onChange={(e) => setSelectedVersion(e.target.value)}
        >
          <option value="01">version 01</option>
          <option value="02">version 02</option>
        </select>
          <h3>Loaded app:</h3>
        <div className="card">
          <Button cb={handleButtonClick} />
        </div>
      </div>
    </Suspense>
  );
}

export default App;
