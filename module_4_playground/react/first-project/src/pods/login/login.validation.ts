import { ValidationSchema, Validators } from "@lemoncode/fonk";
import { createFinalFormValidation } from "@lemoncode/fonk-final-form";

const validationSchema: ValidationSchema = {
    field: {
        login: [
            Validators.required,
            {
                validator: Validators.minLength,
                customArgs: { length: 3 },
                message: 'The min length is {{length}}'
            },
            {
                validator: Validators.pattern,
                customArgs: { pattern: new RegExp('[0-9]{8,8}[A-Za-z]$')},
                message: 'Not a valid NIF'
            },

        ],
        password: [Validators.required]
    }
};

export const formValidation = createFinalFormValidation(validationSchema);