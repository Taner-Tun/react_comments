
import styles from "./styles.module.scss";
import { Textarea } from "../textarea";
import PropTypes from "prop-types";
import { Button } from "../button";

function NewCommentEditor ({ image, alt }) {
    return(
        
        <div className={styles.newCommentEditor}>
            <div className={styles.imageWrapper}>
           <img src={image} alt={alt} />
          </div> 
            <Textarea placeholder="Add a comment..." />
            <Button variant="primary">Send</Button>
        </div>
    )
}

NewCommentEditor.propTypes = {
    image: PropTypes.string.isRequired, 
    alt: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
  };
  
export {NewCommentEditor};