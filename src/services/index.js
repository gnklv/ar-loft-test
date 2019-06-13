export const getFileExtension = filename =>
  filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);

export const detectIsIOS = () => /iP(hone|od|ad)/.test(navigator.userAgent) && !window.MSStream;