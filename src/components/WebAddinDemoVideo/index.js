/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
//import WideCarousel from "components/AnimatePart/WideCarousel";
//import { WebAddinDemoVideoNav} from "components/WebAddinCommon/OtherFuncPop";
//import VideoAnimate from "components/AnimatePart/VideoAnimate";

//import styles from "./WebAddinDemoVideo.scss";
import WebAddinHeader from "../../components/WebAddinHeader";
//import introImg1 from "assets/home-intro-light.png";

// <QueueAnimate data={introdata} head={"四大板块"} span={"12"} gutter={170} height={"800px"} ratio={"90%"}/>
//const AddinLink = `${apiPublicPath}tools/downsoftware/index?soft_id=1`;
class WebAddinDemoVideo extends React.Component {

  render() {
    const  history=this.props.history;
    return (
      <div>
        <WebAddinHeader history={ history} />
        {
          /*
           <div className={styles["home-page"]}>
            <VideoAnimate data={videodata} head={"功能分类演示"} span={"24"} gutter={170} height={"3700px"} autoplay={false}/>
          </div>
          **/
        }
        <div align={"center"}>
          <h2>基本排版功能</h2>
          <iframe  allowFullScreen mozallowfullscreen
                   webkitallowfullscreen
                   src='https://share.polyv.net/front/video/preview?vid=80e36b9a6ffb5ea0910e1840021507c3_8'></iframe>
        </div>
        <div align={"center"}>
        <h2>一劳全逸排版模式</h2>
        <iframe  allowFullScreen mozallowfullscreen
                webkitallowfullscreen
                src='https://share.polyv.net/front/video/preview?vid=80e36b9a6f9c8b1afd4425dbda57e7bb_8'></iframe>
        </div>
        <div align={"center"}>
        <h2>客户端视频演示</h2>
        <iframe  allowFullScreen mozallowfullscreen
                webkitallowfullscreen
                src='https://share.polyv.net/front/video/preview?vid=80e36b9a6f9f5862b6e157af2269c22a_8'></iframe>
        </div>
        <div align={"center"}>
          <h2>整理功能群视频演示</h2>
          <iframe  allowFullScreen mozallowfullscreen
                  webkitallowfullscreen
                  src='https://share.polyv.net/front/video/preview?vid=80e36b9a6f9fdbd2038349047c7a8b03_8'></iframe>
        </div>
        <div align={"center"}>
          <h2>写作功能群视频演示</h2>
          <iframe  allowFullScreen mozallowfullscreen
                  webkitallowfullscreen
                  src='https://share.polyv.net/front/video/preview?vid=80e36b9a6f736413850af7f4da3f2325_8'></iframe>
        </div>
        <div align={"center"}>
          <h2>排版功能群视频演示</h2>
          <iframe  allowFullScreen mozallowfullscreen
                  webkitallowfullscreen
                  src='https://share.polyv.net/front/video/preview?vid=80e36b9a6f9124c4d20acbc465a4cbd5_8'></iframe>
        </div>
        <div align={"center"}>
          <h2>通用功能群视频演示</h2>
          <iframe  allowFullScreen mozallowfullscreen
                  webkitallowfullscreen
                  src='https://share.polyv.net/front/video/preview?vid=80e36b9a6f3181ad0b6e447c364041d5_8'></iframe>
        </div>


      </div>
    );
  }
}

export default WebAddinDemoVideo;
