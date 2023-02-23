import { useState } from "react";
import axios from "axios";

function App() {
  const [dataRecebida, setDataRecebida] = useState("test");
  const [feedback, setFeedback] = useState(null);

  const fetchApi = async () => {
    await axios
      .get("http://localhost:3002/api/v1")
      .then((sucesso) => {
        console.log(sucesso);
        setDataRecebida(sucesso.data.message);
      })
      .catch((error) => {
        console.log(error);
        setFeedback(error.response.data.message);
      });
  };

  return (
    <div className="App">
      <p>{dataRecebida}</p>
      {feedback && <p>{feedback}</p>}
      <button onClick={fetchApi}>TEST CONNECT BACKEND</button>
    </div>
  );
}

export default App;
