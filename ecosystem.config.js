module.exports = {
  apps: [{
    script: 'npm start',
  },],

  deploy: {
    production: {
      key: 'developer-portfolio.pem',
      user: 'ubuntu',
      host: '3.87.37.193',
      ref: 'origin/main',
      repo: 'https://github.com/Leon2192/portfolio-deployment.git',
      path: '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy': 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
