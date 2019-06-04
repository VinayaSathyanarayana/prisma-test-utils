import Field from '@prisma/dmmf/dist/Field'
import Model from '@prisma/dmmf/dist/Model'
import { Dictionary } from 'lodash'

/**
 * FakerBag is a set of tools that people can use to define how
 * their model is generated.
 */
export interface FakerBag {
  faker: Faker.FakerStatic
  constraints: RelationConstraints
}

export interface RelationConstraints {
  atMax(amount: number): FixtureConstraint
  atLeastIfExisting(amount: number): FixtureConstraint
}

export interface FixtureConstraint {
  type: 'AT_MAX' | 'AT_LEAST_IF_EXISTING'
  value: number
}

/**
 * FakerModel represents the collection of all explicit faking model definitions
 * used in Prisma Faker.
 */
export type FakerModel = Dictionary<FixtureDefinition>

export type FixtureDefinition = {
  amount?: number
  factory?: Dictionary<FixtureFieldDefinition | (() => FixtureFieldDefinition)>
}

export type FixtureFieldDefinition = string | number | FixtureConstraint

/**
 * Prisma Faker uses intermediate step between model-faker definition
 * and database seeding. Fixture is a virtual data unit used to describe
 * future data and calculate relations.
 */
export interface Fixture {
  model: Model
  amount: number
  relations: { [field: string]: number }
}

export interface Step {
  order: number // the creation order of a step, starts with 0
  model: Model
  amount: number // number of instances created in this step
  runningNumber: number // specifies the total number of all instances
  relations: { [field: string]: number }
}

/**
 * Represents the virtual unit.
 */
export interface VData {
  order: number // starts with 0
  id: string
  model: Model
}
