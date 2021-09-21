<script setup lang="ts">
import { ref, } from '@vue/composition-api'

const count = ref(0)

const increase = () => count.value + 1
const decrease = () => count.value + 1
</script>

<template>
  <div>
    <div class="text-red-500">{{ count }}</div>
    <el-button @click="increase">-1</el-button>
    <el-button @click="decrease">+ 1</el-button>
  </div>
</template>
