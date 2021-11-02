import { reactive, computed, ref } from "@vue/reactivity";
import { catchStatus, getShortName } from "../utils";

const STATUSES = {
  PENDING: {
    STATUS: 'pending',
  },
  ARRIVE: {
    STATUS: 'arrive',
    TEXT: '到位',
    COLOR: 'bg-blue-600',
  },
  LEAVE: {
    STATUS: 'leave',
    TEXT: '请假',
    COLOR: 'bg-yellow-600',
  },
  ABSENT: {
    STATUS: 'absent',
    TEXT: '缺勤',
    COLOR: 'bg-red-600',
  },
}

// 总名单
const list =
  JSON.parse(localStorage.getItem('cache')) ?
    reactive(JSON.parse(localStorage.getItem('cache'))) :
    reactive([
      { name: '赖志文', id: 0, status: STATUSES.PENDING.STATUS },
      { name: '钟泽锋', id: 1, status: STATUSES.PENDING.STATUS },
      { name: '黄紫星', id: 2, status: STATUSES.PENDING.STATUS },
      { name: '朱庆樱', id: 3, status: STATUSES.PENDING.STATUS },
      { name: '许万万', id: 4, status: STATUSES.PENDING.STATUS },
      { name: '蓝世鸿', id: 5, status: STATUSES.PENDING.STATUS },
      { name: '凌乐敏', id: 6, status: STATUSES.PENDING.STATUS },
      { name: '肖恢海', id: 7, status: STATUSES.PENDING.STATUS },
      { name: '王子萱', id: 8, status: STATUSES.PENDING.STATUS },
      { name: '贺明驰', id: 9, status: STATUSES.PENDING.STATUS },
      { name: '钟立志', id: 10, status: STATUSES.PENDING.STATUS },
      { name: '李江', id: 11, status: STATUSES.PENDING.STATUS },
      { name: '华芬', id: 12, status: STATUSES.PENDING.STATUS },
      { name: '周静宁', id: 13, status: STATUSES.PENDING.STATUS },
      { name: '程艺', id: 14, status: STATUSES.PENDING.STATUS },
      { name: '席朵', id: 15, status: STATUSES.PENDING.STATUS },
      { name: '郑嘉乐', id: 16, status: STATUSES.PENDING.STATUS },
      { name: '钟文辉', id: 17, status: STATUSES.PENDING.STATUS },
      { name: '徐湘泉', id: 18, status: STATUSES.PENDING.STATUS },
      { name: '车俊江', id: 19, status: STATUSES.PENDING.STATUS },
      { name: '孙景晖', id: 20, status: STATUSES.PENDING.STATUS },
      { name: '刘陆', id: 21, status: STATUSES.PENDING.STATUS },
      { name: '邹星', id: 22, status: STATUSES.PENDING.STATUS },
      { name: '罗京', id: 23, status: STATUSES.PENDING.STATUS },
      { name: '侯晨辉', id: 24, status: STATUSES.PENDING.STATUS },
      { name: '兰尘', id: 25, status: STATUSES.PENDING.STATUS },
      { name: '赵梓良', id: 26, status: STATUSES.PENDING.STATUS },
      { name: '钟玉婷', id: 27, status: STATUSES.PENDING.STATUS },
      { name: '白健', id: 28, status: STATUSES.PENDING.STATUS },
      { name: '孔俊辉', id: 29, status: STATUSES.PENDING.STATUS },
      { name: '晁毅', id: 30, status: STATUSES.PENDING.STATUS },
      { name: '甘玉玲', id: 31, status: STATUSES.PENDING.STATUS },
      { name: '谢京盛', id: 32, status: STATUSES.PENDING.STATUS },
      { name: '姚瑞', id: 33, status: STATUSES.PENDING.STATUS },
      { name: '文建伟', id: 34, status: STATUSES.PENDING.STATUS },
      { name: '谢家豪', id: 35, status: STATUSES.PENDING.STATUS },
      { name: '任致澎', id: 36, status: STATUSES.PENDING.STATUS },
      { name: '张林祯', id: 37, status: STATUSES.PENDING.STATUS },
      { name: '何国玺', id: 38, status: STATUSES.PENDING.STATUS },
      { name: '吴佳', id: 39, status: STATUSES.PENDING.STATUS },
    ]);

list.forEach(item => {
  item.status = catchStatus(item.status, list);
})

const pendings = computed(() => list.filter(item => item.status === STATUSES.PENDING.STATUS && (item.name.includes(keyword.value) || getShortName(item.name).startsWith(keyword.value.toLowerCase()))));

const statusInfo = [
  {
    status: STATUSES.ARRIVE.STATUS,
    text: STATUSES.ARRIVE.TEXT,
    color: STATUSES.ARRIVE.COLOR,
    id: 40,
  },
  {
    status: STATUSES.LEAVE.STATUS,
    text: STATUSES.LEAVE.TEXT,
    color: STATUSES.LEAVE.COLOR,
    id: 41,
  },
  {
    status: STATUSES.ABSENT.STATUS,
    text: STATUSES.ABSENT.TEXT,
    color: STATUSES.ABSENT.COLOR,
    id: 42,
  }
]

// 分组数据
const statusGroup = reactive([
  {
    members: computed(() => list.filter(item => item.status === STATUSES.ARRIVE.STATUS)),
    title: `${STATUSES.ARRIVE.TEXT}✨`,
    color: STATUSES.ARRIVE.COLOR,
    id: 43,
  },
  {
    members: computed(() => list.filter(item => item.status === STATUSES.LEAVE.STATUS)),
    title: `${STATUSES.LEAVE.TEXT}🤕`,
    color: STATUSES.LEAVE.COLOR,
    id: 44,
  },
  {
    members: computed(() => list.filter(item => item.status === STATUSES.ABSENT.STATUS)),
    title: `${STATUSES.ARRIVE.TEXT}🥅`,
    color: STATUSES.ABSENT.COLOR,
    id: 45,
  }
])

// 搜索关键字
const keyword = ref('');

export {
  list,
  pendings,
  statusInfo,
  statusGroup,
  keyword,
}