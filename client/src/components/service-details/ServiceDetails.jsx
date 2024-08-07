import { useContext, useEffect, useReducer, useState, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as serviceService from "../../services/serviceService";
import * as commentService from "../../services/commentService";
import authContext from "../../contexts/authContext";
import reducer from "./commentReducer";
import useForm from "../../hooks/useForm";
import { pathToUrl } from "../../utils/pathUtils";
import Path from "../../paths";

export default function ServiceDetails() {
  const navigate = useNavigate();
  const { username, userId } = useContext(authContext);
  const [ service, setService ] = useState({});
  const [ comments, dispatch ] = useReducer(reducer, []);
  const { serviceId } = useParams();

  useEffect(() => {
    serviceService.getOne(serviceId).then(setService);

    commentService.getAll(serviceId).then((result) => {
      dispatch({
        type: "GET_ALL_COMMENTS",
        payload: result,
      });
    });
  }, [serviceId]);

  const addCommentHandler = async (values) => {
    const newComment = await commentService.create(serviceId, values.comment);

    newComment.owner = { username };

    dispatch({
      type: "ADD_COMMENT",
      payload: newComment,
    });

    values.comment = '';
  };

  const deleteButtonClickHandler = async () => {
    const hasConfirmed = confirm(
      `Are you sure you want to delete ${service.title}`
    );

    if (hasConfirmed) {
      await serviceService.remove(serviceId);

      navigate(Path.Services);
    }
  };

  const { values, onChange, onSubmit } = useForm(addCommentHandler, {
    comment: "",
  });

  return (
    <section id="service-details">
      <h1>details PAGE</h1>

      <div className="info-section">
        <div className="service-header">
          <img
            className="service-img"
            src={service.imageUrl}
            alt={service.title}
          />
          <h1>{service.title}</h1>
          <span className="price">Price: {service.price}</span>
        </div>

        <p className="text">{service.description}</p>

        <div className="details-comments">
          <h2>Comments:</h2>
          <ul>
            {comments.map(({ _id, text, owner: { username } }) => (
              <li key={_id} className="comment">
                <p>
                  {username}: {text}
                </p>
              </li>
            ))}
          </ul>

          {comments.length === 0 && <p className="no-comment">No comments.</p>}
        </div>

        {userId === service._ownerId && (
          <div className="buttons">
            <Link
              to={pathToUrl(Path.ServiceEdit, { serviceId })}
              className="button"
            >
              Edit
            </Link>
            <button className="button" onClick={deleteButtonClickHandler}>
              Delete
            </button>
          </div>
        )}
      </div>

      <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form" onSubmit={onSubmit}>
          <textarea
            name="comment"
            value={values.comment}
            onChange={onChange}
            placeholder="Comment..."
          ></textarea>
          <input className="btn submit" type="submit" value="Add Comment" />
        </form>
      </article>
    </section>
  );
}
