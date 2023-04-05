from ulab import numpy

def mean(x):
    return numpy.sum(x) / len(x)

def std(x):
    return numpy.sqrt(numpy.sum((x - mean(x)) ** 2) / (len(x) - 1))

def median(x):
    x = numpy.sort(x)
    if len(x) % 2 == 0:
        return (x[len(x) // 2] + x[len(x) // 2 - 1]) / 2
    else:
        return x[len(x) // 2]
    
def kurtosis(x):
    return numpy.sum((x - mean(x)) ** 4) / (len(x) * std(x) ** 4) - 3


def skewness(x):
    return numpy.sum((x - mean(x)) ** 3) / (len(x) * std(x) ** 3)

def max(x):
    return numpy.max(x)
