---
title: 通用函数
order: 10
---

`通用函数`指的是所有类型都有的函数和具体类型无关

## nullOrDefault
用来描述当值没有时使用默认值的函数

数据库  | 方言  
---  | --- 
MySQL  | IFNULL
MSSQL  | ISNULL
PGSQL  | COALESCE
ORACLE  | NVL


用法


```java
List<DocBankCard> list = easyEntityQuery.queryable(DocBankCard.class)
                    .where(bank_card -> {
                        bank_card.code().nullOrDefault("noCode").eq("123");
                    }).toList();
```

## count | intCount
用来获取当前列一共有多少数量存在一个重载`distinct:true/false`比如`o.id().count()和o.id().count(true)`

数据库  | 方言  
---  | --- 
MySQL  | COUNT
MSSQL  | COUNT
PGSQL  | COUNT
ORACLE  | COUNT


用法


```java
List<Draft2<Long, Long>> list = easyEntityQuery.queryable(DocBankCard.class)
        .select(bank_card -> Select.DRAFT.of(
                bank_card.id().count(),
                bank_card.id().count(true)
        )).toList();
```


## max | min
用来返回当前属性最大值和最小值

数据库  | 方言  | 方言  
---  | ---  | --- 
MySQL  | MAX | MIN
MSSQL  | MAX | MIN
PGSQL  | MAX | MIN
ORACLE  | MAX | MIN

```java
List<Draft2<String, String>> list = easyEntityQuery.queryable(DocBankCard.class)
        .select(bank_card -> Select.DRAFT.of(
                bank_card.id().max(),
                bank_card.id().min()
        )).toList();
```



## equalsWith
用来比较两个值是否一样并且返回true/false表达式



```java
List<Draft1<Boolean>> list = easyEntityQuery.queryable(DocBankCard.class)
                    .where(bank_card -> {
                        bank_card.code().equalsWith("myCode").eq(false);
                    })
                    .select(bank_card -> Select.DRAFT.of(
                            bank_card.id().equalsWith("123")
                    )).toList();

```
