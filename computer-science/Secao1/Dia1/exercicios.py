# Itens genericos

listaNumeros = [2, 3, 7]


# Ex 1
def highestNum(numbers):
    return max(numbers)


print(highestNum(listaNumeros))


# Ex 2
def mediaAritmetica(numbers):
    return sum(numbers) / len(numbers)


print(mediaAritmetica(listaNumeros))


# Ex 3
def printSquare(tamanho):
    if tamanho > 1:
        for index in range(tamanho):
            print("*" * tamanho)


printSquare(3)


# Ex 4
def biggestName(nameList):
    biggestName = ""

    for name in nameList:
        if len(name) > len(biggestName):
            biggestName = name
    return biggestName


"""
Alternativa mais elegante para o Ex 4

def biggestName(nameList):
    return max(nameList, key=len)
"""


# Ex 5

# Ex 6


def isTriangle(a, b, c):
    if a == b == c:
        return "Equilátero"
    elif a == b or a == c or b == c:
        return "Isósceles"
    elif a != b != c:
        return "Escaleno"
    else:
        return "Não é um triângulo"
