import axios from "axios";
//* istek ile göndermemiz gereken kimliğimiz,
const options = {
  params: {
    geo: "TR",
    lang: "tr",
  },
  headers: {
    "X-RapidAPI-Key": "1f1c4d3967msha952b833c2974ccp156b77jsn699a8dbe45d5",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
};
// todo base url tanımla
// bütün isteklerin başlangıcında olan tanımlama

axios.defaults.baseURL = "https://yt-api.p.rapidapi.com/";

//* apiye verdiğimiz apiye istek atıp
//* verileri döndüren bir fonk

export const getData = async (path) => {
  try {
    return await axios.get(path, options);
  } catch (error) {
    console.log("hata oluştu");
  }
};
