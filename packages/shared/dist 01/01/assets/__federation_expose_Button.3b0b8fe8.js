import { importShared } from './__federation_fn_import.js';
import { r as react } from './index.0af8a52d.js';

const Button$1 = '';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=react.exports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

(function (module) {

	{
	  module.exports = reactJsxRuntime_production_min;
	}
} (jsxRuntime));

const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;

const React = await importShared('react');
const {useState} = React;
const Button = ({
  caption = "Shared Button 01",
  cb
}) => {
  const [count, setCount] = useState(0);
  console.log("\u{1F680} ~ count:", count);
  const handleClick = () => {
    setCount(count + 1);
    return cb(count);
  };
  return /* @__PURE__ */ jsxs("button", {
    className: "shared-btn",
    onClick: handleClick,
    children: [caption, " ", count]
  });
};

export { jsx as a, Button as default, jsxs as j };
