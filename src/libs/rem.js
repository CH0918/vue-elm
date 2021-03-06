// if (document.documentElement.getAttribute('size')) {
//   var win = window,
//     count = document.documentElement.getAttribute('size') / 100,
//     maxWidth = document.documentElement.getAttribute('size');
// } else {
//   var win = window,
//     count = 7.5,
//     maxWidth = 750;
// }
// (function(win, count, maxWidth) {
//   return new (function() {
//     var SetSize = (win.SetSize = this),
//       docHtml = document.documentElement,
//       screenRatio,
//       width,
//       scale;
//     count = count || 7.5;
//     maxWidth = maxWidth || 750;

//     this.fontSize = 0;

//     var setup = function() {
//       var isApp =
//         (win.navigator.appVersion.match(/android/gi),
//         win.navigator.appVersion.match(/iphone/gi));
//       screenRatio = win.devicePixelRatio;
//       screenRatio =
//         typeof win.screenRatio === 'undefined'
//           ? isApp
//             ? screenRatio >= 3
//               ? 3
//               : screenRatio >= 2
//               ? 2
//               : 1
//             : 1
//           : win.screenRatio;
//       //scale = 1/screenRatio;
//       scale = 1;
//       createMeta();
//     };
//     var createMeta = function() {
//       document.write(
//         '<meta name="viewport" content="initial-scale=' +
//           scale +
//           ', maximum-scale=' +
//           scale +
//           ', minimum-scale=' +
//           scale +
//           ', width=device-width, user-scalable=no" />'
//       );
//       document.write('<style>body,input,textarea{font-size:.3rem;}</style>');
//       maxWidth = screenRatio * maxWidth;
//       readSize();
//       bindEvents();
//     };
//     var readSize = function() {
//       width = win.innerWidth || document.documentElement.clientWidth;
//       //修改OPPO bug
//       var ua = navigator.userAgent.toLowerCase();
//       if (ua.indexOf('oppo') >= 0 || ua.indexOf('vivo') >= 0) {
//         width = document.documentElement.clientWidth;
//       }

//       if (!width && !!document.body) {
//         width = document.body.clientWidth;
//       } else if (!width) {
//         return false;
//       }
//       width = Math.min(width, maxWidth);
//       SetSize.fontSize = width / count;
//       docHtml.style.fontSize = SetSize.fontSize + 'px';
//     };
//     var bindEvents = function() {
//       win.addEventListener(
//         'resize',
//         function() {
//           readSize();
//         },
//         false
//       );
//     };

//     this.getFontSize = function() {
//       return SetSize.fontSize;
//     };

//     this.getScreenRatio = function() {
//       return screenRatio;
//     };

//     this.getEmSize = function(px) {
//       return Math.floor((px / SetSize.fontSize) * 100) / 100;
//     };

//     setup();
//   })();
// })(win, count, maxWidth);
(function(doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      // 20指的是根元素字体的大小，750指的是设计稿的宽度大小;这样设置后还原设计稿可以根据设计稿的尺寸来写代码了
      docEl.style.fontSize = 20 * (clientWidth / 750) + 'px';
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
