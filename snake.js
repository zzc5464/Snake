/*
* @Author: Marte
* @Date:   2017-08-27 13:37:58
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-27 21:46:50
*/

(function(window){
    function Snake( option ){
        this.id = option.id;
        this.w = option.w || 20;
        this.h = option.h || 20;
        this.headColor = option.headColor || "red";
        this.bodyColor = option.bodyColor || "blue";
        this.direction = option.direction || "right";
        this.ele = [];//初始化一个空对象，用来放生成的div。
        this.snakeBody = [
            {x : 3,y : 1,color : this.headColor},
            {x : 2,y : 1,color : this.bodyColor},
            {x : 1,y : 1,color : this.bodyColor},
        ]
        this.init();
    }
    Snake.prototype = {
        init:function(){
            this.setStyle();
        },
        setStyle:function(){
            for(var i=0;i<this.snakeBody.length;i++) {
                var bodyInfo = this.snakeBody[i];
                var div = document.createElement("div");
                this.ele.push(div);
                div.style.position = "absolute";
                div.style.width = this.w + "px";
                div.style.height = this.h + "px";
                div.style.backgroundColor = bodyInfo.color;
                div.style.top = this.h * bodyInfo.y + "px";
                div.style.left = this.w * bodyInfo.x + "px";
                this.id.appendChild(div);
            }
        },
        move:function(food){
            for(var j=this.snakeBody.length-1;j>0;j--) {
                var bodyInfo = this.snakeBody[j];
                bodyInfo.x = this.snakeBody[j-1].x;
                bodyInfo.y = this.snakeBody[j-1].y;
            }
            switch(this.direction) {
                case "right":
                this.snakeBody[0].x ++;
                break;
                case "left":
                this.snakeBody[0].x --;
                break;
                case "up":
                this.snakeBody[0].y--;
                break;
                case "down":
                this.snakeBody[0].y++;
                break;
            }
            for(var i=0;i<this.ele.length;i++) {
                this.id.removeChild(this.ele[i]);
            }
            this.ele = [];
            this.setStyle();
            if(this.snakeBody[0].x == food.x && this.snakeBody[0].y == food.y) {
                this.snakeBody.push({
                    x:this.snakeBody[this.snakeBody.length-1].x,
                    y:this.snakeBody[this.snakeBody.length-1].y,
                    color:this.bodyColor
                });
                food.render();
            }
        }

    }
    window.Snake = Snake;
})(window)