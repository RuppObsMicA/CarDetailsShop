import * as chance from 'chance';

export function formatDate(rawDate: string) {
    const isoDateString = rawDate;
    const date = new Date(isoDateString);

    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const day = date.getUTCDate();
    const month = monthNames[date.getUTCMonth()];
    const year = date.getUTCFullYear();

    return `${day} ${month} ${year}`;
}

export const generateRandomProductNumber = () => {
    const getNumber = () => {
        return String(chance.integer({ min: 0, max: 999 }));
    };

    return `${getNumber()}-${getNumber()}-${getNumber()}`;
};
