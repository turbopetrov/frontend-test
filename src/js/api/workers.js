export default function (instance) {
  return {
    getWorkersList() {
      return instance.get('workers')
    },
  };
}