import Seo from "../../components/Seo";

export default function Detail({ params, movie }) {
  const [title, id] = params || [];

  console.log("detail : ", movie);

  return (
    <>
      <Seo title={title} />
      <h4 className="title">{title || "Loading..."}</h4>
      <div className="poster__container">
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
      </div>
      <p className="overview">{movie.overview}</p>
      <span className="vote__average">평점 : {movie.vote_average} / 10</span>
      <div className="genre__container">
        <span>장르 : </span>
        {movie.genres.map((genre) => (
          <span className="genre"> {genre.name}</span>
        ))}
      </div>
      <style jsx>{`
        .title {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .poster__container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .poster {
          width: 50%;
        }
        .genre__container {
          display: flex;
          align-items: center;
        }
        .genre {
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps({ params: { params } }) {
  const movie = await (
    await fetch(`http://localhost:3000/api/movies/${params[1]}`)
  ).json();

  return {
    props: {
      params,
      movie,
    },
  };
}
