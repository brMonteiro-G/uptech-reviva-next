import { Dimensions } from 'components/Logo/LogoConfig';
import { Logo } from 'components/Logo/Logo';
import { BannerTemplate, BannerText, BannerTextContainer } from './BannerStyle';

export function Banner() {
  return (
    <BannerTemplate>
      <BannerTextContainer>
        <BannerText>Fique por dentro de tudo que há de novidade no mundo da moda! </BannerText>
        <BannerText>Baixe já nosso manual de moda!</BannerText>
      </BannerTextContainer>

      <Logo dimension={Dimensions.MEDIUM} justify='left' />
    </BannerTemplate>
  );
}
 