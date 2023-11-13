import { categories } from "./../constants/index";
import { useContext } from "react";
import { YoutubeContext } from "../context/youtubeContext";

const SideBar = () => {
  const { selectedCategory, setSelectedCategory } = useContext(YoutubeContext);

  return (
    <div className="flex flex-col px-2 md:px-4 ">
      {categories.map((item) => (
        <div onClick={() => setSelectedCategory(item)} key={item.name}>
          <div
            //* eğerki ekrana basılan kategori seçili ise arka plan ver
            style={{
              background: selectedCategory.name === item.name && "#2d2d2d",
            }}
            // Her map edilen elemana benzersiz bir 'key' eklemelisiniz.
            className="flex items-center gap-2 py-4 px-2 md:px-3 md:text-lg cursor-pointer rounded hover:bg-[#2d2d2d]"
          >
            <span className="max-sm:text-2xl">
              {" "}
              <i>{item.icon}</i>
            </span>
            <span className="max-sm:hidden">{item.name}</span>
          </div>
          {/* item in divider true ise alt çicgi bas. */}
          {item.divider && <hr />}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
