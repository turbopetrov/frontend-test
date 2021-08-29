export default function authModule(instance) {
  return {
    login(payload) {
      return instance.post('auth/login', payload);
    },
  };
}
