import SCStyled, {
    css as SCcss,
    DefaultTheme,
    ThemedStyledInterface,
    BaseThemedCssFunction
} from "styled-components";

interface Theme extends DefaultTheme {
    primary: string,
    secondary: string,
    buttonPadding: number
}
const theme: Theme = {
    primary: 'lightgreen',
    secondary: 'yellow',
    buttonPadding: 10
}

export default theme

export const styled = SCStyled as ThemedStyledInterface<Theme>
export const css = SCcss as BaseThemedCssFunction<Theme>