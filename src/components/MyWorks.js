import React from "react";

export default class MyWorks extends React.Component {
  render() {
    return (
      <div>
        <ul className="workList">
          <li>
            <p>
              <p>
                <a href="https://fastbook-memoapp.netlify.com/">fastbook</a>
              </p>
              <a href="https://github.com/FastcampusMonkeys/fastBook">
                fastbook git repo
              </a>
            </p>
          </li>
          <li>
            <p>
              <a href="https://fastmonkeysbaseballgame.netlify.com/">
                baseballgame
              </a>
            </p>
            <a href="https://github.com/FastcampusMonkeys/fds-hackathon-template">
              baseballgame git repo
            </a>
          </li>
          <li>
            <p>
              <a href="https://rgbchallengebydw.netlify.com/">RGB Challenge</a>
            </p>
            <a href="https://github.com/gimdongwon/RGBChallenge">
              RGBChallenge git repo
            </a>
          </li>
          <li>
            <p>
              <a href="https://snakegamedw.netlify.com">snakegame</a>
            </p>
            <a href="https://github.com/gimdongwon/fds-snake-game">
              snakegame git repo
            </a>
          </li>
          <li>
            <p>
              <a href="https://singlepageapp.netlify.com">
                shoopingmall(CSS 미완성)
              </a>
            </p>
            <a href="https://github.com/gimdongwon/kungkidaero-7road">
              shoopingmall git repo
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
