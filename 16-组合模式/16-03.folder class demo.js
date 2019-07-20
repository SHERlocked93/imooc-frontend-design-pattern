/**
 * 创建于 2019-07-13
 * 作者: SHERlocked93
 * 功能: 外观模式 无人机例子
 */

class Folder {
    constructor(name, children) {
        this.name = name
        this.children = children
    }
    
    /**
     * 在文件夹下增加文件或文件夹
     * @param fileOrFolder
     */
    add(...fileOrFolder) {
        this.children.push(...fileOrFolder)
        return this
    }
    
    /**
     * 扫描方法
     * @param cb
     */
    scan(cb) {
        this.children.forEach(child => child.scan(cb))
    }
}

class File {
    constructor(name, size) {
        this.name = name
        this.size = size
    }
    
    /**
     * 在文件下增加文件，应报错
     * @param fileOrFolder
     */
    add(...fileOrFolder) {
        throw new Error('文件下面不能再添加文件')
    }
    
    /**
     * 执行扫描方法
     * @param cb
     */
    scan(cb) {
        cb(this)
    }
}

const foldMovies = new Folder('电影', [
    new Folder('漫威英雄电影', [
        new File('钢铁侠.mp4', 1.9),
        new File('蜘蛛侠.mp4', 2.1),
        new File('金刚狼.mp4', 2.3),
        new File('黑寡妇.mp4', 1.9),
        new File('美国队长.mp4', 1.4)]),
    new Folder('DC英雄电影', [
        new File('蝙蝠侠.mp4', 2.4),
        new File('超人.mp4', 1.6)])
])

console.log('size 大于2G的文件有：')

foldMovies.scan(item => {
    if (item.size > 2) {
        console.log(`name:${ item.name } size:${ item.size }GB`)
    }
})

// size 大于2G的文件有：
// name:蜘蛛侠.mp4 size:2.1GB
// name:金刚狼.mp4 size:2.3GB
// name:蝙蝠侠.mp4 size:2.4GB

