function CustomError(message) {
  return {
    response: {
      name: "CUSTOM ERROR",
      message: message || "Custom error",
      status: 400,
    },
  };
}

CustomError.prototype = Object.create(Error.prototype);

throw CustomError(`Custom message error`);
