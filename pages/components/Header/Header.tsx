/* eslint-disable @next/next/no-img-element */
import { Navbar } from '../Navbar/Navbar';
import { Logo } from '../Logo/Logo';
import { Dimensions } from '../Logo/LogoConfig';
import { HeaderButton, HeaderTemplate,HeaderLinkButton } from './HeaderStyle';
import Link from 'next/link';



export function Header(){


  return(
    <header>
      <HeaderTemplate>
        <Logo
          dimension={Dimensions.MEDIUM}
          justify='left'
        />
        
        <HeaderButton>
          <Link href='/cart' >
          <HeaderLinkButton   >Botão para carrinho de compras</HeaderLinkButton>
          </Link>
          
        </HeaderButton>
      </HeaderTemplate>
       
      <Navbar/>
    </header>
  );
} 