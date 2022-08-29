import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";
import Person from "./pages/Person/Person";
import SearchMovie from "./pages/SearchMovie/SearchMovie";
import ScrollToTop from "./ScrollToTop/ScrollToTop";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <ScrollToTop/>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:watch/:id/:name" element={<Movie />} />
            <Route path="/person/:id/:name" element={<Person />} />
            <Route path="/:toSearch/:movie" element={<SearchMovie/>} />
          </Routes>
        </QueryClientProvider>
    </>
  );
}

export default App;
