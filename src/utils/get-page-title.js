import defaultSettings from '@/settings'

const title = defaultSettings.title || '谷粒商城后台管理'

export default function getPageTitle(pageTitle) {
    if (pageTitle) {
        return `${pageTitle} - ${title}`
    }
    return `${title}`
}