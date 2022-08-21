export default function checkCurrentUser() {
  const hasUserCookie = !!document.cookie.match(
    /^(.*;)?\s*user-info\s*=\s*[^;]+(.*)?$/
  );
  const hasAdminCookie = !!document.cookie.match(
    /^(.*;)?\s*admin-info\s*=\s*[^;]+(.*)?$/
  );
  if (hasUserCookie) {
    return "User"
  } else if (hasAdminCookie) {
    return "Admin"
  } else {
    return null;
  }
};