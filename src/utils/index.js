import { list } from '../data'
import { customRef } from '@vue/reactivity'

const changeStatus = (id, status) => {
  list.find(item => item.id === id).status = status;
}

const catchStatus = (value, cache) => {
  return customRef((track, trigger) => {
    return {
      get(){
        track();
        return value;
      },
      set(newVal){
        value = newVal;
        trigger();
        localStorage.setItem('cache', JSON.stringify(cache));
      }
    }
  })
  
}

export {
  changeStatus,
  catchStatus,
}