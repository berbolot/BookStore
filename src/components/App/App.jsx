import "bootstrap/dist/css/bootstrap.min.css";
import Booklist from "../Booklist/Booklist";
import { useState } from "react";


const App = () => {
 const [visible, setVisible] = useState(false);

  return <div>App
    <button onClick={() => setVisible((prev) => !prev)}>Press</button>
     {!visible && <Booklist />} 
  </div>;
};

export default App;
