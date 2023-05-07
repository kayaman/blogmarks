import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import 'dotenv/config'

export default defineConfig([
  {
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET_ENV,
    name: 'bookmarks-prod',
    basePath: '/admin',
    title: 'Production',
    plugins: [deskTool(), visionTool()],
    schema: {
      types: schemaTypes,
    },
  },
  {
    projectId: 'zyofsvoi',
    dataset: 'development',
    name: 'bookmarks-dev',
    basePath: '/dev-admin',
    title: 'Development',
    plugins: [deskTool(), visionTool()],
    schema: {
      types: schemaTypes,
    },
  },
])
