"use client";
import React, { useEffect, useState } from "react";
import { getFavoriteMovies } from "@/api/movies/movies";
import Slider from "@/components/carousel/Carousel";
import styles from './sliderFavourite.module.css'

const SliderFavorites = ({ size }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getFavoriteMovies().then(setMovies);
    }, []);

    return (
        <div className={styles.textmain}>
            <div className={styles.text1}>Избранные</div>
            <Slider movies={movies} size={size} />
        </div>
    );
};

export default SliderFavorites;
