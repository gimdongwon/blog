import React from "react";
import "./myWorks.css";

export default class MyWorks extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="workList">
          <div className="col">
            <div className="momf card">
              <h3>Roper in card</h3>
              <p>
                블록체인 Dapp으로 난수 생성을 컨트랙트에 기록하여 동작하는
                빙고류 포커게임입니다.
              </p>
              <p>
                네오위즈 인턴당시 개발한 게임입니다. 알파버전 개발 완료하였으나
                develop되진 않았습니다.
              </p>
              <a>
                <img
                  src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0128040b-a056-47c3-98e9-daa1195efd5b%2FUntitled.png?table=block&id=7da6cb94-df81-4bc1-83a5-840c293eb0ef&width=3350&cache=v2"
                  alt="roper in card"
                />
              </a>
              <a>
                <img
                  src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1d8911fc-525b-4499-b72f-aaad75f01387%2FUntitled.png?table=block&id=5f433b0b-89d4-4c4c-ad10-3b58f2cb221c&width=3360&cache=v2"
                  alt="roper in card2"
                />
              </a>
              <br />
              <div className="github_wrap">
                <a href="https://github.com/gimdongwon/Roper_in_card">
                  <img
                    src="https://cdn.tutsplus.com/net/uploads/2013/08/github-collab-retina-preview.gif"
                    alt="github_repo"
                    className="github_img"
                  />
                </a>
              </div>
            </div>
            <div className="Neopick card">
              <h3>Neopick</h3>
              <p>블록체인을 이용한 탈중앙화 추첨 서비스입니다.</p>
              <p>
                네오위즈 인턴당시 프로젝트로써 서비스까지 develop되었습니다.
                현재는 GCP에서 내려온 상태입니다.
              </p>
              <a>
                <img
                  src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb84c8624-fb14-4ec2-ab85-f387dee48dba%2FUntitled.png?table=block&id=460535d5-c45d-4460-9f2d-8928e4b046b6&width=1910&cache=v2"
                  alt="Neopick"
                />
              </a>
              <div className="github_wrap">
                <a href="https://github.com/gimdongwon/neopick.eoseoul.io">
                  <img
                    src="https://cdn.tutsplus.com/net/uploads/2013/08/github-collab-retina-preview.gif"
                    alt="github_repo"
                    className="github_img"
                  />
                </a>
              </div>
            </div>
            <div className="momf card">
              <h3>MOMF</h3>
              <p>음악을 사랑하고 즐기는 사람들을 위한 페이지 입니다</p>
              <br />
              우아한형제들 사이트를 모티브로 개발하였습니다.
              <a href="https://momf-b4498.firebaseapp.com/">
                <img
                  src="https://raw.githubusercontent.com/gimdongwon/momf/master/images/mdimage.JPG"
                  alt="momf"
                />
              </a>
              <br />
              <div className="github_wrap">
                <a href="https://github.com/gimdongwon/momf">
                  <img
                    src="https://cdn.tutsplus.com/net/uploads/2013/08/github-collab-retina-preview.gif"
                    alt="github_repo"
                    className="github_img"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="fastbook card">
              <h3>fastbook</h3>
              <p>언제 어디서나 인터넷에 저장하고 읽을 수 있는 메모장 앱니다.</p>
              <br />
              memo app motive by macOS
              <a href="https://fastbook-memoapp.netlify.com/">
                <img
                  src="https://raw.githubusercontent.com/FastcampusMonkeys/fastBook/master/preview.png"
                  alt="fastbook"
                />
              </a>
              <div className="github_wrap">
                <a href="https://github.com/FastcampusMonkeys/fastBook">
                  <img
                    src="https://cdn.tutsplus.com/net/uploads/2013/08/github-collab-retina-preview.gif"
                    alt="github_repo"
                    className="github_img"
                  />
                </a>
              </div>
            </div>
            <div className="baseball-game card">
              <h3>Baseball game</h3>
              <p>상대방의 숫자를 맞추는 기본적인 야구게임 입니다.</p>
              <br />
              10회안에 상대방의 숫자를 맞추어야 합니다.
              <a href="https://fastmonkeysbaseballgame.netlify.com/">
                <img
                  src="https://raw.githubusercontent.com/FastcampusMonkeys/fds-hackathon-template/master/preview.png"
                  alt="baseball game"
                />
              </a>
              <div className="github_wrap">
                <a href="https://github.com/FastcampusMonkeys/fds-hackathon-template">
                  <img
                    src="https://cdn.tutsplus.com/net/uploads/2013/08/github-collab-retina-preview.gif"
                    alt="github_repo"
                    className="github_img"
                  />
                </a>
              </div>
            </div>
            <div className="rgb-challenge card">
              <h3>rgb-challenge</h3>
              <p>color코드에 맞는 색을 찾는 게임입니다.</p>
              <br />
              포인트를 쌓아가는 게임입니다.
              <a href="https://rgbchallengebydw.netlify.com/">
                <img
                  src="https://raw.githubusercontent.com/gimdongwon/RGBChallenge/master/screenshot.png"
                  alt="rgb-challenge"
                />
              </a>
              <div className="github_wrap">
                <a href="https://github.com/gimdongwon/RGBChallenge">
                  <img
                    src="https://cdn.tutsplus.com/net/uploads/2013/08/github-collab-retina-preview.gif"
                    alt="github_repo"
                    className="github_img"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="snake-game card">
              <h3>snake-gage</h3>
              <p>열매를 먹으며 뱀의 몸을 부풀리는 게임입니다.</p>
              React로 구현하였습니다.
              <a href="https://snakegamedw.netlify.com">
                <img
                  src="https://raw.githubusercontent.com/gimdongwon/fds-snake-game/master/preview.png"
                  alt="snake-game"
                />
              </a>
              <div className="github_wrap">
                <a href="https://github.com/gimdongwon/fds-snake-game">
                  <img
                    src="https://cdn.tutsplus.com/net/uploads/2013/08/github-collab-retina-preview.gif"
                    alt="github_repo"
                    className="github_img"
                  />
                </a>
              </div>
            </div>
            <div className="icebreaking card">
              <h3>icebreaking</h3>
              <p>어색할 때 분위기를 풀어주는 icebreaking 앱입니다.</p>
              <br />
              실제로 많은 공간에서 사용중입니다.
              <a href="https://icebreaking.netlify.com/">
                <img
                  src="https://raw.githubusercontent.com/gimdongwon/icebreaking/master/preview.png"
                  alt="weatherapp"
                />
              </a>
              <br />
              <div className="github_wrap">
                <a href="https://github.com/gimdongwon/icebreaking">
                  <img
                    src="https://cdn.tutsplus.com/net/uploads/2013/08/github-collab-retina-preview.gif"
                    alt="github_repo"
                    className="github_img"
                  />
                </a>
              </div>
            </div>
            <div className="weather-app card">
              <h3>weather-app</h3>
              <p>
                위치에 따른 날씨를 알려주는 react-native 하이브리드 앱입니다
              </p>
              expo로 구현하였습니다. expo라 미리보기는 없습니다
              <br />
              <a>
                <img
                  src="https://raw.githubusercontent.com/gimdongwon/weather-app/master/preview.png"
                  alt="weatherapp"
                  height="600px"
                />
              </a>
              <br />
              <div className="github_wrap">
                <a href="https://github.com/gimdongwon/weather-app">
                  <img
                    src="https://cdn.tutsplus.com/net/uploads/2013/08/github-collab-retina-preview.gif"
                    alt="github_repo"
                    className="github_img"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="swear card">
              <h3>swear-gage</h3>
              <p>
                힙합 직캠 동영상 커뮤니티 입니다. aws key 노출 이슈로 운영은
                하지 않고 있고 로그인과 게시판 기능만 작동합니다
              </p>
              Ruby on Rails gem을 이용하여 구현하였습니다.
              <a href="https://ancient-fjord-93368.herokuapp.com/">
                <img
                  src="https://raw.githubusercontent.com/kimdongwon99/soomtong_ay_repository/master/app/assets/images/img/works/z1.jpg"
                  alt="swear"
                />
              </a>
              <div className="github_wrap">
                <a href="https://github.com/kimdongwon99/soomtong_ay_repository">
                  <img
                    src="https://cdn.tutsplus.com/net/uploads/2013/08/github-collab-retina-preview.gif"
                    alt="github_repo"
                    className="github_img"
                  />
                </a>
              </div>
            </div>
            <div className="haycap card">
              <h3>haycap-gage</h3>
              <p>
                개인마다 좋아하는 마블 영화를 찜할 수 있는 커뮤니티 사이트
                입니다.
              </p>
              마찬가지로 Ruby on Rails gem을 이용하여 구현하였습니다.
              <div className="github_wrap">
                <a href="https://haycap.herokuapp.com/">
                  <img
                    src="https://cdn.shopify.com/s/files/1/1258/0965/articles/h20wkj2-iron-man-vs-captain-america-1400x700.jpg?v=1462566663"
                    alt="swear"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
