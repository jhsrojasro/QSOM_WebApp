export const scatter_options = {
    animation: {
        duration: 0,
    },
    plugins: {
        title: {
            display: true,
            text: 'Prototype Space',
            padding: 20,
            font: {
                size: 20,
            }

        }
    },
    scales: {
        x: {
            title: {
                display: true,
                text: 'x',
            }
            // min: -1,
            // max: 1,
        },
        y: {
            title: {
                display: true,
                text: 'y',
            }
            // min: -1,
            // max: 1,
        },
    },
};

export const line_options = {
    animation: {
        duration: 0,
    },
    plugins: {
        title: {
            display: true,
            text: 'Distorsion',
            padding: 20,
            font: {
                size: 20,
            }

        }
    },
    scales: {
        y: {
            title: {
                display: true,
                text: 'distorsion',
            },
            min: 0,
            // max: 1,
        },
        x: {
            title: {
                display: true,
                text: 'epoch',
            }
        }
    },
};

export const colores = {
    "blue" : "#1d8cf8",
    "morado" : "#e14eca",
    "verde" : "#00f2c3",
    "naranja": "#fb6340",
    "gris": '#b6baba',
    "amarillo": "#ffd600"
}