import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,d as s,o as t}from"./app-Bqn_XFga.js";const n={};function l(d,e){return t(),i("div",null,e[0]||(e[0]=[s(`<h2 id="jdbctypehandlermanager" tabindex="-1"><a class="header-anchor" href="#jdbctypehandlermanager"><span>JdbcTypeHandlerManager</span></a></h2><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>appendHandler</td><td>参数1:指定需要处理的类型,参数2:具体的处理<code>typeHandler</code>,参数3:是否需要替换掉原先的如果原先的存在的话</td></tr><tr><td>getHandler</td><td>根据类型获取对应的<code>typeHandler</code>处理器</td></tr><tr><td>getHandlerByHandlerClass</td><td>根据<code>TypeHandler</code>类型获取对应的<code>typeHandler</code>处理器</td></tr></tbody></table><h2 id="jdbctypehandler" tabindex="-1"><a class="header-anchor" href="#jdbctypehandler"><span>JdbcTypeHandler</span></a></h2><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>getValue</td><td>获取对应的结果</td></tr><tr><td>setParameter</td><td>设置jdbc参数</td></tr></tbody></table><h2 id="如何添加" tabindex="-1"><a class="header-anchor" href="#如何添加"><span>如何添加</span></a></h2><ul><li>首先创建自己的JdbcTypeHandler</li><li>启动时进行替换</li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">JdbcTypeHandlerManager</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> jdbcTypeHandlerManager </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> easyQuery</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getRuntimeContext</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getJdbcTypeHandlerManager</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">jdbcTypeHandlerManager</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">appendHandler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">CustomPropertyType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> CustomPropertyTypeHandler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(),</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="指定列添加" tabindex="-1"><a class="header-anchor" href="#指定列添加"><span>指定列添加</span></a></h2><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> User</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Column</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">typeHandler</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> CustomPropertyTypeHandler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">class</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> CustomPropertyType</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9)]))}const p=a(n,[["render",l],["__file","type-handler.html.vue"]]),k=JSON.parse('{"path":"/adv/type-handler.html","title":"自定义TypeHandler","lang":"zh-CN","frontmatter":{"title":"自定义TypeHandler","order":11,"description":"JdbcTypeHandlerManager JdbcTypeHandler 如何添加 首先创建自己的JdbcTypeHandler 启动时进行替换 指定列添加","head":[["meta",{"property":"og:url","content":"https://github.com/dromara/easy-query/adv/type-handler.html"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:title","content":"自定义TypeHandler"}],["meta",{"property":"og:description","content":"JdbcTypeHandlerManager JdbcTypeHandler 如何添加 首先创建自己的JdbcTypeHandler 启动时进行替换 指定列添加"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-04-04T13:29:01.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-04T13:29:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"自定义TypeHandler\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-04-04T13:29:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuejmnet\\",\\"url\\":\\"https://github.com/xuejmnet\\"}]}"]]},"headers":[{"level":2,"title":"JdbcTypeHandlerManager","slug":"jdbctypehandlermanager","link":"#jdbctypehandlermanager","children":[]},{"level":2,"title":"JdbcTypeHandler","slug":"jdbctypehandler","link":"#jdbctypehandler","children":[]},{"level":2,"title":"如何添加","slug":"如何添加","link":"#如何添加","children":[]},{"level":2,"title":"指定列添加","slug":"指定列添加","link":"#指定列添加","children":[]}],"git":{"createdTime":1743773341000,"updatedTime":1743773341000,"contributors":[{"name":"xuejiaming","username":"xuejiaming","email":"326308290@qq.com","commits":1,"url":"https://github.com/xuejiaming"}]},"readingTime":{"minutes":0.49,"words":148},"filePathRelative":"adv/type-handler.md","localizedDate":"2025年4月4日","autoDesc":true}');export{p as comp,k as data};
