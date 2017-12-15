function sovetnikChanger(backgroundColor, backgroundImage) {
  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
  if (!MutationObserver) return;

  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (!mutation.addedNodes.length) return;
      var addedNode = mutation.addedNodes[0];

      if (addedNode && (addedNode.nodeType === 1) && (addedNode.tagName === 'DIV') && addedNode.id && addedNode.className && (addedNode.id === addedNode.className)) {
        var firstNodeChild = addedNode.firstChild;
        if (firstNodeChild) {
          if (!backgroundColor) backgroundColor = '#fff';
          var css = '.sovetnik-changer:after{content:""!important;position:absolute!important;top:0!important;right:0!important;left:0!important;bottom:-1px!important;z-index:2147483647!important;';
          if (backgroundImage && (typeof backgroundImage === 'string')) css += 'background:'+ backgroundColor+' url("'+ backgroundImage + '") center no-repeat/contain!important;cursor:pointer!important;}';
          else css += 'background-color:'+backgroundColor+'!important;cursor:default!important;}';
          var style = document.createElement('style');
          style.type = 'text/css';
          document.head.appendChild(style);
          style.appendChild(document.createTextNode(css));
          firstNodeChild.className += ' sovetnik-changer';
          document.documentElement.className += ' sovetnik-on-page';
          observer.disconnect();
        }
      }
    });
  });

  observer.observe(document.body, {childList: true});
}

sovetnikChanger();
