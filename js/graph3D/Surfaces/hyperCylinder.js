Surfaces.prototype.hyperCyilinder = (count = 20, color = null) => {
    const points = [];
    const polygons = [];
    const edges = [];

    //точки
    const size = 20;
    const delta = size / count;
    for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
            const x = i * delta - size / 2;
            const z = j * delta;
            let y = 5 / x;
            points.push(new Point(x, y, z));
        }
    }

    if (color === null) {
        let color = [];
        for (let i = 0; i <= points.length; i++) {
            let r = Math.floor(Math.random() * (256));
            let g = Math.floor(Math.random() * (256));
            let b = Math.floor(Math.random() * (256));
            color[i] = '#' + r.toString(16) + g.toString(16) + b.toString(16);
        }
        for (let i = 0; i < points.length; i++) {
            //ребра по вертикали
            if (i + 1 < points.length && (i + 1) % count != 0) {
                edges.push(new Edge(i, i + 1));
            }
            //ребра по горизонтали
            if (i + count < points.length) {
                edges.push(new Edge(i, i + count));
            }
            //полигоны
            if (i + 1 + count < points.length && (i + 1) % count != 0) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color[i]));
            }
        }
    }
return new Subject(points, edges, polygons);
}