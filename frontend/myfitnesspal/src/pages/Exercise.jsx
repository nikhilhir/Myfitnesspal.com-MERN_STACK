import { useEffect, useState } from "react";
import ex from "../Styling/exercise.module.css";
import axios from "axios";
const Exercise = () => {
  const [search, setSearch] = useState([]);
  const [find, setFind] = useState("");
  const [w, setW] = useState("");
  const [cx, setCx] = useState("");
  const [bur, setBur] = useState("");

  const handleme = (e) => {
    setW(e.target.value);
  };

  const handleSel = (e) => {
    // w = +w
    if (e.target.value === "kilogram") {
      setW(Number(w) / 2.25);
    } else {
      setW(Number(w) * 2.25);
    }
  };

  function handleChange(event) {
    setSearch(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  const handle = (e) => {
    console.log(e.target.value);
  };

  const handlecx = (e) => {
    setCx(e.target.value);
    console.log(bur);
  };
  const getData = () => {
    const options = {
      method: "GET",
      url: "https://exercisedb.p.rapidapi.com/exercises",
      headers: {
        "X-RapidAPI-Key": "dcac316f37msh5a5633b873118b4p12dbe2jsn230846c97468",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  getData();
  return (
    <div className={ex.mainb}>
      <section className={ex.bold}>
        <h2>Calories Burned From Exercise</h2>
        <hr />
      </section>
      <section className={ex.dev}>
        <section className={ex.search}>
          <form className={ex.sform} onSubmit={handleSubmit}>
            <p>Search our exercise database by name:</p>
            <input type="text" value={search} onChange={handleChange} />
            <input type="submit" />
          </form>
          <p>Matching exercises:</p>
          <section className={ex.box}></section>
        </section>
        <section className={ex.select}>
          <h3>...or choose an exercise below:</h3>
          <form className={ex.op} onSubmit={handle}>
            <select>
              <option value="9Round">9Rounds</option>
              <option value="pullups">PullUps</option>
              <option value="run">Run</option>
              <option value="run">Walk</option>
            </select>
          </form>
          <section className={ex.calc}>
            <section className={ex.ctext}>
              <h3>How Many Calories Did I Burn ?</h3>
              <h4>{find}</h4>
            </section>
            <section className={ex.wc}>
              <form>
                <span>Your Weight: </span>
                <input value={w} onChange={handleme} type="text" />
                <select onChange={handleSel}>
                  <option value="pounds">Pounds</option>
                  <option value="kilogram">Kilogram</option>
                </select>
              </form>
            </section>
            <section className={ex.lc}>
              <form>
                <span>How Long: </span>
                <input type="text" value={cx} onChange={handlecx} />
                <span>Minutes</span>
              </form>
            </section>
            <span>
              Calories burned: <span className={ex.g}>{bur}</span>
            </span>
          </section>
        </section>
      </section>
    </div>
  );
};

export { Exercise };
