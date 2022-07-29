import "/src/styles/global.css";
import "./styles/utils.css";
import { BrowserRouter } from "react-router-dom";
import { RouterContainer } from "./routes/RouterContainer";

function App() {
  return (
    <BrowserRouter>
      <RouterContainer />
    </BrowserRouter>
  );
}

export default App;
