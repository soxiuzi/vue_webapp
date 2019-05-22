/**
 * 自定义部分表单规则
 */

import Vue from 'vue'
import VeeValidate, {
  Validator
} from 'vee-validate' // 引入表单认证插件
import zh_CN from 'vee-validate/dist/locale/zh_CN' // 引入中文包

// 配置中文
Validator.addLocale(zh_CN)

const config = {
  locale: 'zh_CN',
}

Vue.use(VeeValidate, config)

// 自定义提示语
const dictionary = {
  zh_CN: {
    messages: {
      email: () => '请输入正确的邮箱格式',
      required: field => `请输入${field}`
    },
    attributes: {
      email: '邮箱',
      phone: '手机号码'
    }
  }
}

Validator.updateDictionary(dictionary)

// 自定义验证
Validator.extend('phone', {
  messages: {
    zh_CN: field => field + '必须是11位手机号码'
  },
  validate: value => {
    return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8}$)/.test(value)
  }
})