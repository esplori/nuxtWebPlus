<template>
  <div>
    <h1>Welcome to the index11</h1>
    <ul>
      <li>
        <NuxtLink to="/about">About</NuxtLink>
      </li>
    </ul>
    <el-dropdown class="m-4" type="primary">
    <el-button type="primary" plain>
      Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
        <el-dropdown-item>Action 4</el-dropdown-item>
        <el-dropdown-item>Action 5</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  </div>
</template>

