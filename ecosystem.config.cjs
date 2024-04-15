module.exports = {
    apps: [
        {
            name: 'portfolio',
            exec_mode: 'cluster',
            instances: '1', // Or a number of instances
            script: 'node_modules/next/dist/bin/next',
            args: 'start',
            env_local: {
                APP_ENV: 'local', // APP_ENV=prod
                PORT: 3000 // Make sure this port is the same as the one you set in Nginx
            },
            env_dev: {
                APP_ENV: 'dev', // APP_ENV=prod
                PORT: 3000 // Make sure this port is the same as the one you set in Nginx
            },
            env_prod: {
                APP_ENV: 'prod', // APP_ENV=prod
                PORT: 3000 // Make sure this port is the same as the one you set in Nginx
            }
        }
    ]
}
