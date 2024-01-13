import { ICalculateGravitationalForces } from "./ICalculateGravitationalField";

/**
 * Represents a gravitational field.
 */
export interface IGravitationalField extends ICalculateGravitationalForces {
  /**
   * The gravitational constant.
   */
  get G(): number;
}