(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{555:function(e,a,t){"use strict";t.r(a);var s=t(3),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("解决Gradle build时出现 Cause: unable to find valid certification path to requested target 错误")])]),e._v(" "),t("h2",{attrs:{id:"简述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简述"}},[e._v("#")]),e._v(" 简述")]),e._v(" "),t("p",[e._v("今天遇到了一个问题，AS在构建项目时就出现这个错误，从网上找说是因为，什么证书问题，一想这么麻烦，在自己电脑上从未出现这样的问题，安装步骤都是一样的，环境也都改的差不多了，按照往常的步骤，在部署时就是会出现这个错误，很迷。")]),e._v(" "),t("p",[e._v("下面是我参考的方法，但是两个都不一定有用，因为我用的时候是失败的，至于第二个还有错别字，我有点读不懂，但确实是这里来的一个偶然的发现。")]),e._v(" "),t("h2",{attrs:{id:"第一个方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一个方法"}},[e._v("#")]),e._v(" 第一个方法")]),e._v(" "),t("p",[e._v("修改项目的 "),t("code",[e._v("build.gradle")]),e._v(" 文件")]),e._v(" "),t("div",{staticClass:"language-md extra-class"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[e._v("allprojects {\n    repositories {\n        google()\n        jcenter()\n    }\n}\n")])])]),t("p",[e._v("修改后")]),e._v(" "),t("div",{staticClass:"language-md extra-class"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[e._v("allprojects {\n    repositories {\n        google()\n        jcenter()\n        //新添加的\n        mavenCentral()\n        mavenLocal()\n    }\n}\n")])])]),t("p",[e._v("起初是一点也不能下载，但是加上这个之后会下载一部分，但是还是不行，不知道清除缓存之后行不行，没有试过。")]),e._v(" "),t("h2",{attrs:{id:"第二个方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二个方法"}},[e._v("#")]),e._v(" 第二个方法")]),e._v(" "),t("p",[e._v("修改AS的Gradle配置")]),e._v(" "),t("div",{staticClass:"language-md extra-class"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[e._v("路径\nFile | Settings | Build, Execution, Deployment | Gradle\n找到Gradle配置页\n将 Global Gradle settings中的Offine work前面的对勾去掉，Apply保存。\n最后然后 Build | Clean Project。\n")])])]),t("p",[e._v("这个方法很奇怪，默认的情况下 "),t("code",[e._v("Offine work")]),e._v(" 前面的对勾是没有打上的，我参考的那篇文章写的是 "),t("code",[e._v("对勾去点")]),e._v(" 我就默认以为打错了，但是为什么要写上呢？")]),e._v(" "),t("h2",{attrs:{id:"我解决的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#我解决的方法"}},[e._v("#")]),e._v(" 我解决的方法")]),e._v(" "),t("p",[e._v("开始我没有发现我找到的就是gradle的配置页，因此就有了这一种方法。")]),e._v(" "),t("div",{staticClass:"language-md extra-class"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[e._v("路径\nFile | Settings | Build, Execution, Deployment | Gradle | Android Studio\n找到 Enable embedded Maven repository，将前面打上对勾，然后Apply保存，OK。\n")])])]),t("p",[e._v("修改项目的 "),t("code",[e._v("build.gradle")]),e._v(" 文件")]),e._v(" "),t("p",[e._v("将")]),e._v(" "),t("div",{staticClass:"language-md extra-class"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[e._v("buildscript {\n    repositories {\n        google()\n        jcenter()\n    }\n}\n")])])]),t("p",[e._v("和")]),e._v(" "),t("div",{staticClass:"language-md extra-class"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[e._v("allprojects {\n    repositories {\n        google()\n        jcenter()\n    }\n}\n")])])]),t("p",[e._v("修改为")]),e._v(" "),t("div",{staticClass:"language-md extra-class"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[e._v("buildscript {\n    repositories {\n        //google()\n        //jcenter()\n        maven { url 'https://maven.aliyun.com/repository/google' }\n        maven{ url 'https://maven.aliyun.com/repository/jcenter'}\n    }\n}\n")])])]),t("p",[e._v("和")]),e._v(" "),t("div",{staticClass:"language-md extra-class"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[e._v("allprojects {\n    repositories {\n        //google()\n        //jcenter()\n        maven { url 'https://maven.aliyun.com/repository/google' }\n        maven{ url 'https://maven.aliyun.com/repository/jcenter'}\n    }\n}\n")])])]),t("p",[e._v("但是我并不知道为什么能解决这个问题，于是我想查了一下 "),t("code",[e._v("Enable embedded Maven repository")]),e._v(" 有什么作用，但是并无所获。")]),e._v(" "),t("p",[e._v("这句中文意思是 "),t("code",[e._v("启用嵌入式Maven存储库")]),e._v(" ，根据字面意思我并不理解实际有何作用，但是确实可以解决遇到的问题。")])])}),[],!1,null,null,null);a.default=n.exports}}]);