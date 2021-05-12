// for (let i = 1; i < 101; i++ ) {
//     if(i % 2 === 0) {
//         console.log('E');
//     } else {
//         console.log(i);
//     }
// }

function fizzBuzz() {
	for(let i = 1; i <= 100; i++) {
		if(i % 3 === 0 && i % 5 === 0) {
			console.log('FizzBuzz');
		} else if(i % 3 === 0) {
			console.log('Fizz');
		} else if(i % 5 === 0) {
			console.log('Buzz');
		} else {
			console.log(i);
		}
	}
}

function reverseString(str) {
// 	return str.split('').reverse('').join('');

//////////////////
    // let revString = '';
    // for(let i = str.length - 1; i >= 0; i--) {
    //     revString = revString + str[i];
    // }
    // return revString;

////////////////
    // let revString = '';
    // for(let i = 0; i <= str.length - 1; i++) {
    //     revString = str[i] + revString;
    // }
    // return revString;

////////////////
    // let revString = '';
    // for(let char of str) {
    //     revString = char + revString;
    // }
    // return revString;

///////////////
    // let revString = '';
    // str.split('').forEach(function(char) {
    // 	revString = char + revString;
    // });
    // return revString;

////////////////
    // let revString = '';
    // str.split('').forEach(char => {
    // 	revString = char + revString;
    // });
    // return revString;

 ///////////////
 	return str.split('').reduce((revString, char) => 
 		char + revString, '');
}

function isPalindrome(str) {
	const revString = str.split('').reverse().join('');

	// return revString === str;

	if(revString === str) {
		console.log('Is Palindrome');
	} else {
		console.log('Is Not Palindrome');
	}
	return revString;
}

function reverseInt(int) {
	const revString = int.toString().split('').reverse().join('');

	return parseInt(revString) * Math.sign(int);
}

function capitalizeLetters(str) {
	// const strArr = str.toLowerCase().split(' ');

	// for (let i = 0; i < strArr.length; i++) {
	// 	strArr[i] = strArr[i].substring(0, 1).toUpperCase() + 
	// 	strArr[i].substring(1);
	// }

	// return strArr.join(' ');

	//////////////////////

	return str.toLowerCase().split(' ').map(word => {
		return word[0].toUpperCase() + word.substring(1);
	}).join(' ');

	/////////////////////
	// return str.replace(/\b[a-z]/gi, function(char) {
	// 	return char.toUpperCase();
	// });
}



function maxCharacter(str) {
	const charMap = {};
	let maxNum = 0;
	let maxChar = '';

	str.split('').forEach(function(char) {
		if(charMap[char]) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	});

	for(let char in charMap) {
		if(charMap[char] > maxNum) {
			maxNum = charMap[char];
			maxChar = char;
		}
	}

	return maxChar;
}



function longestWord(sen) {
	const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

	const sorted = wordArr.sort((a, b) => 
		b.length - a.length);

	// return sorted[0];

	const longestWordArr = sorted.filter(word => 
		word.length === sorted[0].length);

	if(longestWordArr.length === 1) {
		return longestWordArr[0];
	} else {
		return longestWordArr;
	}
}



function chunkArray(arr, len) {
	const chunkArray = [];

	let i = 0;

	while(i < arr.length) {
		chunkArray.push(arr.slice(i, i + len));
		i += len;
	}

	return chunkArray;
}



function flattenArr(arrays) {
	return [].concat.apply([], arrays);
}

function isAnagram(str1, str2) {
	if(formatStr(str1) === formatStr(str2)) {
		console.log('Is Anagram');
	} else {
		console.log('Is Not Anagram');
	}

	return formatStr(str1) === formatStr(str2);
}

function formatStr(str) {
	return str.replace(/[^\w]/g, '')
	.toLowerCase()
	.split('')
	.sort()
	.join('');
}

function letterChanges(str) {
	let nweStr = str.toLowerCase().replace(/[a-z]/gi, char => { 
		if(char === 'z' || char === 'Z') {
			return 'a';
		} else {
			return String.fromCharCode(char.charCodeAt() + 1);
		}
	});
	return nweStr;
}

// Push the 0 to end;
// Sun Media Test

function test1(arr) {
	arr.push(arr.splice(arr.indexOf(0), 1)[0]);

	return arr;
}



function test2(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
            arr.push(0);
        }
    }
    return arr;
}



function test3(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
            arr.push(0);
        }
    }
    return arr;
}

const output = test3([0, 4, 8, 3, 0, 1]);
console.log(output);
