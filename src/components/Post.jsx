import Styles from "./Post.module.css";
import {Comment} from "./Comments";
import {Avatar} from "./Avatar";
import {format, formatDistanceToNow} from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import {useState} from "react";

export function Post(props) {
  
  const [comments, setComments] = useState([]);

  const [newCommentText, setNewCommentText] = useState("");

  const DateTime = new Date(props.time);

  const isNewCommentEmpty = newCommentText.length == 0;

  const publisheDateFormatted = format(DateTime, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publisheDateRelativeToNow = formatDistanceToNow(DateTime, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event.preventDefault();

    const newCommentText = event.target.comment.value;

    setComments([...comments, newCommentText]);

    setNewCommentText("");
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(commentsWithoutDeletedOne);
  }

  return (
    <article className={Styles.post}>
      <header>
        <div className={Styles.author}>
          <Avatar src={props.avatar} />
          <div className={Styles.authorinfo}>
            <strong>{props.name}</strong>
            <span>{props.role}</span>
          </div>
        </div>
        <time title={publisheDateFormatted}>{publisheDateRelativeToNow}</time>
      </header>

      <div className={Styles.content}>{props.content}</div>

      <form onSubmit={handleCreateNewComment} className={Styles.comentPost}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Deixe seu comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit"   disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>
      <div className={Styles.commentsList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
