const save = (key, value) => {
    try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
    } catch (error) {
      console.error("Set state error: ", error.message);
    }
  };
  
const load = key => {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? '' : JSON.parse(serializedState);
    } catch (error) {
      console.error("Get state error: ", error.message);
    }
  };

const clear = key => {
    try {
        const serializedState = localStorage.clear(key);
    } catch (error) {
        console.error("Set state error: ", error.message);
      }

}
  
  export default {
    save,
    load,
    clear,
  };