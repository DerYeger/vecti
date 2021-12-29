export class Vector {
  public static of([x, y]: [number, number]): Vector {
    return new Vector(x, y)
  }

  public constructor(public readonly x: number, public readonly y: number) {}

  public add(val: Vector | number): Vector {
    if (typeof val === 'number') {
      return new Vector(this.x + val, this.y + val)
    }
    return new Vector(this.x + val.x, this.y + val.y)
  }

  public subtract(val: Vector | number): Vector {
    if (typeof val === 'number') {
      return new Vector(this.x - val, this.y - val)
    }
    return new Vector(this.x - val.x, this.y - val.y)
  }

  public multiply(scalar: number): Vector {
    return new Vector(this.x * scalar, this.y * scalar)
  }

  public divide(scalar: number): Vector {
    return new Vector(this.x / scalar, this.y / scalar)
  }

  public dot(other: Vector): Vector {
    return new Vector(this.x * other.x, this.y * other.y)
  }

  public cross(other: Vector): number {
    return this.x * other.y - other.x * this.y
  }

  public length(): number {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
  }

  public normalize(): Vector {
    const length = this.length()
    return new Vector(this.x / length, this.y / length)
  }

  public rotateByRadians(rad: number): Vector {
    const cos = Math.cos(rad)
    const sin = Math.sin(rad)
    return new Vector(this.x * cos - this.y * sin, this.x * sin + this.y * cos)
  }

  public rotateByDegrees(deg: number): Vector {
    return this.rotateByRadians((deg * Math.PI) / 180)
  }
}
