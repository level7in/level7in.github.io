(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"6Gk8":function(e,t,a){"use strict";a("0mN4");var r=a("SJLA"),i=a("q1tI"),n=a.n(i),s=a("9eSz"),o=a.n(s),l=a("p3AD");t.a=function(){var e=r.data,t=e.site.siteMetadata.author;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(1)}},n.a.createElement(o.a,{fixed:e.avatar.childImageSharp.fixed,alt:t,style:{marginRight:Object(l.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,"Written by ",n.a.createElement("strong",null,t),n.a.createElement("br",null),"This is < level7in's Blog  />"))}},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("0mN4");var r=a("5NKs");t.__esModule=!0,t.default=void 0;var i,n=r(a("v06X")),s=r(a("XEEL")),o=r(a("uDP2")),l=r(a("j8BX")),d=r(a("q1tI")),c=r(a("17x9")),A=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},u=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},f=Object.create({}),g=function(e){var t=A(e),a=u(t);return f[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,h=m&&window.IntersectionObserver,b=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function y(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function v(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},B=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)})).join("")+"<img "+d+s+o+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},j=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(N,(0,l.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},N=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,A=e.loading,u=e.draggable,f=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},f,{onLoad:s,onError:c,ref:t,loading:A,draggable:u,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));N.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var O=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=m&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!p&&h&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||m&&(p||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=A(e),a=u(t),f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=A(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,u=void 0===c?{}:c,f=e.placeholderClassName,g=e.fluid,p=e.fixed,m=e.backgroundColor,h=e.durationFadeIn,b=e.Tag,y=e.itemProp,w=e.loading,I=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,l.default)({opacity:O?1:0,transition:R?"opacity "+h+"ms":"none"},o),C="boolean"==typeof m?"lightgray":m,x={transitionDelay:h+"ms"},Q=(0,l.default)({opacity:this.state.imgLoaded?0:1},R&&x,{},o,{},u),T={title:t,alt:this.state.isVisible?"":a,style:Q,className:f,itemProp:y};if(g){var M=g,k=M[0];return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),C&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&x)}),k.base64&&d.default.createElement(j,{src:k.base64,spreadProps:T,imageVariants:M,generateSources:S}),k.tracedSVG&&d.default.createElement(j,{src:k.tracedSVG,spreadProps:T,imageVariants:M,generateSources:v}),this.state.isVisible&&d.default.createElement("picture",null,E(M),d.default.createElement(N,{alt:a,title:t,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:B((0,l.default)({alt:a,title:t,loading:w},k,{imageVariants:M}))}}))}if(p){var Y=p,z=Y[0],V=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},n);return"inherit"===n.display&&delete V.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},C&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:C,width:z.width,opacity:this.state.imgLoaded?0:1,height:z.height},R&&x)}),z.base64&&d.default.createElement(j,{src:z.base64,spreadProps:T,imageVariants:Y,generateSources:S}),z.tracedSVG&&d.default.createElement(j,{src:z.tracedSVG,spreadProps:T,imageVariants:Y,generateSources:v}),this.state.isVisible&&d.default.createElement("picture",null,E(Y),d.default.createElement(N,{alt:a,title:t,width:z.width,height:z.height,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:B((0,l.default)({alt:a,title:t,loading:w},z,{imageVariants:Y}))}}))}return null},t}(d.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),L=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});O.propTypes={resolutions:R,sizes:L,fixed:c.default.oneOfType([R,c.default.arrayOf(R)]),fluid:c.default.oneOfType([L,c.default.arrayOf(L)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var C=O;t.default=C},SJLA:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAYAQACAwAAAAAAAAAAAAAAAAACBAABA//aAAwDAQACEAMQAAABtnOYFdqcW7wpvIl//8QAHBAAAgICAwAAAAAAAAAAAAAAAAIBAxITECEi/9oACAEBAAEFAnbFdmU6y7o88PQlg9cNB//EABkRAAEFAAAAAAAAAAAAAAAAAAEAAhARIf/aAAgBAwEBPwF2lWZ//8QAGBEAAwEBAAAAAAAAAAAAAAAAAQIRABD/2gAIAQIBAT8BSqJoO//EABwQAAICAgMAAAAAAAAAAAAAAAABEBECITFhcf/aAAgBAQAGPwJelNHLMehRuynH/8QAHBABAAMAAgMAAAAAAAAAAAAAAQARIUFRYZGx/9oACAEBAAE/IU4q0yWIwdjE3IW1qvY0oD75jGfkzyQvJU//2gAMAwEAAgADAAAAEAP/AMD/xAAZEQACAwEAAAAAAAAAAAAAAAAAARARMWH/2gAIAQMBAT8QRWHUex//xAAZEQACAwEAAAAAAAAAAAAAAAAAARAhMWH/2gAIAQIBAT8QawOYsj//xAAcEAEBAQEAAgMAAAAAAAAAAAABEQAhMVFBYYH/2gAIAQEAAT8QUiiQpcs23rO/WYl/GYuCUPhZ4wmY5FK9dZMu+dQSbfFcWBANwNCetJ73/9k=","width":50,"height":50,"src":"/static/070136b72d7ea0a41db1ba34cab27e29/30d3a/profile-pic.jpg","srcSet":"/static/070136b72d7ea0a41db1ba34cab27e29/30d3a/profile-pic.jpg 1x,\\n/static/070136b72d7ea0a41db1ba34cab27e29/66c95/profile-pic.jpg 1.5x,\\n/static/070136b72d7ea0a41db1ba34cab27e29/aacbd/profile-pic.jpg 2x"}}},"site":{"siteMetadata":{"author":"level7in","social":{"github":"level7in"}}}}}')},yZlL:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return p}));a("91GP");var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),s=a("N1om"),o=a.n(s),l=a("6Gk8"),d=a("8k0H"),c=a("vrFN"),A=a("p3AD"),u=a("BlQ/"),f=a.n(u);var g=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,r=a.previous,s=a.next;return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{location:this.props.location,title:t},i.a.createElement(c.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),i.a.createElement("article",null,i.a.createElement("header",null,i.a.createElement("h1",{style:{marginTop:Object(A.a)(1),marginBottom:0}},e.frontmatter.title),i.a.createElement("div",{style:Object.assign({},Object(A.b)(-.2),{marginBottom:Object(A.a)(1),marginTop:Object(A.a)(.25)}),className:f.a.postMeta},i.a.createElement("div",null,e.frontmatter.date),i.a.createElement("div",{className:f.a.postReadTime},"· ",e.timeToRead," min"," "),i.a.createElement("div",{className:f.a.postTags},e.frontmatter.tags.map((function(t){return i.a.createElement(n.Link,{to:"/tags/"+o()(t),style:{textDecoration:"none"},key:e.frontmatter.date+"-"+t},i.a.createElement("div",{className:f.a.tag},t))}))))),i.a.createElement("section",{dangerouslySetInnerHTML:{__html:e.html}}),i.a.createElement("hr",{style:{marginBottom:Object(A.a)(1)}}),i.a.createElement(l.a,null)),i.a.createElement("nav",{className:f.a.prevNext},r&&i.a.createElement(n.Link,{to:r.fields.slug,rel:"prev",className:f.a.prev},r.frontmatter.title),s&&i.a.createElement(n.Link,{to:s.fields.slug,rel:"next",className:f.a.next},s.frontmatter.title))),e.tableOfContents&&i.a.createElement("div",{className:f.a.toc,dangerouslySetInnerHTML:{__html:e.tableOfContents}}))},r}(i.a.Component);t.default=g;var p="3601308343"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-dd58932c833fe8ad6bcc.js.map