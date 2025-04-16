import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,d as s,o as d}from"./app-Bqn_XFga.js";const a={};function n(l,t){return d(),i("div",null,t[0]||(t[0]=[s(`<h1 id="可配置参数选项" tabindex="-1"><a class="header-anchor" href="#可配置参数选项"><span>可配置参数选项</span></a></h1><p>在使用前希望用户可以首先查看一遍可选择配置项,有利于了解如何进行优化</p><h2 id="默认配置项" tabindex="-1"><a class="header-anchor" href="#默认配置项"><span>默认配置项</span></a></h2><table><thead><tr><th>配置名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>database</td><td><code>DatabaseEnum.DEFAULT</code></td><td>默认使用符合SQL92的语法,如果您的数据库在<code>easy-query</code>的支持数据库范围内请选择正确的您在使用的数据库</td></tr><tr><td>deleteThrow</td><td><code>true</code></td><td><code>easy-query</code>为了针对数据安全进行了默认的不允许物理删除,并不是不可以执行delete操作而是不可以在执行delete后生成delete语句,建议使用逻辑删除来规避。比如<code>delete from t_user where uid=1</code> 在使用逻辑删除后会变成<code>update t_user set deleted=1 where uid=1</code>使用逻辑删除框架默认实现该功能,用户还是一样使用<code>deletable</code>方法来调用执行</td></tr><tr><td>nameConversion</td><td><code>underlined</code></td><td>目前有两个选择当然用户也可以自行实现接口<code>NameConversion</code>,目前可选<code>default</code>、<code>underlined</code>、<code>upper_underlined</code>、<code>lower_camel_case</code>、<code>upper_camel_case</code>,启用<code>default</code>表示默认的对象和数据库映射关系为属性名如属性名<code>userAge</code>那么对应数据库也是<code>userAge</code>列名,<code>underlined</code>表示采用下划线<code>userAge</code>将对应数据库<code>user_age</code>列,当然全局设置了后面也可以在<code>@Column</code>上进行手动指定对应的列名</td></tr><tr><td>insertStrategy</td><td><code>ONLY_NOT_NULL_COLUMNS</code></td><td><code>insert</code>命名默认采用非null列插入,如果一张表存在<code>id</code>和<code>name</code>那么当<code>name</code>为null列时生成的sql将不会指定<code>name</code>列比如<code>insert into t_user (id) values(?)</code>如果<code>name</code>列不是null,那么生成的sql将是<code>insert into t_user (id,name) values(?,?)</code>,如果插入集合内既有部分列null也有部分列非null那么调用batch会生成n条sql,将sql一样的合并到一起,所以按自己需求选择即可(默认的配置就很好了)</td></tr><tr><td>updateStrategy</td><td><code>ALL_COLUMNS</code></td><td>默认update命令生成的语句将是对整个对象的所有列进行更新,不会判断是否为null,如果需要可以自行设置是否null、not null或者all columns更新</td></tr><tr><td>insertBatchThreshold</td><td>1024</td><td>如果insertable一次性添加对象集合大于等于1024个那么会对其进行相同sql进行合并提高执行效率,链接字符串需要添加<code>rewriteBatchedStatements=true</code>(mysql),可以通过调用insert或者update的batch方法来手动使用或者禁用,比如大于等于3,不要问为什么不默认<code>batch</code>因为<code>batch</code>部分jdbc驱动或者数据库不会返回正确的受影响行数</td></tr><tr><td>updateBatchThreshold</td><td>1024</td><td>如果updatable一次性添加对象集合大于等于1024个那么会对其进行相同sql进行合并提高执行效率,链接字符串需要添加<code>rewriteBatchedStatements=true</code>(mysql),可以通过调用insert或者update的batch方法来手动使用或者禁用,比如大于等于3,不要问为什么不默认<code>batch</code>因为<code>batch</code>部分jdbc驱动或者数据库不会返回正确的受影响行数</td></tr><tr><td>logClass</td><td>-</td><td><code>spring-boot</code>下默认是<code>com.easy.query.sql.starter.logging.Slf4jImpl</code>实现如果你是非<code>spring-boot</code>可以自行实现或者使用控制台日志<code>LogFactory.useStdOutLogging()</code></td></tr><tr><td>queryLargeColumn</td><td><code>true</code></td><td>默认依然查询被标记为<code>@Column</code>下<code>large</code>的列，如果需要不查询建议在设置为<code>large</code>的前提下将对应列设置为<code>@UpdateIgnore</code>并且<code>updateSetInTrackDiff = true</code>防止在全列更新后导致未查询结果也被更新为null</td></tr><tr><td>printSql</td><td><code>true</code></td><td>是否打印执行sql,这个和log不一样,因为考虑到有时候可能需要查看sql而不是将log输出,所以如歌设置为true,那么执行的sql和执行的结果将会以<code>log.info()</code>被记录到日志里面,如果您没有设置log那么一样看不到对应的执行sql</td></tr><tr><td>defaultTrack</td><td><code>false</code></td><td>默认是否使用追踪模式,如果为<code>true</code>那么只需要开启当前上下文追踪,或者<code>SpringBoot</code>下使用<code>@EasyQueryTrack</code>那么默认就会调用<code>asTracking()</code></td></tr><tr><td>relationGroupSize</td><td>512</td><td>include的关联查询单次查询最多支持的关联id,如果超出将会分为两个语句执行,比如大于等于1,可以单独在<code>.configure(o-&gt;o.setGroupSize(20))</code>处设置</td></tr><tr><td>noVersionError</td><td>true</td><td>当对象存在版本号并且是表达式更新的那么如果不添加版本号<code>withVersion</code>将会报错,必须要设置对应的版本号,如果不希望报错可以通过<code>ignoreVersion</code>来忽略</td></tr><tr><td>keepNativeStyle</td><td>false</td><td><code>false</code>:表示默认行为,<code>sqlNativeSegment</code>中如果纯在参数行为,那么默认单引号字符串模板需要改成双单引号,因为底层format采用的是<code>MessageFormat</code>.如果配置为<code>true</code>,那么默认将单引号改为双单引号,用户输入的表达式将会和执行的一致,当然可以在调用时调用<code>keepStyle</code>或者将单引号改为双单引号来处理</td></tr><tr><td>warningColumnMiss</td><td><code>true</code></td><td>当jdbc的resultSet对应的coluName无法映射到entity属性上时将会以log.warning进行日志输出，<code>true</code>:表示警告.<code>false</code>:表示不警告</td></tr><tr><td>sqlParameterPrint</td><td>DEFAULT</td><td>sql参数打印可选MYBATIS模式多一个逗号后的空格</td></tr><tr><td>mapToBeanStrict</td><td>true</td><td>jdbc结果集映射到bean是否使用属性严格模式</td></tr><tr><td>defaultSchema</td><td>null</td><td>当entity的schema为空时切defaultSchema不为空时采用defaultSchema</td></tr><tr><td>resultSizeLimit</td><td>-1</td><td>限制全局拉取数据至多多少条,小于等于0时不生效,如果设置100后续有查询需要放大可以单独在<code>.configure(o-&gt;o.setResultSizeLimit(100000))</code>处设置</td></tr><tr><td>mapKeyConversion</td><td>-</td><td>当使用map返回结果时resultSet转成map的key如何处理,默认支持全大写全小写去掉下划线也可以保留下划线</td></tr><tr><td>printNavSql</td><td>true</td><td>关联查询是否打印二次子查询的sql</td></tr><tr><td>propertyMode</td><td><code>PropertyModeEnum.FIRST_LOWER</code></td><td>表示entity属性是首字母小写(为了兼容lambda和lambdakt的模式),还有一个就是<code>PropertyModeEnum.SAME_AS_ENTITY</code>如果你是entity模式那么建议使用这个</td></tr><tr><td>relationTableAppend</td><td><code>RelationTableAppendEnum.SMART</code></td><td><code>SMART</code>表示智能添加<code>relationTable</code>隐式join吗，<code>DEFAULT</code>则需要代码执行的时候不执行到导航属性需要<code>if</code>代码块包裹</td></tr><tr><td>mappingStrategy</td><td><code>EntityMappingStrategyEnum.COLUMN_ONLY</code></td><td>对象间的映射关系,默认以<code>列名</code>映射,可以选择<code>属性名</code>或者<code>列名+属性名</code></td></tr></tbody></table><h2 id="分表分库特有配置" tabindex="-1"><a class="header-anchor" href="#分表分库特有配置"><span>分表分库特有配置</span></a></h2><table><thead><tr><th>配置名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>connectionMode</td><td><code>SYSTEM_AUTO</code></td><td>默认框架将链接分片的链接模式改为自动,框架会自动处理,无需用户指定,当然链接模式用户也可以自行指定,1.<code>MEMORY_STRICTLY</code>内存严格模式,就是说如果存在跨表或者跨库查询那么本次查询将会严格控制内存,尽可能的一次性查询所有的表,那么针对单个库如果查询所有表每个表都需要一个<code>connection</code>所以可能会单次查询耗尽链接池的链接甚至不够,所以一般会和下面的配置参数<code>maxShardingQueryLimit</code>配合作为限制,2.<code>CONNECTION_STRICTLY</code>连接数限制,就是还是以<code>maxShardingQueryLimit</code>作为最大链接数尽可能少的使用连接数去执行跨分片的查询归并,主要是影响分片后的聚合模式,是采用流失聚合还是内存聚合，一般用户无需设置。</td></tr><tr><td>maxShardingQueryLimit❗️</td><td><code>5</code></td><td>假设单次查询涉及到跨13张表查询,因为查询未带分片键,所以本次查询会将13张同数据库下的表进行分组以没5张为一组分成3组最后一组为3张表,当前查询会一次性获取5个链接这5个链接会通过<code>defaultDataSourceMergePoolSize</code>参数进行限制，然后再本次查询完成后归还到<code>DataSource</code>连接池中,这个参数不可以设置的比<code>DataSource</code>的<code>pool-size</code>大,否则可能会导致程序假死,因为连接池为20如果单次查询需要21那么会一直等待直到超时也获取不到21个</td></tr><tr><td>defaultDataSourceMergePoolSize❗️</td><td><code>0</code></td><td>如果你的所有表中有分片表那么一定要设置这个值,且必须设置小于等于<code>DataSource</code>的连接池大小,假设连接池大小为100,那么这个值可以设置60,70，80甚至100,但是不可以比连接池大,且必须大于等于<code>maxShardingQueryLimit</code>,如果连接池100当前值设置为10,那么意味着所有线程只有10个连接池内的链接可以被用来进行分片聚合查询(每个数据源10个)</td></tr><tr><td>multiConnWaitTimeoutMillis</td><td><code>5000</code></td><td>默认针对分片链接获取大于1的操作进行<code>defaultDataSourceMergePoolSize</code>总数的扣减,比如上述100个连接池分片设置为10个,那么如果有3个线程都需要5个分片聚合那么肯定有一个线程无法获取到那么就会等到默认5秒,如果超过这个时间还是无法获取前两个还未查询完成,那么将会抛错</td></tr><tr><td>warningBusy</td><td><code>true</code></td><td>在分片聚合的时候因为需要单次获取多个链接,还是上述案例假设第三个线程获取到了5个链接但是获取的时间超过了<code>multiConnWaitTimeoutMillis</code>时间的80%那么框架将会打印获取链接是繁忙的,您可能需要重新调整<code>defaultDataSourceMergePoolSize</code>这个值和调整连接池大小</td></tr><tr><td>maxShardingRouteCount</td><td><code>128</code></td><td>当出现条件分片大于多少时报错默认128,就是比如select where update where delete where路由到过多的表就会报错,涉及entity操作比如update对象，insert，delete对象不会判断这个条件</td></tr><tr><td>defaultDataSourceName</td><td><code>ds0</code></td><td>默认分库数据源名称,如果你不需要分库那么可以不用去设置该值</td></tr><tr><td>shardingExecuteTimeoutMillis</td><td><code>60000</code></td><td>分片聚合超时时间默认60秒单位(ms),包括增删改查</td></tr><tr><td>throwIfRouteNotMatch</td><td><code>true</code></td><td>当查询没有匹配到路由是否选择报错,默认是如果不选择保存则返回默认值,譬如按时间分片,开始分片表为2020年1月那么如果你查下2019年或者查询未来的时间那么框架内部还没有这个时间所以本次查询获取到的路由为空,您可以选择不报错返回默认值,比如toList那么就是空集合,count就是0等等</td></tr><tr><td>executorMaximumPoolSize</td><td><code>0</code></td><td>分片聚合最大线程数,默认为0将使用<code>Executors.newCachedThreadPool</code>线程池,如果需要设置或者自定义请设置为最小maxShardingQueryLimit*分片数目,设置值后将使用有界队列线程池</td></tr><tr><td>executorCorePoolSize</td><td><code>Math.min(processors, 4)</code></td><td>仅<code>executorMaximumPoolSize</code>&gt;0时生效,其中<code>processors</code>是<code>Runtime.getRuntime().availableProcessors()</code></td></tr><tr><td>executorQueueSize</td><td><code>1024</code></td><td>仅<code>executorMaximumPoolSize</code>&gt;0时生效，线程池有界队列大小</td></tr><tr><td>startTimeJob</td><td><code>false</code></td><td>当使用系统默认的按时间分片时设置这个配置为<code>true</code>那么框架会在内存中添加对应的系统表,原理就是开启一个定时任务线程去执行</td></tr><tr><td>shardingFetchSize</td><td><code>1000</code></td><td>在分片下默认拉取大小设置</td></tr><tr><td>shardingQueryInTransaction</td><td>serializable</td><td><code>serializable</code>事务内查询会将maxShardingQueryLimit设置为1走串行防止脏读因为并发查询下当前事务不可以,也可以使用<code>concurrency</code>无视当前事务查询,性能而言<code>concurrency</code>优先,<code>serializable</code>会保证相对数据一致,也可以手动设置queryable().useMaxShardingQueryLimit(n)</td></tr></tbody></table><h2 id="spring-boot" tabindex="-1"><a class="header-anchor" href="#spring-boot"><span>spring-boot</span></a></h2><p>通过配置文件可以直接配置上述选项</p><div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">easy-query</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  name-conversion</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">underlined</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  database</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">mysql</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  #如果执行物理删除delete语句将会报错 如果改为false,后续可以通过allowDeleteStatment来允许</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  delete-throw</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  #打印sql显示(需要框架默认有日志以 log.info打印)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  print-sql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  #sqlNativeSegment输入和格式化无需处理单引号会自动处理为双单引号</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  keep-native-style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  #entity映射到dto/vo使用属性匹配模式</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  #支持 property_only column_only column_and_property property_first</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  mapping-strategy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">property_first</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  ......</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="非spring-boot" tabindex="-1"><a class="header-anchor" href="#非spring-boot"><span>非spring-boot</span></a></h2><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> EasyQueryClient</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> easyQueryClient </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> EasyQueryBootstrapper</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">defaultBuilderConfiguration</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                .</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setDefaultDataSource</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(dataSource)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                .</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">optionConfigure</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(op </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">                    op</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setDeleteThrowError</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//设置不允许物理删除</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">                    op</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setPrintSql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//设置以log.info模式打印执行sql信息</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                    ......</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//此处用于配置系统默认配置选项</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                })</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                .</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">replaceService</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">NameConversion</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">UnderlinedNameConversion</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//替换框架内部的属性和列转换模式改为大写转下划线</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                .</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">useDatabaseConfigure</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> MySQLDatabaseConfiguration</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">())</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//设置方言语法等为mysql的</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                .</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">build</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11)]))}const c=e(a,[["render",n],["__file","config-option.html.vue"]]),h=JSON.parse('{"path":"/framework/config-option.html","title":"配置参数选项(重要)❗️❗️❗️","lang":"zh-CN","frontmatter":{"title":"配置参数选项(重要)❗️❗️❗️","order":1,"description":"可配置参数选项 在使用前希望用户可以首先查看一遍可选择配置项,有利于了解如何进行优化 默认配置项 分表分库特有配置 spring-boot 通过配置文件可以直接配置上述选项 非spring-boot","head":[["meta",{"property":"og:url","content":"https://github.com/dromara/easy-query/framework/config-option.html"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:title","content":"配置参数选项(重要)❗️❗️❗️"}],["meta",{"property":"og:description","content":"可配置参数选项 在使用前希望用户可以首先查看一遍可选择配置项,有利于了解如何进行优化 默认配置项 分表分库特有配置 spring-boot 通过配置文件可以直接配置上述选项 非spring-boot"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-04-03T00:55:01.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-03T00:55:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"配置参数选项(重要)❗️❗️❗️\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-04-03T00:55:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuejmnet\\",\\"url\\":\\"https://github.com/xuejmnet\\"}]}"]]},"headers":[{"level":2,"title":"默认配置项","slug":"默认配置项","link":"#默认配置项","children":[]},{"level":2,"title":"分表分库特有配置","slug":"分表分库特有配置","link":"#分表分库特有配置","children":[]},{"level":2,"title":"spring-boot","slug":"spring-boot","link":"#spring-boot","children":[]},{"level":2,"title":"非spring-boot","slug":"非spring-boot","link":"#非spring-boot","children":[]}],"git":{"createdTime":1743641701000,"updatedTime":1743641701000,"contributors":[{"name":"xuejiaming","username":"xuejiaming","email":"326308290@qq.com","commits":1,"url":"https://github.com/xuejiaming"}]},"readingTime":{"minutes":10.12,"words":3037},"filePathRelative":"framework/config-option.md","localizedDate":"2025年4月3日","autoDesc":true}');export{c as comp,h as data};
