import  { useState, useContext, createContext, useMemo } from "react";
import PropTypes from "prop-types";

const CommentContext = createContext();

function CommentContextProvider({ children, data }) {

  const [comment, setComment] = useState(data.comment);
  const [isReplying, setReplying] = useState(false);
  const [isEditing, setEditing] = useState(false);

  const onReply = () => {
    setReplying(!isReplying);
  };

  const onEdit = () => {
    setEditing(!isEditing);
  };

  const onDelete = () => {
  setComment(null);
  };

  const onUpdate = (newComment) => {
    setComment({
      ...comment,
      content:newComment,
    });
    onEdit();
  };

  const onNewReply = (newComment) => {
    setComment({
      ...comment,
      replies:[
          ...(comment.replies ?? []),
          {
            id: Math.floor(Math.random()*100),
            content: newComment,
            createdAt: new Date().toLocaleDateString(),
            score: 0,
            replyingTo: comment.user.username,
            user: data.currentUser,
          },
      ],
    });
    
    onReply();
  }

  const contextData = useMemo (() => ({
    onNewReply,
    onUpdate,
    isEditing,
    comment,
    currentUser: data.currentUser,
    isReplying,
    onReply,
    onDelete,
    onEdit,
  }),[isReplying, isEditing, comment]);
  
  

  return (
    <CommentContext.Provider value={contextData}>
      {children}
    </CommentContext.Provider>
  );
}

function useComment() {
  const context = useContext(CommentContext);

  if (!context) {
    throw new Error("There is no Comment Context Provider, first import it");
  }

  return context; 
}
CommentContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
};

export { useComment, CommentContextProvider }