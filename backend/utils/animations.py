import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation

class SomAnimation:
    def __init__(self, distorsions, weights, title="SOM Training"):
        self.distorsions = distorsions
        self.weights = weights
        self.fig, self.axs = plt.subplots(2)
        self.fig.set_size_inches(9, 6)
        self.fig.suptitle(title)
        self.fig.tight_layout(pad=3.5)
        self.distorsion_plot, = self.axs[0].plot([], [])
        self.prototype_plot = self.axs[1].scatter([],[])
        self.xdata_distorsion , self.ydata_distorsion  = [], []

    def initAnimation(self):
        self.axs[0].set_xlim(1, self.distorsions.shape[0])
        self.axs[0].set_ylim(0, np.max(self.distorsions))
        self.axs[0].set_xlabel("t")
        self.axs[0].set_ylabel("Distorsion")
        ypad = 0.2
        xpad = 0.05
        self.axs[1].set_xlim(np.min(self.weights[:,:,0])-xpad, np.ceil(np.max(self.weights[:,:,0]))+xpad)
        self.axs[1].set_ylim(np.floor(np.min(self.weights[:,:,1]))-ypad, np.ceil(np.max(self.weights[:,:,1]))+ypad)
        self.axs[1].set_xlabel("x")
        self.axs[1].set_ylabel("y")
    
    def updateAnimation(self, frame):
        distorsion , weight = self.distorsions[frame], self.weights[frame]
        self.xdata_distorsion.append(len(self.ydata_distorsion)+1)
        self.ydata_distorsion.append(distorsion)
        self.distorsion_plot.set_data(self.xdata_distorsion, self.ydata_distorsion)
        self.prototype_plot.set_offsets(weight)
        plt.savefig("img/som_"+str(frame)+".png")
        
    def getAnimation(self):
        return FuncAnimation(self.fig, self.updateAnimation, frames= list(range(len(self.distorsions))), init_func=self.initAnimation, blit=False, repeat=False)