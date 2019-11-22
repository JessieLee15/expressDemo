module.exports = {
  apps: [{
    name: 'express-demo', //应用名
    script: './expressDemo/bin/www', //应用文件位置
    env: {
      // PM2_SERVE_PATH: "./apidoc", //静态服务路径
      // PM2_SERVE_PORT: 8080, //静态服务器访问端口
      // NODE_ENV: 'development' //启动默认模式
      COMMON_VARIABLE: 'true'
    },
    env_production: {
      NODE_ENV: 'production' //使用production模式 pm2 start ecosystem.config.js --env production
    },
    instances: "max", //将应用程序分布在所有CPU核心上,可以是整数或负数
    instance_var: "INSTANCE_ID",
    exec_mode: "cluster",
    watch: [
      "server",
    ], //监听模式，不能单纯的设置为true，易导致无限重启，因为日志文件在变化，需要排除对其的监听
    merge_logs: true, //集群情况下，可以合并日志
  }],
  /*   deploy: {
      production: {
        user: 'c4', //也可以useradd另建用户
        host: '47.95.247.139', // 服务器地址
        ref: 'origin/master',
        repo: 'git@github.com:guzhongren/backend-based-on-Koa2.git', // github上的项目地址
        path: '/home/c4/depoly', //  服务器上放项目的目录
        'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
      },
      dev: {
        user: 'c4',
        host: '47.95.247.139',
        ref: 'origin/master',
        repo: 'git@github.com:guzhongren/backend-based-on-Koa2.git',
        path: '/home/c4/depoly',
        'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env dev',
        env: {
          NODE_ENV: 'dev'
        }
      }
    } */
}