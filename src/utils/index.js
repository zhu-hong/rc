import { convertToPinyin } from 'tiny-pinyin';

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

export {
  getShortName,
  smoothToTop,
}