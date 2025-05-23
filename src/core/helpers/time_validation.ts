export enum TimeLocale {
    NORMAL, AMERICAN
}

/**
 * Normal date format: dd.mm.yyyy (e.g., 5.5.2025)
 * American date format: dd.mm.yyyy (e.g., 5.5.2025)
 * Time format: HH:mm or HH:mm AM/PM (e.g., 14:30 or 2:30 PM)
 * @see TimeValidationNormal
 * @see TimeValidationAmerican
 */
export interface TimeValidation {
    validateDate(date: string): Date | null;
    validateTime(time: string): { hours: number, minutes: number } | null;
}

export class TimeValidationNormal implements TimeValidation {
    validateDate(date: string): Date | null {
        const dateRegex = /^\d{1,2}\.\d{1,2}\.\d{2,4}$/;
        if (!dateRegex.test(date)) {
            return null;
        }
        const [day, month, year = new Date().getFullYear()] = date.split('.').map(Number);
        const parsedDate = new Date(year, month - 1, day);
        return parsedDate.getFullYear() === year && parsedDate.getMonth() === month - 1 && parsedDate.getDate() === day ? parsedDate : null;
    }

    validateTime(time: string): { hours: number, minutes: number } | null {
        const timeRegex = /^(\d{1,2}):(\d{2})\s*(AM|PM)?$/i;
        const match = time.match(timeRegex);
        if (!match) {
            return null;
        }

        let hours = parseInt(match[1], 10);
        const minutes = parseInt(match[2], 10);
        const period = match[3]?.toUpperCase();

        // Validate minutes
        if (minutes < 0 || minutes > 59) {
            return null;
        }

        // Handle AM/PM or 24-hour format
        if (period) {
            if (hours < 1 || hours > 12) {
                return null;
            }
            if (period === "AM" && hours === 12) {
                hours = 0; // Midnight
            } else if (period === "PM" && hours < 12) {
                hours += 12; // Convert to 24-hour
            }
        } else if (hours < 0 || hours > 23) {
            return null;
        }

        return { hours, minutes };
    }
}

export class TimeValidationAmerican implements TimeValidation {
    validateDate(date: string): Date | null {
        const dateRegex = /^\d{1,2}\.\d{1,2}\.\d{2,4}$/;
        if (!dateRegex.test(date)) {
            return null;
        }
        const [day, month, year = new Date().getFullYear()] = date.split('.').map(Number);
        const parsedDate = new Date(year, month - 1, day);
        return parsedDate.getFullYear() === year && parsedDate.getMonth() === month - 1 && parsedDate.getDate() === day ? parsedDate : null;
    }

    validateTime(time: string): { hours: number, minutes: number } | null {
        const timeRegex = /^(\d{1,2}):(\d{2})\s*(AM|PM)?$/i;
        const match = time.match(timeRegex);
        if (!match) {
            return null;
        }

        let hours = parseInt(match[1], 10);
        const minutes = parseInt(match[2], 10);
        const period = match[3]?.toUpperCase();

        // Validate minutes
        if (minutes < 0 || minutes > 59) {
            return null;
        }

        // For AMERICAN locale, prefer AM/PM but allow 24-hour format
        if (period) {
            if (hours < 1 || hours > 12) {
                return null;
            }
            if (period === "AM" && hours === 12) {
                hours = 0; // Midnight
            } else if (period === "PM" && hours < 12) {
                hours += 12; // Convert to 24-hour
            }
        } else if (hours < 0 || hours > 23) {
            return null;
        }

        return { hours, minutes };
    }
}