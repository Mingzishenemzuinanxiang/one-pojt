import dayjs from 'dayjs';

export function toTime(date, format) {
    format = format || "YYYY-MM-DD HH:mm:ss"
    return dayjs(date).format(format);
};