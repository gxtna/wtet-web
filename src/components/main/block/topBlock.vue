<template>
  <div class="box">
    <el-menu class="el-menu-demo div-card" mode="horizontal" :ellipsis="false" @select="handleSelect">
      <el-menu-item index="0" class="margin-left-8">LOGO</el-menu-item>
      <div class="flex-grow"/>
      <el-menu-item index="1" class="el-menu-item">
        <el-input placeholder="Please input" class="input-with-select inputSearch">
          <template #append>
            <el-button icon="el-search">查询</el-button>
          </template>
        </el-input>
      </el-menu-item>
      <div class="flex-grow"/>
      <el-menu-item index="2" class="margin-right-10">另外</el-menu-item>
      <el-menu-item index="3"  class="margin-right-10">其他</el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<style>




</style>