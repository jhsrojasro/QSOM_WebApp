import numpy as np

def circleDistribution(input_shape, radix=1):
    #Data
    n = input_shape[0]
    #Uniform distribution
    X = np.zeros(input_shape)
    for i in range(n):
        r = np.random.uniform(low=-radix, high=radix, size=input_shape[1])
        while np.power(r,2).sum() > radix ** 2:
            r = np.random.rand(2)
        X[i,0] = r[0]
        X[i,1] = r[1]
    return X

def rectangleDistribution(input_shape, height=1, width=2):
    return np.random.uniform(low=[-width/2, - height/2], high=[width/2, height/2], size=input_shape)

def gaussianDistribution(input_shape, mean, std):
    return np.random.normal(loc=mean, scale=std, size=input_shape)

def uniformDistribution(input_shape, low, high):
    return np.random.uniform(low=low, high=high, size=input_shape)

def rhombusDistribution(input_shape, side=1):
    X = np.zeros(input_shape)
    n = input_shape[0]
    for i in range(n):
        r = np.random.uniform(low=-side/2, high=side/2, size=input_shape[1])
        while np.abs(r[0]) + np.abs(r[1]) > side/2:
            r = np.random.uniform(low=-side/2, high=side/2, size=input_shape[1])
        X[i,0] = r[0]
        X[i,1] = r[1]
    return X

def triangleDistribution(input_shape, height=1, base=1):
    X = np.zeros(input_shape)
    n = input_shape[0]
    for i in range(n):
        x = np.random.uniform(low=-base/2, high=base/2)
        y = np.random.uniform(low=0, high=height)
        while not ( x >= (y - height) * base / (2 * height) and x <= (height - y) * base / (2 * height) and y <= height and y >= 0):
            x = np.random.uniform(low=-base/2, high=base/2)
            y = np.random.uniform(low=0, high=height)
        X[i,0] = x
        X[i,1] = y
    return X

def ringDistribution(input_shape, low_radix=0.5, high_radix=1):
    X = np.zeros(input_shape)
    n = input_shape[0]
    for i in range(n):
        r = np.random.uniform(low=-high_radix, high=high_radix, size=input_shape[1])
        while not (np.power(r,2).sum() >= low_radix ** 2 and np.power(r,2).sum() <= high_radix ** 2):
            r = np.random.uniform(low=-high_radix, high=high_radix, size=input_shape[1])
        X[i,0] = r[0]
        X[i,1] = r[1]
    return X

def trapeziumDistribution(input_shape, lower_base=1, higher_base=0.8, height=1):
    X = np.zeros(input_shape)
    n = input_shape[0]
    for i in range(n):
        x = np.random.uniform(low=-lower_base/2, high=lower_base/2) 
        y = np.random.uniform(low=0, high=height)
        while not (x >= (y - height) * ((lower_base/2 - higher_base/2) / height) - higher_base/2
                   and x <= (height - y) * (lower_base/2 - higher_base/2) / height + higher_base/2
                   and y <= height and y >= 0):
            x = np.random.uniform(low=-lower_base/2, high=lower_base/2)
            y = np.random.uniform(low=0, high=height)
        X[i,0] = x
        X[i,1] = y
    return X
    