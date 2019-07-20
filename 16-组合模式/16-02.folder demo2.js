/**
 * 创建于 2019-07-13
 * 作者: SHERlocked93
 * 功能: 外观模式 无人机例子
 */

const createFolder = function(name) {
    return {
        name: name,
        _children: [],
        
        /**
         * 在文件夹下增加文件或文件夹
         * @param fileOrFolder
         */
        add(...fileOrFolder) {
            this._children.push(...fileOrFolder)
            return this
        },
        
        /**
         * 扫描方法
         * @param cb
         */
        scan(cb) {
            this._children.forEach(child => child.scan(cb))
        }
    }
}

const createFile = function(name, size) {
    return {
        name: name,
        size: size,
        
        /**
         * 在文件下增加文件，应报错
         */
        add() {
            throw new Error('文件下面不能再添加文件')
        },
        
        /**
         * 执行扫描方法
         * @param cb
         */
        scan(cb) {
            cb(this)
        }
    }
}

const foldMovies = createFolder('电影')
  .add(
    createFolder('漫威英雄电影')
      .add(createFile('钢铁侠.mp4', 1.9))
      .add(createFile('蜘蛛侠.mp4', 2.1))
      .add(createFile('金刚狼.mp4', 2.3))
      .add(createFile('黑寡妇.mp4', 1.9))
      .add(createFile('美国队长.mp4', 1.4)),
    createFolder('DC英雄电影')
      .add(createFile('蝙蝠侠.mp4', 2.4))
      .add(createFile('超人.mp4', 1.6))
  )

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
