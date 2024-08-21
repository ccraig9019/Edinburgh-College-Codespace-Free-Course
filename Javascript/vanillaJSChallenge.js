//blocks to assign player choice based on button clicked
		function playerRock() {
			document.getElementById("playerChoice").value = "Rock";
			}
		function playerPaper() {
			document.getElementById("playerChoice").value = "Paper";
			}
		function playerScissors() {
			document.getElementById("playerChoice").value = "Scissors";
			}	
		
		var computerChoice;
			
		//block to evaluate computer Choice at random
		function computerPick() {
			let n = Math.random();
			//console.log(n); //for debugging
			if (n < 0.33) {
				computerChoice = "Rock";
				}
			else if (n > 0.67) {
				computerChoice = "Scissors";
				}
			else {
				computerChoice = "Paper"
				}
			
			document.getElementById("computerChoice").value = computerChoice;
			}
		
		//function to compare the player's choice and the computer's choice
		function playerVsComputer() {
			
			var playerChoice = document.getElementById("playerChoice").value;
			var r;
			
			console.log(playerChoice);
			console.log(computerChoice);
			
			if (playerChoice == computerChoice) {
				r = "It's a draw!";
			}
				
			else if (playerChoice == "Rock") {
				if (computerChoice == "Paper") {
					r = "The computer wins!"; 
					}
				else if (computerChoice == "Scissors") {
					r = "You win!";
				}
			}
				
			else if (playerChoice == "Paper") {
				if (computerChoice == "Rock") {
					r = "You win!";
				}
				else if (computerChoice == "Scissors") {
					r = "The computer wins!";
					}
			}
			
			else if (playerChoice == "Scissors") {
				if (computerChoice == "Rock") {
					r = "The computer wins!";
				}
				else if (computerChoice == "Paper") {
					r = "You win!";
				}
			}	
			
			console.log(r); //for debugging		
			document.getElementById("result").value = r; //assigning the result of the playerVsComputer function to the form box
		}