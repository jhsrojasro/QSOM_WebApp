from pydantic import BaseModel

class SOMParams(BaseModel):
    structure_length: int
    distance: str
    n_obs: int
    epochs: int
    initial_learning_rate: float
    final_learning_rate: float
    initial_neighbourhood_width: float
    final_neighbourhood_width: float
    distribution: str
    low_radix: float | None
    high_radix: float | None
    low: float | None
    high: float | None
    height: float | None
    width: float | None
    radix: float | None
    base: float | None
    mean: float | None
    std: float | None
    side: float | None
    lower_base: float | None
    higher_base: float | None


