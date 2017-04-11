'use strict';

/**
 * @ngdoc function
 * @name folletoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the folletoApp
 */
angular.module('folletoApp')
  .controller('MainCtrl', function () {
    

     window.onscroll = function(){myF()};
        var firstTime = true;
        function myF(){
            /*
            ====================
                  advice1
            ====================
            */
            if(document.body.scrollTop > 350 || document.documentElement.scrollTop
            > 350){
                document.getElementById("advice1").className = "animated tableAnimationIn visibilityVisible";
                firstTime = false;
            } else{
                if(!firstTime){
                    document.getElementById("advice1").className = "animated tableAnimationOut";				
                }
            }
            /*
            ====================
                  advice2
            ====================
            */
            if(document.body.scrollTop > 650 || document.documentElement.scrollTop
            > 650){
                document.getElementById("advice2").className = "animated tableAnimationIn visibilityVisible";
                firstTime = false;
            } else{
                if(!firstTime){
                    document.getElementById("advice2").className = "animated tableAnimationOut";				
                }
            }
             /*
            ====================
                  DEVELOPERS
            ====================
            */
            if(document.body.scrollTop > 900 || document.documentElement.scrollTop
            > 900){
                document.getElementById("developers").className = "animated tableAnimationIn visibilityVisible";
                firstTime = false;
            } else{
                if(!firstTime){
                    document.getElementById("developers").className = "animated tableAnimationOut";				
                }
            }
        }

  });
