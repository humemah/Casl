import { defineAbility } from '@casl/ability';

export default defineAbility((can, cannot) => {
  can('read', 'Todo');
  can('update', 'Todo');
  // can('delete', 'Todo');
  cannot('delete', 'Todo', );
});