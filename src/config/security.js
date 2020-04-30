const dsn = '';

export const registerSentrySDK = () => {
  if (process.env.NODE_ENV !== "development") {
    const Sentry = require('@sentry/browser');
    Sentry.init({dsn});
  }
};
