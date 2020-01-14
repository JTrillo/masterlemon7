import { css, styled } from '../theme';

type ButtonProps = {
    className?: string
    children: React.ReactNode
    /** What do you want this button for? */
    intent?: 'primary' | 'secondary'
}

const Button = ({ className, children, intent }: ButtonProps)  => {
return <StyledButton className={className} intent={intent}>{children}</StyledButton>
}

const StyledButton = styled.button<Omit<ButtonProps, 'children'>>`
    padding: ${({ theme }) => theme.buttonPadding}px;
    ${props => {
        if(props.intent === 'primary'){
            return css`
                background: ${({ theme }) => theme.primary};
                color: black;
            `
        }
        else if(props.intent === 'secondary'){
            return css`
                background: blueviolet;
                color: white;
            `
        }
        else{
            return css`
                background: #444;
                color: white;
            `
        }
    }}
`

export default Button