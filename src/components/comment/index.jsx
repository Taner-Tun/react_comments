import { Reactions } from "./reactions"; 
import { Header } from "./header";
import { Body } from "./body";
import styles from "./styles.module.scss";
import { useComment, CommentContextProvider} from "./useComment";
import { NewCommentEditor } from "../new-comment-editor";



function Comment () {
  const { isReplying, currentUser, comment, onNewReply} = useComment();

   if(!comment) {
    return null;
   }


  return (
    <>
      <div className={styles.commentWrapper}>
        <Reactions />
        <div className={styles.commentContentArea}>
          <Header />
          <Body />
        </div>
      </div>
      {comment?.replies?.length > 0 && (
        <div className={styles.replies}>
          {comment.replies.map(reply => (
            <CommentContextProvider key={reply.id} data={{ comment: reply, currentUser }}>
              <Comment />
            </CommentContextProvider>
          ))}
        </div>
      )}
      {isReplying && (
    <NewCommentEditor 
      onClick={onNewReply}
      isReply
      image={currentUser.image.jpg}
      alt={currentUser.username} 
      />
     )}
    </>
  );
}

export { Comment };