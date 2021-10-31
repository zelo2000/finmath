export const round = (value: number, precision: number = 0) => {
    const precisionIndex = Math.pow(10, precision);
    return Math.round((value + Number.EPSILON) * precisionIndex) / precisionIndex;
};
