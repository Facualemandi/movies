import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Movie from "./components/ViewMovie/1-Movie/Movie";
import Person from "./components/ViewPerson/1-Person/Person";
import Home from "./pages/Home/Home";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id/:name" element={<Movie/>} />
          <Route path="/person/:id/:name" element={<Person/>} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
