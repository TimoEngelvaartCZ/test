let push = require('web-push');

let vapidKeys = { 
    publicKey: 'BPH1uzQ2pEZfRzhUNEB9ytwWPuu9SarD10usnCPfLeA9mUTJztEbL8VFEqLZucKAS1cclmXLbyavOmheFQ9Drso',
    privateKey: 'JRWcPVZFpXqlfKK9Uzzw79kXzhHOUempB3WMNcH_49A' 
}

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey);
let sub = {};
push.sendNotification(sub, 'test message');

