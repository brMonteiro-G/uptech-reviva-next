import { useContext } from "react";
import { StorageContext } from "state/contexts/StorageContext";

export const useFindProduct = (id: string | string[]) => {
    const { products, setProducts } = useContext(StorageContext);
    const clickedElement = products?.find((element) => element.id === id)
    return clickedElement

}