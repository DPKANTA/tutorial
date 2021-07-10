const os = require('os')
user = os.userInfo()
console.log(user)
console.log(os.uptime())
const systeminfo = {
    osname : os.type(),
    osrelease : os.release(),
    totalmem : os.totalmem(),
    freemem : os.freemem(),
}
console.log(systeminfo)p