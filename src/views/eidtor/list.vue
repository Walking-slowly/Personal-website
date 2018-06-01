<template>
    <div id="list">
      <el-table
      stripe
      :data="tableData"
      style="width: 100% height: 100%">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          type="index"
          label="ID"
          width="55">
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题"
          width="180">
        </el-table-column>
        <el-table-column
          prop="brief"
          label="简介">
        </el-table-column>
         <el-table-column
          label="日期"
          width="150">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 5px">{{ scope.row.time | timer('date')}}</span>
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="120">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click.prevent="$router.push({name: 'insert', params:{id:scope.row._id}})">编辑</el-button>
            <el-button type="text" size="small" @click.prevent="deletes(tableData,scope.row._id,scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        :page-size='params.num'
        @current-change="handleCurrentChange"
        :current-page="params.page"
        layout="prev, pager, next"
        :total="total">
      </el-pagination>
    </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: null,
      total: null,
      params: {
        num: 8,
        page: 1
      }
    }
  },
  methods: {
    // 发送请求
    gitList () {
      var self = this
      this.$http.list(self.params).then(data => {
        self.tableData = data.data.result
        self.total = data.data.total
      }).catch(eorr => {
      })
    },
    // 分页发送请求
    handleCurrentChange (index) {
      this.params.page = index
      this.gitList()
    },
    // 删除数据/结构
    deletes (datas, id, index) {
      this.$confirm(`是否确定删除id=${id}的数据`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http.deletes({id: id}).then(data => {
          this.$message({
            message: '删除成功',
            type: 'success'
          })
          datas.splice(index, 1)
        }).catch(eorr => {
          this.$message({
            message: '删除失败',
            type: 'warning'
          })
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  },
  mounted () {
    this.gitList()
  }
}
</script>

<style lang="scss" scoped>
  #list{
    border-radius: rem(4);
    background:#fff;
    padding:rem(10);
    .el-pagination {
      margin-top: rem(10);
      text-align: right;
    }
  }
</style>
