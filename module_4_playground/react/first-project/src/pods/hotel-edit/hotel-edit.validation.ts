import { ValidationSchema, Validators } from "@lemoncode/fonk";
import { createFinalFormValidation } from "@lemoncode/fonk-final-form";
import { numberGreaterThanValidator } from "common/validators";

const validationSchema: ValidationSchema = {
    field: {
        name: [
            Validators.required,
            {
                validator: Validators.minLength,
                customArgs: { length: 3 },
                message: 'Hotel name minimum length is {{length}}'
            },
        ],
        //picture,
        rating: [
            Validators.required,
            {
                validator: numberGreaterThanValidator,
                customArgs: { n: 2 }
            }
        ],
        city: [Validators.required],
        description: [
            Validators.required,
            {
                validator: Validators.minLength,
                customArgs: { length: 24 },
                message: 'Hotel description minimum length is {{length}}'
            },
            {
                validator: Validators.maxLength,
                customArgs: { length: 256 },
                message: 'Hotel description maximum length is {{length}}'
            }
        ]
    }
};

export const formValidation = createFinalFormValidation(validationSchema);