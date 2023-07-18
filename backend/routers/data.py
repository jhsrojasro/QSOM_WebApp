from fastapi import APIRouter, Depends
from typing import Annotated
from schemas.data import *
from utils.data import *
from utils.security import oauth2_scheme, validate_token

router = APIRouter()

@router.get("/data/uniform")
async def uniform_data(n_obs: int, low: float, high: float):
    data = uniformDistribution((n_obs,2), low, high)
    return {
        "x": data[:,0].tolist(),
        "y": data[:,1].tolist()
    }

@router.get("/data/rectangle")
async def rectangle_data(n_obs: int, height: float, width: float):
    data = rectangleDistribution((n_obs,2), height, width)
    return {
        "x": data[:,0].tolist(),
        "y": data[:,1].tolist()
    }

@router.get("/data/rhombus")
async def rhombus_data(n_obs: int, side: float):
    data = rhombusDistribution((n_obs,2), side)
    return {
        "x": data[:,0].tolist(),
        "y": data[:,1].tolist()
    }

@router.get("/data/triangle")
async def triangle_data(n_obs: int, height: float, base: float):
    data = triangleDistribution((n_obs,2), height, base)
    return {
        "x": data[:,0].tolist(),
        "y": data[:,1].tolist()
    }

@router.get("/data/ring")
async def ring_data(n_obs: int, low_radix: float, high_radix: float):
    data = ringDistribution((n_obs,2), low_radix, high_radix)
    return {
        "x": data[:,0].tolist(),
        "y": data[:,1].tolist()
    }

@router.get("/data/trapezium")
async def trapezium_data(n_obs: int, lower_base: float, higher_base: float, height: float):
    data = trapeziumDistribution((n_obs,2), lower_base, higher_base, height)
    return {
        "x": data[:,0].tolist(),
        "y": data[:,1].tolist()
    }

@router.get("/data/circle")
async def circle_data(n_obs: int, radix: float):
    data = circleDistribution((n_obs,2), radix)
    return {
        "x": data[:,0].tolist(),
        "y": data[:,1].tolist()
    }

@router.get("/data/gaussian")
async def gaussian_data(n_obs: int, mean: float, std: float):
    data = gaussianDistribution((n_obs,2), mean, std)
    return {
        "x": data[:,0].tolist(),
        "y": data[:,1].tolist()
    }