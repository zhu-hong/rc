import { reactive, computed, ref } from "@vue/reactivity";
import { catchStatus, getShortName } from "../utils";

// 总名单
const list =
  JSON.parse(localStorage.getItem('cache')) ?
  reactive(JSON.parse(localStorage.getItem('cache'))) :
  reactive([
    { name: '赖志文', id: 0, status: 'pending' },
    { name: '钟泽锋', id: 1, status: 'pending' },
    { name: '黄紫星', id: 2, status: 'pending' },
    { name: '朱庆樱', id: 3, status: 'pending' },
    { name: '许万万', id: 4, status: 'pending' },
    { name: '蓝世鸿', id: 5, status: 'pending' },
    { name: '凌乐敏', id: 6, status: 'pending' },
    { name: '肖恢海', id: 7, status: 'pending' },
    { name: '王子萱', id: 8, status: 'pending' },
    { name: '贺明驰', id: 9, status: 'pending' },
    { name: '钟立志', id: 10, status: 'pending' },
    { name: '李江', id: 11, status: 'pending' },
    { name: '华芬', id: 12, status: 'pending' },
    { name: '周静宁', id: 13, status: 'pending' },
    { name: '程艺', id: 14, status: 'pending' },
    { name: '席朵', id: 15, status: 'pending' },
    { name: '郑嘉乐', id: 16, status: 'pending' },
    { name: '钟文辉', id: 17, status: 'pending' },
    { name: '徐湘泉', id: 18, status: 'pending' },
    { name: '车俊江', id: 19, status: 'pending' },
    { name: '孙景晖', id: 20, status: 'pending' },
    { name: '刘陆', id: 21, status: 'pending' },
    { name: '邹星', id: 22, status: 'pending' },
    { name: '罗京', id: 23, status: 'pending' },
    { name: '侯晨辉', id: 24, status: 'pending' },
    { name: '兰尘', id: 25, status: 'pending' },
    { name: '赵梓良', id: 26, status: 'pending' },
    { name: '钟玉婷', id: 27, status: 'pending' },
    { name: '白健', id: 28, status: 'pending' },
    { name: '孔俊辉', id: 29, status: 'pending' },
    { name: '晁毅', id: 30, status: 'pending' },
    { name: '甘玉玲', id: 31, status: 'pending' },
    { name: '谢京盛', id: 32, status: 'pending' },
    { name: '姚瑞', id: 33, status: 'pending' },
    { name: '文建伟', id: 34, status: 'pending' },
    { name: '谢家豪', id: 35, status: 'pending' },
    { name: '任致澎', id: 36, status: 'pending' },
    { name: '张林祯', id: 37, status: 'pending' },
    { name: '何国玺', id: 38, status: 'pending' },
    { name: '吴佳', id: 39, status: 'pending' }
  ]);

list.forEach(item => {
  item.status = catchStatus(item.status, list);
})

const pendings = computed(() => list.filter(item => item.status === 'pending' && (item.name.includes(keyword.value) || getShortName(item.name).startsWith(keyword.value.toLowerCase()))))

const statusInfo = [
  {
    status: 'arrive',
    text: '到位',
    color: 'bg-blue-600',
    id: 40
  },
  {
    status: 'leave',
    text: '请假',
    color: 'bg-yellow-600',
    id: 41
  },
  {
    status: 'absent',
    text: '旷训',
    color: 'bg-red-600',
    id: 42
  }
]

// 控制名字面板的显示隐藏
const isRoll = ref(false);

// 分组数据
const statusGroup = reactive([
  {
    members: computed(() => list.filter(item => item.status === 'arrive')),
    title: '到位 ✨',
    color: 'bg-blue-600',
    id: 43
  },
  {
    members: computed(() => list.filter(item => item.status === 'leave')),
    title: '请假 🤕',
    color: 'bg-yellow-600',
    id: 44
  },
  {
    members: computed(() => list.filter(item => item.status === 'absent')),
    title: '旷训 🥅',
    color: 'bg-red-600',
    id: 45
  }
])

// 搜索关键字
const keyword = ref('');

export {
  list,
  pendings,
  statusInfo,
  isRoll,
  statusGroup,
  keyword,
}