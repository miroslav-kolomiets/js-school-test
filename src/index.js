const params = {
    lines: [{
            background: '#00f',
            updateTime: 500,
            elements: [{
                    background: '#eff2f7',
                    width: 25
                },
                {
                    background: '#c0a3c4',
                    width: 50
                },
                {
                    background: '#f890e7',
                    width: 25
                }
            ]
        },
        {
            background: '#00f',
            updateTime: 1000,
            elements: [{
                    background: '#3393fd',
                    width: 50
                },
                {
                    background: '#dadadc',
                    width: 25
                },
                {
                    background: '#717171',
                    width: 25
                }
            ]
        },
        {
            background: '#00f',
            updateTime: 1500,
            elements: [{
                    background: '#eff6e0',
                    width: 25
                },
                {
                    background: '#124559',
                    width: 25
                },
                {
                    background: '#e5e5ee',
                    width: 50
                }
            ]
        }
    ]
}

const lineHeight = () => {
    const height = `${100 / params.lines.length}vh`;
    return height;
}

const renderLines = params => {
    const lines = params.lines;
    lines.forEach(function(line, i) {
        document.getElementById('root').innerHTML += `<div id="line-${i}" class="line" style="background: ${line.background}; height:${lineHeight()}"></div>`;
    });
}

const renderElements = params => {
    const lines = params.lines;
    for (let i = 0; i < lines.length; i++) {
        let elements = lines[i].elements;
        for (let k = 0; k < lines.length; k++) {
            document.getElementById(`line-${i}`).innerHTML += `<div id="element-${i}-${k}" class="element" style="background: ${elements[k].background}; width:${elements[k].width}%; height: ${lineHeight()}"></div>`;
        }
    }
}

const getRandomColor = () => {
    const randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
    return randomColor;
}

const updateBackgroundColor = (params) => {
    const lines = params.lines;
    for (let i = 0; i < lines.length; i++) {
        let interval = lines[i].updateTime;
        setTimer(`line-${i}`, interval);
    }
}

const setTimer = (id, timer) => {
    setInterval(() => {
        const updatedColor = getRandomColor();
        document.getElementById(`${id}`).style.backgroundColor = updatedColor;;
    }, timer);
}

const render = (params) => {
    renderLines(params);
    renderElements(params);
    updateBackgroundColor(params);
}

document.addEventListener("DOMContentLoaded", render(params));
