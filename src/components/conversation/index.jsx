import { Comment } from "../comment";
import { NewCommentEditor } from "../new-comment-editor";

function Conversation () {
    return <div>
        <Comment />
        <NewCommentEditor />
        </div>
}

export {Conversation};