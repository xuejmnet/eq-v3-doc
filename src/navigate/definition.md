---
title: 导航属性定义
order: 1
---
`eq`提供了`@Navigate`导航属性来作为数据库对象关系的级联关系定义,导航属性支持将一个或者多个数据库实体通过一个属性或者多个属性组合进行关系定义。

我们将定义属性的类称作`self`目标属性称为`target`，所以我们在定义属性的时候会有`selfProperty`和`targetProperty`的区分

属性的定义我们一般拥有两种选择
- 对象
- 集合

对象属性一般是`OneToOne`或者`ManyToOne`亦或者是`DirectMapping`,而集合的属性定义一般为`OneToMany`或`ManyToMany`,其中`ManyToMany`又可以分为有中间表或者无中间表模式.

`OneToOne`和`ManyToOne`在定义的时候是有着十分严格的区别,如果`self`表里面有两条数据对应`target`表那么关系应该被定义为`ManyToOne`而不是`OneToOne`否则在`include`或者`selectAutoInclude`的时候框架会进行判断并且报错，当然我们认为`OneToOne`是一种特殊的`ManyToOne`所以当你不确定是否是`OneToOne`的时候你定义`ManyToOne`是肯定不会错的。但是我们还是不希望你将次概念模糊掉,所以你可以反向来看`target->self`的关系是什么如果是`OneToMany`那么你可以确定`self->target`应该是`ManyToOne`

接下来我将展示如何定义导航属性来支持复杂关系

## 一对一

## 一对多

## 多对一

## 其他
由于篇幅关系,多对多喝直接映射，路径映射，逗号冗余等映射将会用单独篇章展示
