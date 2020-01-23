import React, { Fragment } from 'react'
import Head from 'next/head'

import { gaTrackingCode, intercomId, mixpanelToken } from 'prismic-configuration'
import { generalStyles, grid, mainStyles, reset, typography } from 'styles'

// Meta data component
const Meta = () => (
  <Fragment>
    <Head>
      <script src="/doc-assets/javascript/vendors/highlight/highlight.pack.js" />
      <script async defer src="https://unpkg.com/highlightjs-line-numbers.js@2.3.0/dist/highlightjs-line-numbers.min.js" type="text/javascript" />

      {/* Third party scripts */}
      <script dangerouslySetInnerHTML={googleAnalyticsScript} />
      <script id="IntercomSettingsScriptTag" data-reloadable="true" dangerouslySetInnerHTML={intercomScript} />
      <script type="text/javascript" dangerouslySetInnerHTML={mixpanelScript} />
    </Head>
    <style jsx global>{reset}</style>
    <style jsx global>{generalStyles}</style>
    <style jsx global>{grid}</style>
    <style jsx global>{typography}</style>
    <style jsx global>{mainStyles}</style>
  </Fragment>
)

// Google Analytics script
const googleAnalyticsScript = {
  __html: `
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', '${gaTrackingCode}', 'prismic.io');
ga('require', 'GTM-5ZJXD76');
`}

// Intercom script
const intercomScript = {
  __html: `
window.intercomSettings = {};
window.intercomSettings.app_id = "${intercomId}";
window.intercomSettings.widget = {
  activator: '#help',
  use_counter: true
};    
(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/${intercomId}';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
`}

// Mixpanel script
const mixpanelScript = {
  __html: `
(function(e,a){if(!a.__SV){var b=window;try{var c,l,i,j=b.location,g=j.hash;c=function(a,b){return(l=a.match(RegExp(b+"=([^&]*)")))?l[1]:null};g&&c(g,"state")&&(i=JSON.parse(decodeURIComponent(c(g,"state"))),"mpeditor"===i.action&&(b.sessionStorage.setItem("_mpcehash",g),history.replaceState(i.desiredHash||"",e.title,j.pathname+j.search)))}catch(m){}var k,h;window.mixpanel=a;a._i=[];a.init=function(b,c,f){function e(b,a){var c=a.split(".");2==c.length&&(b=b[c[0]],a=c[1]);b[a]=function(){b.push([a].concat(Array.prototype.slice.call(arguments,
0)))}}var d=a;"undefined"!==typeof f?d=a[f]=[]:f="mixpanel";d.people=d.people||[];d.toString=function(b){var a="mixpanel";"mixpanel"!==f&&(a+="."+f);b||(a+=" (stub)");return a};d.people.toString=function(){return d.toString(1)+".people (stub)"};k="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
for(h=0;h<k.length;h++)e(d,k[h]);a._i.push([b,c,f])};a.__SV=1.2;b=e.createElement("script");b.type="text/javascript";b.async=!0;b.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\\/\\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";c=e.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c)}})(document,window.mixpanel||[]);
mixpanel.init("${mixpanelToken}");
`}

export default Meta
