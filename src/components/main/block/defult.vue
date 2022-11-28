<template>
  <div class="content">
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content ep-bg-purple" />
        <el-card class="box-card content-card" @click="toDetail">
          <el-image src="https://s4.cdn.jiaonizuocai.com/caipu/201511/0314/111613273209.jpg/NjAwX2MyXzQwMA.webp"
                    fit="fill"></el-image>
          <span style="text-align: center">可乐鸡翅</span>
          <div><el-tag>狠辣</el-tag></div>
          <div>推荐星级：<el-rate v-model="rate" allow-half /></div>
        </el-card>
      </el-col>
      <el-col :span="5"><div class="grid-content ep-bg-purple" /> <el-card class="box-card content-card">
        <el-image src="https://s4.cdn.jiaonizuocai.com/caipu/201511/0314/111613273209.jpg/NjAwX2MyXzQwMA.webp"
                  fit="fill"></el-image>
        <span style="text-align: center">可乐鸡翅</span>
        <div>
          <!--TODO 这里是 口味的tag        -->
          <el-tag>狠辣</el-tag>
        </div>
        <div>
          <!--TODO 这里是 推荐       -->
          推荐星级：
          <el-rate v-model="rate" allow-half />
        </div>
      </el-card></el-col>
      <el-col :span="5"><div class="grid-content ep-bg-purple" /> <el-card class="box-card content-card">
        <el-image src="https://s4.cdn.jiaonizuocai.com/caipu/201511/0314/111613273209.jpg/NjAwX2MyXzQwMA.webp"
                  fit="fill"></el-image>
        <span style="text-align: center">可乐鸡翅</span>
        <div>
          <!--TODO 这里是 口味的tag        -->
          <el-tag>狠辣</el-tag>
        </div>
        <div>
          <!--TODO 这里是 推荐       -->
          推荐星级：
          <el-rate v-model="rate" allow-half />
        </div>
      </el-card></el-col>
      <el-col :span="5"><div class="grid-content ep-bg-purple" /> <el-card class="box-card content-card">
        <el-image src="https://s4.cdn.jiaonizuocai.com/caipu/201511/0314/111613273209.jpg/NjAwX2MyXzQwMA.webp"
                  fit="fill"></el-image>
        <span style="text-align: center">可乐鸡翅</span>
        <div>
          <!--TODO 这里是 口味的tag        -->
          <el-tag>狠辣</el-tag>
        </div>
        <div>
          <!--TODO 这里是 推荐       -->
          推荐星级：
          <el-rate v-model="rate" allow-half />
        </div>
      </el-card></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content ep-bg-purple" />
        <el-card class="box-card content-card">
          <el-image src="https://s4.cdn.jiaonizuocai.com/caipu/201511/0314/111613273209.jpg/NjAwX2MyXzQwMA.webp"
                    fit="fill"></el-image>
          <span style="text-align: center">可乐鸡翅</span>
          <div>
            <!--TODO 这里是 口味的tag        -->
            <el-tag>狠辣</el-tag>
          </div>
          <div>
            <!--TODO 这里是 推荐       -->
            推荐星级：
            <el-rate v-model="rate" allow-half />
          </div>
        </el-card>
      </el-col>
      <el-col :span="5"><div class="grid-content ep-bg-purple" /> <el-card class="box-card content-card">
        <el-image src="https://s4.cdn.jiaonizuocai.com/caipu/201511/0314/111613273209.jpg/NjAwX2MyXzQwMA.webp"
                  fit="fill"></el-image>
        <span style="text-align: center">可乐鸡翅</span>
        <div>
          <!--TODO 这里是 口味的tag        -->
          <el-tag>狠辣</el-tag>
        </div>
        <div>
          <!--TODO 这里是 推荐       -->
          推荐星级：
          <el-rate v-model="rate" allow-half />
        </div>
      </el-card></el-col>
      <el-col :span="5"><div class="grid-content ep-bg-purple" /> <el-card class="box-card content-card">
        <el-image src="https://s4.cdn.jiaonizuocai.com/caipu/201511/0314/111613273209.jpg/NjAwX2MyXzQwMA.webp"
                  fit="fill"></el-image>
        <span style="text-align: center">可乐鸡翅</span>
        <div>
          <!--TODO 这里是 口味的tag        -->
          <el-tag>狠辣</el-tag>
        </div>
        <div>
          <!--TODO 这里是 推荐       -->
          推荐星级：
          <el-rate v-model="rate" allow-half />
        </div>
      </el-card></el-col>
      <el-col :span="5"><div class="grid-content ep-bg-purple" /> <el-card class="box-card content-card">
        <el-image src="https://s4.cdn.jiaonizuocai.com/caipu/201511/0314/111613273209.jpg/NjAwX2MyXzQwMA.webp"
                  fit="fill"></el-image>
        <span style="text-align: center">可乐鸡翅</span>
        <div>
          <!--TODO 这里是 口味的tag        -->
          <el-tag>狠辣</el-tag>
        </div>
        <div>
          <!--TODO 这里是 推荐       -->
          推荐星级：
          <el-rate v-model="rate" allow-half />
        </div>
      </el-card></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content ep-bg-purple" />
        <el-card class="box-card content-card">
          <el-image src="https://s4.cdn.jiaonizuocai.com/caipu/201511/0314/111613273209.jpg/NjAwX2MyXzQwMA.webp"
                    fit="fill"></el-image>
          <span style="text-align: center">可乐鸡翅</span>
          <div>
            <!--TODO 这里是 口味的tag        -->
            <el-tag>狠辣</el-tag>
          </div>
          <div>
            <!--TODO 这里是 推荐       -->
            推荐星级：
            <el-rate v-model="rate" allow-half />
          </div>
        </el-card>
      </el-col>
      <el-col :span="5"><div class="grid-content ep-bg-purple" /> <el-card class="box-card content-card">
        <el-image src="https://s4.cdn.jiaonizuocai.com/caipu/201511/0314/111613273209.jpg/NjAwX2MyXzQwMA.webp"
                  fit="fill"></el-image>
        <span style="text-align: center">可乐鸡翅</span>
        <div>
          <!--TODO 这里是 口味的tag        -->
          <el-tag>狠辣</el-tag>
        </div>
        <div>
          <!--TODO 这里是 推荐       -->
          推荐星级：
          <el-rate v-model="rate" allow-half />
        </div>
      </el-card></el-col>
      <el-col :span="5"><div class="grid-content ep-bg-purple" /> <el-card class="box-card content-card">
        <el-image src="https://s4.cdn.jiaonizuocai.com/caipu/201511/0314/111613273209.jpg/NjAwX2MyXzQwMA.webp"
                  fit="fill"></el-image>
        <span style="text-align: center">可乐鸡翅</span>
        <div>
          <!--TODO 这里是 口味的tag        -->
          <el-tag>狠辣</el-tag>
        </div>
        <div>
          <!--TODO 这里是 推荐       -->
          推荐星级：
          <el-rate v-model="rate" allow-half />
        </div>
      </el-card></el-col>
      <el-col :span="5"><div class="grid-content ep-bg-purple" /> <el-card class="box-card content-card">
        <el-image src="https://s4.cdn.jiaonizuocai.com/caipu/201511/0314/111613273209.jpg/NjAwX2MyXzQwMA.webp"
                  fit="fill"></el-image>
        <span style="text-align: center">可乐鸡翅</span>
        <div>
          <!--TODO 这里是 口味的tag        -->
          <el-tag>狠辣</el-tag>
        </div>
        <div>
          <!--TODO 这里是 推荐       -->
          推荐星级：
          <el-rate v-model="rate" allow-half />
        </div>
      </el-card></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content ep-bg-purple" />
        <el-card class="box-card content-card">
          <el-image src="https://s4.cdn.jiaonizuocai.com/caipu/201511/0314/111613273209.jpg/NjAwX2MyXzQwMA.webp"
                    fit="fill"></el-image>
          <span style="text-align: center">可乐鸡翅</span>
          <div>
            <!--TODO 这里是 口味的tag        -->
            <el-tag>狠辣</el-tag>
          </div>
          <div>
            <!--TODO 这里是 推荐       -->
            推荐星级：
            <el-rate v-model="rate" allow-half />
          </div>
        </el-card>
      </el-col>
      <el-col :span="5"><div class="grid-content ep-bg-purple" /> <el-card class="box-card content-card">
        <el-image src="https://s4.cdn.jiaonizuocai.com/caipu/201511/0314/111613273209.jpg/NjAwX2MyXzQwMA.webp"
                  fit="fill"></el-image>
        <span style="text-align: center">可乐鸡翅</span>
        <div>
          <!--TODO 这里是 口味的tag        -->
          <el-tag>狠辣</el-tag>
        </div>
        <div>
          <!--TODO 这里是 推荐       -->
          推荐星级：
          <el-rate v-model="rate" allow-half />
        </div>
      </el-card></el-col>
      <el-col :span="5"><div class="grid-content ep-bg-purple" /> <el-card class="box-card content-card">
        <el-image src="https://s4.cdn.jiaonizuocai.com/caipu/201511/0314/111613273209.jpg/NjAwX2MyXzQwMA.webp"
                  fit="fill"></el-image>
        <span style="text-align: center">可乐鸡翅</span>
        <div>
          <!--TODO 这里是 口味的tag        -->
          <el-tag>狠辣</el-tag>
        </div>
        <div>
          <!--TODO 这里是 推荐       -->
          推荐星级：
          <el-rate v-model="rate" allow-half />
        </div>
      </el-card></el-col>
      <el-col :span="5"><div class="grid-content ep-bg-purple" /> <el-card class="box-card content-card">
        <el-image src="https://s4.cdn.jiaonizuocai.com/caipu/201511/0314/111613273209.jpg/NjAwX2MyXzQwMA.webp"
                  fit="fill"></el-image>
        <span style="text-align: center">可乐鸡翅</span>
        <div>
          <!--TODO 这里是 口味的tag        -->
          <el-tag>狠辣</el-tag>
        </div>
        <div>
          <!--TODO 这里是 推荐       -->
          推荐星级：
          <el-rate v-model="rate" allow-half />
        </div>
      </el-card></el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
import {router} from "@/route";

const rate = ref<number>(5)
const toDetail=()=>{
  console.log("11")
  router.push(
      {
        path:'/detail'
      }
  )
}
</script>
<style>
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
