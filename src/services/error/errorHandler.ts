// TODO: hook into logging
export class ErrorHandler {
  constructor() {
    process.on("uncaughtException", this.onUncaughtException);
    process.on("unhandledRejection", this.onUnhandledRejection);
  }

  private onUncaughtException(error: Error) {
    console.error(error);
  }

  private onUnhandledRejection(reason: any, promise: any) {
    console.error(reason, promise);
  }
}
