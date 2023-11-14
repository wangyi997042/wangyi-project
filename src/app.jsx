// 运行时配置
// import type { RunTimeLayoutConfig } from 'umi';
import { PageLoading } from '@ant-design/pro-layout';
import { history, Link, useRequest } from 'umi';
import Footer from '@/components/Footer'

import { currentUser as queryCurrentUser } from "./services/ant-design-pro/api"

import defaultSettings from '../config/defaultSettings';


/** 获取用户信息比较慢的时候会展示一个 loading */
// export const initialStateConfig = {
//   loading: <PageLoading />,
// };

const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';


// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState() {
  const fetchUserInfo = async () => {
    try {
      const userInfo = await queryCurrentUser()

      return userInfo?.data;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  // 如果不是登录页面，执行
  if (history.location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();

    return {
      fetchUserInfo,
      currentUser,
      settings: defaultSettings,
    };
  }

  return {
    fetchUserInfo,
    setting: defaultSettings
  }
}

export const layout = ({ initialState }) => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
    rightContentRender: () => <div>132</div>,
    menuHeaderRender: function () {
      return <div>nihao</div>;
    },
    waterMarkProps: {
      content: initialState?.name,
    },
    footerRender: () => <Footer />,

    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    },
    childrenRender: (children, props) => {
      return (
        <div>
          {children}
        </div>
      )
    },
    ...initialState?.setting
  };
};
