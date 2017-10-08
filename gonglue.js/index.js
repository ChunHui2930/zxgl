/**
 * Created by LENOVO on 2017/8/10.
 */

/**
 * 无缓动效果的动画函数
 */
function animatev1(element,target){
    //保证计时器唯一不叠加
    clearInterval(element.timer);
    //重新设新的计时器
    element.timer = setInterval(
        function(){
            //获取当前位置
            var currentLeft = element.offsetLeft;
            //计算下一步的位置
            var step = 20;
            currentLeft += target >= currentLeft ? step : -step;
            //重新设定位置
            element.style.left = currentLeft + "px";
            //停下来
            if(Math.abs(target - currentLeft) <= step){
                clearInterval(element.timer);
                element.style.left = target + "px";
            }
        },20
    );
}

//这是第一个轮播图的js代码
var lunbo1=document.getElementById('lunbo1');
var prev1=document.getElementById('prev1');
var next1=document.getElementById('next1');
var ul1=document.getElementById('ul1');
var lis=ul1.getElementsByTagName('li');
var spans1=ul1.getElementsByTagName('span');
var imgWidth1=lis[0].offsetWidth;
var slideWith1=document.getElementById('slide1').offsetWidth;
var currentIndex=0;
spans1[currentIndex].innerHTML ='1/6';

lunbo1.onmouseover=function () {
    prev1.style.display='block';
    next1.style.display='block';
}

lunbo1.onmouseout=function () {
    prev1.style.display='none';
    next1.style.display='none';
}

next1.onclick = autoRun;

   function autoRun(){

       if(currentIndex == lis.length - 1){
           //重置索引和ul的位置
           currentIndex = 0;
           ul1.style.left = 0;
       }
       //修改当前图片的索引
       currentIndex++;
       //计算ul的位置
       var target = currentIndex * imgWidth1 * -1;
       //移动ul
       animatev1(ul1,target);
        if(currentIndex==lis.length-1 ){
            spans1[currentIndex].innerHTML ='1/6';
        }
        else {
            spans1[currentIndex].innerHTML = currentIndex + 1 + '/6';
        }
   }

   prev1.onclick = function() {
       if (currentIndex == 0) {
           //设置索引
           currentIndex = ul1.children.length - 1;
           //设置ul的位置
           ul1.style.left = currentIndex * imgWidth1 * -1 + "px";
       }
       //修改索引
       currentIndex--;
       //计算位置
       var target = currentIndex * imgWidth1 * -1;
       //移动ul
       animatev1(ul1, target);
       spans1[currentIndex].innerHTML = currentIndex + 1 + '/6';

   }
   // 第三个功能  自动轮播
   var timer = setInterval(autoRun,3000);

   // 第四个功能：鼠标一入一出控制自动轮播
   lunbo1.onmouseover = function(){
       //停止自动轮播 -- 清除计时器
       clearInterval(timer);
   }
   lunbo1.onmouseout = function(){
       //继续自动轮播
       timer = setInterval(autoRun,3000);
   }



   //这是第二个类轮播图代码,职业介绍
var jobTab=document.getElementById('jobTab');
var jobImg=document.getElementById('jobImg');
var jobs=jobTab.children;
var imgs=jobImg.children;



for(var i=0;i<jobs.length;i++){
    jobs[i].onclick=jobclickHandle;
    jobs[i].index=i;

}
function jobclickHandle() {

    for(var j=0;j<jobs.length;j++){
        imgs[j].style.display='none';
    }
    imgs[this.index].style.display='block';
}


 //以下是jq代码



$(function () {




//        角色无缝滚动
//     function scroll(){
//         $(".greenlist").animate({left:"-160px"},2000,'linear',function(){
//
//             $('.greenlist').append($('.greenlist a').eq(0));
//             $(" .greenlist").css({left:0})
//
//         })
//     }
//
//
//
//     var heihei= setInterval(scroll,1000);
//
//     $('.greenlist a').hover(function () {
//
//             $(".greenlist").stop(true);
//             clearInterval(heihei);
//
//         },function () {
//
//             heihei=setInterval(scroll,1000);
//         }
//
//     )
// 角色无缝滚动封装函数————————————————————————

function scroll(ele) {
    ele.animate({left:"-160px"},2000,'linear',function(){

        ele.append(ele.children('a').eq(0));
        ele.css({left:0})

    })
}

function listhover(ele,id) {
    ele.children('a').hover(function () {

            ele.stop(true);
            clearInterval(id);

        },function () {

            id=setInterval(function () {
                scroll(ele);
            },1000);
        }

    )
}

    var id= setInterval(function () {
        scroll($('.greenlist'));
    },1000);

    listhover($('.greenlist'),id)

   $('.green').click(function () {
       clearInterval(id);
       var id= setInterval(function () {
           scroll($('.greenlist'));
       },1000);

       listhover($('.greenlist'),id)
   });


    $('.blue').click(function () {
        clearInterval(id);
        var id= setInterval(function () {
            scroll($('.bluelist'));
        },1000);

        listhover($('.bluelist'),id)
    });


    $('.purple').click(function () {
        clearInterval(id);
        var id= setInterval(function () {
            scroll($('.purplelist'));
        },1000);

        listhover($('.purplelist'),id)
    });


    $('.orange').click(function () {
        clearInterval(id);
        var id= setInterval(function () {
            scroll($('.orangelist'));
        },1000);

        listhover($('.orangelist'),id)

    });



//        _______________________________________________



    var zltabs = document.getElementById('zltabs');
    var zlimages = document.getElementById('zlimages')
    var zlbtn = zltabs.children;
    var zlpic = zlimages.children;
// var zlones=zlimages.getElementsByTagName('img');
// var masks=zlimages.getElementsByTagName('div')
    for (var i = 0; i < zlbtn.length; i++) {
        zlbtn[i].onclick = zlclickHandle;
        zlbtn[i].index = i;
    }
    ;
    function zlclickHandle() {
        for (var j = 0; j < zlbtn.length; j++) {

            zlbtn[j].style.borderBottom = 0;
            zlpic[j].style.display = 'none';
        }
        this.style.borderBottomWidth = '3px';
        this.style.borderBottomColor = ' #6d5689';
        this.style.borderBottomStyle = 'solid';
        zlpic[this.index].style.display = 'block';
    }


    $('.list a').mouseover(zlmouseoverHandle);
    $('.list a').mouseout(zlmouseoutHandle);


    function zlmouseoverHandle() {

//            var index=$(this).index();

        $(this).children('.mask').stop().animate({top: 0}, 300,function () {

        });
    }

    function zlmouseoutHandle() {
//            var index=$(this).index();
        $(this).children('.mask').stop().animate({top: 218}, 300,function () {

        });
    }


//        右侧浮动jq————————————————————————————
    var flag=true;
    $('.controls').click(function () {
        if(flag) {
            $('.rightbar').animate({right: -180}, 500);
            $(this).addClass('closed');
            flag=false;
        }
        else {
            $('.rightbar').animate({right: 0}, 300);
            $('.controls').removeClass('closed');
            flag=true;
        }
    })

//       点击置顶——————————————————————————



    $('.dingbu').click(function () {
        $('html,body').stop().animate({scrollTop:0})
    })



    //花瓣瞎飞————————————————————————
    var flower=setInterval(function () {
        for(var i=0;i<$('.hudie').length;i++) {
            var x = Math.random() * 1000+400;
            var y = Math.random() * 2200;
            $('.hudie').eq(i).animate({left: x, top: y}, 10000)
        }

    },3000)

    $('.hudie').hover(function () {
        $(this).css('display','none');
    },function () {
        $(this).css('display','block');

    });



})









