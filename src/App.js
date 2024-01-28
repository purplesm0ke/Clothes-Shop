import {ProductsContainer} from "./components/ProductsContainer/ProductsContainer";
import {MainLayout} from "./layout/MainLayout/MainLayout";
import {useEffect, useState} from "react";
import axios from "axios";
import {Banner} from "./components/Banner/Banner";

function App() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("http://192.168.0.104:5555/product").then((res) => {
            setProducts(res.data);
        });
    }, [])
    return (
        <MainLayout>
            <Banner/>
            {products?.map(productsWithCategory => <ProductsContainer key={productsWithCategory?.category}
                                                                      title={productsWithCategory?.category}
                                                                      products={productsWithCategory.products}
                />
            )}
        </MainLayout>
    );
}

export default App;
