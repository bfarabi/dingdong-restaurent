import React from "react";
import dateFormat from "dateformat";

const Comments = (props) => {
    
  return (
    <div>
      {props.comments.map((comment) => {
        return (
          <div key={comment.id}>
            <h5>{comment.author}</h5>
            <p>Rating : {comment.rating}</p>
            <p>Comment : {comment.comment}</p>
            <p>{ dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM TT")}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
