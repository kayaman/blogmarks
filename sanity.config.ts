import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  projectId: 'zyofsvoi',
  dataset: 'production',
  name: 'bookmarks',
  plugins: [deskTool(), visionTool()],
  title: 'bookmarks',
  apiVersion: '2023-05-06',
  schema: {
    types: schemaTypes,
  },
})
