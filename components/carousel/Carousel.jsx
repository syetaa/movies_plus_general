'use client';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import styles from './Carousel.module.css';
import "react-alice-carousel/lib/alice-carousel.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Slider = ({ movies, size = "large" }) => {
    const responsive = {
        400: { items: size === "small" ? 3 : 2 },
        840: { items: size === "small" ? 4 : 3 },
        1220: { items: size === "small" ? 5 : 4 },
        1600: { items: size === "small" ? 6 : 5 },
        2200: { items: size === "small" ? 7 : 5 }
    };

    if (!movies || movies.length === 0) {
        return <div className={styles.empty}>Фильмы не найдены.</div>;
    }

    const movieItems = movies.map((movie) => (
        <div key={movie.imdbID} className={styles.sliderItem}>
            <img src={movie.Poster || '/default-image.jpg'} alt={movie.Title} />
            <h4>{movie.Title}</h4>
            <h4>{movie.Year}</h4>
        </div>
    ));

    return (
        <div className={`${styles.cont_main} ${styles[size]}`}>
            <AliceCarousel
                mouseTracking
                items={movieItems}
                responsive={responsive}
                infinite
                autoPlayInterval={3000}
                animationDuration={1000}
                disableDotsControls
                renderPrevButton={() => <FaArrowLeft size={20} color='#11100F' className={styles.prev_btn} />}
                renderNextButton={() => <FaArrowRight size={20} color='#11100F' className={styles.next_btn} />}
            />
        </div>
    );
};

export default Slider;
