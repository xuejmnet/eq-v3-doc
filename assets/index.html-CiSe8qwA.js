import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as a,o as c}from"./app-Bqn_XFga.js";const i={};function n(d,e){return c(),t("div",null,e[0]||(e[0]=[a("<p><code>eq</code>内置了大量的函数工具方便用户只需要记录一整api即可适配所有的数据库,包含字符串相关，数字相关，时间相关，数学函数Math表达式等</p><p><code>eq</code>跟随数据库将属性分成如下几大类型</p><ul><li><code>String</code> 对应java <code>String</code>类型</li><li><code>Number</code> 对应java的 <code>Long</code>、<code>Integer</code>、<code>BigDecimal</code>...</li><li><code>DateTime</code> 对应java的 <code>LocalDateTime</code>、<code>LocalDate</code>、<code>Date</code>...</li><li><code>Boolean</code> 对应java的 <code>Boolean</code></li><li><code>Any</code> 对应java的 <code>List</code>或者其他未知类型</li><li><code>JsonMap</code>(未实现)</li><li><code>JsonArray</code>(未实现)</li></ul><p>不同系统之间拥有不同的函数和编译时类型接受比如<code>String</code>的比较只能是<code>String</code>，每个系统都拥有自己的函数,当然也可以使用<code>toStr</code>,<code>toNumber</code>等函数转成对应函数或者使用<code>asAny</code>转成任意类型后可以使用任意函数，区别是<code>toxxxx</code>是数据库层面的函数<code>asAny()</code>或<code>asAnyType(Long.class)</code>是编译时欺骗编译器行为</p><p>聚合函数筛选,比如<code>o.column().aggregateFunction().filter()</code></p><ul><li>avg</li><li>sum</li><li>max</li><li>min</li><li>count</li><li>joining</li></ul><p>各个函数之间支持链式调用,并且支持循环嵌套使用</p>",7)]))}const m=o(i,[["render",n],["__file","index.html.vue"]]),p=JSON.parse('{"path":"/func/","title":"内置函数","lang":"zh-CN","frontmatter":{"title":"内置函数","description":"eq内置了大量的函数工具方便用户只需要记录一整api即可适配所有的数据库,包含字符串相关，数字相关，时间相关，数学函数Math表达式等 eq跟随数据库将属性分成如下几大类型 String 对应java String类型 Number 对应java的 Long、Integer、BigDecimal... DateTime 对应java的 LocalDat...","head":[["meta",{"property":"og:url","content":"https://github.com/dromara/easy-query/func/"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:title","content":"内置函数"}],["meta",{"property":"og:description","content":"eq内置了大量的函数工具方便用户只需要记录一整api即可适配所有的数据库,包含字符串相关，数字相关，时间相关，数学函数Math表达式等 eq跟随数据库将属性分成如下几大类型 String 对应java String类型 Number 对应java的 Long、Integer、BigDecimal... DateTime 对应java的 LocalDat..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-04-16T15:49:21.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-16T15:49:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"内置函数\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-04-16T15:49:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuejmnet\\",\\"url\\":\\"https://github.com/xuejmnet\\"}]}"]]},"headers":[],"git":{"createdTime":1743948043000,"updatedTime":1744818561000,"contributors":[{"name":"xuejiaming","username":"xuejiaming","email":"326308290@qq.com","commits":3,"url":"https://github.com/xuejiaming"}]},"readingTime":{"minutes":0.93,"words":280},"filePathRelative":"func/README.md","localizedDate":"2025年4月6日","autoDesc":true}');export{m as comp,p as data};
