export default function (callback, errorHandler) {
  return callback().catch(errorHandler);
}
