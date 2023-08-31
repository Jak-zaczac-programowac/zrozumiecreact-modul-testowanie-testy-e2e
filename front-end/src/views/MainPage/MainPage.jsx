import { Layout } from "../../components/Layout/Layout";
import { Hero } from "../../components/Hero/Hero";
import HeroImage from "../../assets/summersale.png";
import { Bestsellers } from "../../components/Bestsellers/Bestsellers";

export function MainPage() {
    const products = [
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
        {
            id: 3,
            gender: "men",
            category: "odziez",
            subCategory: "koszulki",
            name: "T-shirt 2",
            brand: "Sun Tzu",
            pricePLN: 199,
            priceUSD: 49,
            images: [
                "http://localhost:3000/product-photos/man-t-shirt-4.jpg",
                "http://localhost:3000/product-photos/man-t-shirt-3.jpg",
                "http://localhost:3000/product-photos/man-t-shirt-2.jpg",
            ],
        },
        {
            id: 4,
            gender: "men",
            category: "odziez",
            subCategory: "koszulki",
            name: "T-shirt 3",
            brand: "Sun Tzu",
            pricePLN: 199,
            priceUSD: 49,
            images: [
                "http://localhost:3000/product-photos/man-t-shirt-3.jpg",
                "http://localhost:3000/product-photos/man-t-shirt-2.jpg",
                "http://localhost:3000/product-photos/man-t-shirt-1.jpg",
            ],
        },
    ];
    return (
        <Layout>
            <Hero heroImage={HeroImage} />
            <Bestsellers products={products} />
        </Layout>
    );
}
