import { IBody } from "../Body/IBody";
import { IGravitationalField } from "./IGravitationalField";

export abstract class BaseGravitationalField implements IGravitationalField {
  private g: number;

  public constructor(g?: number) {
    this.g = g ?? 1;
  }

  public get G(): number { return this.g; }
  
  protected DistanceBetween(body1: IBody, body2: IBody): number {
    const dx = body1.Position.X - body2.Position.X;
    const dy = body1.Position.Y - body2.Position.Y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  public abstract CalculateGravitationalForces(bodies: Array<IBody>): void;
}