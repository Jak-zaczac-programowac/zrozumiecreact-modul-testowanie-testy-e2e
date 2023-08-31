import styles from "./CurrencySelector.module.css";
import { CURRENCIES } from "../../constants/currencies";

export function CurrencySelctor() {
    return (
        <select className={styles.currencySelector}>
            <option value={CURRENCIES.PLN}>{CURRENCIES.PLN}</option>
            <option value={CURRENCIES.USD}>{CURRENCIES.USD}</option>
        </select>
    );
}
