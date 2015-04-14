//Requirement 4A
var isArmstrong = function(n){
	"use strict";
	var sum = "";
	n = String(n);
	for(var i = 0; i < n.length; ++i)
	sum = sum + Math.pow(n[i], n.length)
	n=parseInt(n);

if(sum == n){
        return true;
        }

        else{
      	return false;
}}




//Requirement 4B
var allArmstrongs = function(n){

	
}