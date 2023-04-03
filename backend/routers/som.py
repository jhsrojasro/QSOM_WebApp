from fastapi import APIRouter
from database.database import SessionLocal
from schemas.som import SOMParams
from algorithms.SOM import SOM
from utils.data import *


db_session = SessionLocal()

router = APIRouter()

@router.post("/som/train")
async def train_som(params: SOMParams):
    som = SOM(
        structure_length=params.structure_length,
        structure_ndim=2, 
        dim=2, 
        distance=params.distance
    )

    X = None
    if params.distribution == "uniform":
        X = uniformDistribution((params.n_obs, 2), params.low, params.high)
    elif params.distribution == "rectangle":
        X = rectangleDistribution((params.n_obs, 2), params.height, params.width)
    elif params.distribution == "gaussian":
        X = gaussianDistribution((params.n_obs, 2), params.mean, params.std)
    elif params.distribution == "rhombus":
        X = rhombusDistribution((params.n_obs, 2), params.side)
    elif params.distribution == "triangle":
        X = triangleDistribution((params.n_obs, 2), params.height, params.base)
    elif params.distribution == "ring":
        X = ringDistribution((params.n_obs, 2), params.low_radix, params.high_radix)
    elif params.distribution == "trapezium":
        X = trapeziumDistribution((params.n_obs, 2), params.lower_base, params.higher_base, params.height)
    elif params.distribution == "circle":    
        X = circleDistribution((params.n_obs, 2), params.radix)

    distorsions, weights = som.fit(
        X, 
        params.epochs, 
        params.initial_learning_rate, 
        params.final_learning_rate, 
        params.initial_neighbourhood_width, 
        params.final_neighbourhood_width,
        training_data=True
    )

    distorsions = [{'x': i, 'y': distorsions[i]} for i in range(len(distorsions))]
    weights = [[{'x': W[i,0], 'y': W[i,1]} for i in range(W.shape[0])] for W in weights]
    X = [{'x': x[0], 'y': x[1]} for x in X]

    return {'distorsions': distorsions, 'weights': weights, 'data': X}

    
    