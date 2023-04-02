import "./App.css";
import Button from "shared/Button";
import { useEffect } from "react";

/* async function loadShared(version) {
  const module = await import(`shared/${version}/shared.js`);
  return module.default;
}
const shared = await loadShared('01'); // Replace 'v1' with the version chosen by the user
console.log("🚀 ~ shared:", shared);
 */


function App() {
  const handleButtonClick = count => {
    console.log("🚀 ~ Shell ~ count:", count);
    return ;
  };
  return (
    <div className="App">
      <h1>Shell</h1>
      <div className="card">
        <Button cb={handleButtonClick}/>
      </div>
    </div>
  );
}

export default App;
