import Image from "next/image";
import styles from "./page.module.css";
import Promo_action from "@/components/promo_action/Promo_action";
import Directors from '@/components/directors/Directors'
import SliderTrending from "@/containers/sliderTrending/sliderTrending";



export default function Home() {
    return (
        <div className={styles.page}>
            <Promo_action />
            <SliderTrending size="large" />
            <Directors />
        </div>
    );
}
