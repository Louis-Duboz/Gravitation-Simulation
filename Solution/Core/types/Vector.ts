export class Vector {
  public X: number;
  public Y: number;

  /**
   * Constructs a new vector with the given x and y components.
   * @param x The x-component of the vector.
   * @param y The y-component of the vector.
   */
  public constructor(x: number, y: number) {
    this.X = x;
    this.Y = y;
  }

  /**
   * Adds the given vector to this vector and returns the resulting vector.
   * @param vector The vector to add.
   * @returns A new Vector instance representing the sum of this vector and the given vector.
   */
  public Add(vector: Vector): Vector {
    return new Vector(this.X + vector.X, this.Y + vector.Y);
  }

  /**
   * Subtracts the given vector from this vector and returns the resulting vector.
   * @param vector The vector to subtract.
   * @returns A new Vector instance representing the difference between this vector and the given vector.
   */
  public Subtract(vector: Vector): Vector {
    return new Vector(this.X - vector.X, this.Y - vector.Y);
  }

  /**
   * Multiplies this vector by the given scalar and returns the resulting vector.
   * @param scalar The scalar to multiply the vector by.
   * @returns A new Vector instance representing the scaled vector.
   */
  public Scale(scalar: number): Vector {
    return new Vector(this.X * scalar, this.Y * scalar);
  }

  /**
   * Calculates and returns the magnitude (length) of this vector.
   * @returns The magnitude of the vector.
   */
  public Magnitude(): number {
    return Math.sqrt(this.X * this.X + this.Y * this.Y);
  }

  /**
   * Normalises this vector (adjusts its length to 1) and returns the resulting vector.
   * @returns A new Vector instance representing the normalised vector.
   */
  public Normalise(): Vector {
    const mag = this.Magnitude();
    return mag === 0 ? new Vector(0, 0) : new Vector(this.X / mag, this.Y / mag);
}

  /**
   * Returns the opposite of this vector.
   * @returns A new Vector instance representing the opposite direction.
   */
  public Opposite(): Vector {
    return new Vector(-this.X, -this.Y);
  }
}