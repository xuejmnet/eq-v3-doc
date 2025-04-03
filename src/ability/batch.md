---
title: Batch批处理
---
# Batch批处理
`easy-query`如果需要使用batch功能首先需要在链接字符串添加`rewriteBatchedStatements=true`启用参数（mysql）,默认框架会在配置参数阈值到达后自动合并sql调用`executeBatch`合并,如果需要手动调用或者手动限制不调用可以通过调用`batch`方法

文档提供的链接字符串设置不一定适合所有版本请以实际情况为准可以通过本地库进行10w级别的插入来进行测试判断是否生效

`mysql`需要链接字符串启用批处理参数`rewriteBatchedStatements=true`,其他数据库自行查询相关的说明也可能不需要 `addBatch`、`executeBatch`

`sqlserver`将 `useBulkCopyForBatchInsert=true;` 添加到连接字符串可启用此功能。 批处理相关链接 https://learn.microsoft.com/zh-cn/sql/connect/jdbc/use-bulk-copy-api-batch-insert-operation?view=sql-server-ver16 

## 例如
`jdbc:mysql://127.0.0.1:3306/easy-query-test?serverTimezone=GMT%2B8&characterEncoding=utf-8&useSSL=false&rewriteBatchedStatements=true`

配置名称  | 默认值 | 描述  
--- | --- | --- 
insertBatchThreshold | 1024  | 如果insertable一次性添加对象集合大于等于1024个那么会对其进行相同sql进行合并提高执行效率,链接字符串需要添加`rewriteBatchedStatements=true`(mysql),可以通过调用insert或者update的batch方法来手动使用或者禁用
updateBatchThreshold | 1024  | 如果updatable一次性添加对象集合大于等于1024个那么会对其进行相同sql进行合并提高执行效率,链接字符串需要添加`rewriteBatchedStatements=true`(mysql),可以通过调用insert或者update的batch方法来手动使用或者禁用


## 代码注意点
::: danger 说明!!!
> 使用`batch`可以有效的提高插入或者更新的性能,但是会导致返回结果不正确,如果使用batch那么自行处理返回结果
:::


```java
easyEntityQuery.insertable(r).batch().executeRows();


==> Preparing: INSERT INTO `t_blog` (`id`,`create_time`,`update_time`,`create_by`,`update_by`,`deleted`,`title`,`content`,`url`,`star`,`score`,`status`,`order`,`is_top`,`top`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
==> Parameters: 500(String),2000-01-02T01:01:01(LocalDateTime),2000-01-02T01:01:01(LocalDateTime),500(String),500(String),false(Boolean),title500(String),content500(String),http://blog.easy-query.com/500(String),500(Integer),1.2(BigDecimal),1(Integer),1.2(BigDecimal),false(Boolean),false(Boolean)
==> Parameters: 300(String),2000-01-02T01:01:01(LocalDateTime),2000-01-02T01:01:01(LocalDateTime),300(String),300(String),false(Boolean),title300(String),content300(String),http://blog.easy-query.com/300(String),300(Integer),1.2(BigDecimal),1(Integer),1.2(BigDecimal),false(Boolean),false(Boolean)
==> Parameters: 400(String),2000-01-02T01:01:01(LocalDateTime),2000-01-02T01:01:01(LocalDateTime),400(String),400(String),false(Boolean),title400(String),content400(String),http://blog.easy-query.com/400(String),400(Integer),1.2(BigDecimal),1(Integer),1.2(BigDecimal),false(Boolean),false(Boolean)
<== Total: -6

//插入同理
easyEntityQuery.updatable(r).batch().executeRows();
```


## batch自动分组
当你的插入或者更新集合内部的entity有部分列为null,且插入或者更新策略不是`all_columns`,那么eq会很智能的将多条sql合并到一起进行`batch`操作

```java


@Data
@Table("t_test_insert")
@EntityProxy
public class TestInsert implements ProxyEntityAvailable<TestInsert , TestInsertProxy> {
    @Column(primaryKey = true)
    private String id;
    private String column1;
    private String column2;
}



DatabaseCodeFirst databaseCodeFirst = easyEntityQuery.getDatabaseCodeFirst();
CodeFirstCommand codeFirstCommand = databaseCodeFirst.syncTableCommand(Arrays.asList(TestInsert.class));
codeFirstCommand.executeWithTransaction(arg->{
    System.out.println(arg.sql);
    arg.commit();
});

ArrayList<TestInsert> testInserts = new ArrayList<>();
for (int i = 0; i < 9; i++) {
    TestInsert testInsert = new TestInsert();
    testInsert.setId(String.valueOf(i));
    testInsert.setColumn1(i%2==0?i+":column1":null);
    testInsert.setColumn2(i%3==0?i+":column2":null);
    testInserts.add(testInsert);
}

easyEntityQuery.insertable(testInserts).batch().executeRows();



==> Preparing: INSERT INTO `t_test_insert` (`id`,`column1`,`column2`) VALUES (?,?,?)
==> Parameters: 0(String),0:column1(String),0:column2(String)
==> Parameters: 6(String),6:column1(String),6:column2(String)
<== Total: -4
==> Preparing: INSERT INTO `t_test_insert` (`id`) VALUES (?)
==> Parameters: 1(String)
==> Parameters: 5(String)
==> Parameters: 7(String)
<== Total: -6
==> Preparing: INSERT INTO `t_test_insert` (`id`,`column1`) VALUES (?,?)
==> Parameters: 2(String),2:column1(String)
==> Parameters: 4(String),4:column1(String)
==> Parameters: 8(String),8:column1(String)
<== Total: -6
==> Preparing: INSERT INTO `t_test_insert` (`id`,`column2`) VALUES (?,?)
==> Parameters: 3(String),3:column2(String)
<== Total: 1
```





### 原因可能

来自网上的说法

executeBatch方法会返回一个int数组

int[] executeBatch() throws SQLException;

数组各值可能是以下之一：

大于或等于零的数字,表示命令已成功处理，并且是更新计数，给出了
数据库中受命令影响的行数执行
SUCCESS_NO_INFO ( -2)的值,表示命令为处理成功，但受影响的行数为未知
如果批量更新中的命令之一无法正确执行，此方法引发BatchUpdateException，JDBC driver可能会也可能不会继续处理剩余的命令。但是driver的行为是与特定的DBMS绑定的，要么总是继续处理命令，要么从不继续处理命令。如果驱动程序继续处理，方法将返回 EXECUTE_FAILED(-3)。
————————————————
版权声明：本文为CSDN博主「左林右李02」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/u011624157/article/details/110734184


## 相关搜索
`批量提交` `批量插入` `批量操作` `批处理`