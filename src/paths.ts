export const paths = {
  admin() {
    return `/admin`;
  },
  users() {
    return `${this.admin()}/user`;
  },
  user(id: string) {
    return `${this.users()}/${id}`;
  },
};
