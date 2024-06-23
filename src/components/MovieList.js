import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    <div className="p-6">
      <h1 className="text-white text-lg md:text-3xl py-4 md:pl-4 no-scrollbar scrollbar-hide">
        {title}
      </h1>
      <div className="flex overflow-x-scroll h-38 no-scrollbar  scrollbar-hide relative ">
        <div className="flex ">
          {movies?.map((movie) => (
            <MovieCard key={movie?.id} img={movie?.backdrop_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
