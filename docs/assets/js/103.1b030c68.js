(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{562:function(t,o,e){"use strict";e.r(o);var p=e(4),s=Object(p.a)({},(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("天空不会永远黑暗，当乌云退却的时候，蓝天上灿烂的阳光就会照亮大地。")])]),t._v(" "),e("p",[t._v("很早以来都有这样的想法，有一天，能够在手机上写博客，github作为我的后台。虽然手机上通过浏览器也可以写，但是一方面得忍受网速，另一方面格式比较复杂，手机上不好操作。")]),t._v(" "),e("p",[t._v("曾在网络上找过类似的编辑器，没找到，倒是有个在线的，大概也是通过类似的token授权的方式commit，有很大的bug每隔几分钟就会commit一次，编码格式也有点小问题，果断丢弃。很早就知道github有官方的API接口，以前可能也看到过创建新文件的API接口，但是那时候也不知道怎么用，就想找个现成的。")]),t._v(" "),e("p",[t._v("github官方也出了app，但是可能因为定位的原因，功能并不是那么完善，一直想的commit也没有，不过我很喜欢它的界面风格。")]),t._v(" "),e("p",[t._v("接口文档有了，其实做起来用不难，首先需要在仓库申请一个token，知道用户名，仓库名，分支，文件要保存的路径信息，要明确定位到这个commit的位置。需要将上面的信息保存在本地，以备每次请求时使用。文章分为头和内容，每次写这个头比较麻烦，其实每次修改就那几个地方，获取到之后，后面业务代码再拼装成合乎规范的格式。")]),t._v(" "),e("p",[t._v("发送网络请求也很难受，完全没有在浏览器端那么方便，不能查看错误请求的参数信息。Android发送网络请求我还不是很熟，就寻求一个网络框架，找到了volley，使用非常的简单，创建一个请求队列，创建请求，将请求添加到请求队列中，只需要简简单单的三步，get请求还没什么问题，还很舒服，到了post请求的时候，就黑暗了，一直报一个400错误，参数错误，百般修改，查，无解。")]),t._v(" "),e("p",[t._v("无奈换成HttpsURLConnect，这个相比较就复杂一点，但是只适用于post，get请求仍然用volley。我觉得就是复杂在多线程，Android3.0开始，就不能在主线程进行网络请求，意味着每个网络请求得多开一个子线程，一些控件还不可以在子线程出现，Toast，Adapter等等，意味着不能很好的提示，莫名的错误，很奇怪的一些原因，简简单单两个请求get，put，使用两种方式实现。")]),t._v(" "),e("p",[t._v("还有就是页面的自适应问题，看着手机里定位备忘录，滑动非常流畅，操作舒服，在一看自己的，输着输着，焦点已经跑到了软键盘的下面，键盘弹起和收缩需要做自适应，疯狂百度中，只是把布局往上顶，中间文本区的滑动仍有些小问题，键盘弹起，滑不到底部。不过在忍受范围内。")]),t._v(" "),e("p",[t._v("总体来说我也比较满意，解决了自己的需求，完成了一个愿望。")])])}),[],!1,null,null,null);o.default=s.exports}}]);