import React, { useEffect, useState } from "react";
import "./App.css";

import Articles from "./components/Articles";

const title = "Sorting Articles";

function App({ articles }) {
  const [data, setData] = useState(articles);
  const sortMostRecent = () => {
    const x = JSON.parse(JSON.stringify(data));
    x.sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    });
    setData(x);
  };

  const mostUpvoted = () => {
    const x = JSON.parse(JSON.stringify(data));

    x.sort((a, b) => {
      if (a.upvotes > b.upvotes) return -1;
      return 1;
    });
    console.log(data, x);
    setData(x);
  };

  useEffect(() => {
    const x = data;
    x.sort((a, b) => {
      if (a.upvotes > b.upvotes) return 1;
      return -1;
    });
    setData(x);
  }, [data]);
  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button onClick={mostUpvoted}>Most Upvoted</button>
        <button onClick={sortMostRecent}>Most Recent</button>
      </div>
      <Articles articles={data} />
    </div>
  );
}

export default App;
