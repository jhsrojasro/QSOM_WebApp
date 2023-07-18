import axios from 'axios'
import {BACKEND_API_URL} from './api'
import {store} from '../redux/store'

const formatData = (data) => {
    return data.x.map((x, i) => {return {"x": data.x[i], "y": data.y[i]};})
};

export const UniformData = async (n_obs, low, high) => {
    let formData = new FormData();
    formData.append('n_obs', n_obs);
    formData.append('low', low);
    formData.append('high', high);

    let result = await axios.get(BACKEND_API_URL + '/data/uniform', {
        headers: {
            'Content-Type': 'application/json',
            //'Authorization': 'Bearer ' + store.getState().user.token
        },
        params: {
            'n_obs': n_obs,
            'low': low,
            'high': high
        }
    });
    return formatData(result.data);
}

export const CircleData = async (n_obs, radix) => {
    let result = await axios.get(BACKEND_API_URL + '/data/circle', {
        headers: {
            'Content-Type': 'application/json',
            //'Authorization': 'Bearer ' + store.getState().user.token
        },
        params: {
            'n_obs': n_obs,
            'radix': radix,
        }
    });
    return formatData(result.data);
}

export const RectangleData = async (n_obs, height, width) => {
    let result = await axios.get(BACKEND_API_URL + '/data/rectangle', {
        headers: {
            'Content-Type': 'application/json',
            //'Authorization': 'Bearer ' + store.getState().user.token
        },
        params: {
            'n_obs': n_obs,
            'height': height,
            'width': width,
        }
    });
    return formatData(result.data);
}

export const RingData = async (n_obs, low_radix, high_radix) => {
    let result = await axios.get(BACKEND_API_URL + '/data/ring', {
        headers: {
            'Content-Type': 'application/json',
            //'Authorization': 'Bearer ' + store.getState().user.token
        },
        params: {
            'n_obs': n_obs,
            'low_radix': low_radix,
            'high_radix': high_radix,
        }
    });
    return formatData(result.data);
}

export const TriangleData = async (n_obs, height, base) => {
    let result = await axios.get(BACKEND_API_URL + '/data/triangle', {
        headers: {
            'Content-Type': 'application/json',
            //'Authorization': 'Bearer ' + store.getState().user.token
        },
        params: {
            'n_obs': n_obs,
            'height': height,
            'base': base,
        }
    });
    return formatData(result.data);
}

export const TrapeziumData = async (n_obs, lower_base, higher_base, height) => {
    let result = await axios.get(BACKEND_API_URL + '/data/trapezium', {
        headers: {
            'Content-Type': 'application/json',
            //'Authorization': 'Bearer ' + store.getState().user.token
        },
        params: {
            'n_obs': n_obs,
            'height': height,
            'lower_base': lower_base,
            'higher_base': higher_base,
        }
    });
    return formatData(result.data);
}

export const RhombusData = async (n_obs, side) => {
    let result = await axios.get(BACKEND_API_URL + '/data/rhombus', {
        headers: {
            'Content-Type': 'application/json',
            //'Authorization': 'Bearer ' + store.getState().user.token
        },
        params: {
            'n_obs': n_obs,
            'side': side,
        }
    });
    return formatData(result.data);
}

export const GaussianData = async (n_obs, mean, std) => {
    let result = await axios.get(BACKEND_API_URL + '/data/gaussian', {
        headers: {
            'Content-Type': 'application/json',
            //'Authorization': 'Bearer ' + store.getState().user.token
        },
        params: {
            'n_obs': n_obs,
            'mean': mean,
            'std': std,
        }
    });
    return formatData(result.data);
}