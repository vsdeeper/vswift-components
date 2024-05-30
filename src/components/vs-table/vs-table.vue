<script setup lang="ts">
import type { VsTableProps, VsTableColumnItem } from '.'
import TableColumn from './table-column.vue'
import config from '../config'

defineProps<{
  data?: Record<string, any>[]
  showIndex?: boolean
  showSelection?: boolean
  columns?: VsTableColumnItem[]
  tableProps?: VsTableProps
}>()
</script>

<template>
  <el-config-provider :locale="config.locale">
    <div class="vs-table">
      <el-table :data="data" v-bind="tableProps">
        <el-table-column v-if="showSelection" type="selection" width="55" />
        <el-table-column v-if="showIndex" type="index" width="50" :index="(index) => index + 1" />
        <template v-for="(col, index) in columns" :key="`${col.label}${col.prop}${index}`">
          <TableColumn :col />
        </template>
        <!-- <template v-for="(col, index) in columns" :key="`${col.label}${col.prop}${index}`">
          <template v-if="col.children?.length">
            <TableColumn
              v-for="(col1, index1) in col.children"
              :key="`${col1.label}${col1.prop}${index1}`"
              :col="col1"
            />
          </template>
          <TableColumn :col="col">
            <template #[col.prop!]="scope">
              <slot :name="col.prop" v-bind="scope" />
            </template>
          </TableColumn>
        </template> -->
      </el-table>
    </div>
  </el-config-provider>
</template>