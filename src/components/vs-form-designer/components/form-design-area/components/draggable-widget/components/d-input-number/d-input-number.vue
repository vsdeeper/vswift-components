<script setup lang="ts">
import type { WidgetDesignData } from '@/components/vs-form-designer'
import type { DInputNumberOptions } from '.'

const props = defineProps<{
  designData: WidgetDesignData
}>()

const emit = defineEmits<{
  (e: 'change', cur?: number, prev?: number): void
}>()

const model = defineModel<number>()
const options = computed<DInputNumberOptions>(() => props.designData.options)
const slots = useSlots()

function onChange(cur?: number, prev?: number) {
  emit('change', cur, prev)
}
</script>

<template>
  <el-input-number v-bind="options" v-model="model" @change="onChange">
    <template v-if="slots['decrease-icon']" #decrease-icon>
      <slot name="decrease-icon"></slot>
    </template>
    <template v-if="slots['increase-icon']" #increase-icon>
      <slot name="increase-icon"></slot>
    </template>
  </el-input-number>
</template>
