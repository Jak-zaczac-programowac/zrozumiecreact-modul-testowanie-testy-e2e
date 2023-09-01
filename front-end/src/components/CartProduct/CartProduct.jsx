import styles from "./CartProduct.module.css";
import REMOVE_ICON from "../../assets/remove.svg";

export function CartProduct({ product }) {
    return (
        <div className={styles.wrapper}>
            <img src={product.images[0]} />
            <div className={styles.productInfo}>
                <div className={styles.headerRow}>
                    <p>
                        {product.brand} {product.name}
                    </p>
                    <p className={styles.price}>{product.pricePLN}zł</p>
                </div>
                <p className={styles.priceRow}>
                    Cena:{" "}
                    <span className={styles.prace}>{product.pricePLN}zł</span>
                </p>
                <div className={styles.buttonRow}>
                    <button>
                        <img src={REMOVE_ICON} /> Usuń
                    </button>
                </div>
            </div>
        </div>
    );
}
