
import styles from "./styles.module.scss";
import { Textarea } from "../textarea";
import PropTypes from "prop-types";
import { Button } from "../button";
import { useState } from "react";

function NewCommentEditor ({ isReply = false, image, alt, onClick }) {

    const [comment, newComment] = useState("")

    const handleCommentChange = ({ target }) => {
       newComment(target.value)
    }

    const handleClick = () => {
        onClick(comment);
        newComment("");
    }
    return(
        
        <div className={styles.newCommentEditor}>
            <div className={styles.imageWrapper}>
           <img src={image} alt={alt} />
          </div> 
            <Textarea value={comment} onChange={handleCommentChange} placeholder="Add a comment..." />
            <Button variant="primary" onClick={handleClick}>{isReply ? "Reply" : "Send"}</Button>
        </div>
    )
}

NewCommentEditor.propTypes = {
    image: PropTypes.string.isRequired, 
    alt: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    isReply: PropTypes.bool,
    onClick: PropTypes.func,
  };
  
export {NewCommentEditor};