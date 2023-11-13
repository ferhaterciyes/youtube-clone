import { BrowserRouter, Route, Routes } from "react-router-dom"
import Feed from "./pages/feed"
import VideoDetail from "./pages/videoDetail"
import SearchResults from "./pages/searchResults"
import Header from "./components/header"



function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Feed />}/>
      <Route path="/watch" element={<VideoDetail />}/>
      <Route path="/results" element={<SearchResults />}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
