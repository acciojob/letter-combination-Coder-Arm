const lookup = {
		"0" : 0,
	    "1" : 1,
		"2" : "abc",
		"3" : "def",
	    "4" : "ghi",
		"5" : "jkl",
		"6" : "mno",
		"7" : "pqrs",
		"8" : "tuv",
		"9" : "wxyz"
	}
function letterCombinations(input_digit) {
  //Complete the function
  let arr = [];
   calculate(input_digit,0,"");
	return arr;	
	}

function calculate(str,idx,ans){
	if(str.length === 0){
		return;
	}
		if(idx === str.length()){
			arr.push(ans);
			return;
		}

	  let digit = Number(str.charAt(idx));
	 let letters = lookup[digit];
	for(let i = 0; i < letters.length; i++){
		let char = letters[i];
		calculate(str,idx+1,ans+ch);
	}
	
}


module.exports = letterCombinations;
