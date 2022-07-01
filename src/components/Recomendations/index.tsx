import { RecomendationsProducts } from "details/DetailsStyle";
import { useContext } from "react";
import { StorageContext } from "state/contexts/StorageContext";

export default function Recomendations() {
    const { products, setProducts } = useContext(StorageContext);
    return (
        <>
         {
            products!.slice(0, 4).map((product) => {
                return (
                    <RecomendationsProducts key={product.id}>
                        <img src={product!.images[0].url} alt={product.description} />
                    </RecomendationsProducts>
                );
            })
        }
        </>
       
    )
}