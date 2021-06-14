export default function (instance) {
  return {
    login(payload) {
      return instance.post('/auth/login', payload) 
    },
  };
}
