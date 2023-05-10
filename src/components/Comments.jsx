import {ThumbsUp, Trash} from "phosphor-react";
import Styles from "./Comments.module.css";
import {Avatar} from "./Avatar";
import {useState} from "react";


export function Comment({content, onDeleteComment}) {

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1)
  }

  return (
    <div className={Styles.comments}>
      <Avatar
        hasBorder={false}
        src={
          "https://wl-incrivel.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg"
        }
      />
      <div className={Styles.commentBox}>
        <div className={Styles.commentContent}>
          <header>
            <div className={Styles.authorAndTime}>
              <strong>Devon Lane (você)</strong>
              <time title="11 de maio de 2023">Públicado há 1h</time>
            </div>
            <button onClick={handleDeleteComment} title="Deleta Comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
          </button>
          Aplaudir<span>{likeCount}</span>
        </footer>
      </div>
    </div>
  );
}
