import { Vector } from "@core/types/Vector";
import { IBody } from "../../Body/IBody";
import { BaseGravitationalField } from "../BaseGravitationalField";

export class RectilinearGravitationalField extends BaseGravitationalField {
  private theta: number;

  public constructor(g?: number, theta?: number) {
    super(g);
    this.theta = theta ?? 0;
  }
  
  public CalculateGravitationalForces(bodies: Array<IBody>): void {
    const forceDirection = new Vector(Math.cos(this.theta), Math.sin(this.theta));

    for (const body of bodies) {
      const forceMagnitude = this.G * body.Mass;
      body.ApplyForce(forceDirection, forceMagnitude);
    }
  }
}