/*
* @Author: Marte
* @Date:   2017-08-27 21:29:43
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-28 08:13:41
*/

(function(window){

/*
        var food = new Food({
            x:2,
            y:2,
            id:box
        });
        var snake = new Snake({
            id:box,
            direction:"right"
        });
*/



    function Game( option ){
        this.id = option.id;
        this.food = new Food({
            id:this.id,
        });
        this.snake = new Snake({
            id:this.id
        });
        this.level = option.level || 250;
        this.bindEvent();
    }
    Game.prototype = {
        start:function(){
            var that = this;
            var timer = setInterval(function(){
                that.snake.move(that.food);
                if(that.snake.snakeBody[0].x<0 || that.snake.snakeBody[0].x >= box.offsetWidth/that.snake.w
                    || that.snake.snakeBody[0].y<0 || that.snake.snakeBody[0].y>=box.offsetHeight/that.snake.h) {
                    clearInterval(timer);
                    alert("lose")
                }
                //当头和身体碰到的时候就死了
                for(var i=3;i<that.snake.snakeBody.length;i++) {
                    var body = that.snake.snakeBody[i];
                    if(that.snake.snakeBody[0].x == body.x && that.snake.snakeBody[0].y == body.y) {
                        clearInterval(timer);
                        alert("your lose")
                    }
                }

            },that.level)
        },
        bindEvent:function(){
            var that = this;
            document.onkeydown = function(e) {
                var e = e||window.event;
                console.log(e.keyCode);
                switch(e.keyCode) {
                    case 37:
                    if(that.snake.direction != "right") {
                        that.snake.direction = "left";
                    }
                    break;
                    case 38:
                    if(that.snake.direction != "down") {
                        that.snake.direction = "up";
                    }
                    break;
                    case 39:
                    if(that.snake.direction != "left") {
                        that.snake.direction = "right";
                    }
                    break;
                    case 40:
                    if(that.snake.direction != "up") {
                        that.snake.direction = "down";
                    }
                    break;
                }
            }
        }
    }
    window.Game = Game;

})(window)