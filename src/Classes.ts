//  Абстрактный класс MyGraphicsPrimitive2D у которого есть следующие свойства:
//    прямоугольная область(2 точки координат (x и y), левая верхняя и правая нижняя), описывающая примитив, т.е. область данной фигуры;
//    метод - переместить примитив на заданное смещение (просто число);.

//    От него дожен наследоваться абстрактный класс MyAreaPrimitive2D,
//    у которого есть абстрактный метод площадь фигуры.

//    От него должны наследоваться класс MyCircle, у него есть свойства: центр окружности и ее радиус,
//    а также должен наследоваться класс MyRectangle с методами: ширина и высота

export interface Coordinate {
  x:number 
  y:number
}

export abstract class MyGraphicsPrimitive2D{
  pointA:Coordinate  = {x:0, y:0}
  pointB:Coordinate  = {x:0, y:0}

  constructor(a:Coordinate, b?:Coordinate) {
    if(a != null){
      this.pointA.x = a.x
      this.pointA.y = a.y
    }
    if( b && b !== null) {
      this.pointB.x = b.x
      this.pointB.y = b.y
    }
   
  }
  // Двигаем фигуру, допустим по оси "х"
  movePrimitive(n:number):void{
    this.pointA.x = this.pointA.x + n;
    this.pointB.x = this.pointB.x + n;
  }
}

export abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {
  abstract calculateSquare(): number
}

export class MyCircle extends MyAreaPrimitive2D{
  radius:number

  constructor(a:Coordinate, r:number) {
    super(a)
    this.pointA = a;
    this.radius = r
  }

  calculateSquare(): number {
    return Math.PI * this.radius ** 2
  }
}

export class MyRectangle extends MyAreaPrimitive2D{

  width():number{
    return Math.abs(this.pointA.x - this.pointB.x)
  }
  high():number{
    return Math.abs(this.pointA.y - this.pointB.y)
  }

  calculateSquare(): number {
    return this.high() * this.width();
  }
}
