import styles from "./CartProductsList.module.css";
import { CartProduct } from "../CartProduct/CartProduct";

export function CartProductsList({ products }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h2>Koszyk</h2>
                {products.map((p) => (
                    <CartProduct key={p.id} product={p} />
                ))}
            </div>
        </div>
    );
}
