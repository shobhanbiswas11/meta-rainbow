export const paths = {
  users() {
    return `/admin/user`;
  },
  user(id: string) {
    return `${this.users()}/${id}`;
  },
};
