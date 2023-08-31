import { Link } from "react-router-dom";
import styles from "./Product.module.css";
export function Product({ product }) {
    return (
        <Link className={styles.container}>
            <img className={styles.image} src={product.images[0]} />
            <p className={styles.name}>{product.name}</p>
            <p className={styles.price}>{product.pricePLN}zł</p>
            <div className={styles.heart}></div>
        </Link>
    );
}
