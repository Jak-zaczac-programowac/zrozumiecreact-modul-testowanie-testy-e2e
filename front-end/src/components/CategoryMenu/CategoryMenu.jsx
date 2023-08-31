import { CATEGORIES } from "../../constants/categories";
import { NavLink } from "react-router-dom";
import styles from "./CategoryMenu.module.css";
export function CategoryMenu() {
    return (
        <div className={styles.categoryMenu}>
            <ul>
                {CATEGORIES.map((c) => (
                    <li key={c.path}>
                        <NavLink to={c.path}>{c.categoryName}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}
