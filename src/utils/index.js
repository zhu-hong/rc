import { keyword, list } from '../data';
import { customRef } from '@vue/reactivity';
import { convertToPinyin } from 'tiny-pinyin';

const changeStatus = (id, status) => {
  list.find(item => item.id === id).status = status;
}

const catchStatus = (value, cache) => {
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newVal) {
        value = newVal;
        trigger();
        localStorage.setItem('cache', JSON.stringify(cache));
      }
    }
  })
}

const getShortName = name => {
  let shortName = '';
  convertToPinyin(name, '-', true).split('-').forEach(item => shortName += item[0]);
  return shortName;
}

const smoothToTop = () => {
  let scrollTop = document.documentElement.scrollTop;
  const up = () => {
    let distance = 0 - scrollTop;
    scrollTop = scrollTop + distance / 5;
    if (Math.abs(distance) < 1) {
      scrollTo(0, 0);
    } else {
      scrollTo(0, scrollTop);
      requestAnimationFrame(up);
    }
  };
  up();
};

const setValue = (key, value) => { key.value = value }

const reset = () => {
  smoothToTop();
  keyword.value && setValue(keyword, '')
  if (localStorage.getItem('cache')) {
    list.forEach(item => {
      item.status = 'pending';
    })
    localStorage.clear();
  }
}

function throttle(fn, delay) {
  let [timer, bigin] = [null, new Date().getTime()];

  return function () {
    let [__this, args, current] = [this, arguments, new Date().getTime()];

    if (timer) {
      clearTimeout(timer);
    }

    if (current - bigin >= delay) {
      requestAnimationFrame(fn.apply(__this, args));
      bigin = current;
    } else {
      timer = setTimeout(() => {
        requestAnimationFrame(fn.apply(__this, args));
      }, current - delay);
    }
  }
}

export {
  changeStatus,
  catchStatus,
  getShortName,
  reset,
  throttle,
}