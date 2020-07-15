<template>
  <div>
    <el-row>
      <el-col :span="4">
        <el-select v-model="value" @change="selectChange">
          <el-option v-for="item in selectItems" :key="item.value" :value="item.value" :label="item.label"></el-option>
        </el-select>
      </el-col>
    </el-row>
  </div>

</template>
