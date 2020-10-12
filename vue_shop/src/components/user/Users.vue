<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图 -->
    <el-card>
        <!-- 搜索与添加区域 -->
    
      <el-row :gutter="20">
            <el-col :span="8">
                <el-input placeholder="请输入内容" v-model="queryInfo.query"  clearable @clear="getUserList">  
                    <el-button slot="append" icon="el-icon-search" @click="getUserList"></el-button>
                </el-input>
            </el-col>
            <el-col :span="4">
                <el-button type="primary" @click="addDialogVisible=true">添加用户</el-button> 
            </el-col>
        </el-row>
        <!-- 用户列表区域 -->
         <el-table :data="userlist" border stripe style="width: 100%">
            <el-table-column type="index" label="#" ></el-table-column>
            <el-table-column prop="username" label="名称" ></el-table-column>
            <el-table-column prop="email" label="邮箱"></el-table-column>
            <el-table-column prop="mobile" label="电话"></el-table-column>
            <el-table-column prop="role_name" label="用户" ></el-table-column>
            <el-table-column  label="状态" >
                <template slot-scope="scope">
                    <el-switch v-model="scope.row.mg_state" @change="userStateChanged(scope.row)" active-color="#409EFF" inactive-color="#909399"></el-switch>
                </template>
            </el-table-column>
            <el-table-column prop="" label="操作" width="180px" >
                <template slot-scope='scope'>
                    <el-tooltip class="item" effect="dark" content="修改" placement="top" :enterable="false">
                        <!-- 修改按钮 -->
                        <el-button type="primary" size="mini" @click="showEditDialog(scope.row.id)" icon="el-icon-edit"></el-button>
                    </el-tooltip>
                    <el-tooltip class="item" effect="light" content="删除" placement="top" :enterable="false">
                        <!-- 删除按钮 -->
                        <el-button type="danger" size="mini" icon="el-icon-delete" @click="removeUserById(scope.row.id)"></el-button>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="设置" placement="top" :enterable="false">
                        <!-- 分配角色按钮 -->
                        <el-button type="warning" size="mini" icon="el-icon-setting"></el-button>
                    </el-tooltip>
                </template>
            </el-table-column>
        </el-table>
        <!-- 分页区域 -->
         <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="queryInfo.pagenum"
            :page-sizes="[2, 4, 6, 8]"
            :page-size="queryInfo.pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
    </el-card>
        <!-- 添加用户的对话框 -->
    <el-dialog
        title="添加用户"
        :visible.sync="addDialogVisible"
        width="50%"
        @close="addDialogClosed"
        >
        <!-- 内容主体区域 -->
        <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="70px" >
            <el-form-item label="用户名" prop="username">
                <el-input v-model="addForm.username"></el-input>
            </el-form-item>
        
        
            <el-form-item label="密码" prop="password">
                <el-input v-model="addForm.password"></el-input>
            </el-form-item>
       
       
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="addForm.email"></el-input>
            </el-form-item>
       
            <el-form-item label="手机" prop="mobile">
                <el-input v-model="addForm.mobile"></el-input>
            </el-form-item>
        </el-form>
        <!-- 底部按钮区域 -->
        <span slot="footer" class="dialog-footer">
            <el-button @click="addDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="addUser">确 定</el-button>
        </span>
    </el-dialog>

    
    <!-- 修改用户的对话框 -->
    <el-dialog title="修改用户" :visible.sync="editDialogVisible" width="50%" @close="editDialogClosed">
       <!-- 内容主体区域 -->
        <el-form :model="editForm" :rules="editFormRules" ref="editFormRef" label-width="70px" >
            <el-form-item label="用户名">
                <el-input v-model="editForm.username" disabled></el-input>
            </el-form-item>
       
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="editForm.email"></el-input>
            </el-form-item>
       
            <el-form-item label="手机" prop="mobile">
                <el-input v-model="editForm.mobile"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="editDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="editUserInfo">确 定</el-button>
        </span>
    </el-dialog>

  

  </div>
</template>
<script>
export default {
    data(){
        // 验证邮箱的规则
        var checkEmail=(rule,value,cb)=>{
            //验证邮箱的正则表达式
            const regEmail= /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/
            if(regEmail.test(value)){
                //合法邮箱
                return cb()
            }
            cb(new Error('请输入合法的邮箱'))
        }
        // 验证手机号规则
        var checkMobile=(rule,value,cb)=>{
             //验证手机号的正则表达式
            const regMobile= /^(0|86|17951)?(13[0-9]|15[0123456789|17[678]|18[0-9]|14[57]])[0-9]{8}$/
            if(regMobile.test(value)){
                //合法手机号
                return cb()
            }
            cb(new Error('请输入合法的手机号'))
        }
        return {
            //获取用户列表的参数对象
            queryInfo:{
                query:'',
                //当前页数
                pagenum:1,
                //当前每页显示多少条数据
                pagesize:2
            },
            userlist:[],
            total:0,
            // 控制添加用户对话框的显示与隐藏
            addDialogVisible:false,
            // 添加用户的表单数据
            addForm:{
                username:'',
                password:'',
                email:'',
                mobile:''
            },
            //添加表单的验证规则
            addFormRules:{
                username:[
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                ],
                password:[
                      { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
                ],
                email:[
                     { required: true, message: '请输入邮箱', trigger: 'blur' },
                    { min: 6, max: 25, message: '长度在 6 到 15 个字符', trigger: 'blur' },
                    {validator:checkEmail,trigger: 'blur'}
                ],
                mobile:[
                     { required: true, message: '请输入手机', trigger: 'blur' },
                    { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' },
                    {validator:checkMobile,trigger: 'blur'}
                ]
            },
            // 控制修改用户对话框的显示与隐藏
            editDialogVisible:false,
            // 查询到的用户信息对象
            editForm:{},
            //修改表单的验证规则
            editFormRules:{
                email:[
                     { required: true, message: '请输入邮箱', trigger: 'blur' },
                    { min: 6, max: 25, message: '长度在 6 到 15 个字符', trigger: 'blur' },
                    {validator:checkEmail,trigger: 'blur'}
                ],
                mobile:[
                     { required: true, message: '请输入手机', trigger: 'blur' },
                    { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' },
                    {validator:checkMobile,trigger: 'blur'}
                ]
            },
            delDialogVisible:false
        }
    },
    created(){
        this.getUserList()
    },
    methods:{
        async getUserList(){
            const {data:res}= await this.$http.get('users',{params:this.queryInfo})
            // console.log(res);
            if(res.meta.status!==200){
                return this.$message.error('获取用户列表失败！')
            }
            this.userlist=res.data.users
            this.total=res.data.total
        },
        //监听pagesize改变的事件
        handleSizeChange(newSize){
            // console.log(newSize);
            this.queryInfo.pagesize=newSize
            this.getUserList()
        },
        // 监听页码值改变的事件
        handleCurrentChange(newPage){
            // console.log(newPage);
            this.queryInfo.pagenum=newPage
            this.getUserList()
        },
        //监听switch 开关状态
        async userStateChanged(userinfo){
            // console.log(userinfo);
            const {data:res}= await this.$http.put(`users/${userinfo.id}/state/${userinfo.mg_state}`)
            // console.log(res);
            if(res.meta.status!==200){
                userinfo.mg_state=!userinfo.mg_state
                return this.$message.error('更新用户状态失败!')
            }
            this.$message.success('更新用户状态成功')
        },
        //监听添加用户对话框的关闭事件
        addDialogClosed(){
            this.$refs.addFormRef.resetFields()
        },
        // 点击按钮,添加新用户
        addUser(){
            this.$refs.addFormRef.validate(async valid=>{
                // console.log(valid);
                if(!valid) return
                // 可以发起添加用户网络请求
                const {data:res}=await this.$http.post('users',this.addForm)
                console.log(res);
                if(res.meta.status!==201){
                    this.$message.error('添加用户失败！')
                }
                    this.$message.success('添加用户成功！')
                    //隐藏添加用户的对话框
                    this.addDialogVisible=false
                    //重新获取用户列表数据
                    this.getUserList();
            })
        },
        // 展示编辑用户的对话框
        async showEditDialog(id){
            // console.log(id);
            const {data:res}=await this.$http.get('users/'+id)
            if(res.meta.status!==200){
                return this.$message.error(res.meta.msg)
            }
            // this.$message.success(res.meta.msg)
            this.editForm=res.data
            this.editDialogVisible=true
        },
        // 监听修改用户对话框的事件
        editDialogClosed(){
            this.$refs.editFormRef.resetFields()
        },
        // 修改用户信息并提交
        editUserInfo(){
            this.$refs.editFormRef.validate(async validate=>{
                // console.log(validate);
                if(!validate) return
                //发起修改用户信息的数据请求
                const {data:res}=await this.$http.put('users/'+this.editForm.id,{email:this.editForm.email,mobile:this.editForm.mobile})
                if(res.meta.status!==200){
                    return this.$message.error('更新用户信息失败')
                }
                // 隐藏对话框
                this.editDialogVisible=false
                // 更新列表
                this.getUserList()
                // 更新提示
                this.$message.success('更新用户信息成功')
            })
        },
        // 根据id删除对应用户
        async removeUserById(id){
            // console.log(id);
            // 弹框询问用户是否删除用户
            const confirmResult= await this.$confirm('此操作将删除该用户, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).catch(err=>err)
            // 如果确认删除，则返回字符串 confirm    取消就会报出错误  所以需要catch 来捕获错误信息 （错误信息为字符串 cancel）
            // console.log(confirmResult);
            if(confirmResult!=='confirm'){
                return this.$message.info('已取消删除')
            }
            const {data:res}=await this.$http.delete('users/'+id)
            // console.log(res);
            if(res.meta.status!==200){
                return this.$message.error(res.meta.msg)
            } 
            this.$message.success(res.meta.msg)
            this.getUserList()
            // this.$message.info('删除成功')
            }
        
    }
}
</script>
<style lang="less" scope>
</style>
