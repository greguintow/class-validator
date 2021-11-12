import { ValidationOptions } from '../ValidationOptions';
import { ValidationTypes } from '../../validation/ValidationTypes';
import { buildMessage, ValidateBy } from './ValidateBy';
import { ValidationArguments } from '../../validation/ValidationArguments';

export function ForbidIf(
  condition: (object: any, value: any) => boolean,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return ValidateBy(
    {
      name: ValidationTypes.BLOCK_VALIDATION,
      constraints: [condition],
      validator: {
        validate: (value: any, args: ValidationArguments) => condition(args.object, value) && value != null,
        defaultMessage: buildMessage(eachPrefix => eachPrefix + '$property must not be inserted', validationOptions),
      },
    },
    validationOptions
  );
}
