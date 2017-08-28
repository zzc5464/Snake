/*
* @Author: Marte
* @Date:   2017-08-27 13:37:41
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-27 19:13:37
*/

(function(window){
    function Food( option ){
        this.w = option.w || 20;
        this.h = option.h || 20;
        this.bgc = option.bgc || "yellow";
        this.x = option.x || 0;
        this.y = option.y || 0;
        this.id = option.id || "";
        this.ele = document.createElement("div");
        this.init();
    }
    Food.prototype = {
        init:function(){
            this.setStyle();
        },
        setStyle:function(){
            this.ele.style.width = this.w + "px";
            this.ele.style.height = this.h + "px";
            this.ele.style.backgroundColor = this.bgc;
            this.render();

        },
        render:function(){
            this.x = zzc.getRandom(0,this.id.offsetWidth/this.w);
            this.y = zzc.getRandom(0,this.id.offsetHeight/this.h);
            this.ele.style.position = "absolute";
            this.ele.style.left = this.x * this.w + "px";
            this.ele.style.top = this.y * this.h + "px";
            this.id.appendChild(this.ele);
        }
    }
    window.Food = Food;
})(window)

