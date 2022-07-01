import { buttonSizeList as buttons } from 'utils/assets/buttonSizeList';
import { ButtonSize } from './SelectSizeButtonStyle';

export function SelectSizeButton() {
  return (
    <>
      {buttons.map((button) => {
        return (
          <ButtonSize key={button.size_letter}>
            <input type='radio' name='size' value='0' id='radio-1' />
            <label htmlFor='radio-1'>Tamanho {button.size_letter}</label>
          </ButtonSize>
        );
      })}

      {/* <div className={style['details__button--size--p']}>
  <input type="radio" name="size" value="0" id="radio-1" />
  <label htmlFor="radio-1">Tamanho P</label>
</div>

<div className={style['details__button--size--m']}>
  <input type="radio" name="size" value="1" id="radio-2" />
  <label htmlFor="radio-2">Tamanho M</label>
</div>

<div className={style['details__button--size--g']}>
  <input type="radio" name="size" value="2" id="radio-3" />
  <label htmlFor="radio-3">Tamanho G</label>
</div> */}
    </>
  );
}
