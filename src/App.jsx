import "./styles/reset.scss";
import "./styles/variables.scss";
import "./styles/global.scss";

import { NewCommentEditor } from "./components/new-comment-editor";
import { Conversation } from "./components/conversation";
import { Comment } from "./components/comment";


function App() {
  

  return (
    <>
      <div className="container">
        <p>Container</p>
        <NewCommentEditor />
        <Conversation />
        <Comment />
      </div>
      
    </>
  )
}

export default App
