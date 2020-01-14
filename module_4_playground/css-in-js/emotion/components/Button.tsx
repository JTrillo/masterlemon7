import { css } from "@emotion/core";
import { styled } from '../theme';

type ButtonProps = {
    intent?: 'primary' | 'danger' | 'secondary'
}

const Button = styled.button<ButtonProps>`
    padding: ${({ theme }) => theme.buttonPadding};
    ${(props) => {
        if(props.intent === 'primary'){
            return css`
                background: blue;
                color: white;
            `
        }else if(props.intent === 'danger'){
            return css`
                background: red;
                color: white;
            `
        }else{
            return css`
                background: #888;
                color: white;
            `
        }
    }};
`;

export default Button;