/*
143 analytics tool for poketalebot
for unminified version https://github.com/iamashley0/143-gizlilik-pt/blob/main/143-src/143.js

This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/. 
*/
if(void 0===Mozilla)var Mozilla={};if(Mozilla.dntEnabled=function(e,t){"use strict";var a=e||navigator.doNotTrack||window.doNotTrack||navigator.msDoNotTrack,n=t||navigator.userAgent,i=n.match(/Firefox\/(\d+)/),o=/MSIE|Trident/i.test(n),r=n.match(/Windows.+?(?=;)/g);return(!o||"function"==typeof Array.prototype.indexOf)&&"Enabled"===(a=i&&parseInt(i[1],10)<32?"Unspecified":o&&r&&-1!==["Windows NT 6.1","Windows NT 6.2","Windows NT 6.3"].indexOf(r.toString())?"Unspecified":{0:"Disabled",1:"Enabled"}[a]||"Unspecified")},Mozilla&&!Mozilla.dntEnabled()){!function(e,t,a,n,i){e[n]=e[n]||[],e[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var o=t.getElementsByTagName(a)[0],r=t.createElement(a);r.async=!0,r.src="https://www.googletagmanager.com/gtm.js?id=GTM-KFFMF9J",o.parentNode.insertBefore(r,o)}(window,document,"script","dataLayer"),window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)},ga.l=+new Date,ga("create","UA-228129155-1","poketalebot.com"),ga("set","anonymizeIp",!0),ga("send","pageview");var gaScript=document.createElement("script");gaScript.async=1,gaScript.src="https://www.google-analytics.com/analytics.js",document.head.appendChild(gaScript),function(){var e=window.analytics=window.analytics||[];if(!e.initialize)if(e.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{e.invoked=!0,e.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"],e.factory=function(t){return function(){var a=Array.prototype.slice.call(arguments);return a.unshift(t),e.push(a),e}};for(var t=0;t<e.methods.length;t++){var a=e.methods[t];e[a]=e.factory(a)}e.load=function(t,a){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(n,i),e._loadOptions=a},e._writeKey="lXJ2T8fqX4dnL04Goga0d6k7qFE6ymlw",e.SNIPPET_VERSION="4.15.3",e.load("lXJ2T8fqX4dnL04Goga0d6k7qFE6ymlw"),e.page()}}(),function(e,t,a,n,i,o){e.hj=e.hj||function(){(e.hj.q=e.hj.q||[]).push(arguments)},e._hjSettings={hjid:2983344,hjsv:6},i=t.getElementsByTagName("head")[0],(o=t.createElement("script")).async=1,o.src="https://static.hotjar.com/c/hotjar-"+e._hjSettings.hjid+".js?sv="+e._hjSettings.hjsv,i.appendChild(o)}(window,document)}
if (Mozilla && Mozilla.dntEnabled()) {
  function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    deleteAllCookies()
}
