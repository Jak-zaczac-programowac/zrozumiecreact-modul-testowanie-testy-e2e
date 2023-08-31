import styles from "./Bestsellers.module.css";

import { Product } from "../Product/Product";

export function Bestsellers({ products }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h2>Sprawdź nasze bestsellery</h2>
                <div className={styles.productsWrapper}>
                    {products.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
