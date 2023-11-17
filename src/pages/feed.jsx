import { useContext } from "react";
import SideBar from "../components/sideBar";
import { YoutubeContext } from "../context/youtubeContext";
import Loading from "../components/loader/loading";
import VideoCart from "../components/videoCart/videoCart";

const Feed = () => {
  const { videos } = useContext(YoutubeContext);

  return (
    <div className="flex gap-3">
      <SideBar />
      <div className="videos">
        {/* videolar yoksa yükleniyor bas
         * varsa videoları dön
         * video olan her biri için ekrana cart bas
         */}
        {!videos ? (
          <Loading type={"video"} />
        ) : (
          videos.map(
            (item) =>
              // Eğer item.type "video" ise VideoCart bileşenini döndür
              item.type === "video" && (
                <VideoCart video={item} key={item.videoId} />
              ),
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
