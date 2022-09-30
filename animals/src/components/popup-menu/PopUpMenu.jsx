import { PopUpMenuContainer, LinkStyles } from './styles.js';
import { IoLogOutSharp, IoPawOutline } from 'react-icons/io5';

export const PopupMenu = () => {
  return (
    <PopUpMenuContainer>
      <LinkStyles>
        Logout <IoLogOutSharp />
      </LinkStyles>
      <LinkStyles>
        Mis animales <IoPawOutline />
      </LinkStyles>
    </PopUpMenuContainer>
  );
};
