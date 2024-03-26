export function getUserType(role?: string) {
  switch (role) {
    case "admin":
      return "admin";
    case "user":
      return "user";

    default:
      return "user";
  }
}
