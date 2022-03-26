let env = ''

if (['test', 'development', 'production'].includes(process.env.NODE_ENV)) {
  env = process.env.NODE_ENV
} else {
  env = 'development'
}

// 接口地址
const BaseUrls = {
  development: '',
  test: '',
  production: ''
}

const Config = {
  env,
  baseUrl: BaseUrls[env]
}

export default Config
