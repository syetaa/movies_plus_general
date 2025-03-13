import SliderFavourites from '@/containers/sliderFavourite/sliderFavourite';
import SliderTrending from '@/containers/sliderTrending/sliderTrending';

export default function page() {
    return (
        <div>
            <SliderFavourites size="large" />
            <SliderTrending size="small" />
        </div>
    );
}
