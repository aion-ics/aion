export enum TimeLocale {
    NORMAL, AMERICAN
}

/**
 * Normal date format: dd/mm/yyyy
 * American date format: mm-dd-yyyy
 * @see TimeValidationNormal
 * @see TimeValidationAmerican
 */
export interface TimeValidation {
    validateDate(date: string): Date | null;
}

export class TimeValidationNormal implements TimeValidation {
    validateDate(date: string): Date | null {
        const dateRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
        if (!dateRegex.test(date)) {
            return null;
        }
        const [day, month, year] = date.split('/').map(Number);
        const parsedDate = new Date(year, month - 1, day);
        return parsedDate.getFullYear() === year && parsedDate.getMonth() === month - 1 && parsedDate.getDate() === day ? parsedDate : null;
    }
}

export class TimeValidationAmerican implements TimeValidation {
    validateDate(date: string): Date | null {
        const dateRegex = /^\d{1,2}-\d{1,2}-\d{4}$/;
        if (!dateRegex.test(date)) {
            return null;
        }
        const [month, day, year] = date.split('-').map(Number);
        const parsedDate = new Date(year, month - 1, day);
        return parsedDate.getFullYear() === year && parsedDate.getMonth() === month - 1 && parsedDate.getDate() === day ? parsedDate : null;
    }
}



