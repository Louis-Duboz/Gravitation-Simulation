import { Vector } from "../../types/Vector";

/**
 * Represents a physical body in the simulation.
 */
export interface IBody {
  get Mass(): number;
  get Radius(): number;
  get Position(): Vector;
  get Velocity(): Vector;
  get Acceleration(): Vector;

  /**
   * Applies a force to the body.
   * @param forceDirection - The direction of the force.
   * @param forceMagnitude - The magnitude of the force.
   */
  ApplyForce(forceDirection: Vector, forceMagnitude: number): void;

  /**
   * Updates the velocity of the body based on the current acceleration.
   * @param deltaTime The time step for the velocity update.
   */
  UpdateVelocity(deltaTime: number): void;

  /**
   * Updates the position of the body based on the current velocity.
   * @param deltaTime The time step for the position update.
   */
  UpdatePosition(deltaTime: number): void;
}