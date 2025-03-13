"use client";
import React, { useEffect, useState } from "react";
import { getTrendingMovies } from "@/api/movies/movies";
import Slider from "@/components/carousel/Carousel";
import styles from './sliderTrending.module.css'

const SliderTrending = ({ size }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrendingMovies().then(setMovies);
    }, []);

    return (
        <div className={styles.textmain}>
            <div className={styles.text1}>Популярные новинки</div>
            <Slider movies={movies} size={size} />
        </div>
    );
};

export default SliderTrending;
