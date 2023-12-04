import "./styles/reset.scss";
import "./styles/variables.scss";
import "./styles/global.scss";

import { NewCommentEditor } from "./components/new-comment-editor";
import { Conversation } from "./components/conversation";


function App() {
  

  return (
    <>
      <div className="container">
        <p>Container</p>
        <NewCommentEditor />
      <Conversation />
      </div>
      
    </>
  )
}

export default App
