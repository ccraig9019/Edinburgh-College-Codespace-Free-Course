#Get input from user
num1 = int(input("Input first number: "))
num2 = int(input("Input second number: "))
num3 = int(input("Input third number: "))

#compare numbers and return statement
if num1 < num2 and num2 < num3:
    print("Increasing order.")
elif num1 > num2 and num2 > num3:
    print("Decreasing order.")
else:
    print("Neither increasing or decreasing order.")