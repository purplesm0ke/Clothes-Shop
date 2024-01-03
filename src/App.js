import {ProductsContainer} from "./components/ProductsContainer/ProductsContainer";
import {MainLayout} from "./layout/MainLayout/MainLayout";

function App() {
    return (
        <MainLayout>
            <ProductsContainer title={"Обувь"}/>
        </MainLayout>
    );
}

export default App;
