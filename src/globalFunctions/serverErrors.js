export default function handleError(error) {
  switch (error.errorCode) {
    case 400:
      return error.errorMessage;
      break;
    case 500:
      return "Server Error!";
      break;

    default:
      break;
  }
};