import Image from "next/image";
import styles from "./page.module.css";
import Promo_action from "@/components/promo_action/Promo_action";


export default function Home() {
    return (
        <div className={styles.page}>
            <Promo_action />
        </div>
    );
}
