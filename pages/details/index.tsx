import {useTheme } from 'styled-components'
import DetailsProduct from "./[id]";

export default function Details(){
//tentar colocar query params 
const theme = useTheme();
  
return(

    <DetailsProduct theme={{...theme}}> </DetailsProduct>
)
}