!function(){var e,t,o,r={3992:function(e,t,o){var r={".":[7061],"./":[7061],"./index":[7061],"./index.js":[7061],"./setup-wizard":[112,194,954,581,215],"./setup-wizard/":[112,194,954,581,215],"./setup-wizard/index":[112,194,954,581,215],"./setup-wizard/index.js":[112,194,954,581,215],"./template-library":[5675,194,954,581,236],"./template-library/":[5675,194,954,581,236],"./template-library/index":[5675,194,954,581,236],"./template-library/index.js":[5675,194,954,581,236]};function n(e){if(!o.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],n=t[0];return Promise.all(t.slice(1).map(o.e)).then((function(){return o(n)}))}n.keys=function(){return Object.keys(r)},n.id=3992,e.exports=n},7061:function(e,t,o){"use strict";o.r(t);var r=o(7329),n=o.n(r),a=o(5518),l=(null===n()||void 0===n()?void 0:n().apps)||{};t.default=function(){var e=function(e){var t=l[e];if(!t.should_display)return"continue";o(3992)("".concat(t.chunk_path)).then((function(o){(0,a.trigger)({event:"gform/apps/before_load/".concat(e),el:document,data:{app:t},native:!1}),o.default(),(0,a.trigger)({event:"gform/apps/after_load/".concat(e),el:document,data:{app:t},native:!1})}))};for(var t in l)e(t);(0,a.consoleInfo)("Gravity Forms Admin: Initialized all apps.")}},2987:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return U}});var r,n=o(7329),a=o.n(n),l=o(7169),s=o(2577),c=o(5518),i=wp.blockEditor,m=wp.components,u=o(8349),f=o(1747),d=o(9662),g=o(1519),p=o.n(g),b=React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 508.3 559.5",width:"100%",height:"100%",focusable:"false","aria-hidden":"true",className:"dashicon dashicon-gravityforms"},React.createElement("g",null,React.createElement("path",{className:"st0",d:"M468,109.8L294.4,9.6c-22.1-12.8-58.4-12.8-80.5,0L40.3,109.8C18.2,122.6,0,154,0,179.5V380\tc0,25.6,18.1,56.9,40.3,69.7l173.6,100.2c22.1,12.8,58.4,12.8,80.5,0L468,449.8c22.2-12.8,40.3-44.2,40.3-69.7V179.6\tC508.3,154,490.2,122.6,468,109.8z M399.3,244.4l-195.1,0c-11,0-19.2,3.2-25.6,10c-14.2,15.1-18.2,44.4-19.3,60.7H348v-26.4h49.9\tv76.3H111.3l-1.8-23c-0.3-3.3-5.9-80.7,32.8-121.9c16.1-17.1,37.1-25.8,62.4-25.8h194.7V244.4z"}))),v=o(2726),_=["label","colors","color","defaultColor","onChange"];function y(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}var h=(null===(r=window)||void 0===r?void 0:r.wp)||{},k=h.components,E=k.__experimentalHStack,C=k.__experimentalItemGroup,x=k.Button,R=k.ColorPalette,w=k.ColorIndicator,T=k.FlexItem,O=k.Dropdown,N=(Object.prototype.hasOwnProperty.call(h,"blockEditor")?h.blockEditor:h.editor).useSetting,P=h.element.useState,S=C,B=E;function j(e){var t,o=e.label,r=e.colors,n=void 0===r?[]:r,a=e.color,c=e.defaultColor,i=e.onChange,m=(0,v.Z)(e,_),f=P(a),d=(0,s.Z)(f,2),g=d[0],p=d[1],b=N("color.palette.theme"),h=N("color.palette.custom"),k=N("color.palette.default"),E=N("color.defaultPalette"),C=function(){var e=[];return n.length&&e.push({name:"Orbital",colors:n}),h&&h.length&&e.push({name:"Custom Colors",colors:h}),b&&b.length&&e.push({name:"Theme Colors",colors:b}),E&&k&&k.length&&e.push({name:"Default Colors",colors:k}),e}(),j={colorValue:g,toggleLabel:o},L={className:(0,u.classnames)({"block-editor-panel-color-gradient-settings__item-group":!0}),isBordered:!0,isSeparated:!0},I=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?y(Object(o),!0).forEach((function(t){(0,l.Z)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):y(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({popoverProps:{placement:"left-end",position:"bottom left",className:(0,u.classnames)({"block-editor-panel-color-gradient-settings__dropdown-content":!0})},className:(0,u.classnames)({"block-editor-panel-color-gradient-settings__dropdown":!0}),renderToggle:(t=j,function(e){var o=e.onToggle,r=e.isOpen,n=t.colorValue,a=t.toggleLabel,l={onClick:o,className:(0,u.classnames)("block-editor-panel-color-gradient-settings__dropdown",{"is-open":r}),"aria-expanded":r};return React.createElement(x,l,function(e){var t=e.colorValue,o=e.indicatorLabel,r={justify:"flex-start"},n={className:(0,u.classnames)({"block-editor-panel-color-gradient-settings__color-indicator":!0}),colorValue:t},a={className:(0,u.classnames)({"block-editor-panel-color-gradient-settings__color-name":!0,title:o})};return React.createElement(B,r,React.createElement(w,n),React.createElement(T,a,o))}({colorValue:n,indicatorLabel:a}))}),renderContent:function(){var e={className:(0,u.classnames)({"block-editor-panel-color-gradient-settings__dropdown-content":!0})},t={colors:C,value:g,onChange:function(e){var t=!e&&c?c:e;p(t),i(t)},__experimentalHasMultipleOrigins:!0};return React.createElement("div",e,React.createElement(R,t))}},m);return React.createElement(S,L,React.createElement(O,I))}function L(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function I(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?L(Object(o),!0).forEach((function(t){(0,l.Z)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):L(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var F=wp.url.addQueryArgs,D=m.__experimentalHeading,z=m.__experimentalText,A=m.__experimentalSpacer,M=(null===a()||void 0===a()?void 0:a()["gravityforms/form"])||{},H=function(e){var t=e.attributes,o=e.setAttributes,r=(0,f.useState)(t.formId),n=(0,s.Z)(r,2),a=n[0],l=n[1],g=(0,f.useState)(!1),v=(0,s.Z)(g,2),_=v[0],y=v[1],h=(0,f.useState)(t.formPreview),k=(0,s.Z)(h,2),E=k[0],C=k[1],x=(0,f.useState)(t.title),R=(0,s.Z)(x,2),w=R[0],T=R[1],O=(0,f.useState)(t.description),N=(0,s.Z)(O,2),P=N[0],S=N[1],B=(0,f.useState)(t.ajax),L=(0,s.Z)(B,2),H=L[0],G=L[1];(0,f.useLayoutEffect)((function(){if(!a&&(0,c.queryToJson)().gfAddBlock){var e=(0,c.queryToJson)().gfAddBlock;o({formId:e}),l(e)}}),[]),(0,f.useLayoutEffect)((function(){if(a){if(!V(a))return o({formId:""}),void y(!0);o({formId:a}),C(!0)}else o({formId:""})}),[a]),(0,f.useEffect)((function(){o({formPreview:E}),o({title:w}),o({description:P}),o({ajax:H})}),[E,w,P,H]);var V=function(e){return M.data.forms.find((function(t){return t.id==e}))},Z=function(){for(var e=[{label:(0,d.__)("Select a Form","gravityforms"),value:""}],t=0;t<M.data.forms.length;t++){var o=M.data.forms[t];e.push({label:o.title,value:o.id})}return e},U=function(e,t){e.preventDefault();var o=F(M.data.adminURL,t);window.open(o,"_blank","noopener")},$=function(e){var t,r,n;if("gform/dialog/confirm"===e.type&&(null==e||null===(t=e.detail)||void 0===t||null===(r=t.instance)||void 0===r||null===(n=r.options)||void 0===n?void 0:n.id)==="restore-default-settings-dialog-"+a){var l=I(I({},M.data.styles.defaults),{},{theme:"orbital"});o(l)}},q=function(){if(!a)return null;var e={page:"gf_edit_forms",id:a},t={page:"gf_edit_forms",id:a,view:"settings"},o={key:"gform-block-custom-controls"},r={key:"gform-block-edit-form-buttton",onClick:function(t){U(t,e)},className:(0,u.classnames)({"gform-block__toolbar-button":!0})},n={text:(0,d.__)("Edit Form","gravityforms")},l={className:(0,u.classnames)({"gform-icon":!0,"gform-icon--create":!0})},s={key:"gform-block-form-settings-button",onClick:function(e){U(e,t)},className:(0,u.classnames)({"gform-block__toolbar-button":!0})},c={text:(0,d.__)("Form Settings","gravityforms")},f={className:(0,u.classnames)({"gform-icon":!0,"gform-icon--cog":!0})};return React.createElement(i.BlockControls,o,React.createElement(m.ToolbarButton,r,React.createElement(m.Tooltip,n,React.createElement("i",l))),React.createElement(m.ToolbarButton,s,React.createElement(m.Tooltip,c,React.createElement("i",f))))},J=function(){if(document.addEventListener("gform/dialog/confirm",$),!M.data.forms||M.data.forms.length<=0)return null;var e=M.data.styles.defaults,t={key:"inspector"},r={title:(0,d.__)("Form Settings","gravityforms")},n={label:(0,d.__)("Form","gravityforms"),value:a,options:Z(),onChange:function(e){return l(e)}},s={label:(0,d.__)("Form Title","gravityforms"),checked:w,onChange:function(){return T(!w)}},g={label:(0,d.__)("Form Description","gravityforms"),checked:P,onChange:function(){return S(!P)}},b={title:(0,d.__)("Form Styles","gravityforms"),initialOpen:!1,className:(0,u.classnames)({"gform-block__panel":!0,"gform-block__form-styles":!0})},v={label:(0,d.__)("Form Theme","gravityforms"),value:Y,options:[{label:(0,d.__)("Default","gravityforms"),value:"gravity"},{label:(0,d.__)("Orbital","gravityforms"),value:"orbital"}],className:(0,u.classnames)({"gform-block__theme-selector":!0}),onChange:function(e){return o({theme:e})}},_={variant:"primary",text:(0,d.__)("Reset Defaults","gravityforms"),className:(0,u.classnames)({"gform-block__theme-reset-defaults":!0}),onClick:function(e){!function(e,t){var o="restore-default-settings-dialog-"+t;new(p())({confirmButtonText:(0,d.__)("Restore Defaults","gravityforms"),content:(0,d.__)("This will restore your form styles back to their default values and cannot be undone. Are you sure you want to continue?","gravityforms"),cancelButtonText:(0,d.__)("Cancel","gravityforms"),closeButtonTitle:(0,d.__)("Close","gravityforms"),id:o,maskBlur:!1,maskTheme:"none",mode:"dialog",onClose:function(){!function(e){var t=document.getElementById(e);if(t){var o=t.closest(".gform-dialog__mask");o&&o.remove()}}(o)},title:(0,d.__)("Restore Default Styles","gravityforms"),titleIconColor:"#DD301D",zIndex:100055}).showDialog()}(0,a)}},y={className:(0,u.classnames)({"gform-alert":!0,"gform-alert--notice":!0,"gform-alert--theme-primary":!0,"gform-alert--inline":!0})},h={ariaHidden:!0,className:(0,u.classnames)({"gform-alert__icon":!0,"gform-icon":!0,"gform-icon--circle-notice-fine":!0})},k={className:(0,u.classnames)({"gform-alert__message-wrap":!0})},x={className:(0,u.classnames)({"gform-alert__message":!0}),dangerouslySetInnerHTML:{__html:(0,c.sprintf)((0,d.__)("Form style options are not available for forms that use %1$slegacy mode%2$s.","gravityforms"),'<a target="_blank" href="'.concat(M.data.adminURL,"?page=gf_edit_forms&view=settings&subview=settings&id=").concat(a,'">'),"</a>")}},R={title:(0,d.__)("Input Styles","gravityforms"),initialOpen:!1,className:(0,u.classnames)({"gform-block__panel":!0})},O={align:"flex-start",className:(0,u.classnames)({"gform-block__components-flex--adjust-gap":!0}),gap:0},N={className:(0,u.classnames)({"gform-block__components-base-control--adjust-label-line-height":!0}),label:(0,d.__)("Size","gravityforms"),value:K,options:[{label:(0,d.__)("Small","gravityforms"),value:"sm"},{label:(0,d.__)("Medium","gravityforms"),value:"md"},{label:(0,d.__)("Large","gravityforms"),value:"lg"}],onChange:function(e){return o({inputSize:e})}},B={className:(0,u.classnames)({"gform-block__components-base-control--adjust-label-line-height":!0}),label:(0,d.__)("Border Radius","gravityforms"),help:(0,d.__)("In pixels.","gravityforms"),value:W,type:"number",onChange:function(e){return o({inputBorderRadius:e})}},L={level:3},I={label:(0,d.__)("Background","gravityforms"),color:te,defaultColor:e.inputBackgroundColor,onChange:function(e){return o({inputBackgroundColor:e})},className:(0,u.classnames)({"gform-block-editor-panel__first-child-palette":!0})},F={label:(0,d.__)("Border","gravityforms"),color:ee,defaultColor:e.inputBorderColor,onChange:function(e){return o({inputBorderColor:e})},className:(0,u.classnames)({"gform-block-editor-panel__middle-child-palette":!0})},U={label:(0,d.__)("Text","gravityforms"),color:oe,defaultColor:e.inputColor,onChange:function(e){return o({inputColor:e})},className:(0,u.classnames)({"gform-block-editor-panel__last-child-palette":!0})},q={marginTop:2},J={backgroundColor:te,textColor:oe},ie={title:(0,d.__)("Label Styles","gravityforms"),initialOpen:!1,className:(0,u.classnames)({"gform-block__panel":!0})},me={label:(0,d.__)("Font Size","gravityforms"),help:(0,d.__)("In pixels.","gravityforms"),value:re,type:"number",onChange:function(e){return o({labelFontSize:e})}},ue={level:3},fe={label:(0,d.__)("Text","gravityforms"),color:ne,defaultColor:e.labelColor,onChange:function(e){return o({labelColor:e})},className:(0,u.classnames)({"gform-block-editor-panel__first-child-palette":!0,"gform-block-editor-panel__last-child-palette":!0})},de={title:(0,d.__)("Description Styles","gravityforms"),initialOpen:!1,className:(0,u.classnames)({"gform-block__panel":!0})},ge={label:(0,d.__)("Font Size","gravityforms"),help:(0,d.__)("In pixels.","gravityforms"),value:ae,type:"number",onChange:function(e){return o({descriptionFontSize:e})}},pe={level:3},be={label:(0,d.__)("Text","gravityforms"),color:le,defaultColor:e.descriptionColor,onChange:function(e){return o({descriptionColor:e})},className:(0,u.classnames)({"gform-block-editor-panel__first-child-palette":!0,"gform-block-editor-panel__last-child-palette":!0})},ve={title:(0,d.__)("Button Styles","gravityforms"),initialOpen:!1,className:(0,u.classnames)({"gform-block__panel":!0})},_e={level:3},ye={label:(0,d.__)("Background","gravityforms"),color:se,defaultColor:e.buttonPrimaryBackgroundColor,onChange:function(e){return o({buttonPrimaryBackgroundColor:e})},className:(0,u.classnames)({"gform-block-editor-panel__first-child-palette":!0})},he={label:(0,d.__)("Text","gravityforms"),color:ce,defaultColor:e.buttonPrimaryColor,onChange:function(e){return o({buttonPrimaryColor:e})},className:(0,u.classnames)({"gform-block-editor-panel__last-child-palette":!0})},ke={marginTop:2},Ee={variant:"muted",size:"subheadline"},Ce={backgroundColor:se,textColor:ce},xe={title:(0,d.__)("Advanced","gravityforms"),initialOpen:!1,className:(0,u.classnames)({"gform-block__panel":!0})},Re={label:(0,d.__)("Preview","gravityforms"),checked:E,onChange:function(){return C(!E)}},we={label:(0,d.__)("AJAX","gravityforms"),checked:H,onChange:function(){return G(!H)}},Te={label:(0,d.__)("Field Values","gravityforms"),value:X,onChange:function(e){return o({fieldValues:e})}},Oe={className:(0,u.classnames)({"gform-block__tabindex":!0}),label:(0,d.__)("Tabindex","gravityforms"),type:"number",value:Q,onChange:function(e){return o({tabindex:e})},placeholder:"-1"};return React.createElement(i.InspectorControls,t,React.createElement(m.PanelBody,r,React.createElement(m.SelectControl,n),V(a)&&React.createElement(f.Fragment,null,React.createElement(m.ToggleControl,s),React.createElement(m.ToggleControl,g))),React.createElement(m.PanelBody,b,V(a)&&!V(a).isLegacyMarkup&&React.createElement(m.SelectControl,v),V(a)&&!V(a).isLegacyMarkup&&"orbital"===Y&&React.createElement(m.Button,_),V(a)&&V(a).isLegacyMarkup&&React.createElement("div",y,React.createElement("span",h),React.createElement("div",k,React.createElement("p",x)))),"orbital"===Y&&V(a)&&!V(a).isLegacyMarkup&&React.createElement(m.PanelBody,R,React.createElement(m.Flex,O,React.createElement(m.FlexBlock,null,React.createElement(m.SelectControl,N)),React.createElement(m.FlexBlock,null,React.createElement(m.TextControl,B))),React.createElement(D,L,(0,d.__)("Colors","gravityforms")),React.createElement(j,I),React.createElement(j,F),React.createElement(j,U),React.createElement(A,q,React.createElement(i.ContrastChecker,J))),"orbital"===Y&&V(a)&&!V(a).isLegacyMarkup&&React.createElement(m.PanelBody,ie,React.createElement(m.TextControl,me),React.createElement(D,ue,(0,d.__)("Colors","gravityforms")),React.createElement(j,fe)),"orbital"===Y&&V(a)&&!V(a).isLegacyMarkup&&React.createElement(m.PanelBody,de,React.createElement(m.TextControl,ge),React.createElement(D,pe,(0,d.__)("Colors","gravityforms")),React.createElement(j,be)),"orbital"===Y&&V(a)&&!V(a).isLegacyMarkup&&React.createElement(m.PanelBody,ve,React.createElement(D,_e,(0,d.__)("Colors","gravityforms")),React.createElement(j,ye),React.createElement(j,he),React.createElement(A,ke,React.createElement(z,Ee,(0,d.__)("Also used for form UI elements such as checkbox and radio.","gravityforms"))),React.createElement(A,ke,React.createElement(i.ContrastChecker,Ce))),a&&React.createElement(m.PanelBody,xe,V(a)&&React.createElement(m.ToggleControl,Re),React.createElement(m.ToggleControl,we),React.createElement(m.TextareaControl,Te),React.createElement(m.TextControl,Oe),React.createElement(f.Fragment,null,(0,c.sprintf)((0,d.__)("Form ID: %s","gravityforms"),a))))},Q=t.tabindex,X=t.fieldValues,Y=(t.imgPreview,t.theme),K=t.inputSize,W=t.inputBorderRadius,ee=t.inputBorderColor,te=t.inputBackgroundColor,oe=t.inputColor,re=t.labelFontSize,ne=t.labelColor,ae=t.descriptionFontSize,le=t.descriptionColor,se=t.buttonPrimaryBackgroundColor,ce=t.buttonPrimaryColor,ie={className:(0,u.classnames)({"gform-block__alert":!0,"gform-block__alert-error":!0})},me={key:"placeholder",className:(0,u.classnames)({"wp-block-embed":!0,"gform-block__placeholder":!0})},ue={className:(0,u.classnames)({"gform-block__placeholder-brand":!0})},fe={className:(0,u.classnames)({"gform-icon":!0})},de={value:a,onChange:function(e){return l(e.target.value)}};if(!t.formId||!E)return React.createElement("div",(0,i.useBlockProps)(),q(),J(),_&&React.createElement("div",ie,React.createElement("p",null,(0,d.__)("The selected form has been deleted or trashed. Please select a new form.","gravityforms"))),React.createElement(m.Placeholder,me,React.createElement("div",ue,React.createElement("div",fe,b),React.createElement("p",null,React.createElement("strong",null,(0,d.__)("Gravity Forms","gravityforms")))),M.data.forms&&M.data.forms.length>0&&React.createElement("form",null,React.createElement("select",de,Z().map((function(e){return React.createElement("option",{key:e.value,value:e.value},e.label)})))),(!M.data.forms||M.data.forms&&0===M.data.forms.length)&&React.createElement("form",null,React.createElement("p",null,(0,d.__)("You must have at least one form to use the block.","gravityforms")))));var ge={key:"form_preview",block:"gravityforms/form",attributes:t};return React.createElement("div",(0,i.useBlockProps)(),q(),J(),React.createElement(m.ServerSideRender,ge))},G=wp.i18n.__,V=wp.blocks.registerBlockType,Z=(null===a()||void 0===a()?void 0:a()["gravityforms/form"])||{},U=function(){var e;(0,c.consoleInfo)("Gravity Forms Admin: Initialized form block."),V("gravityforms/form",{title:G("Gravity Forms","gravityforms"),description:G("Select and display one of your forms.","gravityforms"),category:"embed",supports:{customClassName:!1,className:!1,html:!1},keywords:["gravity forms","form","newsletter","contact"],example:{attributes:{imgPreview:!0}},attributes:(null==Z||null===(e=Z.data)||void 0===e?void 0:e.attributes)||{},icon:b,transforms:{from:[{type:"shortcode",tag:["gravityform","gravityforms"],attributes:{formId:{type:"string",shortcode:function(e){var t=e.named.id;return parseInt(t).toString()}},title:{type:"boolean",shortcode:function(e){return"true"===e.named.title}},description:{type:"boolean",shortcode:function(e){return"true"===e.named.description}},ajax:{type:"boolean",shortcode:function(e){return"true"===e.named.ajax}},tabindex:{type:"string",shortcode:function(e){var t=e.named.tabindex;return isNaN(t)?null:parseInt(t).toString()}}}}]},edit:H,save:function(){return null}})}},1767:function(e,t,o){"use strict";var r,n=o(5518),a=function(){(0,n.consoleInfo)("Gravity Forms Common: Initialized all javascript that targeted document ready.")},l=function(){(0,n.ready)(a)},s=o(5311),c=o.n(s),i=o(2340),m=o.n(i),u=o(7329),f=o.n(u),d=gform.components.admin.html.elements.Loader,g=o.n(d),p={containers:(0,n.getNodes)("page-loader",!0)},b={rendered:!1},v=(null===f()||void 0===f()||null===(r=f().form_settings)||void 0===r?void 0:r.loader)||{},_=function(){m().instances.loaders.pageLoader.hideLoader()},y=function(){b.rendered?m().instances.loaders.pageLoader.showLoader():(m().instances.loaders.pageLoader.init(),b.rendered=!0)},h=o(11),k={closeTrigger:null,container:null,target:null},E={hideTimer:function(){},hideAnimationTimer:function(){}},C={attributes:{},autoHide:!0,autoHideDelay:4e3,closeButton:!0,closeTitle:"",container:"",ctaLink:"",ctaTarget:"_self",ctaText:"",icon:"",message:"",onClose:function(){},onReveal:function(){},position:"bottomleft",speak:!0,type:"normal",wrapperClasses:"gform-snackbar"},x={},R=function(){k.container&&(k.target.style.position="",k.container.parentNode.removeChild(k.container),k.closeTrigger&&k.closeTrigger.removeEventListener("click",w),clearTimeout(E.hideTimer),clearTimeout(E.hideAnimationTimer),k.container=null,k.closeTrigger=null,k.target=null)},w=function(){k.container.classList.remove("gform-snackbar--reveal"),E.hideAnimationTimer=setTimeout((function(){(0,n.trigger)({event:"gform/snackbar/close",native:!1,data:{el:k,options:x,state:E}}),R()}),300)},T=function(e){R(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};x=(0,h.Z)({},C,e),(0,n.trigger)({event:"gform/snackbar/pre_init",native:!1,data:x})}(e),k.target=(0,n.getNodes)(x.container,!1,document,!0)[0],k.target||(0,n.consoleError)("Gform snackBar couldn't find ".concat(x.container," to instantiate in.")),k.target.style.position="relative",k.target.insertAdjacentHTML("beforeend",'\n\t<article\n\t\tclass="'.concat(x.wrapperClasses," gform-snackbar--").concat(x.position," gform-snackbar--").concat(x.type).concat(x.closeButton?" gform-snackbar--has-close":"",'" \n\t\tdata-js="gform-snackbar"\n\t>\n\t\t').concat(x.icon?'<span class="gform-snackbar__icon gform-icon gform-icon--'.concat(x.icon,'"></span>'):"","\n\t\t").concat(x.message?'<span class="gform-snackbar__message">'.concat(x.message,"</span>"):"","\n\t\t").concat(x.ctaLink?'\n\t\t<a \n\t\t\tclass="gform-snackbar__cta"\n\t\t\thref="'.concat(x.ctaLink,'"\n\t\t\ttarget="').concat(x.ctaTarget,'"\n\t\t\t').concat("_blank"===x.ctaTarget?'rel="noopener"':"","\n\t\t>\n\t\t\t").concat(x.ctaText,"\n\t\t</a>\n\t\t"):"","\n\t\t").concat(x.closeButton?'\n\t\t<button \n\t\t\tclass="gform-snackbar__close gform-icon gform-icon--delete"\n\t\t\tdata-js="gform-snackbar-close"\n\t\t\ttitle="'.concat(x.closeTitle,'"\n\t\t></button>\n\t\t'):"","\n\t</article>\n")),k.container=(0,n.getNodes)("gform-snackbar",!1,k.target)[0],k.closeTrigger=(0,n.getNodes)("gform-snackbar-close",!1,k.target)[0],(0,n.setAttributes)(k.container,x.attributes),(0,n.trigger)({event:"gform/snackbar/pre_reveal",native:!1,data:{el:k,options:x,state:E}}),setTimeout((function(){k.container.classList.add("gform-snackbar--reveal"),x.autoHide&&(E.hideTimer=setTimeout((function(){w()}),x.autoHideDelay)),x.speak&&(0,n.speak)(x.message),x.onReveal()}),20),k.closeTrigger&&k.closeTrigger.addEventListener("click",w)},O=function(e){T(e.detail)},N={embedForm:(0,n.getNode)("embed-flyout-trigger"),taggable:(0,n.getNode)(".merge-tag-support",document,!0),postSelect:(0,n.getNodes)("gform-settings-field-select",!0)},P=function(){var e;m().instances=m().instances||{},m().instances.loaders=m().instances.loaders||{},e=v.i18n.loaderText,m().instances.loaders.pageLoader=new(g())({id:"gform-page-loader",position:"sticky",renderOnInit:!1,target:"#wpbody-content",text:(0,n.escapeHtml)(e)}),p.containers.forEach((function(e){"form"===e.tagName.toLowerCase()&&c()(e).on("submit",y)})),document.addEventListener("gform/page_loader/show",y),document.addEventListener("gform/page_loader/hide",_),(0,n.consoleInfo)("Gravity Forms Admin: Initialized page loader."),document.addEventListener("gform/snackbar/render",O),(0,n.consoleInfo)("Gravity Forms Admin: Initialized snackbar component."),N.embedForm&&Promise.all([o.e(194),o.e(848)]).then(o.bind(o,5477)).then((function(e){e.default()})),N.taggable&&Promise.all([o.e(194),o.e(514)]).then(o.bind(o,8579)).then((function(e){e.default()})),N.postSelect.length&&o.e(376).then(o.bind(o,929)).then((function(e){e.default(N.postSelect)})),(0,n.consoleInfo)("Gravity Forms Admin: Initialized all admin components.")},S=o(7061),B=(null===f()||void 0===f()?void 0:f().block_editor)||{},j={formEditor:(0,n.getNodes)("form-editor-wrapper")[0],formSettings:(0,n.getNodes)("form-settings")[0],splashPageModal:(0,n.getNodes)("gf-splash-template")[0],systemReportButton:(0,n.getNodes)("gf-copy-system-report")[0]},L=function(){l(),P(),(0,S.default)(),B.data.is_block_editor&&o.e(319).then(o.bind(o,9877)).then((function(e){e.default()})),j.formEditor&&Promise.all([o.e(194),o.e(954),o.e(355),o.e(42)]).then(o.bind(o,9103)).then((function(e){e.default(j.formEditor)})),!j.formEditor&&(0,n.shouldLoadChunk)("form-saver")&&Promise.all([o.e(194),o.e(954),o.e(355),o.e(646)]).then(o.bind(o,6878)).then((function(e){e.default()})),j.splashPageModal&&o.e(993).then(o.bind(o,5472)).then((function(e){e.default(j.splashPageModal)})),j.systemReportButton&&o.e(736).then(o.bind(o,9792)).then((function(e){e.default(j.systemReportButton)})),(0,n.consoleInfo)("Gravity Forms Admin: Initialized all javascript that targeted document ready.")},I=(null===f()||void 0===f()?void 0:f().block_editor)||{};f().hmr_dev||(o.p=f().public_path),I.data.is_block_editor&&o(2987).default(),(0,n.ready)(L)},9608:function(e){"use strict";e.exports=ajaxurl},7536:function(e){"use strict";e.exports=gf_vars},2340:function(e){"use strict";e.exports=gform},8361:function(e){"use strict";e.exports=gform.components.admin.html.apps.EmbedForm},3068:function(e){"use strict";e.exports=gform.components.admin.html.elements.Button},191:function(e){"use strict";e.exports=gform.components.admin.html.elements.Dropdown},1519:function(e){"use strict";e.exports=gform.components.admin.html.modules.Dialog},5862:function(e){"use strict";e.exports=gform.components.admin.html.modules.Flyout},5872:function(e){"use strict";e.exports=gform.components.admin.react.elements.Box},564:function(e){"use strict";e.exports=gform.components.admin.react.elements.Button},4065:function(e){"use strict";e.exports=gform.components.admin.react.elements.Checkbox},351:function(e){"use strict";e.exports=gform.components.admin.react.elements.Grid},4216:function(e){"use strict";e.exports=gform.components.admin.react.elements.Heading},5718:function(e){"use strict";e.exports=gform.components.admin.react.elements.Icon},4824:function(e){"use strict";e.exports=gform.components.admin.react.elements.Input},5211:function(e){"use strict";e.exports=gform.components.admin.react.elements.Label},9645:function(e){"use strict";e.exports=gform.components.admin.react.elements.Select},405:function(e){"use strict";e.exports=gform.components.admin.react.elements.Tag},6172:function(e){"use strict";e.exports=gform.components.admin.react.elements.Text},5235:function(e){"use strict";e.exports=gform.components.admin.react.elements.Textarea},5595:function(e){"use strict";e.exports=gform.components.admin.react.elements.Toggle},7539:function(e){"use strict";e.exports=gform.components.admin.react.modules.Card},9843:function(e){"use strict";e.exports=gform.components.admin.react.modules.Dialog},89:function(e){"use strict";e.exports=gform.components.admin.react.modules.Flyout},8309:function(e){"use strict";e.exports=gform.components.admin.react.modules.InputGroup},8472:function(e){"use strict";e.exports=gform.components.admin.react.modules.List},4318:function(e){"use strict";e.exports=gform.components.admin.react.modules.NavBar},4819:function(e){"use strict";e.exports=gform.components.admin.react.modules.Video},8349:function(e){"use strict";e.exports=gform.libraries},5518:function(e){"use strict";e.exports=gform.utils},6134:function(e){"use strict";e.exports=gform.utils.react},7329:function(e){"use strict";e.exports=gform_admin_config},5311:function(e){"use strict";e.exports=jQuery},5998:function(e){"use strict";e.exports=wp},4489:function(e){"use strict";e.exports=wp.data},6132:function(e){"use strict";e.exports=wp.editPost},1747:function(e){"use strict";e.exports=wp.element},9662:function(e){"use strict";e.exports=wp.i18n},9841:function(e){"use strict";e.exports=wp.plugins}},n={};function a(e){var t=n[e];if(void 0!==t)return t.exports;var o=n[e]={exports:{}};return r[e](o,o.exports,a),o.exports}a.m=r,e=[],a.O=function(t,o,r,n){if(!o){var l=1/0;for(m=0;m<e.length;m++){o=e[m][0],r=e[m][1],n=e[m][2];for(var s=!0,c=0;c<o.length;c++)(!1&n||l>=n)&&Object.keys(a.O).every((function(e){return a.O[e](o[c])}))?o.splice(c--,1):(s=!1,n<l&&(l=n));if(s){e.splice(m--,1);var i=r();void 0!==i&&(t=i)}}return t}n=n||0;for(var m=e.length;m>0&&e[m-1][2]>n;m--)e[m]=e[m-1];e[m]=[o,r,n]},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,o){return a.f[o](e,t),t}),[]))},a.u=function(e){return({42:"scripts-admin.form-editor",215:"scripts-admin.setup-wizard",236:"scripts-admin.template-library",319:"scripts-admin.block-editor",376:"scripts-admin.post-select",514:"scripts-admin.merge-tags",646:"scripts-admin.form-ajax-save",736:"scripts-admin.system-report",848:"scripts-admin.embed-form",993:"scripts-admin.splash-page"}[e]||e)+"."+{42:"cf06c702f5899c34be10",215:"3cd3ab84b819a092b878",236:"ef25937c5270b9f08b65",319:"7c38b95218e7654872bf",355:"208686d31b904e61799f",376:"1273f0be5ce14985993d",514:"1785cfa423bc58c245a1",581:"35c1ee490923acba36ee",646:"1102c053975306c2c1f6",736:"37805646f3f73f26d5b5",848:"85d99ceb22ee8a9914b1",954:"9b69eab2b016af6f59c3",993:"f8c0bd6bd203e95226d0"}[e]+".js"},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t={},o="gravityforms:",a.l=function(e,r,n,l){if(t[e])t[e].push(r);else{var s,c;if(void 0!==n)for(var i=document.getElementsByTagName("script"),m=0;m<i.length;m++){var u=i[m];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+n){s=u;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",o+n),s.src=e),t[e]=[r];var f=function(o,r){s.onerror=s.onload=null,clearTimeout(d);var n=t[e];if(delete t[e],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((function(e){return e(r)})),o)return o(r)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e}(),function(){var e={223:0};a.f.j=function(t,o){var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var n=new Promise((function(o,n){r=e[t]=[o,n]}));o.push(r[2]=n);var l=a.p+a.u(t),s=new Error;a.l(l,(function(o){if(a.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var n=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+l+")",s.name="ChunkLoadError",s.type=n,s.request=l,r[1](s)}}),"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,n,l=o[0],s=o[1],c=o[2],i=0;if(l.some((function(t){return 0!==e[t]}))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(c)var m=c(a)}for(t&&t(o);i<l.length;i++)n=l[i],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(m)},o=self.webpackChunkgravityforms=self.webpackChunkgravityforms||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}(),a.O(void 0,[194],(function(){return a(8868)}));var l=a.O(void 0,[194],(function(){return a(1767)}));l=a.O(l)}();
//# sourceMappingURL=scripts-admin.js.map