import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";
import {Container} from "../../components/Container/Container";
import {Info} from "../../components/Info/Info";

export const MainLayout = ({children}) => {
    return(
        <div >
            <Header/>
            <main>
                <Container>
                    {children}
                </Container>
                <Info/>
            </main>
            <Footer/>
        </div>
    )
}