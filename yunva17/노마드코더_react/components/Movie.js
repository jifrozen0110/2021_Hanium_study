import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css"

// component가 state가 필요없을 경우에는 class component가 될 필요가 없음.
// 더이상 state를 쓰기위해서 class component를 가질 필요가 없음 > react hook 때문에.

function Movie({ year, title, summary, poster, genres }){  
    return (
        // js와 html에서의 class를 구분해주기위해서 여기서는 className으로 씀(html의 class와 동일)
        // map에는 id가 필요.
        <Link to = {{
            pathname: "/movie-detail",
            state: {
                year,
                title,
                summary,
                poster,
                genres
            }
        }}
        >
            <div className="movie">
                <img src={poster} alt={title} title={title}/>
                <div className="movie_data">
                    <h3 className="movie_title">{title}</h3>
                    <h3 className="movie_year">{year}</h3>
                    <ul className="genres"> 
                        {genres.map((genre, index) => {
                            <li key={index} className="genres_genre">
                                {genre}
                            </li>
                        })}
                    </ul>
                    <p className="movie_summary">{summary.slice(0,180)}...</p>
                </div>
                
            </div> 
        </Link>       
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;