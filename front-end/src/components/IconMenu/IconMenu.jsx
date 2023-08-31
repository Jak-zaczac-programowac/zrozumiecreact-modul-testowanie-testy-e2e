import HEART_ICON from "../../assets/heart.svg";
import BAG_ICON from "../../assets/bag.svg";
import { Link } from "react-router-dom";
import styles from "./IconMenu.module.css";

export function IconMenu() {
    const cartItems = 5;
    return (
        <ul className={styles.iconMenu}>
            <li>
                <Link to="/ulubione">
                    <img src={HEART_ICON} />
                </Link>
            </li>
            <li>
                <Link to="/koszyk">
                    <img src={BAG_ICON} />
                </Link>
                <div className={styles.numberOfProductsIndicator}>
                    {cartItems}
                </div>
            </li>
        </ul>
    );
}
