//Requirement 4A
var isArmstrong = function(n){
	"use strict";
	var sum = 0;
	n = String(n);
	for(var i = 0; i < n.length; ++i)
	sum = sum + Math.pow(n[i], n.length)
	n=parseInt(n);

if(sum == n){
        return true;
        }

        else{
      	return false;
	}	
}


//Requirement 4B
var allArmstrongs = function (){
	var result="";
for(var i=1; i<100000; i++) {
	if(isArmstrong(i))
		result = result + String(i) + "," ;
}
	return result;
}



//Requirement 4C

var allSubstrings1 = function(s){

	var result="";

	for(var i=0; i<=s.length; i++){
	for (var j =i+1; j<=s.length; j++){
		result = result + s.substring(i,j) + "," ;
	}
}
	return result;
}


//Requirement 4D

var allSubstrings2 = function(s){
	var result=[];
	for(var i = 0; i <= s.length; i++){
	for (var j = i+1; j <= s.length; j++){
		var str = s.substring(i,j);
		result.push(str);
	}
}
	return result;
}


//Requirement 4E
var maxWord = function (wstring) {
        'use strict';
        var mylist = wstring.split(" ");
        var longest = "";

        for (var i = 0; i < mylist.length; ++i){
        var word = mylist[i];
        if(longest.length<=word.length) {
        longest = word;
        }
        }
        return longest;
}