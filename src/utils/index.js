import { list } from '../data'

const changeStatus = (id, status) => {
  list.find(item => item.id === id).status = status;
}

export {
  changeStatus
}