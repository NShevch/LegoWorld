export default class LocalStorage {
  set(key: string, value: string[]) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  get(key: string) {
    return JSON.parse(localStorage.getItem(key)!);
  }
  remove(key: string) {
    localStorage.removeItem(key);
  }
}