import cn from 'clsx'
import NextLink from 'next/link'
import type { ComponentProps, CSSProperties, ReactNode } from 'react'
import { useState } from 'react'
import styles from './style.module.css'

const classes = {
  cards: styles.cards,
  card: styles.card,
  title: styles.title,
  description: styles.description,
  imageContainer: styles.imageContainer,
  image: styles.image,
  arrow: styles.arrow,
  menu: styles.menu,
  menuItem: styles.menuItem,
  active: styles.active,
  dropdown: styles.dropdown,
  projectPage: styles.projectPage,
}

const arrowEl = (
    <span className={classes.arrow}>
    →
  </span>
)

export function Card({
                       children,
                       title,
                       description,
                       icon,
                       image,
                       arrow,
                       href,
                       ...props
                     }: {
  children: ReactNode
  title: string
  description?: string
  icon: ReactNode
  image?: boolean
  arrow?: boolean
  href: string
}) {
  const animatedArrow = arrow ? arrowEl : null

  if (image) {
    return (
        <NextLink
            href={href}
            className={cn(classes.card, 'group')}
            {...props}
        >
          <div className={classes.imageContainer}>
            {children}
            {description && <div className={classes.description}>{description}</div>}
          </div>
          <span className={classes.title}>
          {icon}
            <span className="nx-flex nx-gap-1">
            {title}
              {animatedArrow}
          </span>
        </span>
        </NextLink>
    )
  }

  return (
      <NextLink
          href={href}
          className={cn(classes.card, 'group')}
          {...props}
      >
      <span className={classes.title}>
        {icon}
        {title}
        {animatedArrow}
      </span>
      </NextLink>
  )
}

function _Cards({
                  children,
                  num = 3,
                  className,
                  style,
                  ...props
                }: { num?: number } & ComponentProps<'div'>) {
  return (
      <div
          className={cn(classes.cards, className)}
          {...props}
      >
        {children}
      </div>
  )
}

export const Cards = Object.assign(_Cards, { displayName: 'Cards', Card })

// Menu component
function Menu({ categories, activeCategory, onCategoryChange }) {
  return (
      <>
        <div className={classes.menu}>
          {categories.map(category => (
              <div
                  key={category}
                  className={`${classes.menuItem} ${category === activeCategory ? classes.active : ''}`}
                  onClick={() => onCategoryChange(category)}
              >
                {category}
              </div>
          ))}
        </div>
        <div className={classes.dropdown}>
          <select
              value={activeCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
          >
            {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
            ))}
          </select>
        </div>
      </>
  )
}

export default function ProjectPage() {
  const [activeCategory, setActiveCategory] = useState('SpringBoot')

  const categories = ['SpringBoot', 'React']
  const projects = {
    SpringBoot: [
      {
        title: 'kkFileView',
        description: '文件文档在线预览解决方案，该项目使用流行的spring boot搭建，易上手和部署，基本支持主流办公文档的在线预览，如doc,docx,xls,xlsx,ppt,pptx等等。',
        href: 'https://kkview.cn/zh-cn/index.html',
        image: 'https://javgo-images.oss-cn-beijing.aliyuncs.com/2024-06-30-044608.png'
      },
      {
        title: 'SpringBootCodeGenerator',
        description: 'Java代码生成器、JAVA在线代码生成平台、sql转java、大狼狗代码生成器、mybatis在线生成器、SQL转Java JPA、MYBATIS实现类代码生成平台。',
        href: 'https://github.com/moshowgame/SpringBootCodeGenerator',
        image: 'https://javgo-images.oss-cn-beijing.aliyuncs.com/2024-06-30-054918.png'
      },
      {
        title: 'JetLinks',
        description: 'JetLinks 是一个开箱即用,可二次开发的企业级物联网基础平台。平台实现了物联网相关的众多基础功能, 能帮助你快速建立物联网相关业务系统。',
        href: 'https://github.com/jetlinks/jetlinks-community',
        image: 'https://javgo-images.oss-cn-beijing.aliyuncs.com/2024-06-30-055449.png'
      },
      {
        title: 'JimuReport',
        description: '一款免费的数据可视化报表，含报表和大屏设计，像搭建积木一样在线设计报表！功能涵盖，数据报表、打印设计、图表报表、大屏设计等。',
        href: 'https://github.com/jeecgboot/JimuReport',
        image: 'https://javgo-images.oss-cn-beijing.aliyuncs.com/2024-06-30-055643.png'
      },
      {
        title: 'JeecgBoot',
        description: '一款基于BPM的低代码平台！前后端分离架构，支持微服务。强大的代码生成器让前后端代码一键生成，实现低代码开发！',
        href: 'https://github.com/jeecgboot/JeecgBoot',
        image: 'https://javgo-images.oss-cn-beijing.aliyuncs.com/2024-06-30-055948.png'
      },
      {
        title: 'PlayEdu',
        description: 'PlayEdu 是一款业内领先的线上培训解决方案。PlayEdu 基于 Java + MySQL.mdx 开发，采用前后端分离模式，前端核心框架为 React18，后端核心框架为 SpringBoot3。',
        href: 'https://github.com/PlayEdu/PlayEdu',
        image: 'https://javgo-images.oss-cn-beijing.aliyuncs.com/2024-06-30-060505.png'
      },
      {
        title: 'mybatis-plus-generator-ui',
        description: '提供交互式的Web UI用于生成兼容mybatis-plus框架的相关功能代码，包括各层常见代码 ，可以自定义模板以及各类输出参数，也可通过SQL查询语句直接生成代码。',
        href: 'https://github.com/davidfantasy/mybatis-plus-generator-ui',
        image: 'https://javgo-images.oss-cn-beijing.aliyuncs.com/2024-06-30-060720.png'
      },
      {
        title: 'paicoding',
        description: '一个基于 Spring-Framework Boot、MyBatis-Plus、MySQL.mdx、Redis、ElasticSearch、MongoDB、Docker、RabbitMQ 等技术栈实现的社区系统。',
        href: 'https://github.com/itwanger/paicoding',
        image: 'https://javgo-images.oss-cn-beijing.aliyuncs.com/2024-06-30-060948.png'
      },
      {
        title: 'kaifangqian-base',
        description: '开放签电子签章系统开源工具版旨在将电子签章，避免研发同仁在工作过程中重复造轮子，降低电子签章技术研发要求。',
        href: 'https://github.com/kaifangqian/kaifangqian-base',
        image: 'https://javgo-images.oss-cn-beijing.aliyuncs.com/2024-06-30-061304.png'
      },
      {
        title: 'topiam-eiam',
        description: '业界首个基于 SpringBoot3 开源IDaas/IAM平台，用于管理企业内员工账号、权限、身份认证、应用访问，帮助整合部署在本地或云端的内部办公系统，实现一个账号打通所有应用的服务。',
        href: 'https://gitee.com/topiam/eiam',
        image: 'https://javgo-images.oss-cn-beijing.aliyuncs.com/2024-06-30-061929.png'
      },
      {
        title: 'JApiDocs',
        description: '无需额外注解的 SpringBoot API 文档生成工具。',
        href: 'https://github.com/YeDaxia/JApiDocs',
        image: 'https://javgo-images.oss-cn-beijing.aliyuncs.com/2024-06-30-062448.png'
      },
      {
        title: 'DWSurvey',
        description: 'DWSurvey是一款简单、高效、成熟、稳定、专业的开源问卷系统，自2012年启动至今经过9年的积累，已经形成一套完善的基于 JAVA WEB 的开源问卷表单解决方案。',
        href: 'https://github.com/wkeyuan/DWSurvey',
        image: 'https://javgo-images.oss-cn-beijing.aliyuncs.com/2024-06-30-062656.png'
      },
      {
        title: 'spider-flow',
        description: '新一代爬虫平台，以图形化方式定义爬虫流程，不写代码即可完成爬虫。',
        href: 'https://github.com/ssssssss-team/spider-flow',
        image: 'https://javgo-images.oss-cn-beijing.aliyuncs.com/2024-06-30-spider-flow.gif'
      },
      // Add more SpringBoot projects here
    ],
    React: [
      {
        title: 'flat',
        description: 'Project持平是Agora持平开源课堂的Web、Windows和macOS客户端。',
        href: 'https://github.com/netless-io/flat',
        image: 'https://javgo-images.oss-cn-beijing.aliyuncs.com/2024-06-30-063335.png'
      },
      {
        title: 'react-bilibili',
        description: '高仿B站web移动端。',
        href: 'https://github.com/dxx/react-bilibili',
        image: 'https://javgo-images.oss-cn-beijing.aliyuncs.com/2024-06-30-063513.png'
      },
      {
        title: 'pic-smaller',
        description: 'Pic Smaller-智能压缩JPEG、PNG、WEBP、AVIF、SVG和GIF图像。',
        href: 'https://github.com/joye61/pic-smaller',
        image: 'https://javgo-images.oss-cn-beijing.aliyuncs.com/2024-06-30-063835.png'
      },
      {
        title: 'Cap',
        description: '开源织机替代品。轻松、即时的屏幕共享。',
        href: 'https://github.com/CapSoftware/Cap',
        image: 'https://javgo-images.oss-cn-beijing.aliyuncs.com/2024-06-30-064006.png'
      },
      // Add React projects here
    ]
  }

  return (
      <div className={classes.projectPage}>
        <Menu
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
        />
        <div className="flex-1">
          <Cards>
            {projects[activeCategory].map(project => (
                <ShowcaseCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    href={project.href}
                >
                  <img src={project.image} alt={`${project.title} preview`} className={classes.image} />
                </ShowcaseCard>
            ))}
          </Cards>
        </div>
      </div>
  )
}

export const ShowcaseCard = Object.assign(
    // Copy LinkCard component and add default props
    Cards.Card.bind({}),
    {
      displayName: 'ShowcaseCard',
      defaultProps: {
        image: true,
        arrow: true,
        target: '_blank'
      }
    }
)
