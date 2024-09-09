const subdomain = (subdomain) => {
  window.location.href = 'https://' + subdomain + window.location.hostname + "/";
}

export {subdomain};