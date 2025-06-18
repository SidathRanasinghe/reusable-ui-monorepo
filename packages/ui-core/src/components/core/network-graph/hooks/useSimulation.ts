import { useEffect, useRef, useMemo } from "react";
import * as d3 from "d3";

import { Node, Link } from "../types";

interface SimulationConfig {
  linkDistance?: number;
  chargeStrength?: number;
  collisionRadius?: number;
  alphaDecay?: number;
  alphaMin?: number;
}

interface UseSimulationProps {
  nodes: Node[];
  links: Link[];
  dimensions: { width: number; height: number };
  config: SimulationConfig;
  centerForce?: number;
}

export const useSimulation = ({
  nodes,
  links,
  dimensions,
  config,
  centerForce = 0.1,
}: UseSimulationProps) => {
  const simulationRef = useRef<d3.Simulation<Node, Link> | null>(null);

  // Memoize simulation configuration
  const simulationConfig = useMemo(
    () => ({
      linkDistance: config.linkDistance || 200,
      chargeStrength: config.chargeStrength || -4000,
      collisionRadius: config.collisionRadius || 100,
      alphaDecay: config.alphaDecay || 0.01,
      alphaMin: config.alphaMin || 0.001,
    }),
    [config]
  );

  // Create and configure simulation
  useEffect(() => {
    if (!nodes.length || !dimensions.width || !dimensions.height) return;

    // Create new simulation
    const simulation = d3
      .forceSimulation<Node>(nodes)
      .force(
        "link",
        d3
          .forceLink<Node, Link>(links)
          .id(d => d.id)
          .distance(simulationConfig.linkDistance)
          .strength(0.1)
      )
      .force(
        "charge",
        d3.forceManyBody().strength(simulationConfig.chargeStrength)
      )
      .force(
        "center",
        d3
          .forceCenter(dimensions.width / 2, dimensions.height / 2)
          .strength(centerForce)
      )
      .force(
        "collision",
        d3
          .forceCollide<Node>()
          .radius(d => {
            // Calculate collision radius based on node size
            const baseRadius = simulationConfig.collisionRadius / 10;
            if (d.shape === "circle") {
              return (d.style?.width || d.style?.height || 40) / 2 + baseRadius;
            }
            // For rectangular shapes, use diagonal as radius
            const width = d.style?.width || 80;
            const height = d.style?.height || 40;
            return Math.sqrt(width * width + height * height) / 2 + baseRadius;
          })
          .strength(0.5)
      )
      .force("x", d3.forceX(dimensions.width / 2).strength(0.05))
      .force("y", d3.forceY(dimensions.height / 2).strength(0.05))
      .alphaDecay(simulationConfig.alphaDecay)
      .alphaMin(simulationConfig.alphaMin);

    // Handle fixed positions
    nodes.forEach(node => {
      // if (typeof node.fx === "number") node.fx = node.fx;
      // if (typeof node.fy === "number") node.fy = node.fy;
    });

    simulationRef.current = simulation;

    return () => {
      if (simulationRef.current) {
        simulationRef.current.stop();
      }
    };
  }, [nodes, links, dimensions, simulationConfig, centerForce]);

  // Update simulation when data changes
  useEffect(() => {
    if (!simulationRef.current) return;

    // Update nodes and links
    simulationRef.current.nodes(nodes);

    const linkForce = simulationRef.current.force("link") as d3.ForceLink<
      Node,
      Link
    >;
    if (linkForce) {
      linkForce.links(links);
    }

    // Restart simulation with some heat
    simulationRef.current.alpha(0.3).restart();
  }, [nodes, links]);

  // Update forces when config changes
  useEffect(() => {
    if (!simulationRef.current) return;

    const linkForce = simulationRef.current.force("link") as d3.ForceLink<
      Node,
      Link
    >;
    const chargeForce = simulationRef.current.force(
      "charge"
    ) as d3.ForceManyBody<Node>;
    const collisionForce = simulationRef.current.force(
      "collision"
    ) as d3.ForceCollide<Node>;

    if (linkForce) {
      linkForce.distance(simulationConfig.linkDistance);
    }

    if (chargeForce) {
      chargeForce.strength(simulationConfig.chargeStrength);
    }

    if (collisionForce) {
      collisionForce.radius(d => {
        const baseRadius = simulationConfig.collisionRadius / 10;
        if (d.shape === "circle") {
          return (d.style?.width || d.style?.height || 40) / 2 + baseRadius;
        }
        const width = d.style?.width || 80;
        const height = d.style?.height || 40;
        return Math.sqrt(width * width + height * height) / 2 + baseRadius;
      });
    }

    simulationRef.current
      .alphaDecay(simulationConfig.alphaDecay)
      .alphaMin(simulationConfig.alphaMin);
  }, [simulationConfig]);

  // Methods for external control
  const methods = useMemo(
    () => ({
      restart: () => {
        if (simulationRef.current) {
          simulationRef.current.alpha(1).restart();
        }
      },
      stop: () => {
        if (simulationRef.current) {
          simulationRef.current.stop();
        }
      },
      reheat: (alpha = 0.3) => {
        if (simulationRef.current) {
          simulationRef.current.alpha(alpha).restart();
        }
      },
      fixNode: (nodeId: string, x?: number, y?: number) => {
        const node = nodes.find(n => n.id === nodeId);
        if (node && simulationRef.current) {
          node.fx = x;
          node.fy = y;
          simulationRef.current.alpha(0.1).restart();
        }
      },
      releaseNode: (nodeId: string) => {
        const node = nodes.find(n => n.id === nodeId);
        if (node && simulationRef.current) {
          node.fx = null;
          node.fy = null;
          simulationRef.current.alpha(0.1).restart();
        }
      },
    }),
    [nodes]
  );

  return {
    simulation: simulationRef.current,
    ...methods,
  };
};
