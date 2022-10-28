export const
    required = value => (value ? undefined : 'Required'),
    minValue = min => value => (value && value.length >= min) ? undefined : `Field is empty`,
    maxValue = max => value => (value && value.length < max) ? undefined : `Max length is ${max} symbols`,
    composeValidators = (...validators) => value => validators.reduce((error, validator) => error || validator(value), undefined);
