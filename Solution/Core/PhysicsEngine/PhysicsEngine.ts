import { IBody } from "./Body/IBody";
import { ICalculateGravitationalForces } from "./GravitationalField/ICalculateGravitationalField";
import { IGravitationalField } from "./GravitationalField/IGravitationalField";

export class PhysicsEngine implements ICalculateGravitationalForces {
  private gravitationalField: IGravitationalField;

  public constructor(gravitationalField: IGravitationalField) {
    this.gravitationalField = gravitationalField;
  }

  public Update(deltaTime: number, bodies: Array<IBody>): void {
    this.CalculateGravitationalForces(bodies);

    bodies.forEach(body => {
      // Semi-Implicit Euler (or Symplectic Euler)
      body.UpdateVelocity(deltaTime * 0.5);
      body.UpdatePosition(deltaTime);
      body.UpdateVelocity(deltaTime * 0.5);
    });

    this.DetectCollision(bodies);
  }

  public CalculateGravitationalForces(bodies: Array<IBody>): void {
    this.gravitationalField.CalculateGravitationalForces(bodies);
  }

  public DetectCollision(bodies: Array<IBody>): void {
    for (let i = 0; i < bodies.length; i++) {
      const body1 = bodies[i];

      for (let j = i + 1; j < bodies.length; j++) {
        const body2 = bodies[j];

        const dx = body1.Position.X - body2.Position.X;
        const dy = body1.Position.Y - body2.Position.Y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const sumOfRadii = body1.Radius + body2.Radius;

        if (distance < sumOfRadii) {

        }
      }
    }
  }

  public SaveScenario(): void {
    throw new Error("Method not implemented.");
  }
}