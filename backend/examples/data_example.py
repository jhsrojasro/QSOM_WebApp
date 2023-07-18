from matplotlib import pyplot as plt
import numpy as np
import sys
sys.path.append('..')
from utils.data import *


input_shape = (5000,2)

side = 1
radix = 1
low = -0.5
high = 0.5
lower_radix = 0.5
high_radix = 1
center = 0
mean = 1

cicleData = circleDistribution(input_shape, 1)
rectangleData = rectangleDistribution(input_shape, side)
gaussianData = gaussianDistribution(input_shape, center, mean)
trapezoidData = trapeziumDistribution(input_shape, lower_base=1, higher_base=0.8, height=1)
triangleData = triangleDistribution(input_shape, side)
ringData = ringDistribution(input_shape, lower_radix, high_radix)
uniformData = uniformDistribution(input_shape,low, high)
rhombusData = rhombusDistribution(input_shape, side)


fig, axs = plt.subplots(4,2)
axs[0,0].scatter(cicleData[:,0], cicleData[:,1])
axs[0,0].set_title('Circle')
axs[0,1].scatter(rectangleData[:,0], rectangleData[:,1])
axs[0,1].set_title('Rectangle')
axs[1,0].scatter(gaussianData[:,0], gaussianData[:,1])
axs[1,0].set_title('Gaussian')
axs[1,1].scatter(trapezoidData[:,0], trapezoidData[:,1])
axs[1,1].set_title('Trapezoid')
axs[2,0].scatter(triangleData[:,0], triangleData[:,1])
axs[2,0].set_title('Triangle')
axs[2,1].scatter(ringData[:,0], ringData[:,1])
axs[2,1].set_title('Ring')
axs[3,0].scatter(uniformData[:,0], uniformData[:,1])
axs[3,0].set_title('Uniform')
axs[3,1].scatter(rhombusData[:,0], rhombusData[:,1])
axs[3,1].set_title('Rhombus')

plt.show()
