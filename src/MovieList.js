import { Movie } from "./Movie";



export function MovieList({movies}){
    return(
      <section className="movie-list">
      {movies.map(({name,rating,summary,poster })=>(
        <Movie
          Name={name}
          Rating={rating}
          Summary={summary}
          Poster={poster}
          />
      ))}
      </section>
    );
  }