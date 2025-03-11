import Image from "next/image";
import styles from "./page.module.css";
import Promo_action from "@/components/promo_action/Promo_action";
import Slider_lg_favorite_loading from '@/api/favorites/Slider_lg_favorite_loading';
import Slider_sm_favorite_loading from '@/api/favorites/Slider_sm_favorite_loading';
import Subcriptions from '@/components/subscriptions/Subscriptsions';



export default function Home() {
    return (
        <div className={styles.page}>
            <Promo_action />
            <Slider_lg_favorite_loading />
            <Slider_sm_favorite_loading />
            <Subcriptions />
        </div>
    );
}
