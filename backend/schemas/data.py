from pydantic import BaseModel

class UniformParams(BaseModel):
    n_obs: int
    low: float
    high: float

class RectangleParams(BaseModel):
    n_obs: int
    height: float
    width: float

class CircleParams(BaseModel):
    n_obs: int
    radix: float

class RingParams(BaseModel):
    n_obs: int
    low_radix: float
    high_radix: float

class TriangleParams(BaseModel):
    n_obs: int
    height: float
    base: float

class TrapeziumParams(BaseModel):
    n_obs: int
    lower_base: float
    higher_base: float
    height: float

class RhombusParams(BaseModel):
    n_obs: int
    side: float

class GaussianParams(BaseModel):
    n_obs: int
    mean: float
    std: float