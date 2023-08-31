import { NavLink } from "react-router-dom";
import styles from "./MainMenu.module.css";
import { GENDERS } from "../../constants/categories";

export function MainMenu() {
    return (
        <ul className={styles.mainMenu}>
            {GENDERS.map((g) => (
                <li key={g.path}>
                    <NavLink to={g.path}>{g.categoryName}</NavLink>
                </li>
            ))}
        </ul>
    );
}
