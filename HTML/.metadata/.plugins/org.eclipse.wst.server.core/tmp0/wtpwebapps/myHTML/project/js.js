// 변수
var btn = document.querySelectorAll('.btn');
var mod = document.getElementsByClassName("mod");
var input = document.querySelector('.input');
var equal = document.getElementsByClassName('equal');

document.addEventListener('DOMContentLoaded', function() {
	var currentInput = "0"; // 현재 입력 값
	var operator = ""; // 계산 값
	var previousInput = ""; // 이전 입력 값
	var isNewInput = true; // 새로운 입력인지 확인

	// 숫자 버튼 클릭 함수
	function btnNumclick(number) {
		if (currentInput.length < 12 || isNewInput) {
			if (isNewInput || currentInput === "0") {
				currentInput = number;
				isNewInput = false;
			} else {
				currentInput += number;
			}
		}
		input.textContent = currentInput;
	}

	// 연산자 버튼 클릭 함수
	function btnOperclick(op) {
		if (!isNewInput) {
			if (previousInput === "") {
				previousInput = currentInput;
			} else {
				calculate();
				previousInput = currentInput;
			}
			operator = op;
			isNewInput = true;
		}
	}

	// 계산 함수
	function calculate() {
		if (previousInput !== "" && operator !== "" && !isNewInput) {
			var result;
			var prev = parseFloat(previousInput);
			var current = parseFloat(currentInput);
			switch (operator) {
				case '+':
					result = prev + current;
					break;
				case '-':
					result = prev - current;
					break;
				case '×':
					result = prev * current;
					break;
				case '÷':
					result = prev / current;
					break;
				case '%':
					result = prev % current;
					break;
			}
			currentInput = result !== undefined ? result.toString().slice(0, 12) : "0"; // 결과값이 undefined가 아니면 결과값에 12자리 이하의 결과를 표시, 그렇다면 0 표시
			previousInput = "";
			operator = "";
			input.textContent = currentInput;
			isNewInput = true;
		}
	}

	//버튼 클릭 이벤트
	btn.forEach(function(button) {
		button.addEventListener("click", function() {
			var value = this.value;

			if (!isNaN(value)) {
				btnNumclick(value);
			}
			else if (value === ".") { // 소숫점 
				if (!currentInput.includes(".") && currentInput.length < 12) {
					if (isNewInput) {
						currentInput = "0.";
						isNewInput = false;
					} else {
						currentInput += value;
					}
					input.textContent = currentInput;
				}
			}
			else if (value === "AC") { 
				currentInput = "0";
				previousInput = "";
				operator = "";
				isNewInput = true;
				input.textContent = currentInput;
			}
			else if (value === "CE") {
				if (currentInput.length > 1) {
					currentInput = currentInput.slice(0, -1);
				} else {
					currentInput = "0";
					isNewInput = true;
				}
				input.textContent = currentInput;
			}
			else if (value === "=") {
				calculate();
			}
			else {
				btnOperclick(value);
			}
		});
	});

	input.textContent = currentInput;
});
