<script setup lang="ts" generic="T extends Record<string, unknown>">
export interface Column {
  key: string
  header: string
}

defineProps<{
  columns: Column[]
  data: T[]
  rowKey: string
}>()
</script>

<template>
  <div class="overflow-x-auto">
    <table class="neo-table">
      <thead>
        <tr>
          <th v-for="col in columns" :key="col.key">{{ col.header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in data" :key="String(row[rowKey])">
          <td v-for="col in columns" :key="col.key">
            <slot :name="col.key" :value="row[col.key]" :row="row">
              {{ row[col.key] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
