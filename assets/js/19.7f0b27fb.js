(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{181:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("查看帮助")]),t._v(" "),t._m(3),t._m(4),t._v(" "),a("p",[t._v("查看版本")]),t._v(" "),t._m(5),t._m(6),t._v(" "),a("p",[t._v("显示详细日志")]),t._v(" "),t._m(7),t._m(8),t._v(" "),a("p",[t._v("指定mock服务端口")]),t._v(" "),t._m(9),t._m(10),t._v(" "),a("p",[t._v("指定代理服务端端口")]),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),a("p",[t._v("启动时不打开浏览器")]),t._v(" "),t._m(15),t._v(" "),a("p",[t._v("使用指定配置文件启动lyrebird")]),t._v(" "),t._m(16),t._v(" "),a("p",[t._v("指定输出日志文件的位置")]),t._v(" "),t._m(17),t._v(" "),a("p",[t._v("从指定路径加载"),a("router-link",{attrs:{to:"./checker.html"}},[t._v("检查器")]),t._v("("),a("router-link",{attrs:{to:"./checker.html"}},[t._v("Checker")]),t._v(")脚本\n用于调试检查器脚本")],1),t._v(" "),t._m(18),t._v(" "),a("p",[t._v("从源码启动插件工程，用于插件开发和调试。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"命令行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令行","aria-hidden":"true"}},[this._v("#")]),this._v(" 命令行")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("在通过pip安装Lyrebird之后，可以直接使用lyrebird命令行启动。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"h-help"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#h-help","aria-hidden":"true"}},[this._v("#")]),this._v(" -h --help")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" lyrebird -h\nusage: lyrebird "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-V"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--mock MOCK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--proxy PROXY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--data DATA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-c CONFIG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--log LOG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--script SCRIPT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--plugin PLUGIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("src,plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\npositional arguments:\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("src,plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\noptional arguments:\n  -h, --help            show this "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("help")]),t._v(" message and "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("exit")]),t._v("\n  -V, --version         show lyrebird version\n  -v                    Show verbose log\n  --mock MOCK           Set mock server port, default port is 4272\n  --proxy PROXY         Set proxy server port, default port is 9090\n  --data DATA           Set data dir, default is "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./data/"')]),t._v("\n  -b, --no_browser      Start without "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" a browser\n  -c CONFIG, --config CONFIG\n                        Start with a config file. Default is\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"~/.lyrebird/conf.json"')]),t._v("\n  --log LOG             Set output log "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" path\n  --script SCRIPT       Set a checker script path\n  --plugin PLUGIN       Set a plugin project path\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"v-version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-version","aria-hidden":"true"}},[this._v("#")]),this._v(" -V --version")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[this._v(">")]),this._v(" lyrebird -V\nLyrebird 1.6.0\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"v-vvv"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-vvv","aria-hidden":"true"}},[this._v("#")]),this._v(" -v -vvv")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# lyrebird 将以静默模式启动")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" lyrebird\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# lyrebird 将以简单日志模式启动")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" lyrebird -v\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# lyrebird 将以详细日志模式启动")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" lyrebird -vvv\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"mock"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mock","aria-hidden":"true"}},[this._v("#")]),this._v(" --mock")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# 指定mock服务端口,lyrebird将在9000端口开启mock服务端口。(默认端口是9090)")]),this._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v(">")]),this._v(" lyrebird --mock 9000\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"proxy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#proxy","aria-hidden":"true"}},[this._v("#")]),this._v(" --proxy")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# 指定代理服务的端口,lyrebird将在8080端口开启代理服务端口。(默认端口是4272)")]),this._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v(">")]),this._v(" lyrebird --proxy 8080\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data","aria-hidden":"true"}},[this._v("#")]),this._v(" --data")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# 指定mock数据根目录")]),this._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v(">")]),this._v(" lyrebird --data ~/work/mockdata\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"b-no-browser"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#b-no-browser","aria-hidden":"true"}},[this._v("#")]),this._v(" -b --no_browser")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"c-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c-config","aria-hidden":"true"}},[this._v("#")]),this._v(" -c --config")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"log"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#log","aria-hidden":"true"}},[this._v("#")]),this._v(" --log")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"script"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#script","aria-hidden":"true"}},[this._v("#")]),this._v(" --script")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugin","aria-hidden":"true"}},[this._v("#")]),this._v(" --plugin")])}],!1,null,null,null);s.default=r.exports}}]);