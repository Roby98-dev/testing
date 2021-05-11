<?php

// for ($i = 1; $i < 101; $i++ ) {
//     if($i % 2 === 0) {
//     	echo "E";
//     } else {
//         echo $i;
//     }
// }

function fizz_buzz() {
	for($i  = 1; $i <= 100; $i++) {
		if($i % 3 === 0 && $i % 5 === 0) {
			echo "FizzBuzz <br/>";
		} else if($i % 3 === 0) {
			echo "Fizz <br/>";
		} else if($i % 5 === 0) {
			echo "Buzz <br/>";		
		} else {
			echo $i."<br/>";
		}
	}
}
// echo fizz_buzz();

$reverse_string = "hello world";

// echo "".strrev($reverse_string);

////////////////////////////

// $length = strlen($reverse_string);

// for($i = ($length - 1); $i >= 0; $i--) {
// 	echo $reverse_string[$i];
// }

///////////////////////////

// function rev_str($str) {
// 	$length = strlen($str);

// 	for($i = ($length - 1); $i >= 0; $i--) {
// 		echo $str[$i];
// 	}
// }
// echo rev_str($reverse_string);

//////////////////////////

$palindrome_string = "bali";

//////////////////////////

function is_palindrome($str) 
{
  if ($str == strrev($str)) {
      echo $str." Is Palindrome";;
  } else {
	  echo $str." Is Not Palindrome";;
  }
}
// echo is_palindrome($palindrome_string);

$reverse_number = 12345;

function rev_numb($int) {
	$revnum = 0;

	while ($int > 1) {
		$rem = $int % 10;
		$revnum = ($revnum * 10) + $rem;
		$int = ($int / 10);
	}

	// echo "Reverse number of 12345 is: $revnum";
}
// echo rev_numb($reverse_number);

function is_anagram($a, $b) {
	if(count_chars($a, 1) === count_chars($b, 1)) {
		echo $a." and ".$b." is an anagram";
	} else {
		echo $a." and ".$b." is not an anagram";
	}
}

echo is_anagram('elbow', 'below');










































