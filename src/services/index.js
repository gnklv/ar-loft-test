export const getFileExtension = filename =>
  filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
