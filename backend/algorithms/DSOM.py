import numpy as np

from SOM.Som import SOM

class DSOM (SOM):
    def fit(self, X, epochs, learning_rate, elasticity):
        distorsions = np.zeros(epochs)
        weights = np.zeros((epochs + 1, self.n_prototypes, self.data_dim))
        n = X.shape[0]
        weights[0] = self.W
        for t in range(epochs):
            for i in range(n):
                distorsions[t] += np.power(np.linalg.norm(X[i] - self.W[self.BMU(X[i])]), 2).sum()
                self.W += self.deltaW(X[i],learning_rate, elasticity)
            weights[t+1] = self.W
            if(t % self.verbose == 0):
                print("Distorsion epoch ", t," :", distorsions[t] / n)
        distorsions /= n
        return distorsions, weights
    
    def deltaW(self, X_i, learning_rate, elasticity):
        bmu = self.BMU(X_i)
        delta_w = (
            learning_rate 
            * np.linalg.norm(X_i - self.W, axis=1).reshape(self.n_prototypes,1)
            * self.neighbourhood(bmu,X_i, elasticity).reshape(self.n_prototypes,1)
            * (X_i - self.W)
        )
        return delta_w

    def neighbourhood(self, s, v, elasticity):
        return np.exp( -( self.prototype_distances[s] / (elasticity ** 2 * np.linalg.norm(v - self.W[s]) ) ** 2) )
    