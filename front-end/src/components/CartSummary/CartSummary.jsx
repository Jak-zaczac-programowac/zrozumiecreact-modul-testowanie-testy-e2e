import styles from "./CartSummary.module.css";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import TRUCK_ICON from "../../assets/car.svg";

export function CartSummary({ products }) {
    const deliveryCost = 49;
    const minSumForFreeDelivery = 500;

    let sum = 0;

    products.forEach((product) => {
        sum += product.pricePLN;
    });

    const totalCost = sum > minSumForFreeDelivery ? sum : sum + deliveryCost;

    return (
        <div className={styles.cartSummary}>
            <h2 className={styles.headerRow}>Podsumowanie</h2>
            <div className={styles.standardRow}>
                <p>Wartość produktów:</p>
                <p>{sum}zł</p>
            </div>
            <div className={styles.standardRow}>
                <p>Koszt dostawy:</p>
                <p>{sum > minSumForFreeDelivery ? 0 : deliveryCost}zł</p>
            </div>
            <div className={`${styles.summaryRow} ${styles.standardRow}`}>
                <p>Suma:</p>
                <p>{totalCost}zł</p>
            </div>
            <FullWidthButton isBlack={true}>Do kasy</FullWidthButton>
            <div className={styles.deliveryInfo}>
                <img src={TRUCK_ICON} />
                <p>Darmowa dostawa od {deliveryCost}zł</p>
            </div>
        </div>
    );
}
