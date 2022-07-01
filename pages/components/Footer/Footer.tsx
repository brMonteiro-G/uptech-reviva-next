import { Dimensions } from '../Logo/LogoConfig';
import { Logo } from '../Logo/Logo';
import { Teste } from './FooterStyle';
import {
  FooterIcons,
  FooterInfos,
  FooterNewsletter,
  FooterTemplate,
} from './FooterStyle';
import { NavbarLink } from '../Navbar/NavbarStyle';
import { contactsInfoList as contactsInfo } from 'utils/assets/contactsInfoList';
import { iconsList as icons } from 'utils/assets/iconsList';
import { linksList as pageLinks } from 'utils/assets/linksList';

export function Footer() {
  return (
    <FooterTemplate>
      <Logo dimension={Dimensions.BIG} justify='right' />

      <FooterInfos>
        <ul>
          {pageLinks.map((item, index) => {
            return (
              <li key={index}>
                <NavbarLink href={item.href}>{item.page}</NavbarLink>
              </li>
            ); 
          })}
        </ul>

        <ul>
          <li>Siga-nos nas redes sociais</li>
          <FooterIcons>
            {icons.map((icon, index) => {
              return (
                <li key={icon.description}>
                  <img src={icon.url} alt={icon.description} />
                </li>
              );
            })}
          </FooterIcons>
        </ul>

        <ul>
          <li>Entre em contato</li>

          <li>Contato</li>
          <li>reviva@rchlo.com.br</li>
          <>
            {contactsInfo.map((contact) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <FooterIcons key={contact.title} as='div'>
                  <Teste itemRef={contact.urlImage}>{contact.title}</Teste>
                </FooterIcons>
              );
            })}
          </>
        </ul>

        <FooterNewsletter>
          <p>Assine nossa newsletter</p>
          <div>
            <input type='email' />

            <button>ASSINAR JÁ</button>
          </div>
        </FooterNewsletter>
      </FooterInfos>
    </FooterTemplate>
  );
}
