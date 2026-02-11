const urlBuilder = (https) => (domain) => (port) => (route) => `${https} ${domain} ${port} ${route}`;
const https = urlBuilder(`https://`);
const domain = https(`localhost:`);
const port = domain(`3000`);
const route = port(`/user/login`)
console.log(route);
