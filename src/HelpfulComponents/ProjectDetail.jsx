import React, { useEffect, useState } from "react";

const ProjectDetail = () => {
  let [storeArray, setStoreArray] = useState([]);

  useEffect(() => {
    const fetchRepo = async () => {
      let fetchData = await (
        await fetch("https://api.github.com/users/haris-aqeel/repos")
      ).json();
      var repoArray = await fetchData.filter(({ name }) => {
        return (
          name === "E-Commerce-Website" ||
          name === "covid-19-reactapp" ||
          name === "Amazon-Clone-Application" ||
          name === "Google-Keep-App" ||
          name === "Real-Time-Chat-Application" ||
          name === "Movie-Theatre"
        );
      });
      setStoreArray(repoArray);
    };

    fetchRepo();
  }, []);

  
            
       
  return (
    <div className="row">
      {storeArray.map((curr, ind) => {
      return (
      <div key={ind} className="col col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="singleProject"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="20"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top">

              <div className="repo-head">
                <svg
                  aria-hidden="true"
                  className="repo-svg"
                  height="25"
                  role="img"
                  viewBox="0 0 12 16"
                  width="18"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                  ></path>
                </svg>
                <p className="repo-name">{curr.name}</p>
              </div>
              <p className="repo-description">
                <span role="img" aria-labelledby="[]">
                  🚀
                </span>
                {curr.description !== null
                  ? curr.description
                  : "Software Developer Portfolio Template that helps you showcase your work and skills as a software developer"}
              </p>
              <div className="repo-stats">
                <div className="repo-left-stat">
                  <span>
                    <div
                      className="language-color"
                      style={{ backgroundColor: "rgb(241, 224, 90)" }}
                    ></div>
                    <p>JavaScript</p>
                  </span>
                  <span>
                    <svg
                      aria-hidden="true"
                      className="repo-star-svg"
                      height="20"
                      role="img"
                      viewBox="0 0 10 16"
                      width="12"
                      fill="rgb(106, 115, 125)"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                      ></path>
                    </svg>
                    <p>440</p>
                  </span>
                  <span>
                    <svg
                      aria-hidden="true"
                      className="repo-star-svg"
                      height="20"
                      role="img"
                      viewBox="0 0 14 16"
                      width="14"
                      fill="rgb(106, 115, 125)"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
                      ></path>
                    </svg>
                    <p>209</p>
                  </span>
                </div>
                <div className="repo-right-stat">
                <p>{curr.size} KB</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectDetail;
