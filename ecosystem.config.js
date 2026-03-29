module.exports = {
  apps: [
    {
      name: 'bigboldtech',
      script: 'node_modules/.bin/next',
      args: 'start -p 3000',
      cwd: '/www/wwwroot/bigboldtech.com',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
    },
  ],
}
