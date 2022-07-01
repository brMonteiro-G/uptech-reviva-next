import { LogoLink, LogoTemplate, Subtitle, Title } from './LogoStyle';
import { Dimensions } from './LogoConfig';

interface PropsLogo {
  dimension: Dimensions;
  justify: string;
}

export function Logo(props: PropsLogo) {
  const route = {
    label: 'home',
    to: '/home',
  }; 

  return (
    <LogoLink  href={route.to} >
      <LogoTemplate >
        { props.dimension === Dimensions.BIG ? (
          <Title as="h1">Reviva Fashion</Title>
        ) : (
          <Title>Reviva Fashion</Title>
        )}
        <Subtitle>by RCHLO</Subtitle>
      </LogoTemplate>
    </LogoLink>
  );
}
