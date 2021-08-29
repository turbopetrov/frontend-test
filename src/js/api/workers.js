export default function workersModule(instance) {
  return {
    getWorkersList() {
      return instance.get('workers');
    },
  };
}
