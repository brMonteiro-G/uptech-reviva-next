import { linksList as pageLinks} from 'utils/assets/linksList';
import {NavbarLink, NavbarTemplate} from './NavbarStyle';

export function Navbar() {

  return (
    <nav> 
      <NavbarTemplate>
        {pageLinks.map((item, index) => {
          return (
            <li key={index}>
              <NavbarLink href={item.href} >{item.page}</NavbarLink>
            </li>
          );
        })}

      </NavbarTemplate>

    </nav>
  ); 
} 