// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type {
  ProvablyFair,
  ProvablyFairData,
  ProvablyFairPatch,
  ProvablyFairQuery
} from './provably-fair.schema'

export type { ProvablyFair, ProvablyFairData, ProvablyFairPatch, ProvablyFairQuery }

export interface ProvablyFairParams extends KnexAdapterParams<ProvablyFairQuery> {}

type CustomData = {
  name: string
}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class ProvablyFairService<ServiceParams extends Params = ProvablyFairParams> extends KnexService<
  ProvablyFair,
  ProvablyFairData,
  ProvablyFairParams,
  ProvablyFairPatch
> {
  async diceRoll(data: CustomData, params: Params) {
    return data
  }
}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'provably-fair'
  }
}
