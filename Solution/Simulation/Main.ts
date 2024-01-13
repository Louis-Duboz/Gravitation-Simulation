import { PhysicsEngine } from "@core/PhysicsEngine/PhysicsEngine";
import { Simulation } from "./Simulation";
import { Universe } from "@core/Universe/Universe/Universe";
import { NewtonGravitationalField } from "@core/PhysicsEngine/GravitationalField/Realisations/NewtonGravitationalField";
import { IGravitationalField } from "@core/PhysicsEngine/GravitationalField/IGravitationalField";

export function Main() {
  const gravitationField: IGravitationalField = new NewtonGravitationalField();
  const physicsEngine: PhysicsEngine = new PhysicsEngine(gravitationField);
  const universe: Universe = new Universe(); 
  const simulation: Simulation = new Simulation(physicsEngine, universe);
  simulation.Start();
}

Main();