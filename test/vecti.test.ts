import { Vector } from 'src/vecti'
import { describe, expect, it } from 'vitest'

describe.concurrent('Vector', () => {
  describe('can be initialized', () => {
    it('using the constructor', () => {
      const vector = new Vector(42, 7)
      expect(vector.x).toEqual(42)
      expect(vector.y).toEqual(7)
    })

    it('using the static function', () => {
      const vector = Vector.of([42, 7])
      expect(vector.x).toEqual(42)
      expect(vector.y).toEqual(7)
    })
  })

  describe('has operations that', () => {
    it('adds another vector', () => {
      const vector = new Vector(42, 7).add(new Vector(-7, 7))
      expect(vector.x).toEqual(35)
      expect(vector.y).toEqual(14)
    })

    it('subtracts another vector', () => {
      const vector = new Vector(42, 7).subtract(new Vector(-7, 7))
      expect(vector.x).toEqual(49)
      expect(vector.y).toEqual(0)
    })

    it('multiply vectors by scalars', () => {
      const vector = new Vector(42, 7).multiply(2)
      expect(vector.x).toEqual(84)
      expect(vector.y).toEqual(14)
    })

    it('divide vectors by scalars', () => {
      const vector = new Vector(42, 7).divide(7)
      expect(vector.x).toEqual(6)
      expect(vector.y).toEqual(1)
    })

    it('calculate dot products of vectors', () => {
      const dotProduct = new Vector(42, 7).dot(new Vector(-1, 2))
      expect(dotProduct.x).toEqual(-42)
      expect(dotProduct.y).toEqual(14)
    })

    it('calculate cross products of vectors', () => {
      const crossProduct = new Vector(2, 3).cross(new Vector(-1, 2))
      expect(crossProduct).toEqual(7)
    })

    it('calculate length', () => {
      const length = new Vector(3, 4).length()
      expect(length).toEqual(5)
    })

    it('normalize vectors', () => {
      const normalized = new Vector(-5, 0).normalize()
      expect(normalized.x).toEqual(-1)
      expect(normalized.y).toEqual(0)
      expect(normalized.length()).toEqual(1)
    })

    describe('rotate vectors', () => {
      it('by radians', () => {
        const vector = new Vector(1, 0).rotateByRadians(Math.PI * 0.5)
        expect(vector.x).toBeCloseTo(0)
        expect(vector.y).toBeCloseTo(1)
      })

      it('by degrees', () => {
        const vector = new Vector(1, 0).rotateByDegrees(90)
        expect(vector.x).toBeCloseTo(0)
        expect(vector.y).toBeCloseTo(1)
      })
    })

    it('can be chained', () => {
      const vector = new Vector(-5, 0)
        .normalize()
        .rotateByDegrees(180)
        .add(Vector.of([0, 1]))
        .multiply(42)
      expect(vector.x).toBeCloseTo(42)
      expect(vector.y).toBeCloseTo(42)
    })

    it('do not mutate', () => {
      const vector = new Vector(1, 1)
      const other = Vector.of([42, 42])
      vector.add(other)
      vector.subtract(other)
      vector.multiply(42)
      vector.divide(42)
      vector.normalize()
      vector.dot(other)
      vector.cross(other)
      vector.rotateByRadians(Math.PI * 0.5)
      vector.rotateByDegrees(180)
      expect(vector).toEqual(new Vector(1, 1))
      expect(other).toEqual(new Vector(42, 42))
    })
  })
})
