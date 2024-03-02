import {useParams} from "react-router-dom";

export const ProductPage = ()  => {
    const params = useParams()
    console.log(params)
    return(
        <div>123</div>
    )
}