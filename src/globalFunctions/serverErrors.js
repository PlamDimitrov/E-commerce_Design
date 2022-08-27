export default function handleError(error) {
  switch (error) {
    case 401:
      return "Wrong username or password!";
      break;
    case 500:
      return "Server Error!";
      break;

    default:
      break;
  }
};