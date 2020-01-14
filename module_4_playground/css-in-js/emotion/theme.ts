import EmotionStyled, { CreateStyled } from '@emotion/styled';

type Theme = {
    primary: string
    secondary: string
    buttonPadding: number
};

const theme: Theme = {
    primary: 'lightblue',
    secondary: 'black',
    buttonPadding: 30
};

export default theme;
export const styled = EmotionStyled as CreateStyled<Theme>;