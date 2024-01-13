import { Vector } from "../../types/Vector"
import { IBody } from "./IBody";

/**
 * Represents a celestial body in the physics simulation.
 */
export class Body implements IBody {
  //#region Attributes
  private mass: number;
  private radius: number;
  private position: Vector;
  private velocity: Vector;
  private acceleration: Vector;
  //#endregion

  //#region Constructor
  /**
   * Creates a new instance of the Body class.
   * @param mass The mass of the body.
   * @param radius The radius of the body.
   * @param position The position of the body.
   * @param velocity The velocity of the body.
   * @param acceleration The acceleration of the body.
   */
  public constructor(mass: number, radius: number, position: Vector, velocity: Vector, acceleration: Vector) {
    this.mass = mass;
    this.radius = radius;
    this.position = position;
    this.velocity = velocity;
    this.acceleration = acceleration;
  }
  //#endregion

  //#region Properties
  public get Mass(): number { return this.Mass; }
  public set Mass(value: number) { this.mass = value; }

  public get Radius(): number { return this.radius; }
  public set Radius(value: number) { this.radius = value; }

  public get Position(): Vector { return this.position; }
  public set Position(value: Vector) { this.position = value; }

  public get Velocity(): Vector { return this.velocity; }
  public set Velocity(value: Vector) { this.velocity = value; }

  public get Acceleration(): Vector { return this.acceleration; }
  public set Acceleration(value: Vector) { this.acceleration = value; }
  //#endregion

  public ApplyForce(forceDirection: Vector, forceMagnitude: number): void {
    const forceVector = forceDirection.Normalise().Scale(forceMagnitude);
    this.acceleration.Add(forceVector.Scale(1 / this.mass)); // Calculate acceleration: a = F/m
  }

  public UpdateVelocity(deltaTime: number): void {
    // Update velocity: v = u + at where 'u' is the initial velocity, 'a' is acceleration, and 't' is the deltaTime
    this.velocity = this.velocity.Add(this.Acceleration.Scale(deltaTime));
  }

  public UpdatePosition(deltaTime: number): void {
    // Update position: p = p0 + vt where 'p0' is the initial position, 'v' is velocity, and 't' is the deltaTime
    this.position = this.position.Add(this.velocity.Scale(deltaTime));
  }
}