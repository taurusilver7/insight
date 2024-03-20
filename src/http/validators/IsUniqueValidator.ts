// Is Unique Validator

import { AppDataSource } from "../../db/data-source";
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidatorOptions,
  registerDecorator,
} from "class-validator";
import { Not } from "typeorm";

@ValidatorConstraint({ async: true })
export class IsUniqueConstraint implements ValidatorConstraintInterface {
  public defaultMessage(): string {
    return `#property is already in use.`;
  }
  async validate(value: any, args: ValidationArguments): Promise<boolean> {
    const [entity, field] = args.constraints;

    const repo = AppDataSource.getRepository(entity);
    const isUpdate: boolean = args.object["id"] !== undefined;

    let count = 0;
    console.log(isUpdate);

    if (!isUpdate) {
      count = await repo.count({ where: { [field]: value } });
    } else {
      count = await repo.count({ where: { [field]: value, id: Not(args.object["id"]) } });
    }
    return count <= 0;
  }
}

export function IsUnique(entity: any, field: string, validationOptions?: ValidatorOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [entity, field],
      validator: IsUniqueConstraint,
    });
  };
}
