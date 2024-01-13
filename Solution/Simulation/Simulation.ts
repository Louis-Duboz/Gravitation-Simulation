import { PhysicsEngine } from "@core/PhysicsEngine/PhysicsEngine";
import { Universe } from "@core/Universe/Universe/Universe";
import { IUpdate } from "@core/types/IUpdate";

export class Simulation implements IUpdate {
  private physicsEngine: PhysicsEngine;
  private universe: Universe;
  private isRunning: boolean;
  private lastFrameTime: number;

  public constructor(physicsEngine: PhysicsEngine, universe: Universe) {
    this.physicsEngine = physicsEngine;
    this.universe = universe;
    this.isRunning = false;
    this.lastFrameTime = performance.now();
  }

  public Start(): void {
    this.isRunning = true;
    this.lastFrameTime = performance.now();
    this.Update();
  }

  public Update(): void {
    const currentTime = performance.now();
    const deltaTime = (currentTime - this.lastFrameTime) / 1000.0;
    this.lastFrameTime = currentTime;
    
    this.physicsEngine.Update(deltaTime, this.universe.Bodies);

    if (this.isRunning)
      requestAnimationFrame(this.Update);
  }

  public Stop(): void {
    this.isRunning = false;
  }
}