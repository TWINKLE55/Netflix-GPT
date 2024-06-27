import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPopularMovies from "../hooks/useNowPopularMovies copy";
import useTrendingMovies from "../hooks/useTrendingMovies copy";
import useUpcomingMovies from "../hooks/useUpcomingMovies copy";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import SepVideo from "./SepVideo";
const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const showDetails = useSelector((store) => store.gpt.showDetails);
  useNowPlayingMovies();
  useNowPopularMovies();
  useTrendingMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
