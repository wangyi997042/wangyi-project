import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <DefaultFooter
      copyright={`${currentYear} wangyi出品`}
      links={[
        {
          key: 'wangyi-project',
          title: 'wangyi-project',
          href: 'http://110.40.158.32/project',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/wangyi997042/wangyi-project',
          blankTarget: true,
        }
      ]}
    />
  )
}