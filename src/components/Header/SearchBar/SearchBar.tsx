import {
  SearchBarTemplate,
  SearchBarButton,
  SearchBarInput,
} from './SearchBarStyle';

export function SearchBar() {
  return (
    <SearchBarTemplate>
      <SearchBarInput
        id='name'
        name='search'
        placeholder='Faça sua busca aqui se já souber o que está procurando...'
        type='text'
      />

      <SearchBarButton/>
    </SearchBarTemplate>
  );
}
