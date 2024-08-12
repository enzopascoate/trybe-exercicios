import exsaula


def test_is_odd_when_number_is_odd_returns_true():
    "a função deve retornar o valor True"
    assert exsaula.x(3) is True


def test_is_odd_when_number_is_even_returns_false():
    "a função deve retornar o valor False"
    assert exsaula.x(2) is False
