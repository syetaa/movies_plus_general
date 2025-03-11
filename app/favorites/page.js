import Slider_sm_favorite_loading from '@/api/favorites/Slider_sm_favorite_loading'
import styles from './page.module.css'
import Slider_lg_favorite_loading from '@/api/favorites/Slider_lg_favorite_loading'

export default function page() {
    return (
        <div>
            <Slider_lg_favorite_loading />
            <Slider_sm_favorite_loading />
        </div>
    )
}