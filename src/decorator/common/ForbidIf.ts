import { ValidationTypes } from '../../validation/ValidationTypes';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from './ValidateBy';

export function ForbidIf(condition: (object: any, value: any) => boolean, validationOptions?: ValidationOptions) {
  return ValidateBy(
    {
      name: ValidationTypes.BLOCK_VALIDATION,
      constraints: [condition],
    },
    validationOptions
  );
}
