export const rangeStringLengthValidator = (minLength: number, maxLength: number, checkEmpty: boolean) => (value: string) => {
    if (checkEmpty && String(value) === '') {
        return `Значение поля не должно быть пустым`;
    }

    if (!checkEmpty && value !== '' && value.trim().length < minLength) {
        return `Значение поля не может быть меньше ${minLength}`;
    }
    if (!checkEmpty && value !== '' && value.trim().length > maxLength) {
        return `Значение поля не может быть больше ${maxLength}`;
    }
}

export const rangeNumberValidator = (min: number, max: number, checkEmpty: boolean) => (value: number) => {
    if (checkEmpty && String(value) === '') {
        return `Значение поля не должно быть пустым`;
    }

    if (!checkEmpty && String(value) !== '' && value < min) {
        return `Значение поля не может быть меньше ${min}`;
    }
    if (!checkEmpty && String(value) !== '' && value > max) {
        return `Значение поля не может быть больше ${max}`;
    }
}

export const emailValidator = (value: string) => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'Неправильный email';
    }
};

export const telephoneValidator = (value: string) => {
    if (!/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(value)) {
        return 'Неправильный номер телефона';
    }
};
export const ratingValidator = (value: string) => {
    if (Number(value) < 1 || Number(value) > 5) {
        return 'Введите корректную оценку от 1 до 5';
    }
};
export const urlValidator = (checkEmpty: boolean) => (value: string) => {
    if (checkEmpty) {
        if (value && !/^(ftp|http|https):\/\/[^ "]+$/.test(value)) {
            return 'Неправильный url';
        }
    } else {
        if (!/^(ftp|http|https):\/\/[^ "]+$/.test(value)) {
            return 'Неправильный url';
        }
    }
};
