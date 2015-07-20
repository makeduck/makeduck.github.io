
한번씩은 보자
underscore check list

Collections
v _.each
v _.map
v _.reduce
v _.reduceRight
v _.find
v _.filter
- _.where
- _.findWhere
- _.reject
- _.every
- _.some
- _.contains
- _.invoke
- _.pluck
v _.max
v _.min
v _.sortBy
- _.groupBy
- _.indexBy
- _.countBy
- _.shuffle
v _.sample
v _.toArray
- _.size
- _.partition

Arrays
- _.first
- _.initial
- _.last
- _.rest
- _.compact
- _.flatten
- _.without
- _.union
- _.intersection
- _.difference
- _.uniq
- _.zip
- _.unzip
- _.object
- _.indexOf
- _.lastIndexOf
- _.sortedIndex
- _.findIndex
- _.findLastIndex
- _.range

Functions
- _.bind
- _.bindAll
- _.partial
- _.memoize
- _.delay
- _.defer
- _.throttle
- _.debounce
- _.once
- _.after
- _.before
- _.wrap
- _.negate
- _.compose

Objects
- _.keys
- _.allKeys
- _.values
- _.mapObject
- _.pairs
v- _.invert
- _.create
v _.functions
- _.findKey
- _.extend
- _.extendOwn
- _.pick
- _.omit
- _.defaults
- _.clone
- _.tap
- _.has
- _.matcher
- _.property
- _.propertyOf
- _.isEqual
- _.isMatch
- _.isEmpty
- _.isElement
- _.isArray
v _.isObject
- _.isArguments
v _.isFunction
v _.isString
v _.isNumber
- _.isFinite
v _.isBoolean
- _.isDate
- _.isRegExp
- _.isNaN
- _.isNull
- _.isUndefined

Utility
- _.noConflict
- _.identity
- _.constant
- _.noop
- _.times
- _.random
- _.mixin
- _.iteratee
- _.uniqueId
- _.escape
- _.unescape
- _.result
- _.now
- _.template

Chaining
- _.chain
- _.value


==============================



<input id="in">
<input id="out">

<script>
//    jQuery("#in").keypress(function(event )console.log(event.keyCode));

var itemList = ["gr" , "gg" ,"mandu" ,"fish" , 'rm'];
var f1 = {id : 0, item:[0,1,2,3] ,  desc:"aaa a aaa a a  aaa"};
var f2 = {id : 1, item:[0,1] ,  desc:"bb bbbbbb bb b b b"};
var f3 = {id : 2, item:[0,1,3] ,  desc:" ccc c c c cccccc c c cc"};
var f4 = {id : 3, item:[0,3] ,  desc:"ddd d ddd ddd"};
var f5 = {id : 4, item:[0,2,3] ,  desc:"eee e ee"};
var f6 = {id : 4, item:[0,4] ,  desc:"eee e ee"};
var all = {f1,f2,f3,f4,f5,f6}

var rsList;

$("#in").keyup(function (event) {
    //console.log(event.keyCode)
    //console.log($("#in").val())

    var v = $("#in").val();
    var item = _(v.split(',')).last();

    if(_.contains(itemList, item)){

        if(v.split(',').length > 1){

            console.log("many");
            var idx = _.indexOf(itemList, item);
            rsList = _.filter(rsList , function(val ){ return _.contains(val.item, idx)});

            $("#out").val(rsList[0].desc);
            console.log(rsList);

        }else{
            var idx = _.indexOf(itemList, item);
            rsList = _.filter(all , function(val ){ return _.contains(val.item, idx)});

            $("#out").val(rsList[0].desc);
            console.log(rsList);


        }
    }



});

</script>



iteratee
_.iteratee is
  map, find, filter, reject, every
, some, max, min, sortBy, groupBy
, indexBy , countBy, sortedIndex, partition, and unique.



0 ~ 98 짝수합
var numbers = _.range(0,100, 2)
_.reduce(numbers , function(memo, val){return memo +val }, 0)

var r1 = {id : "d0", point :  11}
var r2 = {id : "d1", point :  345}
var r3 = {id : "d2", point :  23}
var r4 = {id : "d3", point :  54}
var r5 = {id : "d4", point :  43}
var r6 = {id : "d5", point :  32}
var r7 = {id : "d6", point :  43}
var r8 = {id : "d7", point :  54}
var r9 = {id : "d8", point :  21}

var ranks = [r1,r2,r3,r4,r5,r6,r7,r8,r9]

등수 뽑
_.sortedIndex(ranks,{id:'dubu',point:33},'point')
_(ranks).min(_.iteratee('point'))




    var itemList = ["gr" , "gg" ,"mandu" ,"fish" , 'rm'];
var f1 = {id : 0, item:[0,1,2,3] ,  desc:"aaa a aaa a a  aaa"};
var f2 = {id : 1, item:[0,1] ,  desc:"bb bbbbbb bb b b b"};
var f3 = {id : 2, item:[0,1,3] ,  desc:" ccc c c c cccccc c c cc"};
var f4 = {id : 3, item:[0,3] ,  desc:"ddd d ddd ddd"};
var f5 = {id : 4, item:[0,2,3] ,  desc:"eee e ee"};
var f6 = {id : 4, item:[0,4] ,  desc:"eee e ee"};
var all = {f1,f2,f3,f4,f5,f6}

_.filter(all , function(val ){ return _.contains(val.item, 0)})

_.filter(all , function(val ){ return _.contains(val.item, 0) && _.contains(val.item, 4)})


합계계산
_.reduce([1,2,2,43], function(sum , a){return sum+a}, 0)


나이순 정렬
_.sortBy({m01,m02,m03},'age')

object vs list 차이점은??


    arguments  함수 예약어?
(function(){return arguments}(1,2,3,4))


func(){_.toArray(return arguments; )}(1,2,3,4)


하나만 찾음
_.find({m1,m2,m3,m4}, {'age':20})

여러가 찾음
_.filter({m1,m2,m3,m4}, {'age':20})

_.filter({m1,m2,m3,m4}, function(val){ return val > 20})

이거 되나  된다  위 아래 같음
_.where({m1,m2,m3,m4}, {'age':20 , 'tag' : true})



filter  map과 비슷하나.. 조건에 안 맞는것은 제거 한다.

    var m1 = {'id' : "n1", 'age' : 100 ,'tag' : true} ;
var m2 = {'id' : "n2", 'age' : 20 ,'tag' : false} ;
var m3 = {'id' : "n3", 'age' : 30 ,'tag' : true} ;
var m4 = {'id' : "n4", 'age' : 20 ,'tag' : false} ;

_.map({m1,m2,m3},'age')

또는
_.map({m1,m2,m3}, _.iteratee('age'));

_.map({m1,m2,m3}, _.iteratee('age'));


iteratee == func ?? 함수 비슷하나. key 도 올 수 있다.

var mcList = ['aa','bb','cc','dd','ee','ff','gg'];
var mc = [1,4,6]
var mapping = _.map(mc, function(idx){ mcList[idx]})

배열은 idx 가 key 인가 봄
_.map([1,1,1,2,4],function(val,key){return key})


var m01 = {'id' : "n1", 'age' : 10};
var m02 = {'id' : "n2", 'age' : 20};
var m03 = {'id' : "n3", 'age' : 30};

var users = {m01, m02, m03}

// 나이만 추출
var aa = _.map(users , _.iteratee('age'))

_.min(aa) // 최소 추출

_.min([1,2,2,3,10])


var o = _.object(['moe', 'larry', 'curly'], [30, 40, 50]);
var o = _.object(['id','dubu'] ,['age',30]);


var member  =  [ "rigel" , "ted" , "kylie"];
var randIdx = _.random(0 , member.length)
var n = _.random(0,randIdx);

// 또는

_.sample(['dubu','mandu'])

// null function
(function dubu(args){
    alert(args)
})('hello')


// iterate ??

// function param  list 로 받기


// type check
var s = "hello"
var n =  1.1
var f = function () {

}

_.isFunction(f)



