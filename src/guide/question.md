---
title: 常见问题(重要)❗️❗️❗️
order: 2
---


# 常见问题
这里主要汇总了一些常见的问题
## SpringBoot 启动报错
```log
java.lang.IllegalStateException: Unable to load cache item
	at org.springframework.cglib.core.internal.LoadingCache.createEntry(LoadingCache.java:79) ~[spring-core-5.3.29.jar:5.3.29]
	at org.springframework.cglib.core.internal.LoadingCache.get(LoadingCache.java:34) ~[spring-core-5.3.29.jar:5.3.29]
	at org.springframework.cglib.core.AbstractClassGenerator$ClassLoaderData.get(AbstractClassGenerator.java:134) ~[spring-core-5.3.29.jar:5.3.29]
	at org.springframework.cglib.core.AbstractClassGenerator.create(AbstractClassGenerator.java:319) ~[spring-core-5.3.29.jar:5.3.29]
	at org.springframework.cglib.proxy.Enhancer.createHelper(Enhancer.java:572) ~[spring-core-5.3.29.jar:5.3.29]
	at org.springframework.cglib.proxy.Enhancer.createClass(Enhancer.java:419) ~[spring-core-5.3.29.jar:5.3.29]
```
主要原因是
- 缺少aop依赖
- aop组件版本不对

解决办法添加对应的依赖

```xml
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-aop</artifactId>
		</dependency>
```
如果不想使用aop可以禁用默认加载aop追踪 在`application.yml`同级目录下添加`easy-query-track:enable:false`
```yml
easy-query:
  enable: true
  database: mysql
  name-conversion: underlined
  start-time-job: true

easy-query-track:
  # 默认是true
  enable: false
```

## 没有生成Proxy
如果没有生成`Proxy`请先确定是否引入`sql-api-proxy`包,如果使用`@EntityProxy`请确定是否引入`sql-processor`各个生成的模块都需要,如果是`@EntityFileProxy`请确认是否引用插件。
插件可以有效的提升用户体验



## 如果插件报错
如果idea报错`Slow operations are prohibited on EDT. See SlowOperations.assertSlowOperationsAreAllowed javadoc`

那么就双击`shift`输入`Registry...`然后在弹出的地方搜索`slow` 将`ide.slow.operations.assertion`的`value`勾去掉

## 阿里镜像找不到依赖？

```text
Could not find artifact xxxxx:pom:xxxx
in alimaven (http://maven.aliyun.com/nexus/content/groups/public/)
```

这个是因为目前阿里云镜像正在维护，可以替换为腾讯云或者华为云的镜像源，更改 Maven 安装目录下的 settings.xml 文件， 添加如下配置：

腾讯云：

```xml
<mirror>
    <id>tencent-cloud</id>
    <mirrorOf>*</mirrorOf>
    <name>tencent-cloud</name>
    <url>https://mirrors.cloud.tencent.com/nexus/repository/maven-public/</url>
</mirror>
```

华为云：

```xml
<mirror>
    <id>huawei-cloud</id>
    <mirrorOf>*</mirrorOf>
    <name>huawei-cloud</name>
    <url>https://mirrors.huaweicloud.com/repository/maven/</url>
</mirror>
```

## 删除错误
'DELETE' statement without 'WHERE' clears all data in the table

这个错误是因为eq默认不允许删除不显式指定where,您可以进行如下操作
```java
//随便添加一个条件即可
easyEntityQuery.deletable(User.class).disableLogicDelete()allowDeleteStatement(true).where(u->u.id().isNotNull()).executeRows();

easyEntityQuery.deletable(User.class).disableLogicDelete()allowDeleteStatement(true).where(u->u.expression().sql("1=1")).executeRows();
```

## proxy不存在


::: warning 报错!!!
如果遇到build后报错java:程序包xxxxxxxx.proxy不存在

原因 因为entity模式是通过java的apt编译时生成代码来实现对应的功能,所以如果您的项目存在错误的情况下那么只要不clean后重新编译那么你是能够知道具体错误点的，如果你clean了后那么可能会因为某些原因比如`Controller`里面有代码没加尾分号导致整体报错,那么也会引发apt问题而导致proxy错误,具体可以看您git前后的提交修改了什么导致的,如果一开始就无法编译通过那么原因可能是没有正确引入`sql-processor`或`sql-ksp-processor`

- 检查实体类是否存在没有编译通过的错误
- 整体项目是否能编译通过
- 检查是否存在javacTree之类的错误可能是由于lombok版本过低升级即可
- 查看是否引入sql-processor包（如果没有如下`annotationProcessorPaths`那么建议各自需要生成proxy的模块独立引入(多模块下)）
- 如果您是`gralde`那么引入应该是`implement改为annotationprocesser`即`annotationProcessor "com.easy-query:sql-processor:${easyQueryVersion}"`
- 设置idea的注解处理器 Build,Execution,Deployment,Compiler,Annotation Processors 选择Enable annotation processing 并且选择Obtain processors from project classpath

- 如果您之前已经存在`annotationProcessorPaths`那么你可以在里面添加`eq`的`apt`处理，如果未使用过那么还是建议需要apt的模块单独引入`sql-processor`
以下配置那么在各个独立`module`处不需要在引入`sql-processor`
```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-compiler-plugin</artifactId>
    <version>3.8.1</version>
    <configuration>
        <annotationProcessorPaths>
        <!-- 注意顺序 -->
            <path>
            <!-- lombok... -->
            </path>
            <path>
            <!-- mapstruct... -->
            </path>
            <path>
                <groupId>com.easy-query</groupId>
                <artifactId>sql-processor</artifactId>
                <version>${easy-query.version}</version>
            </path>
        </annotationProcessorPaths>
    </configuration>
</plugin>
```
:::

## 关键字处理
因为sql语句添加了双引号 反引号 等操作导致大小写敏感所以可以使用`nameConversion`让java属性正确的映射到数据库


java属性  | nameConversion   | 对应数据库列  
---  | ---  | --- 
userAge  | DEFAULT 默认 | userAge
userAge  | UNDERLINED 大写字母转小写下划线| user_age
userAge  | UPPER_UNDERLINED 全大写大写字母转小写下划线| USER_AGE
userAge  | LOWER_CAMEL_CASE 小驼峰| userAge
userAge  | UPPER_CAMEL_CASE 大驼峰| UserAge

[关键字处理](/easy-query-doc/framework/key-word)