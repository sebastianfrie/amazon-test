/** 
 * Author: Sebastian Frie
 * Purpose: Utility functions
*/

export function normalizePrice(price: string): number {
    const normalizedPrice = price
        .trim()                                     // remove leading and trailing whitespace 
        .replace(/[^0-9,\.]/g, '')                  // discard all from string except number and , .
        .replace(/\.(?=\d{3})/g, '')                // remove thousands separator
        .replace(',', '.');                         // use . as decimal separator
    return parseFloat(normalizedPrice);
}