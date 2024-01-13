import { Vector } from "@core/types/Vector";
import { IBody } from "../../Body/IBody";
import { BaseGravitationalField } from "../BaseGravitationalField";

export class NewtonGravitationalField extends BaseGravitationalField {
  public constructor(g?: number) {
    super(g);
  }

  public CalculateGravitationalForces(bodies: Array<IBody>): void {
    for (let i = 0; i < bodies.length; i++) {
      const body1: IBody = bodies[i];

      for (let j = i + 1; j < bodies.length; j++) {
        const body2: IBody = bodies[j];
        const distance: number = this.DistanceBetween(body1, body2);
        const forceMagnitude: number = this.G * (body1.Mass * body2.Mass) / (distance * distance);
        
        const forceDirection: Vector = new Vector(
          body1.Position.X - body2.Position.X,
          body1.Position.Y - body2.Position.Y
        );

        body1.ApplyForce(forceDirection, forceMagnitude);
        body2.ApplyForce(forceDirection.Opposite(), forceMagnitude);
      }
    }
  }
}