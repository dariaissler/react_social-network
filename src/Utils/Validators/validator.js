


export const required = (value) => {
    if(value) return undefined;

    return 'Type something!';
}

export const maxLengthCreator = (maxLength) => (value) => {
    if(value && value.length > maxLength) return  `max length is ${maxLength}`;

    return undefined;
}

