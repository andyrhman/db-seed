/**
 * Generates a random numeric string that resembles a phone number.
 * @param {number} length - The number of digits for the generated phone number.
 * @returns {number} A randomly generated phone number as a numeric value.
 */
export function generateRandomPhoneNumber(length: number = 10): number {
    const digits = '0123456789';
    let phoneNumber = '';

    // Ensure the first digit isn't '0'
    phoneNumber += digits[Math.floor(Math.random() * (digits.length - 1)) + 1];

    // Generate the remaining digits
    for (let i = 1; i < length; i++) {
        phoneNumber += digits[Math.floor(Math.random() * digits.length)];
    }

    return parseInt(phoneNumber, 10);
}
