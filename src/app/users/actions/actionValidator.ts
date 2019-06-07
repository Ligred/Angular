import { AbstractControl, ValidatorFn } from "@angular/forms";

export function minAgeValidator(min: number): ValidatorFn {
  return (conttol: AbstractControl): { [key: string]: any } | null => {
    const age = conttol.value < min;
    return age && conttol.value !== ""
      ? { minAge: { value: conttol.value } }
      : null;
  };
}

export function maxAgeValidator(max: number): ValidatorFn {
  return (conttol: AbstractControl): { [key: string]: any } | null => {
    const age = conttol.value > max;
    return age && conttol.value !== ""
      ? { maxAge: { value: conttol.value } }
      : null;
  };
}

export function integerValidator(): ValidatorFn {
  return (conttol: AbstractControl): { [key: string]: any } | null => {
    return !Number.isInteger(conttol.value) && conttol.value !== ""
      ? { isInteger: { value: conttol.value } }
      : null;
  };
}
