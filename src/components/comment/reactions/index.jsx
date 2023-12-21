import { Button } from "../../button";

import styles from "./styles.module.scss";
import { useComment } from "../useComment";

function Reactions() {
   const {
    onPositiveReaction,
    onNegativeReaction,
    comment: { score },
   } = useComment();

  return (
    <div className={styles.reactionsWrapper}>
      <Button onClick={onPositiveReaction}
        className={styles.reactionButton}
        aria-labelledby="Positive reaction button"
        //onClick={onPositiveReaction}
      >
        <img src="./images/icon-plus.svg" aria-hidden="true" />
      </Button>
      <p>{score}</p>
      <Button onClick={onNegativeReaction}
        className={styles.reactionButton}
        aria-labelledby="Negative reaction button"
       // onClick={onNegativeReaction}
      >
        <img src="./images/icon-minus.svg" aria-hidden="true" />
      </Button>
    </div>
  );
}

export { Reactions };