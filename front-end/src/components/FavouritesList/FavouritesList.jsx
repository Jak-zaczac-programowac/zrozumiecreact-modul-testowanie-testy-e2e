import styles from "./FavouritesList.module.css";
import { FavouriteProduct } from "../FavouriteProduct/FavouriteProduct";

export function FavouritesList({ products }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h2>Ulubione</h2>
                {products.map((p) => (
                    <FavouriteProduct key={p.id} product={p} />
                ))}
            </div>
        </div>
    );
}
