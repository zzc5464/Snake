/*
* @Author: Marte
* @Date:   2017-08-27 19:01:14
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-27 19:06:13
*/

(function(window){
    var zzc = {
        getRandom:function (min, max){
            return Math.floor(Math.random() * (max - min) + min);
        }
    }
    window.zzc = zzc;
})(window)