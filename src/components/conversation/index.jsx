import { Comment } from "../comment";
import { NewCommentEditor } from "../new-comment-editor";

import  Data  from "../../../data.json";

function Conversation () {
    return(
         <div>
        {Data.comments.map((comment) => (
           <Comment key={comment.id} data={comment} /> 
           ))}
        
        <NewCommentEditor />
        </div>
        );
}

export {Conversation};