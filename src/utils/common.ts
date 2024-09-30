export function ellipsify(str: string | null) {
    if (!str) return null;
    const startLength = 5;
    const endLength = 6;
    if (str.length <= startLength + endLength) {
        return str;
    }
    return str.substring(0, startLength) + "..." + str.substring(str.length - endLength);
}