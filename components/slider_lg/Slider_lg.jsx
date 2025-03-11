'use client'
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import styles from './Slider_lg.module.css';
import "react-alice-carousel/lib/alice-carousel.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Slider_lg = ({ movies }) => {
    const renderNextButton = ({ isDisabled }) => {
        return <FaArrowRight size={20} color='#11100F' className={styles.next_btn} />;
    };

    const renderPrevButton = ({ isDisabled }) => {
        return <FaArrowLeft size={20} color='#11100F' className={styles.prev_btn} />;
    };

    const responsive = {
        400: { items: 2 },
        840: { items: 3 },
        1220: { items: 4 },
        1600: { items: 5 },
        2200: { items: 5 }
    };

    // Если movies не переданы или они пустые, покажем сообщение
    if (!movies || movies.length === 0) {
        return <div className={styles.cont_main}>Фильмы не найдены. {JSON.stringify(movies)}</div>; // Печатаем данные для отладки
    }

    // Слайд с фильмом
    const movieItems = movies.map((movie) => (
        <div key={movie.imdbID} className={styles.sliderItem}>
            <img src={movie.Poster || '/default-image.jpg'} alt={movie.Title} />
            <h4>{movie.Title}</h4>
            <h4>{movie.Year}</h4>
        </div>
    ));

    return (
        <div className={styles.cont_main}>

            <div className={styles.movieSlider}>
                <AliceCarousel
                    mouseTracking
                    items={movieItems}
                    responsive={responsive}
                    infinite
                    autoPlayInterval={3000}
                    animationDuration={1000}
                    disableDotsControls="true"
                    controlsStrategy="alternate"
                    renderPrevButton={renderPrevButton}
                    renderNextButton={renderNextButton}
                />
            </div>
        </div>
    );
};

export default Slider_lg;
