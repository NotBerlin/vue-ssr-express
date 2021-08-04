// 渲染首屏
import createApp from './app.js'

export default context => {
    return new Promise((resolve, reject) => {
        const { app, router } = createApp()
        router.push(context.url)
        router.onReady(() => {
            resolve(app)
        }, reject)
    })
}