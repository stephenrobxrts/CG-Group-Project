import * as THREE from 'three';
import { Octree } from './octree/octree.js';
import { Box } from './octree/box.js';
import { BoidSettings } from './boids/boidSettings.js';

const scene = new THREE.Scene();
//list of all active boids in the simulation
var boids = [];
//boids octree, used for spacial partitioning and boid-neighbour comparison optimisation
const octree = new Octree(
  new Box(
    -BoidSettings.worldSize, -BoidSettings.worldSize * 0.5, -BoidSettings.worldSize,
    BoidSettings.worldSize * 2.0, BoidSettings.worldSize, BoidSettings.worldSize * 2.0),
  10);

var MainProperties = {
  numBoids: 0,
  maxFish: 3500,
};

export { scene, MainProperties, boids, octree };