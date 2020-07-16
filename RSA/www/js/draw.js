let graph, Interval

function init() {
    let canvas = document.getElementById('graph')
    canvas.width = screen.width
    canvas.height = screen.height
    let ctx = canvas.getContext('2d')
    graph = new Graph(ctx, canvas)
    Interval = setInterval('engine()', 1)
}

class Graph {
    constructor(ctx, canvas) {
        this.x = 0
        this.y = 0
        this.ctx = ctx
        this.canvas = canvas
        this.isMove = false
    }

    draw() {        
        if (!this.isMove) return        
        this.ctx.beginPath()
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(this.x, this.y, 3, 3)
        this.ctx.closePath()
    }

    move(x, y) {
        this.x = x
        this.y = y
    }        
}

function engine() {
    graph.draw()    
}

function drawing(){
    if (graph.isMove == true) graph.move(event.x, event.y)
}

function pressed(isPressed) {
    if (isPressed) graph.isMove = true
    else graph.isMove = false
}