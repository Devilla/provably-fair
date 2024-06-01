// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { ProvablyFairService } from './provably-fair.class'
import { roll } from './dice'

// Main data model schema
export const provablyFairSchema = Type.Object(
  {
    id: Type.Number(),
    text: Type.String(),
    title: Type.Optional(Type.String()),
    description: Type.Optional(Type.String())
  },
  { $id: 'ProvablyFair', additionalProperties: true }
)
export type ProvablyFair = Static<typeof provablyFairSchema>
export const provablyFairValidator = getValidator(provablyFairSchema, dataValidator)
export const provablyFairResolver = resolve<ProvablyFair, HookContext<ProvablyFairService>>({})

export const provablyFairExternalResolver = resolve<ProvablyFair, HookContext<ProvablyFairService>>({})

// Schema for creating new entries
export const provablyFairDataSchema = Type.Pick(provablyFairSchema, ['text', 'description'], {
  $id: 'ProvablyFairData',
  title: 'New Provably Fair Data',
  description: "method roll('text').toString()"
})
export type ProvablyFairData = Static<typeof provablyFairDataSchema>
export const provablyFairDataValidator = getValidator(provablyFairDataSchema, dataValidator)
export const provablyFairDataResolver = resolve<ProvablyFair, HookContext<ProvablyFairService>>({})

// Schema for updating existing entries
export const provablyFairPatchSchema = Type.Partial(provablyFairSchema, {
  $id: 'ProvablyFairPatch'
})
export type ProvablyFairPatch = Static<typeof provablyFairPatchSchema>
export const provablyFairPatchValidator = getValidator(provablyFairPatchSchema, dataValidator)
export const provablyFairPatchResolver = resolve<ProvablyFair, HookContext<ProvablyFairService>>({})

// Schema for allowed query properties
export const provablyFairQueryProperties = Type.Pick(provablyFairSchema, ['id', 'text', 'title', 'description'])
export const provablyFairQuerySchema = Type.Intersect(
  [
    querySyntax(provablyFairQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: true })
  ],
  { additionalProperties: true }
)
export type ProvablyFairQuery = Static<typeof provablyFairQuerySchema>
export const provablyFairQueryValidator = getValidator(provablyFairQuerySchema, queryValidator)
export const provablyFairQueryResolver = resolve<ProvablyFairQuery, HookContext<ProvablyFairService>>({})
