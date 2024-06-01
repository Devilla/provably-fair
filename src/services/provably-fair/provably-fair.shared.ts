// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type {
  ProvablyFair,
  ProvablyFairData,
  ProvablyFairPatch,
  ProvablyFairQuery,
  ProvablyFairService
} from './provably-fair.class'

export type { ProvablyFair, ProvablyFairData, ProvablyFairPatch, ProvablyFairQuery }

export type ProvablyFairClientService = Pick<
  ProvablyFairService<Params<ProvablyFairQuery>>,
  (typeof provablyFairMethods)[number]
>

export const provablyFairPath = 'provably-fair'

export const provablyFairMethods = ['find', 'get', 'diceRoll', 'create', 'patch', 'remove'] as const

export const provablyFairClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(provablyFairPath, connection.service(provablyFairPath), {
    methods: provablyFairMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [provablyFairPath]: ProvablyFairClientService
  }
}
