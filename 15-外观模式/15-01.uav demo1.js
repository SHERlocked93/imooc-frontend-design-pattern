/**
 * 创建于 2019-07-13
 * 作者: SHERlocked93
 * 功能: 外观模式 无人机例子
 */


var uav = {
    /**
     * 电子调速器
     */
    diantiao1: {
        up() {
            console.log('电调1发送指令：电机1增大转速')
            uav.dianji1.up()
        },
        down() {
            console.log('电调1发送指令：电机1减小转速')
            uav.dianji1.up()
        }
    },
    diantiao2: {
        up() {
            console.log('电调2发送指令：电机2增大转速')
            uav.dianji2.up()
        },
        down() {
            console.log('电调2发送指令：电机2减小转速')
            uav.dianji2.down()
        }
    },
    diantiao3: {
        up() {
            console.log('电调3发送指令：电机3增大转速')
            uav.dianji3.up()
        },
        down() {
            console.log('电调3发送指令：电机3减小转速')
            uav.dianji3.down()
        }
    },
    diantiao4: {
        up() {
            console.log('电调4发送指令：电机4增大转速')
            uav.dianji4.up()
        },
        down() {
            console.log('电调4发送指令：电机4减小转速')
            uav.dianji4.down()
        }
    },
    
    /**
     * 电机
     */
    dianji1: {
        up() { console.log('电机1增大转速') },
        down() { console.log('电机1减小转速') }
    },
    dianji2: {
        up() { console.log('电机2增大转速') },
        down() { console.log('电机2减小转速') }
    },
    dianji3: {
        up() { console.log('电机3增大转速') },
        down() { console.log('电机3减小转速') }
    },
    dianji4: {
        up() { console.log('电机4增大转速') },
        down() { console.log('电机4减小转速') }
    },
    
    controller: {
        /**
         * 上升
         */
        up() {
            uav.diantiao1.up()
            uav.diantiao2.up()
            uav.diantiao3.up()
            uav.diantiao4.up()
        },
        
        /**
         * 前进
         */
        forward() {
            uav.diantiao1.down()
            uav.diantiao2.down()
            uav.diantiao3.up()
            uav.diantiao4.up()
        },
        
        /**
         * 下降
         */
        down() {
            uav.diantiao1.down()
            uav.diantiao2.down()
            uav.diantiao3.down()
            uav.diantiao4.down()
        },
        
        /**
         * 左转
         */
        left() {
            uav.diantiao1.up()
            uav.diantiao2.down()
            uav.diantiao3.up()
            uav.diantiao4.down()
        }
    }
}
