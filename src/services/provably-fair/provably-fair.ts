// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  provablyFairDataValidator,
  provablyFairPatchValidator,
  provablyFairQueryValidator,
  provablyFairResolver,
  provablyFairExternalResolver,
  provablyFairDataResolver,
  provablyFairPatchResolver,
  provablyFairQueryResolver
} from './provably-fair.schema'

import type { Application } from '../../declarations'
import { ProvablyFairService, getOptions } from './provably-fair.class'
import { provablyFairPath, provablyFairMethods } from './provably-fair.shared'
import { roll } from './dice';
import { HookContext } from '@feathersjs/feathers';

export * from './provably-fair.class'
export * from './provably-fair.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const provablyFair = (app: Application) => {
  // Register our service on the Feathers application
  app.use(provablyFairPath, new ProvablyFairService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: provablyFairMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(provablyFairPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(provablyFairExternalResolver),
        schemaHooks.resolveResult(provablyFairResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(provablyFairQueryValidator),
        schemaHooks.resolveQuery(provablyFairQueryResolver)
      ],
      find: [],
      get: [
        (context: HookContext) => {
          const { dice } = context.params.query;
          if (typeof dice !== 'string') {
            throw new Error('Invalid dice parameter');
          }
          context.data = {
            ...context.data,
            roll: roll(dice),
          };
          console.log('context.data', context.data);
          
          
          return context;
        },
      ],
      diceRoll: [],
      create: [
        schemaHooks.validateData(provablyFairDataValidator),
        schemaHooks.resolveData(provablyFairDataResolver)
      ],
      patch: [
        schemaHooks.validateData(provablyFairPatchValidator),
        schemaHooks.resolveData(provablyFairPatchResolver)
      ],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [provablyFairPath]: ProvablyFairService
  }
}
