import axios from "axios";
import React, { useState } from "react";

const Api = () => {
  const [news, setnews] = useState([]);

  const  GetNews= () => {
    axios.get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=573322ca77c848069918fd9efe40638a"
      )
      .then((Response) => {
        console.log(Response)
        setnews(Response.data.articles);
      });
  };
  return (
    <>
      <div className="heelo">
        <div className="Container my-3">
          <button type="button" class="btn btn-primary" onClick={GetNews}>
          GetNews
          </button>
        </div>
      </div>

      <div className="card">
        {news.map((value) => {
          return (
            <div class="card" style={{ width: "18rem" }}>
              <img src={value.urlToImage} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{value.title }
                <li key={value.id}/>

                </h5>
                <p class="card-text">{value.description}
           
                </p>
                <a href="#" class="btn btn-primary">
                  {value.url}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Api;
