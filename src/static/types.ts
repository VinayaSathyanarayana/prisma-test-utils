import { Dictionary } from 'lodash'

/**
 * Types used to describe the seed models.
 */
export type SeedModelsDefinition<GeneratedSeedModels extends SeedModels> = (
  kit: SeedKit,
) => GeneratedSeedModels

export interface SeedKit {
  faker: Chance.Chance
}

export type SeedModels = {
  '*': { amount: number }
  [type: string]: SeedModel
}

export type SeedModel = {
  amount: number
  factory?: Dictionary<
    SeedModelFieldDefinition | (() => SeedModelFieldDefinition)
  >
}

export type ID = string

export type SeedModelFieldDefinition =
  | ID
  | string
  | number
  | SeedModelFieldRelationConstraint

export type SeedModelFieldRelationConstraint = {
  min?: number
  max?: number
}

export type SeedOptions<PhotonType, GeneratedSeedModel extends SeedModels> = {
  client: PhotonType
  models: SeedModelsDefinition<GeneratedSeedModel>
  seed?: number
  persist?: boolean
}

/**
 * Types used to describe the Pool.
 */

export type PoolOptions = {
  pool: {
    max?: number
  }
}

export type DBInstance = {
  url: string
  cwd: string
  datamodel: string
}

export abstract class Pool {
  abstract async run<T>(fn: (db: DBInstance) => Promise<T>): Promise<T>
  abstract async getDBInstance(): Promise<DBInstance>
  abstract async releaseDBInstance(db: DBInstance): Promise<void>
  abstract async drain(): Promise<void>
}