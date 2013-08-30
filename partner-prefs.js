pref("services.push.serverURL", "wss://ua.push.tefdigital.com");
// LATAM carriers: 20 minutes minimum.
// Since we only have one variant for all countries, this is the best value
// for the worst country: 19 minutes
pref("services.push.pingInterval", "1140000"); 
pref("network.proxy.no_proxies_on", "localhost, 127.0.0.1, *.push.tefdigital.com");
