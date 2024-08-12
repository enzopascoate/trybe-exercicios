# Funcao para calcular a area de um quadrado
def square(side):
    return side * side


# Funcao para calcular a area de um retangulo
def rectangle(length, width):
    return length * width


PI = 3.14


# Funcao para calcular a area de um circle
def circle(radius):
    return PI * (radius**2)


print("Área do quadrado:", square(10))
print("Área do retângulo:", rectangle(2, 2))
print("Área do círculo:", circle(3))
