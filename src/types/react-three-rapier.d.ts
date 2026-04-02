declare module "@react-three/rapier" {
  import * as React from "react";

  export const Physics: React.FC<any>;
  export const RigidBody: React.ForwardRefExoticComponent<any & React.RefAttributes<any>>;
  export const BallCollider: React.FC<any>;
  export const CylinderCollider: React.FC<any>;
  export type RapierRigidBody = any;

  const _default: any;
  export default _default;
}
