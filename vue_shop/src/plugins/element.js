import Vue from 'vue'

import { Button, Form, FormItem, Input, Message } from 'element-ui'

//导入弹框提示组件  Message



Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
    //Message 需要全局挂载，$message自定义属性
Vue.prototype.$message = Message