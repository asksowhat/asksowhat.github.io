(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{679:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"闲聊"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闲聊"}},[t._v("#")]),t._v(" 闲聊")]),t._v(" "),a("p",[t._v("最近看到原型模式，老师最先开始举了一个例子，假如每个对象的内容都是一样的，这样的对象需要十个，你要怎么去创建这十个对象？我首先想到的就是我要去"),a("code",[t._v("new")]),t._v("十个，但这绝不是最好的方法。记得以前通过"),a("code",[t._v("java")]),t._v("四大接口之一"),a("code",[t._v("Cloneable")]),t._v("的"),a("code",[t._v("clone")]),t._v("方法创建过对象，原型模式就是用这种方法实现的。")]),t._v(" "),a("p",[t._v("我有一个疑问，当创建一个对象足够简单，原型模式存在的意义是什么？可能写完这个我就明白了。学原型模式必不可少接触深克隆和浅克隆，有区别是因为类的成员变量中包含引用数据（即对象），浅克隆引用数据类型的地址不会改变，深克隆引用数据类型的地址会重新分配。")]),t._v(" "),a("p",[t._v("克隆的两个对象地址是一样的吗？")]),t._v(" "),a("h2",{attrs:{id:"什么是原型模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是原型模式"}},[t._v("#")]),t._v(" 什么是原型模式")]),t._v(" "),a("p",[t._v("原型模式是一种创建型设计模式，Prototype模式允许一个对象再创建另外一个可定制的对象，根本无需知道任何如何创建的细节，工作原理是：通过将一个原型对象传给那个要发动创建的对象，这个要发动创建的对象通过请求原型对象拷贝它们自己来实施创建。")]),t._v(" "),a("h2",{attrs:{id:"原型模式能解决什么问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型模式能解决什么问题"}},[t._v("#")]),t._v(" 原型模式能解决什么问题")]),t._v(" "),a("p",[t._v("某些结构复杂的对象的创建工作（这个是确实，假如创建一个对象很复杂，但是对象的内容是一致的，通过原型模式确实很方便）；由于需求的变化，对象经常面临着剧烈的变化，但是它们却拥有比较稳定的接口（这个概念搞不清楚）。")]),t._v(" "),a("p",[t._v("我觉得能用到的时候，也就是当创建这个对象比较复杂的时候。")]),t._v(" "),a("h2",{attrs:{id:"浅克隆与深克隆"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浅克隆与深克隆"}},[t._v("#")]),t._v(" 浅克隆与深克隆")]),t._v(" "),a("p",[t._v("浅克隆：创建一个新对象，新对象的属性和原来对象完全相同，对于非基本类型属性，仍指向原有属性所指向的对象的内存地址。")]),t._v(" "),a("p",[t._v("深克隆：创建一个新对象，属性中引用的其他对象也会被克隆，不在指向原有对象地址。")]),t._v(" "),a("h2",{attrs:{id:"原型模式的uml图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型模式的uml图"}},[t._v("#")]),t._v(" 原型模式的UML图")]),t._v(" "),a("p",[a("svg",{staticStyle:{cursor:"pointer","max-width":"100%","max-height":"314px"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"451px",viewBox:"-0.5 -0.5 451 314",content:'<mxfile host="app.diagrams.net" modified="2020-09-09T16:04:16.363Z" agent="5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36" etag="GrWW0_nmLpKMNfC1p55G" version="13.6.9"><diagram id="VWP7M5RTWK2UNxNhEXiQ" name="第 1 页">7VrJcts4EP0aVWUOTomr5KMpxUmm7ClXlJmJ5waRkIgKSHBAaMvXp0EA3CUrtmTnoItNNBpNoN97TZDQwJkk248cZfE9izAd2MNoO3CmA9u2rJEH/6Rlpywjz1eGJSeRdqoMM/IDa+NQW1ckwnnDUTBGBcmaxpClKQ5Fw4Y4Z5um24LR5l0ztMQdwyxEtGv9l0QiVtaxParsnzBZxubOln+tehJknPVK8hhFbFMzOR8GzoQzJtRVsp1gKpNn8qLG3e7pLSfGcSqOGTD7OP/7z839Nv5r9t+XyT/88+4muhqrKGtEV3rBA9unEC/I5JTFTufB/38l5xkkiC9JOnBuoHeYbeEvGIvVSvuVYJnqc2t9Am/FFaJkqceFMGHMq5hwtdT/izuTmgElEDCg3dZnGWOBQlyam0MaESEppH2XOe9YjOGBM8HELsO18fO2N9iytu1ZOaN4IWpJ25eV7nz7ZhBzOQWjIhPL2h/2PFOWviFlKX73h/LrpPSp5diNedlrzAUBVd4oGk0LogWaVFM1n4CB14IWGlsQ4L4TLFgqdE2xbN2+RQmhshp9wnSNZVSZN5FQ6VTeW94Qb/dKzSoFDJUPswQLvgMXPcBxteZ10bNGtmpvqhJiXWufuFY+xlqPSFetZRm6EjZcaG3/gs4tpyP0CUtDjgUuobE7Wc83JKEoxSaTuseqpV6L2Qn6EQpjQqM7tGMrucJcoPC7aQUx4+QHhEUm89DNDVy23/CYyZFgljzkWBL8waBhtUz3aNtwvEO50IaQUYqynMzLZShCB0wIlminU+DveQ38HfM0q+Pv9+BvbKfH3+0p9C20KSmQzgVn38uHnUySFNOEUQYwT1NWOLWU1wY/IVFEi2AZCkm6/CrJML2yKstdMXDqVJYvOg3SBJREAimYJCYUzTF9YDkRhMn4XPkGGSOpKHLlBQNvWli4AGbDIhApwMIA/wbn4lhkD8ini7fG1/aPg/ds6vZ60D1Ug1vIyyd0iXwL6V8HXym/ibPbxdltVuwYKIPTHuybGAeQ1snwvSfRtifQtqr22xHAcY8jgCHKyRlw/XR5ty7l/Uzl3X/z6m5dqvsLxH39exd3+1Lcz1vcD+P/5rW9u3WbUCJXdKnnp6nn4/bbmnMc4paR5skh37efy0qVX0T/QtG7Jyn6ZxO9f3minw1cr+drzGs+0Ud71K3KOjzRL2o+LeDHbtDPpmarT84ScpZhjqRIzD5uzSDQBf/T4j9+62pu9Um+BTJOoxt5YAWtiKCEpdHXWH6DD6DjtvicXaQbWmbPJRGqfbiGDPHdt3rjUY6B3OvmdFvGkK2daW2J+Fa7ro2CVjVINswYNXscdQ7PWnsuWCFb8RAfyI2usrCZXOJDEHv9EPdhyjEFUa2bc+sDVYd7kBSuvd+3NoTuuPXirtakR9m1I7dWoPLsb18gtehOoIJj5RpfQLvuZ6FDtJtTJnftQYTyGEclkfrZV5yn1NlnWFQy57FOnF4WlYytkfSxTuA9jD0h+8zByJP0G78a/bxRkzX2c+nXDuTar0y/vtPlc9FvD5WGr0gl+7ej0shvvdq6z6SSP3wi0LOpBM3qNxDKvfolifPhJw==</diagram></mxfile>',onclick:"(function(svg){var src=window.event.target||window.event.srcElement;while (src!=null&&src.nodeName.toLowerCase()!='a'){src=src.parentNode;}if(src==null){if(svg.wnd!=null&&!svg.wnd.closed){svg.wnd.focus();}else{var r=function(evt){if(evt.data=='ready'&&evt.source==svg.wnd){svg.wnd.postMessage(decodeURIComponent(svg.getAttribute('content')),'*');window.removeEventListener('message',r);}};window.addEventListener('message',r);svg.wnd=window.open('https://viewer.diagrams.net/?client=1&edit=_blank');}}})(this);"}},[a("defs",[a("clipPath",{attrs:{id:"mx-clip-279-289-152-26-0"}},[a("rect",{attrs:{x:"279",y:"289",width:"152",height:"26"}})]),a("clipPath",{attrs:{id:"mx-clip-279-39-152-26-0"}},[a("rect",{attrs:{x:"279",y:"39",width:"152",height:"26"}})]),a("clipPath",{attrs:{id:"mx-clip-4-144-152-26-0"}},[a("rect",{attrs:{x:"4",y:"144",width:"152",height:"26"}})]),a("clipPath",{attrs:{id:"mx-clip-4-178-152-26-0"}},[a("rect",{attrs:{x:"4",y:"178",width:"152",height:"26"}})]),a("clipPath",{attrs:{id:"mx-clip-4-204-152-26-0"}},[a("rect",{attrs:{x:"4",y:"204",width:"152",height:"26"}})])]),a("g",[a("rect",{attrs:{x:"260",y:"112",width:"190",height:"88",fill:"#ffffff",stroke:"#000000","pointer-events":"all"}}),a("g",{attrs:{transform:"translate(-0.5 -0.5)"}},[a("switch",[a("foreignObject",{staticStyle:{overflow:"visible","text-align":"left"},attrs:{"pointer-events":"none",width:"100%",height:"100%",requiredFeatures:"http://www.w3.org/TR/SVG11/feature#Extensibility"}},[a("div",{staticStyle:{display:"flex","align-items":"unsafe flex-start","justify-content":"unsafe flex-start",width:"192px",height:"88px","padding-top":"112px","margin-left":"260px"},attrs:{xmlns:"http://www.w3.org/1999/xhtml"}},[a("div",{staticStyle:{"box-sizing":"border-box","font-size":"0","text-align":"left",width:"192px",height:"88px",overflow:"hidden"}},[a("div",{staticStyle:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"#000000","line-height":"1.2","pointer-events":"all",width:"100%",height:"100%","white-space":"nowrap"}},[a("p",{staticStyle:{margin:"0px","margin-top":"4px","text-align":"center"}},[a("i",[t._v("<<Interface>>")]),a("br"),a("b",[t._v("Prototype")])]),a("p",{staticStyle:{margin:"0px","margin-left":"4px"}},[a("br")]),a("hr",{attrs:{size:"1"}}),a("p",{staticStyle:{margin:"0px","margin-left":"4px"}},[t._v("+ clone(): Prototype"),a("br")])])])])]),a("text",{attrs:{x:"260",y:"124",fill:"#000000","font-family":"Helvetica","font-size":"12px"}},[t._v("<<Interface>>...")])],1)]),a("path",{attrs:{d:"M 275 276 L 275 250 L 435 250 L 435 276",fill:"#ffffff",stroke:"#000000","stroke-miterlimit":"10","pointer-events":"all"}}),a("path",{attrs:{d:"M 275 276 L 275 310 L 435 310 L 435 276",fill:"none",stroke:"#000000","stroke-miterlimit":"10","pointer-events":"none"}}),a("path",{attrs:{d:"M 275 276 L 435 276",fill:"none",stroke:"#000000","stroke-miterlimit":"10","pointer-events":"none"}}),a("g",{attrs:{fill:"#000000","font-family":"Helvetica","font-weight":"bold","pointer-events":"none","text-anchor":"middle","font-size":"12px"}},[a("text",{attrs:{x:"354.5",y:"267.5"}},[t._v("ConcretePrototype2")])]),a("path",{attrs:{d:"M 275 280 L 435 280",fill:"none",stroke:"#000000","stroke-miterlimit":"10","pointer-events":"none"}}),a("g",{attrs:{fill:"#000000","font-family":"Helvetica","pointer-events":"none","clip-path":"url(#mx-clip-279-289-152-26-0)","font-size":"12px"}},[a("text",{attrs:{x:"280.5",y:"301.5"}},[t._v("+ clone(): Prototype")])]),a("path",{attrs:{d:"M 275 26 L 275 0 L 435 0 L 435 26",fill:"#ffffff",stroke:"#000000","stroke-miterlimit":"10","pointer-events":"none"}}),a("path",{attrs:{d:"M 275 26 L 275 60 L 435 60 L 435 26",fill:"none",stroke:"#000000","stroke-miterlimit":"10","pointer-events":"none"}}),a("path",{attrs:{d:"M 275 26 L 435 26",fill:"none",stroke:"#000000","stroke-miterlimit":"10","pointer-events":"none"}}),a("g",{attrs:{fill:"#000000","font-family":"Helvetica","font-weight":"bold","pointer-events":"none","text-anchor":"middle","font-size":"12px"}},[a("text",{attrs:{x:"354.5",y:"17.5"}},[t._v("ConcretePrototype1")])]),a("path",{attrs:{d:"M 275 30 L 435 30",fill:"none",stroke:"#000000","stroke-miterlimit":"10","pointer-events":"none"}}),a("g",{attrs:{fill:"#000000","font-family":"Helvetica","pointer-events":"none","clip-path":"url(#mx-clip-279-39-152-26-0)","font-size":"12px"}},[a("text",{attrs:{x:"280.5",y:"51.5"}},[t._v("+ clone(): Prototype")])]),a("path",{attrs:{d:"M 0 139 L 0 113 L 160 113 L 160 139",fill:"#ffffff",stroke:"#000000","stroke-miterlimit":"10","pointer-events":"none"}}),a("path",{attrs:{d:"M 0 139 L 0 225 L 160 225 L 160 139",fill:"none",stroke:"#000000","stroke-miterlimit":"10","pointer-events":"none"}}),a("path",{attrs:{d:"M 0 139 L 160 139",fill:"none",stroke:"#000000","stroke-miterlimit":"10","pointer-events":"none"}}),a("g",{attrs:{fill:"#000000","font-family":"Helvetica","font-weight":"bold","pointer-events":"none","text-anchor":"middle","font-size":"12px"}},[a("text",{attrs:{x:"79.5",y:"130.5"}},[t._v("Client")])]),a("g",{attrs:{fill:"#000000","font-family":"Helvetica","pointer-events":"none","clip-path":"url(#mx-clip-4-144-152-26-0)","font-size":"12px"}},[a("text",{attrs:{x:"5.5",y:"156.5"}},[t._v("+ prototype: Prototype")])]),a("path",{attrs:{d:"M 0 169 L 160 169",fill:"none",stroke:"#000000","stroke-miterlimit":"10","pointer-events":"none"}}),a("g",{attrs:{fill:"#000000","font-family":"Helvetica","pointer-events":"none","clip-path":"url(#mx-clip-4-178-152-26-0)","font-size":"12px"}},[a("text",{attrs:{x:"5.5",y:"190.5"}},[t._v("+ Client()")])]),a("g",{attrs:{fill:"#000000","font-family":"Helvetica","pointer-events":"none","clip-path":"url(#mx-clip-4-204-152-26-0)","font-size":"12px"}},[a("text",{attrs:{x:"5.5",y:"216.5"}},[t._v("+ operation(): void")])]),a("path",{attrs:{d:"M 260 156 L 185.97 153.04",fill:"none",stroke:"#000000","stroke-miterlimit":"10","pointer-events":"none"}}),a("path",{attrs:{d:"M 160.99 152.04 L 173.77 145.19 L 185.97 153.04 L 173.18 159.89 Z",fill:"none",stroke:"#000000","stroke-miterlimit":"10","pointer-events":"none"}}),a("path",{attrs:{d:"M 355 250 L 355 214.12",fill:"none",stroke:"#000000","stroke-miterlimit":"10","stroke-dasharray":"3 3","pointer-events":"none"}}),a("path",{attrs:{d:"M 355 201.12 L 361.5 214.12 L 348.5 214.12 Z",fill:"none",stroke:"#000000","stroke-miterlimit":"10","pointer-events":"none"}}),a("path",{attrs:{d:"M 355 60 L 355 97.88",fill:"none",stroke:"#000000","stroke-miterlimit":"10","stroke-dasharray":"3 3","pointer-events":"none"}}),a("path",{attrs:{d:"M 355 110.88 L 348.5 97.88 L 361.5 97.88 Z",fill:"none",stroke:"#000000","stroke-miterlimit":"10","pointer-events":"none"}})]),a("switch",[a("g",{attrs:{requiredFeatures:"http://www.w3.org/TR/SVG11/feature#Extensibility"}}),a("a",{attrs:{transform:"translate(0,-5)","xlink:href":"https://desk.draw.io/support/solutions/articles/16000042487",target:"_blank"}},[a("text",{attrs:{"text-anchor":"middle","font-size":"10px",x:"50%",y:"100%"}},[t._v("Viewer does not support full SVG 1.1")])])])])]),t._v(" "),a("p",[t._v("一共有三个角色，客户角色，抽象原型角色，具体原型角色，居于此就可以构建一个很好的原型模式。")]),t._v(" "),a("h2",{attrs:{id:"浅克隆"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浅克隆"}},[t._v("#")]),t._v(" 浅克隆")]),t._v(" "),a("p",[t._v("接下来用代码实现一下浅克隆与深克隆。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sheep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ShallowClone")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CloneNotSupportedException")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" person1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"小黑"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        person1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" person2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" person1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" person2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cloneable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Head")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CloneNotSupportedException")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Head")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cloneable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CloneNotSupportedException")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("输出结果为：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("org.example.sheep.Person@677327b6\norg.example.sheep.Person@14ae5a5\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])])]),a("p",[a("code",[t._v("true")]),t._v("代表引用数据相同，这个就是浅克隆。")]),t._v(" "),a("h2",{attrs:{id:"深克隆"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#深克隆"}},[t._v("#")]),t._v(" 深克隆")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sheep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DeepClone")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CloneNotSupportedException")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" person1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"小黑"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        person1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" person2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" person1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" person2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cloneable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Head")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CloneNotSupportedException")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" person "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Head")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cloneable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CloneNotSupportedException")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("输出结果为：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sheep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("Person")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@677327b6")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sheep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("Person")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@14ae5a5")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n")])])]),a("p",[a("code",[t._v("false")]),t._v("代表引用数据不相同，这个就是深克隆。")])])}),[],!1,null,null,null);s.default=e.exports}}]);