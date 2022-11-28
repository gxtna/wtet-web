<template>
  <el-card class="box-card detail-card">
    <div>
      可乐鸡翅
    </div>

    <el-image src="https://s4.cdn.jiaonizuocai.com/caipu/201511/0314/111613273209.jpg/NjAwX2MyXzQwMA.webp"
              fit="fill"></el-image>
    <div>
      作者：测试
    </div>
    <div>
      推荐原因：鸡翅:扩张血管、保护神经系统、维持皮肤和粘膜健康
      姜:降逆止呕、化痰止咳、散寒解表
      料酒:低蛋白质
    </div>
    <div>
      食材：
      <el-card class="box-card" style="width: 60%;margin-left: 20%">
        <div v-for="o in 4" :key="o" class="text item">
          <el-divider />
          {{ 'List item ' + o }}
        </div>
      </el-card>
    </div>
    <div>
      步骤：
      <el-card class="box-card" style="width: 60%;margin-left: 20%">
        <div v-for="o in 4" :key="o" class="text item">
          <el-divider />
          {{ 'List item ' + o }}
        </div>
      </el-card>
    </div>
  </el-card>
  <el-card class="box-card detail-card">
    其他菜谱
  </el-card>
</template>
<script setup lang="ts">
</script>
<style scoped>
</style>