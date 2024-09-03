import random

user_choice = input("Rock, paper or scissors?")

computer_choices_list = ["rock", "paper", "scissors"]

computer_choice = random.choice(computer_choices_list)

#This is used as a reference for the if statement after the first print
valid_choices = ("rock", "paper", "scissors")

print(f"You chose {user_choice.lower()}.")
if user_choice.lower() not in valid_choices:
#This part checks that the user input is one of the 3 valid choices
	print("That is not a valid choice.")
print(f"The computer chose {computer_choice.lower()}.")



#This is the extensive part that evaluates the combination of choices
if user_choice.lower() == computer_choice.lower():
	print("It's a draw!")
elif user_choice.lower() != computer_choice.lower():
	if user_choice.lower() == "rock":
		if computer_choice.lower() == "paper":
			print("The computer wins!")
		elif computer_choice.lower() == "scissors":
			print("You win!")
	elif user_choice.lower() == "scissors":
		if computer_choice.lower() == "rock":
			print("The computer wins!")
		elif computer_choice.lower() == "paper":
			print("You win!")
	elif user_choice.lower() == "paper":
		if computer_choice.lower() == "scissors":
			print("The computer wins!")
		elif computer_choice.lower() == "rock":
			print("You win!")
