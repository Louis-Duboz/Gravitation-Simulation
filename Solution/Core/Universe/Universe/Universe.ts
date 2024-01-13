import { IBody } from "@core/PhysicsEngine/Body/IBody";
import { IUniverse } from "./IUniverse";

export class Universe implements IUniverse {
  private bodies: Array<IBody>;

  public constructor(bodies?: Array<IBody>) {
    this.bodies = bodies ?? new Array<IBody>();
  }

  public get Bodies(): Array<IBody> { return this.bodies; }
  public set Bodies(value: Array<IBody>) { this.bodies = value; }
}