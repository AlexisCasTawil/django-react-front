import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getData, saveGame, updateGame } from "../services/api_rest";
import { initialState } from "../form";

export const GameEdit = (id) => {
  const navigate = useNavigate();
  const params = useParams();

  const [game, setGame] = useState(initialState);

  //This function saves the information depending on input name
  const register = (e) => {
    setGame({ ...game, [e.target.name]: e.target.value });
  };

  const submitGame = async (e) => {
    e.preventDefault();
    try {
      if (!params.id) {
        const res = await saveGame(game);
        const data = await res.json();
        navigate("/");
        if (data.message === "Saved") {
          setGame(initialState);
          alert("Saved!");
        }
      } else {
        await updateGame(params.id, game);
      }
      navigate("/");
    } catch (error) {
      console.log(Error);
    }
  };

  const getGame = async (id) => {
    try {
      const res = await getData(id);
      const data = await res.json();
      const { name, category, website, company } = data.game;
      setGame({ name, category, website, company });
    } catch (error) {
      console.log(Error);
    }
  };

  useEffect(() => {
    if (params.id) {
      getGame(params.id);
    }
  }, []);

  const clearAction = () => {
    setGame(initialState);
  };

  return (
    <section className="container container-fluid text-center text-white">
      <h4 className="m-3">Insert the game information.</h4>
      <form action="submit" onSubmit={submitGame}>
        <li className="input-group mb-3">
          <span
            className="input-group-text bg-dark text-secondary"
            id="inputGroup-sizing-default"
          >
            Name:
          </span>
          <input
            type="text"
            name="name"
            placeholder={game.name}
            value={game.name}
            onChange={register}
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </li>
        <li className="input-group mb-3">
          <span
            className="input-group-text bg-dark text-secondary"
            id="inputGroup-sizing-default"
          >
            Category:
          </span>
          <input
            type="text"
            name="category"
            placeholder={game.category}
            value={game.category}
            onChange={register}
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </li>
        <li className="input-group mb-3">
          <span
            className="input-group-text bg-dark text-secondary"
            id="inputGroup-sizing-default"
          >
            Official site:
          </span>
          <input
            type="url"
            name="website"
            placeholder={game.website}
            value={game.website}
            onChange={register}
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </li>
        <li className="input-group mb-3">
          <span
            className="input-group-text bg-dark text-secondary"
            id="inputGroup-sizing-default"
          >
            Owner:
          </span>
          <input
            type="text"
            name="company"
            placeholder={game.company}
            value={game.company}
            onChange={register}
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </li>
        <button
          type="submit"
          className="btn btn-success m-1 mb-3"
          onClick={submitGame}
        >
          Save
        </button>
        <button
          type="reset"
          className="btn btn-success m-1 mb-3"
          onClick={() => clearAction()}
        >
          Clear
        </button>
      </form>
    </section>
  );
};
