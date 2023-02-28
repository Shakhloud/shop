export const rangeLengthValidator = (minLength: number, maxLength: number) => (value: string) => {
    if (value.trim().length < minLength) {
        return `Значение поля не может быть меньше ${minLength}.`;
    }
    if (value.trim().length > maxLength) {
        return `Значение поля не может быть больше ${maxLength}.`;
    }
}

export const emailValidator = (value: string) => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'Неправильный email.';
    }
};

export const telephoneValidator = (value: string) => {
    if (!/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(value)) {
        return 'Неправильный номер телефона.';
    }
};