import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getData } from "../helpers/getData";
import SideBar from "../components/sideBar";
import Loading from "../components/loader/loading.jsx";
import VideoCart from "../components/videoCart/videoCart.jsx";

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [results, setResults] = useState(null);
  // search sorgu parametresinin değerine erişme
  const query = searchParams.get("search_query");

  useEffect(() => {
    // Komponent oluşturulduğunda veya sorgu değiştiğinde veriyi getir
    getData(`/search?query=${query}`).then((res) => setResults(res.data.data));
  }, [query]);

  return (
    <div className="flex">
      <SideBar />
      <div className="flex px-4 flex-col gap-5">
        {results ? (
          results.map(
            (item) =>
              item.type === "video" && (
                <VideoCart type={"deneme"} video={item} />
              ),
          )
        ) : (
          <Loading type={"video"} />
        )}
      </div>
    </div>
  );
};

export default SearchResults;
