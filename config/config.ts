import { defineConfig } from '@umijs/max';
import defaultSettings from './defaultSettings';
import routes from './routes';

export default defineConfig({
  antd: {},
  base: '/',
  publicPath: '/static/',
  outputPath: 'static',
  access: {},
  model: {},
  mock: {},
  initialState: {},
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  request: {
    dataField: 'data'
  },
  theme: {
    // 如果不想要 configProvide 动态设置主题需要把这个设置为 default
    // 只有设置为 variable， 才能使用 configProvide 动态设置主色调
    // https://ant.design/docs/react/customize-theme-variable-cn
    'root-entry-name': 'variable',
  },
  layout: {
    title: 'wangyi-project',
    locale: true,
    siderWidth: 208,
    ...defaultSettings,
  },
  routes,
  npmClient: 'pnpm',
});

