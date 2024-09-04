#Get user input
multiplicand = int(input("Input a number:"))
multiplier = 1

while multiplier < 11:
    result = multiplicand*multiplier
    print(str(multiplicand) + " x " + str(multiplier) + " = " + str(result))
    multiplier += 1