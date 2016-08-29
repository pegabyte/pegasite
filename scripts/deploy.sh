const { execSync } = require('child_process')

const env = process.env
execSync('now --docker -C -d -f -n')
