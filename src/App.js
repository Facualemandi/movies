import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Routes, Route } from "react-router-dom";
import AllPopular from "./pages/TotalPopular/AllPopular";
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";
import Person from "./pages/Person/Person";
import SearchMovie from "./pages/SearchMovie/SearchMovie";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import { ProvidersContex } from "./context/context";
import PopularPeople from "./pages/PopularPeople/PopularPeople";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <ProvidersContex>
      <ScrollToTop />
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:watch/:id/:name" element={<Movie />} />
            <Route path="/person/:id/:name" element={<Person />} />
            <Route path="/:toSearch" element={<SearchMovie />} />
            {/* Rutas desde el nav */}
            <Route path="/total/:watch/:type" element={<AllPopular />} />
            <Route path="/person/:type" element={<PopularPeople/>} />
          </Routes>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ProvidersContex>
    </>
  );
}

export default App;
