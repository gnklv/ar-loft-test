export const getFileExtension = filename =>
  filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);

export const detectIsIOS = () => /iP(hone|od|ad)/.test(navigator.userAgent) && !window.MSStream;

export const sortByNumbersAndLetters = ({ array, sortedValue }) => array.sort((a, b) =>
    /[A-Za-z]/.test(a[sortedValue]) - /[A-Za-z]/.test(b[sortedValue])
    || (a[sortedValue].toUpperCase() < b[sortedValue].toUpperCase()
        ? -1
        : a[sortedValue].toUpperCase() > b[sortedValue].toUpperCase()
            ? 1
            : 0
    )
);