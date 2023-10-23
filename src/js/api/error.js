export class UserError extends Error {
  constructor(message, relatedError) {
    super(message);
    this.name = this.constructor.name;
    this.relatedError = relatedError;
  }
}
