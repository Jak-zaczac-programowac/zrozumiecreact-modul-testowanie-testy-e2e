import { Layout } from "../../components/Layout/Layout";
import { CartProductsList } from "../../components/CartProductsList/CartProductsList";
import { CartSummary } from "../../components/CartSummary/CartSummary";
import style from "./Cart.module.css";

export function Cart() {
    const favouriteProducts = [
        {
            id: 1,
            gender: "men",
            category: "odziez",
            subCategory: "koszulki",
            name: "T-Shirt",
            brand: "Top Brand",
            pricePLN: 49,
            priceUSD: 10,
            images: [
                "http://localhost:3000/product-photos/man-t-shirt-1.jpg",
                "http://localhost:3000/product-photos/man-t-shirt-2.jpg",
                "http://localhost:3000/product-photos/man-t-shirt-3.jpg",
            ],
        },
        {
            id: 2,
            gender: "men",
            category: "odziez",
            subCategory: "koszulki",
            name: "T-Shirt",
            brand: "Top Brand",
            pricePLN: 49,
            priceUSD: 10,
            images: [
                "http://localhost:3000/product-photos/man-t-shirt-1.jpg",
                "http://localhost:3000/product-photos/man-t-shirt-2.jpg",
                "http://localhost:3000/product-photos/man-t-shirt-3.jpg",
            ],
        },
    ];
    return (
        <Layout>
            <div className={style.wrapper}>
                <CartProductsList products={favouriteProducts} />
                <CartSummary products={favouriteProducts} />
            </div>
        </Layout>
    );
}
