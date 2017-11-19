(function(){

    var currClientWidth,

        fontValue,

        originWidth;

    originWidth = 750;//ui设计稿的宽度，一般750或640

    __resize();



    window.addEventListener('resize', __resize, false);



    function __resize() {

        currClientWidth = document.documentElement.clientWidth;

        if (currClientWidth > 768){

            currClientWidth = 768;

        } 

        if (currClientWidth < 320){

            currClientWidth = 320;

        } 

        fontValue = ((625 * currClientWidth) / originWidth).toFixed(2);

        document.documentElement.style.fontSize = fontValue + '%';

    }

})();

// 当前假如当前分辨率是375， 设计稿分辨率是750

// 750/375=0.5

// 比例关系是0.5倍

// 再算一下你要换算1rem等于多少px，

// 假如我要100， 100/16=6.25

// 把这个换算的乘以刚才得出的比例

// 0.5*625=312.5

// 最后还拼接了一个百分号 = 312.5%

// 就是在375分辨率下 1rem = 312.5%

// 312.5% * 16px = 50px 通过js来判断当前屏幕大小，进而设置html的font-size.代码里面rem的值就是Ui设计稿上量的px除以100就是你代码中要写的rem值。