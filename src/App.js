import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Subcard from "./components/subcard";
import VideoLocation from "./components/VideoLocation";
import * as Data from "./Data/data"
function App() {
  const [timer, setTimer] = useState(null)
  function getTimer(time){
    setTimer(time);
  }
  return (
    <div>
      <section id="main_page" style={{ display: "block" }}>
        <Header />
        <div className="grid wide container">
          <div className="row row-body">
            <div className="col l-5 sub-container">
              <Subcard subcardTiming = {timer} />
            </div>
            <div className="col l-7 video-container">
            <VideoLocation tranferTimer = {getTimer}/>
            </div>
          </div>
        </div>
      </section>
      <section id="input_page" style={{ display: "none" }}>
        <div className="grid wide container">
          <div className="row row-header">
            <div className="col l-4 header">
              <div className="header-logo">
                <img src="./images/header_logo.png" alt="" />
              </div>
            </div>
            <div className="col l-4 header-title">
              <h3>NHẬP JSON</h3>
            </div>
            <div className="col l-4 header-json">
              <a className="toggleBtn" href="!#">
                TỚI TRANG CHỦ
              </a>
            </div>
          </div>
        </div>
        <div className="grid input-container">
          <div className="row">
            <div className="col l-5 input-group">
              <h4>Tạo phụ đề, sub tiếng anh cho video</h4>
              <div id="card-sub" className="input-form">
                <button>lấy vị trí hiện tại</button>
                <input id="time_sub" size={10} type="text" />
                <label>giây</label>
                <br />
                <label>Link hình ảnh phụ đề:</label>
                <br />
                <input
                  id="link_sub"
                  size={40}
                  type="text"
                  defaultValue="./images/sub_img/sub_test.jpg"
                />
                <br />
                <label>subtitle cho hình ảnh phụ đề:</label>
                <br />
                <input id="text_sub" size={40} type="text" />
                <button>lưu json mới</button>
              </div>
            </div>
            <div className="col l-7">
              <div id="input_video" />
              <div className="transcript_video">
                <h3>alo</h3>
              </div>
              <div className="video-control">
                <button>video trước</button>
                <button>video sau</button>
              </div>
            </div>
          </div>
          <div className="row row-end">
            <div className="col l-12 col-end">
              <button>JSON vừa nhập</button>
              <input id="json_text" size={100} type="text" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
