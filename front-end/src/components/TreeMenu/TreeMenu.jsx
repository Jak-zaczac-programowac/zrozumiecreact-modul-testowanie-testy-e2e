import { CATEGORIES } from "../../constants/categories";
import { NavLink } from "react-router-dom";
import styles from "./TreeMenu.module.css";
import { useEffect } from "react";

import ARROW_UP_ICON from "../../assets/arrow-up.svg";
import ARROW_DOWN_ICON from "../../assets/arrow-down.svg";

export function TreeMenu() {
    let url = "http://test.com";

    useEffect(() => {
        console.log(url);
    }, []);

    const activePath = "odziez";
    return (
        <div className={styles.treeMenu}>
            <h2>Kobieta</h2>
            <ul>
                {CATEGORIES.map((category) => {
                    return (
                        <li key={category.path}>
                            <NavLink to={category.path}>
                                {category.categoryName}
                                <img
                                    src={
                                        activePath === category.path
                                            ? ARROW_DOWN_ICON
                                            : ARROW_UP_ICON
                                    }
                                />
                            </NavLink>
                            {activePath === category.path && (
                                <ul>
                                    {category.subCategories.map(
                                        (subcategory) => {
                                            return (
                                                <li key={subcategory.path}>
                                                    <NavLink
                                                        to={subcategory.path}
                                                    >
                                                        {
                                                            subcategory.categoryName
                                                        }
                                                    </NavLink>
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
