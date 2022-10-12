# vuex

-[vuex](https://v3.vuex.vuejs.org/zh/)

## 安装 vuex

``` js
yarn add vuex -S
```

## 初始化 vuex

``` js
// 项目根目录新建 store目录 和 index.js
// 如果 有 module，在 store目录 新建 module 目录

// /src/store/index.js
import Vue from 'vue'
import Vuex from 'vuex'

import config from './module/config'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
		msg: 'hello vuex'
  },
  mutations: {
		
  },
  actions: {
		
  },
  modules: {
    config
  }
})

export default store
```

## vuex 下的 module

``` js
// /src/store/module/config.js
import { getConfigApi } from '@/api/config'
import Vue from 'vue'
import router from '@/router'

export default {
  namespaced: true,
  state: {
    lang: 'zh-CN',
    configData: ''
  },
  getters: {
    topHtml: state => state.configData.TopHtml,
    bottomHtml: state => state.configData.BotHtml,
    btnStyles: (state) => {
      const MainColor = state.configData.MainColor
      if (MainColor) {
        return (MainColor.length > 1)
          ? `background: linear-gradient(139deg, ${MainColor[0]} 0%, ${MainColor[1]} 100%);color: #fff`
          : `background: ${MainColor[0]};color: #fff`
      } else {
        return ''
      }
    }
  },
  mutations: {
    setConfigData(state, data) {
      state.configData = data
  },
  actions: {
    // 获取配置数据
    getConfigData({ commit, state }, options) {
      return new Promise((resolve, reject) => {
        if (state.configData) {
          resolve(state.configData)
        } else {
          getConfigApi({
            linkguid
          }).then(res => {
            if (res.code === 200) {
              commit('setConfigData', res.data)
              resolve(res.data)
            } else {
              reject(res)
            }
          }).catch(err => {
            console.log(err)
            reject(err)
          })
        }
      })
    }
}
```

## 引用 vuex
``` js
// /src/main.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```

## 页面使用 vuex
``` html
// /src/views/home.vue
<template>
  <div>
    <isc-html v-if="topHtml" :html-str="topHtml" />
    <div class="btn-wrap" style="margin-top: 30px">
      <el-button class="isc-btn btn-login" :style="btnStyles" @click="change">修改数据</el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      topHtml: 'config/topHtml',
      btnStyles: 'config/btnStyles',
    }),
    lang() {
      return this.$store.state.config.lang
    },
		themeColor() {
			return this.$store.state.config.configData
		},
		topHtml2() {
			return this.$store.getters['config/topHtml']
		}
  },
  async created() {
    const info = this.$store.dispatch('cofig/getConfigData')
		console.log(info)
  },
  methods: {
		change() {
			this.$sotre.commit('config/setConfigData',{})
		}
  }
}
</script>

<style lang="less" scoped>

</style>
```