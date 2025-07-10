import {ListItemBuilder} from 'sanity/structure'
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Even Better')
    .schemaType('evenBetter')
    .child(S.editor().title('Even Better').schemaType('evenBetter').documentId('evenBetter'))
)
