import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";
import {Container} from "../../components/Container/Container";

export const MainLayout = ({children}) => {
    return(
        <div >
            <Header/>
            <main>
                <Container>
                    {children}
                </Container>
            </main>
            <Footer/>
        </div>
    )
}