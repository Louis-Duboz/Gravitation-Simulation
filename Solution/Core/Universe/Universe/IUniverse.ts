import { IBody } from "@core/PhysicsEngine/Body/IBody";

export interface IUniverse {
  get Bodies(): Array<IBody>;
}