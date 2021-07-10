import { Btn } from "./ButtonLoad.styled";

export default function Button({scrollHeight}) {
  // window.scrollTo({
  //   top: document.documentElement.scrollHeight,
  //   behavior: 'smooth',
  // });
  return (
    <Btn type='button'
      onClick={scrollHeight}>
      Scroll
    </Btn>
  )
}

