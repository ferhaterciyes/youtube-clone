import { Link, useNavigate } from "react-router-dom";
import { AiFillBell, AiOutlineSearch, AiFillVideoCamera } from "react-icons/ai";

const Header = () => {
  const navigate = useNavigate();
  // kullanıcıyı arama sonuçları sayfasına yönlendir
  // url ew arama parametresi olarak aratılan terimi ekle
  const handleSubmit = (e) => {
    e.preventDefault();

    const text = e.target[0].value;
    navigate(`/results?search_query=${text}`);
  };

  return (
    <header className="flex justify-between p-4 ">
      <Link className="flex items-center gap-[10px]">
        <img className="w-[50px]" src="/Youtube_logo.png" />
        <h1 className="text-2xl max-md:hidden">YouTube</h1>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="flex items-center border border-gray-400 focus-within:border-[#0d407f] rounded-[20px] "
      >
        <input
          placeholder="Ara"
          className="bg-black outline-none rounded-[20px] px-3 py-1"
          type="text"
        />
        <button className="grid place-items-center border-l px-2 text-xl ">
          <AiOutlineSearch />
        </button>
      </form>
      <div className="flex gap-3 text-xl cursor-pointer ">
        <div className="p-2  transition duration-300 hover:bg-gray-700 rounded-full ">
          <AiFillBell />
        </div>
        <div className="p-2  transition duration-300 hover:bg-gray-700 rounded-full ">
          <AiFillVideoCamera />
        </div>
      </div>
    </header>
  );
};

export default Header;
