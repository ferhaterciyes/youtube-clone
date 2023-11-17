import axios from "axios";
//* istek ile göndermemiz gereken kimliğimiz,
const options = {
  params: {
    geo: "TR",
    lang: "tr",
  },
  headers: {
    "X-RapidAPI-Key": "75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
};
// todo base url tanımla
// bütün isteklerin başlangıcında olan tanımlama

axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";

//* apiye verdiğimiz apiye istek atıp
//* verileri döndüren bir fonk

export const getData = async (path) => {
  try {
    return await axios.get(path, options);
  } catch (error) {
    console.log("hata oluştu");
  }
};
