import {ProductsContainer} from "./components/ProductsContainer/ProductsContainer";
import {MainLayout} from "./layout/MainLayout/MainLayout";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {Banner} from "./components/Banner/Banner";
import {Info} from "./components/Info/Info";
import {Blog} from "./components/Blog/Blog";
import {CartContext} from "./context/cartContext/CartContext";

function App() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("http://192.168.0.104:5555/product").then((res) => {
            setProducts(res.data);
        });
    }, [])
    const {cartList}=useContext(CartContext)
    console.log(cartList)
    return (
        <MainLayout>
            <Banner/>
            {products?.map(productsWithCategory => <ProductsContainer key={productsWithCategory?.category}
                                                                      title={productsWithCategory?.category}
                                                                      products={productsWithCategory.products}
                />
            )}
            <Blog/>
        </MainLayout>
    );
}

export default App;
