Surfaces.prototype.cube = (x = 0, y = 0, z = 0, size = 10) => {
    return new Subject([
        new Point(x - size, y - size, z - size),
        new Point(x - size, y - size, z + size),
        new Point(x + size, y - size, z + size),
        new Point(x + size, y - size, z - size),
        new Point(x - size, y + size, z - size),
        new Point(x - size, y + size, z + size),
        new Point(x + size, y + size, z + size),
        new Point(x + size, y + size, z - size),
    ], [
        new Edge(0, 1), new Edge(1, 2), new Edge(2, 3), new Edge(3, 0), new Edge(4, 5), new Edge(5, 6),
        new Edge(6, 7), new Edge(4, 7), new Edge(0, 4), new Edge(1, 5), new Edge(2, 6), new Edge(7, 3)
    ], [
        new Polygon([0, 1, 2, 3], '#FFAD50'),
        new Polygon([0, 4, 7, 3], '#50FF56'),
        new Polygon([0, 4, 5, 1], '#FF50FA'),
        new Polygon([1, 2, 6, 5], '#50A2FF'),
        new Polygon([2, 3, 7, 6], '#50F0FF'),
        new Polygon([4, 5, 6, 7], '#8650FF')
    ]);
}
