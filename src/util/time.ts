const bday = new Date('10 May 2004');
const ageMilliseconds = Date.now() - bday.getTime();

export const MILLISECOND = 1;
export const SECOND = MILLISECOND * 1_000;
export const MINUTE = SECOND * 60;
export const HOUR = MINUTE * 60;
export const DAY = HOUR * 24;
export const YEAR = DAY * 365;

export const age = ageMilliseconds / YEAR;
