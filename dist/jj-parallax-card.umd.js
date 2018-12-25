(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.JjParallaxCard = {})));
}(this, (function (exports) { 'use strict';

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    var script = {
        name:'JJParallaxCard',
        props:{
            lightColor:{
                type:String,
                default:'white',
            },
            clickEffect:{
                type:Boolean,
                default:false,
            }
        },
        data: function data(){
            return {
                rx:0,
                ry:0,
                zindex:-20,
            }
        },
        methods:{
            onMouseMove: function onMouseMove(e){
                var boundingClientRect = this.$refs.parallaxCard.getBoundingClientRect();
                var x = e.clientX - boundingClientRect.left;
                var y = e.clientY - boundingClientRect.top;
                var xc = boundingClientRect.width/2;
                var yc = boundingClientRect.height/2;
                var dx = x - xc;
                var dy = y - yc;
                this.rx = (dy/(-boundingClientRect.height*0.05)) + "deg";
                this.ry = (dx/(boundingClientRect.width*0.05)) + "deg";
            },
            onMouseLeave: function onMouseLeave(e){
                this.rx = '0deg';
                this.ry = '0deg';
            },
            onMouseDown: function onMouseDown(e){
                if(this.clickEffect) {
                    this.zindex = -35;
                }
            },
            onMouseUp: function onMouseUp(e){
                if(this.clickEffect) {
                    this.zindex = -20;
                }
            },
            onClick: function onClick(e){
                this.$emit('click',e);
            },
        },
        
    };

    /* script */
                var __vue_script__ = script;
                
    /* template */
    var __vue_render__ = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        {
          ref: "parallaxCard",
          staticClass: "parallax-card",
          style: {
            transform:
              "rotateX(" +
              _vm.rx +
              ") rotateY(" +
              _vm.ry +
              ") translateZ(" +
              _vm.zindex +
              "px)",
            "--light": "" + _vm.ry,
            "--light-color": "" + _vm.lightColor
          },
          on: {
            click: _vm.onClick,
            mousemove: function($event) {
              _vm.onMouseMove($event);
            },
            mouseleave: function($event) {
              _vm.onMouseLeave($event);
            },
            mousedown: function($event) {
              _vm.onMouseDown($event);
            },
            mouseup: function($event) {
              _vm.onMouseUp($event);
            }
          }
        },
        [
          _c("div", { staticClass: "container" }, [_vm._t("content")], 2),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "front",
              style: {
                transform:
                  "rotateX(" +
                  this.rx +
                  ") rotateY(" +
                  this.ry +
                  ") translateZ(-20px)"
              }
            },
            [_vm._t("front")],
            2
          )
        ]
      )
    };
    var __vue_staticRenderFns__ = [];
    __vue_render__._withStripped = true;

      /* style */
      var __vue_inject_styles__ = function (inject) {
        if (!inject) { return }
        inject("data-v-47ea3b27_0", { source: "\n.parallax-card[data-v-47ea3b27] {\n    margin: 20px;\n    position: relative;\n    cursor: pointer;\n    user-select: none;\n    z-index: 0;\n}\n.parallax-card[data-v-47ea3b27]::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    box-shadow: 0 5px 15px rgba(0, 0, 0, .3);\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n    will-change: transform;\n\tborder-radius: 4px;\n    z-index: 1;\n}\n.parallax-card[data-v-47ea3b27]:hover::before {\n    background:linear-gradient(var(--light),var(--light-color) 1% ,rgba(255,255,255,0) 60%);\n}\n.parallax-card .container[data-v-47ea3b27] {\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    border-radius: 4px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.parallax-card .front[data-v-47ea3b27] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    overflow: scroll;\n    border-radius: 4px;\n    background-color: transparent;\n    will-change: transform;\n    z-index: 2;\n}\n\n\n\n", map: {"version":3,"sources":["/Users/zaka/Desktop/vue/public/jj-parallax-card/jj-parallax-card/src/jj-parallax-card.vue"],"names":[],"mappings":";AAmEA;IACA,aAAA;IACA,mBAAA;IACA,gBAAA;IACA,kBAAA;IACA,WAAA;CACA;AAGA;IACA,YAAA;IACA,mBAAA;IACA,OAAA;IACA,QAAA;IACA,UAAA;IACA,SAAA;IACA,yCAAA;IACA,gDAAA;IACA,uBAAA;CACA,mBAAA;IACA,WAAA;CAEA;AAEA;IACA,wFAAA;CACA;AAEA;IACA,YAAA;IACA,aAAA;IACA,iBAAA;IACA,mBAAA;IACA,cAAA;IACA,oBAAA;IACA,wBAAA;CACA;AAEA;IACA,mBAAA;IACA,OAAA;IACA,QAAA;IACA,UAAA;IACA,SAAA;IACA,iBAAA;IACA,mBAAA;IACA,8BAAA;IACA,uBAAA;IACA,WAAA;CACA","file":"jj-parallax-card.vue","sourcesContent":["<template>\n    <div @click=\"onClick\" ref=\"parallaxCard\" class=\"parallax-card\" :style=\"{transform:`rotateX(${rx}) rotateY(${ry}) translateZ(${zindex}px)`, '--light':`${ry}`, '--light-color':`${lightColor}`}\" @mousemove=\"onMouseMove($event)\" @mouseleave=\"onMouseLeave($event)\" @mousedown=\"onMouseDown($event)\" @mouseup=\"onMouseUp($event)\">\n        <div class=\"container\">\n            <slot name=\"content\"/>\n        </div>\n        <div class=\"front\" :style=\"{transform:`rotateX(${this.rx}) rotateY(${this.ry}) translateZ(-20px)`}\">\n            <slot name=\"front\"/>\n        </div>\n    </div>\n</template>\n\n<script>\nexport default {\n    name:'JJParallaxCard',\n    props:{\n        lightColor:{\n            type:String,\n            default:'white',\n        },\n        clickEffect:{\n            type:Boolean,\n            default:false,\n        }\n    },\n    data(){\n        return {\n            rx:0,\n            ry:0,\n            zindex:-20,\n        }\n    },\n    methods:{\n        onMouseMove(e){\n            let boundingClientRect = this.$refs.parallaxCard.getBoundingClientRect()\n            let x = e.clientX - boundingClientRect.left\n            let y = e.clientY - boundingClientRect.top\n            let xc = boundingClientRect.width/2\n            let yc = boundingClientRect.height/2\n            let dx = x - xc\n            let dy = y - yc\n            this.rx = `${ dy/(-boundingClientRect.height*0.05) }deg`\n            this.ry = `${ dx/(boundingClientRect.width*0.05) }deg`\n        },\n        onMouseLeave(e){\n            this.rx = '0deg'\n            this.ry = '0deg'\n        },\n        onMouseDown(e){\n            if(this.clickEffect) {\n                this.zindex = -35\n            }\n        },\n        onMouseUp(e){\n            if(this.clickEffect) {\n                this.zindex = -20\n            }\n        },\n        onClick(e){\n            this.$emit('click',e)\n        },\n    },\n    \n}\n</script>\n\n\n<style scoped>\n.parallax-card {\n    margin: 20px;\n    position: relative;\n    cursor: pointer;\n    user-select: none;\n    z-index: 0;\n}\n\n\n.parallax-card::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    box-shadow: 0 5px 15px rgba(0, 0, 0, .3);\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n    will-change: transform;\n\tborder-radius: 4px;\n    z-index: 1;\n\n}\n\n.parallax-card:hover::before {\n    background:linear-gradient(var(--light),var(--light-color) 1% ,rgba(255,255,255,0) 60%);\n}\n\n.parallax-card .container {\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    border-radius: 4px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.parallax-card .front {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    overflow: scroll;\n    border-radius: 4px;\n    background-color: transparent;\n    will-change: transform;\n    z-index: 2;\n}\n\n\n\n</style>\n\n"]}, media: undefined });

      };
      /* scoped */
      var __vue_scope_id__ = "data-v-47ea3b27";
      /* module identifier */
      var __vue_module_identifier__ = undefined;
      /* functional template */
      var __vue_is_functional_template__ = false;
      /* component normalizer */
      function __vue_normalize__(
        template, style, script$$1,
        scope, functional, moduleIdentifier,
        createInjector, createInjectorSSR
      ) {
        var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

        // For security concerns, we use only base name in production mode.
        component.__file = "/Users/zaka/Desktop/vue/public/jj-parallax-card/jj-parallax-card/src/jj-parallax-card.vue";

        if (!component.render) {
          component.render = template.render;
          component.staticRenderFns = template.staticRenderFns;
          component._compiled = true;

          if (functional) { component.functional = true; }
        }

        component._scopeId = scope;

        {
          var hook;
          if (style) {
            hook = function(context) {
              style.call(this, createInjector(context));
            };
          }

          if (hook !== undefined) {
            if (component.functional) {
              // register for functional component in vue file
              var originalRender = component.render;
              component.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context)
              };
            } else {
              // inject component registration as beforeCreate hook
              var existing = component.beforeCreate;
              component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
            }
          }
        }

        return component
      }
      /* style inject */
      function __vue_create_injector__() {
        var head = document.head || document.getElementsByTagName('head')[0];
        var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
        var isOldIE =
          typeof navigator !== 'undefined' &&
          /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

        return function addStyle(id, css) {
          if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

          var group = isOldIE ? css.media || 'default' : id;
          var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

          if (!style.ids.includes(id)) {
            var code = css.source;
            var index = style.ids.length;

            style.ids.push(id);

            if (isOldIE) {
              style.element = style.element || document.querySelector('style[data-group=' + group + ']');
            }

            if (!style.element) {
              var el = style.element = document.createElement('style');
              el.type = 'text/css';

              if (css.media) { el.setAttribute('media', css.media); }
              if (isOldIE) {
                el.setAttribute('data-group', group);
                el.setAttribute('data-next-index', '0');
              }

              head.appendChild(el);
            }

            if (isOldIE) {
              index = parseInt(style.element.getAttribute('data-next-index'));
              style.element.setAttribute('data-next-index', index + 1);
            }

            if (style.element.styleSheet) {
              style.parts.push(code);
              style.element.styleSheet.cssText = style.parts
                .filter(Boolean)
                .join('\n');
            } else {
              var textNode = document.createTextNode(code);
              var nodes = style.element.childNodes;
              if (nodes[index]) { style.element.removeChild(nodes[index]); }
              if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
              else { style.element.appendChild(textNode); }
            }
          }
        }
      }
      /* style inject SSR */
      

      
      var component = __vue_normalize__(
        { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
        __vue_inject_styles__,
        __vue_script__,
        __vue_scope_id__,
        __vue_is_functional_template__,
        __vue_module_identifier__,
        __vue_create_injector__,
        undefined
      );

    // Import vue component

    // install function executed by Vue.use()
    function install(Vue) {
      if (install.installed) { return; }
      install.installed = true;
      Vue.component('JjParallaxCard', component);
    }

    // Create module definition for Vue.use()
    var plugin = {
      install: install,
    };

    // To auto-install when vue is found
    /* global window global */
    var GlobalVue = null;
    if (typeof window !== 'undefined') {
      GlobalVue = window.Vue;
    } else if (typeof global !== 'undefined') {
      GlobalVue = global.Vue;
    }
    if (GlobalVue) {
      GlobalVue.use(plugin);
    }

    // It's possible to expose named exports when writing components that can
    // also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
    // export const RollupDemoDirective = component;

    exports.default = component;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
