---
title: 排序
order: 1
---

# 排序
`easy-query`提供了方便的排序查询功能支持函数排序和列排序等


## 一个字段排序
::: code-tabs

@tab 对象模式
```java
 List<Topic> list = easyEntityQuery.queryable(Topic.class)
                    .orderBy(t -> t.id().asc())
                    .toList();

==> Preparing: SELECT `id`,`stars`,`title`,`create_time` FROM `t_topic` ORDER BY `id` ASC
<== Time Elapsed: 2(ms)
<== Total: 101
```

:::

## 双字段排序
::: code-tabs

@tab 对象模式
```java

//双字段排序

List<Topic> list = easyEntityQuery.queryable(Topic.class)
        .orderBy(t -> t.id().asc())
        .orderBy(t -> t.createTime().desc())
        .toList();

==> Preparing: SELECT `id`,`stars`,`title`,`create_time` FROM `t_topic` ORDER BY `id` ASC,`create_time` DESC
<== Time Elapsed: 3(ms)
<== Total: 101



List<Topic> list = easyEntityQuery.queryable(Topic.class)
        .orderBy(t -> {
            t.id().asc();
            t.createTime().desc();
        })
        .toList();


==> Preparing: SELECT `id`,`stars`,`title`,`create_time` FROM `t_topic` ORDER BY `id` ASC,`create_time` DESC
<== Time Elapsed: 3(ms)
<== Total: 101
```

:::

## 动态排序
::: code-tabs

@tab 对象模式
```java

//动态排序

List<Topic> list = easyEntityQuery.queryable(Topic.class)
        .orderBy(t -> {
            t.id().asc(false);//false表示不生效
            t.createTime().desc();
        })
        .toList();

==> Preparing: SELECT `id`,`stars`,`title`,`create_time` FROM `t_topic` ORDER BY `create_time` DESC
<== Time Elapsed: 3(ms)
<== Total: 101
```

:::


如果你希望实现前端排序那么可以参考这个链接[DynamicSort](/easy-query-doc/query/dynamic-sort)


## 函数排序
::: code-tabs

@tab 对象模式
```java

//函数排序

List<Topic> list = easyEntityQuery.queryable(Topic.class)
        .orderBy(t -> {
            t.createTime().format("yyyy-MM-dd").desc();
        })
        .toList();


==> Preparing: SELECT `id`,`stars`,`title`,`create_time` FROM `t_topic` ORDER BY DATE_FORMAT(`create_time`,'%Y-%m-%d') DESC
<== Time Elapsed: 11(ms)
<== Total: 101
```

:::

## null最前最后

支持全数据库 oracle生成 `id asc nulls first`
```java

//nulls last/first
List<Topic> list = easyEntityQuery.queryable(Topic.class)
        .orderBy(t -> {
            t.id().asc(OrderByModeEnum.NULLS_LAST);
            t.createTime().desc(OrderByModeEnum.NULLS_FIRST);
        })
        .toList();

==> Preparing: SELECT `id`,`stars`,`title`,`create_time` FROM `t_topic` ORDER BY CASE WHEN `id` IS NULL THEN 1 ELSE 0 END ASC,`id` ASC,CASE WHEN `create_time` IS NULL THEN 0 ELSE 1 END ASC,`create_time` DESC
<== Time Elapsed: 5(ms)
<== Total: 101
```

## 自定义正序倒序

```java

List<Topic> list = easyEntityQuery.queryable(Topic.class)
        .orderBy(t -> {
            t.id().asc(false);//false表示不生效
            t.createTime().orderBy(true/false);//true/false表示正序倒序而不是是否生效
        })
        .toList();

boolean asc=false;
OrderByModeEnum nullMode=OrderByModeEnum.NULLS_LAST;
List<Topic> list = easyEntityQuery.queryable(Topic.class)
        .orderBy(t -> {
            t.createTime().orderBy(asc,nullMode);//true/false表示正序倒序而不是是否生效
        })
        .toList();

```