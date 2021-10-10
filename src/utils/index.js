import { list } from '../data'
import { customRef } from '@vue/reactivity'
import { convertToPinyin } from 'tiny-pinyin';

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

const getShortName = name => {
  let shortName = '';
  convertToPinyin(name, '-', true).split('-').forEach(item => shortName += item[0])
  return shortName;
}

export {
  changeStatus,
  catchStatus,
  getShortName,
}