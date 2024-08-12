# Ex 1
def verticalizeName(name):
    for letter in name:
        print(letter)


# verticalizeName(input("Enter your name: "))


# Ex 2
def sumNaturalNumbers():
    numberList = input("Insira numeros separados por espaco: ").split()

    totalSum = 0

    for char in numberList:
        if char.isdigit():
            totalSum += int(char)
        else:
            print(f"O valor {char} não é um número")

    print(totalSum)


# sumNaturalNumbers()


# Ex 3
def evalueStudents():
    with open("file.txt", mode="r") as file:
        lines = file.readlines()

        failedStudents = []

        for line in lines:
            studentData = line.split()

            if int(studentData[1]) < 6:
                failedStudents.append(studentData[0] + "\n")

        with open("failed.txt", mode="w") as failedFile:
            failedFile.writelines(failedStudents)


evalueStudents()
