import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import VideoInfo from "../components/VideoInfo";
import { useEffect, useState } from "react";
import { getData } from "../helpers/getData";
import Loading from "../components/loader/loading";
import VideoCart from "./../components/videoCart/videoCart";
const VideoDetail = () => {
  const { id } = useParams();
  const [related, setRelated] = useState(null);

  useEffect(() => {
    setRelated(null);
    getData(`/related?id=${id}`).then((res) => setRelated(res.data.data));
  }, [id]);
  return (
    <div className="p-6 md:p-6 min-h-screen  flex max-lg:flex-col ">
      <div className="flex-1">
        <ReactPlayer
          className={"rounded"}
          width={"100%"}
          controls
          url={`https://www.youtube.com/watch?v=${id}`}
        />
        <VideoInfo />
      </div>
      <div className="max-md:w-full lg:max-w-[400px] lg:max-w-[300px]: flex flex-col px-3 max-lg:my-5 gap-5">
        {!related ? (
          <Loading type={"video"} />
        ) : (
          related.map(
            (item) =>
              item.type === "video" && (
                <VideoCart type="row" video={item} key={item} />
              ),
          )
        )}
      </div>
    </div>
  );
};

export default VideoDetail;
