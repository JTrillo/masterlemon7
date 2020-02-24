import { FieldValidationFunctionSync } from "@lemoncode/fonk";

interface NumberGreaterThanArgs {
    n: number;
}

export const numberGreaterThanValidator:FieldValidationFunctionSync<NumberGreaterThanArgs> = ({
    value,
    customArgs,
}) => {
    const succeeded = isFinite(value) && (value > customArgs.n);
    return {
        succeeded,
        message: succeeded ? '' : `Input must be a number greater than ${customArgs.n}`,
        type: 'NUMBER_GREATER_THAN'
    };
};