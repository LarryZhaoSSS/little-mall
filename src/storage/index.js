const STORAGE_KEY = 'mall';
export default {
  setItem(key, value, moduleName) {
    if (moduleName) {
      const val = this.getItem(moduleName);
      val[key] = value;
      this.setItem(moduleName, val);
    } else {
      const val = this.getStorage();
      val[key] = value;
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
  },
  getItem(key, moduleName) {
    if (moduleName) {
      const val = this.getItem(moduleName);
      if (val) {
        return val[key];
      }
    }
    return this.getStorage()[key];
  },
  getStorage() {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '{}');
  },
  clear(key, moduleName) {
    let val = this.getStorage();
    if (moduleName) {
      if (val[moduleName]) {
        delete val[moduleName][key];
      }
    } else {
      if (val[key]) {
        delete val[key];
      }
    }
    window.localStorage.setItem(STORAGE_KEY, val);
  }
};
