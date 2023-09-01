import { Layout } from "../../components/Layout/Layout";
import { FavouritesList } from "../../components/FavouritesList/FavouritesList";
export function Favourites() {
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
            <FavouritesList products={favouriteProducts}></FavouritesList>
        </Layout>
    );
}
