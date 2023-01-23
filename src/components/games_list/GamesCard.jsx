import { removeGame } from "../services/api_rest";
import { useNavigate } from "react-router-dom";

export const GamesCard = ({ game, getGamesList }) => {
  const navigate = useNavigate();

  const deleteGame = async(id) => {
    const res = await removeGame(id);
    const data = await res.json();
    getGamesList();
  };

  return (
    <article className="col-md-3 m-3 row center border-bottom border-info-subtle">
      <h5 className="text-white">{game.name}</h5>
      <span className="text-secondary">
        <i>{game.category}</i>
      </span>
      <a
        href={game.website}
        onClick={() => game.id && delete game.id}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-success m-1"
      >
        Go to website
      </a>
      <div className="btn-group">
        <button
          className="btn btn-outline-secondary active m-1"
          aria-current="page"
          onClick={() => navigate(`/form/${game.id}`)}
        >
          Edit
        </button>
        <button
          className="btn btn-outline-danger m-1"
          onClick={()=> game.id && deleteGame(game.id)}
        >
          Delete
        </button>
      </div>
    </article>
  );
};
