<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../assets/heima.png" alt="" />
        <span>电商后台管理系统</span>
      </div>
      <el-button @click="logout" type="primary">退出</el-button></el-header
    >
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse?'64px':'200px'">
          <div class="toggle-button" @click="toggleCollapse">|||</div>
          <!-- 侧边栏菜单区域 -->
        <el-menu
          unique-opened
          :collapse="isCollapse"
          :collapse-transition="false"
          :router="true"
          :default-active="activePath"
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409EFF"
        >
        <!-- 一级菜单 -->
          <el-submenu  v-for="item in menulist" :key="item.id" :index="item.id+''">
              <!-- 一级菜单模板区域 -->
            <template  slot="title">
                <!-- 图标 -->
              <i :class="iconsObj[item.id]"></i>
              <!-- 文本 -->
              <span>{{item.authName}}</span>
            </template>   
            <!-- 二级菜单 -->
            <el-menu-item :index="'/'+subItem.path" @click="saveNavState('/'+subItem.path)" v-for="subItem in item.children" :key="subItem.id">
                <template slot="title">
                    <!-- 图标 -->
                    <i  class="el-icon-menu"></i>
                    <!-- 文本 -->
                    <span>{{subItem.authName}}</span>
                </template>      
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧内容主体 -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
    data(){
        return {
            //左侧菜单数据
            menulist:[],
            iconsObj:{
                '125':'iconfont icon-yonghu1',
                '103':'iconfont icon-quanxian',
                '101':'iconfont icon-shangpin',
                '102':'iconfont icon-dingdan',
                '145':'iconfont icon-shuju'
            },
            //是否折叠
            isCollapse:false,
            // 被激活的链接地址
            activePath:''
        }
    },
    created(){
        this.getMenuList()
        this.activePath=window.sessionStorage.getItem('activePath')
    },
    methods: {
        logout() {
            window.sessionStorage.clear()
            this.$router.push('/login')
        },
        //获取所有的菜单
        async getMenuList(){
           const {data:res} =await this.$http.get('menus')
           if(res.meta.status!==200) return this.$message.error(res.meta.msg)
           this.menulist=res.data
          //  console.log(res);
        },
        //点击按钮,切换菜单折叠与展开
        toggleCollapse(){
            this.isCollapse=!this.isCollapse
        },
        // 保存链接的激活状态
        saveNavState(activePath){
          window.sessionStorage.setItem('activePath',activePath)
          this.activePath=activePath
        }
  },
}
</script>
<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0;
  background-color: #373d41;
  color: #ffffff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}
.el-aside {
  background-color: #333744;
  .el-menu{
      border-right: none;
  }
}
.el-main {
  background-color: #eaedf1;
}
.iconfont{
    margin-right: 10px;
    font-size: 20px;
}
.toggle-button{
    background-color:#4A5064;
    color:#fff;
    font-size: 10px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
}
</style>