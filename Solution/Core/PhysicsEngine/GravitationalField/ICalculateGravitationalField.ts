import { IBody } from "../Body/IBody";

/**
 * Represents an interface for calculating the gravitational forces.
 */
export interface ICalculateGravitationalForces {
  /**
   * Calculates the gravitational forces for the given bodies.
   * @param bodies - An array of bodies.
   */
  CalculateGravitationalForces(bodies: Array<IBody>): void;
}