import { createContext, useEffect, useState } from "react";
import { categories } from "../constants";
import { getData } from "../helpers/getData";
export const YoutubeContext = createContext();

export function YoutubeProvider({ children }) {
  //* seçili kategoriyi tutar

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  //* videoları tutar tutar

  useEffect(() => {
    //* apiden videolar alanacak
    if (
      selectedCategory.type === "home" ||
      selectedCategory.type === "trending"
    ) {
      // yardımcı fonksiyonu kullanıp api isteği atma
      getData(`${selectedCategory.type}`).then((res) =>
        setVideos(res.data.data),
      );
    }
    // tip category ise o kategori için istek at
    if (selectedCategory.type === "category")
      getData(`search?query=${selectedCategory.name}&type=video`).then((res) =>
        setVideos(res.data.data),
      );
  }, [selectedCategory]);

  const [videos, setVideos] = useState(null);

  return (
    <YoutubeContext.Provider
      value={{ selectedCategory, setSelectedCategory, videos }}
    >
      {children}
    </YoutubeContext.Provider>
  );
}
