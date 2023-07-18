import numpy as np
import matplotlib.pyplot as plt
from tqdm import tqdm

class SOM:
    def __init__(self, structure_length = 5, structure_ndim = 2, dim = 2, distance = 'manhattan', verbose=False):
        self.structure_ndim = structure_ndim
        self.structure_length = structure_length
        self.data_dim = dim
        self.prototype_distances = None
        self.n_prototypes = None
        self.W = None
        self.distorsions = None
        self.type_distance = distance
        self.verbose = verbose
        self.distorsion = None

        if self.structure_ndim == 2:
            self.n_prototypes = self.structure_length ** 2
            self.precompute_distances_2d()
    
    def precompute_distances_2d(self):
        self.prototype_distances = np.zeros((self.n_prototypes, self.n_prototypes))
        
        for i in tqdm(range(self.n_prototypes)) if self.verbose else range(self.n_prototypes):
            for j in range(self.n_prototypes):
                if self.type_distance == 'euclidian':
                    self.prototype_distances[i,j] = np.linalg.norm(self.index_to_2d_point(i) - self.index_to_2d_point(j)) ** 2
                elif self.type_distance == 'manhattan':
                    self.prototype_distances[i,j] = np.abs(self.index_to_2d_point(i) - self.index_to_2d_point(j)).sum()
        
        if self.type_distance == 'euclidian': 
            self.prototype_distances /= np.max(self.prototype_distances)

    def fit(self, X, epochs, initial_learning_rate, final_learning_rate, initial_neighbourhood_width, final_neighbourhood_width, training_data=False, epsilon=0.0001):
        n = X.shape[0]
        self.data_dim = X.shape[1]
        self.W = np.random.uniform(low=-1, high = 1, size = (self.n_prototypes, self.data_dim))
        distorsions = np.zeros(epochs)

        """Save weights for animation"""
        if training_data:
            weights = np.zeros((epochs + 1, self.n_prototypes, self.data_dim))
            weights[0] = self.W
        
        
        for t in tqdm(range(epochs), desc="Training SOM....") if self.verbose else range(epochs):
            for i in range(n):
                distorsions[t] += np.power(np.linalg.norm(X[i] - self.W[self.BMU(X[i])]), 2).sum()
                self.W += self.deltaW(X[i], epochs, t, initial_learning_rate, final_learning_rate, initial_neighbourhood_width, final_neighbourhood_width)
            
            if training_data: 
                weights[t+1] = self.W
            
            # if t > 0 and abs(distorsions[t-1] - distorsions[t])/n <= epsilon:
            #     print("SOM training early stop at epoch: ", t)
            #     break

        distorsions /= n
        self.distorsion = distorsions[-1]
        return (self.distorsion, distorsions) if not training_data else (distorsions, weights)

    def BMU(self, x):
        return np.argmin(np.linalg.norm(x - self.W, axis=1) if self.type_distance == 'euclidian' else np.abs(x - self.W).sum(axis=1))

    def index_to_2d_point(self, i):
        return np.array([i // self.structure_length, i % self.structure_length])
            
    def epsilon(self, t,t_f, e_i, e_f):
        return e_i * pow(e_f/e_i, t / t_f)
    
    def sigma(self, t, t_f, s_i, s_f):
        return s_i * pow(s_f / s_i, t / t_f)
    
    def neighbourhood(self, t,t_f,j, s_i, s_f):
        return np.exp(- ( self.prototype_distances[j] / (2 * self.sigma(t, t_f, s_i, s_f) ** 2) ) )

    def deltaW(self, X_i, epochs, t, initial_learning_rate, final_learning_rate, initial_neighbourhood_width, final_neighbourhood_width):
        bmu = self.BMU(X_i)
        delta_w = (
            self.epsilon(t, epochs, initial_learning_rate, final_learning_rate) 
            * self.neighbourhood(t,epochs,bmu,initial_neighbourhood_width, final_neighbourhood_width).reshape(self.n_prototypes,1)
            * (X_i - self.W)
        )
        return delta_w