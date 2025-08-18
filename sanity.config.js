import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'

export default defineConfig({
  name: 'default',
  title: 'shira-barlow',

  projectId: '6hmqdhoc',
  dataset: 'production',

  studioHost: 'shira-barlow', // 👈 this avoids the deploy prompt

  plugins: [structureTool({structure}), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
