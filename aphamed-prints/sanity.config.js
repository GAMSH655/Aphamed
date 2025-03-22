import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'aphamed prints',

  projectId: 'bfwue23m',
  dataset: 'prod',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
