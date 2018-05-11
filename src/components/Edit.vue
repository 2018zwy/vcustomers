<template>
  <div class="edit container">
  	<router-link to='/' class='btn btn-default'>返回</router-link>
  	<Alert v-if='alert' :message='alert' class=''></Alert>
	<h1 class="page-header">
	<form v-on:submit="updateCustomer">
			<div class="well">
				<h4>编辑用户信息</h4>
				<div class="form-group">
					<label>姓名</label>
					<input type="text" class="form-control" placeholder="name" v-model="customer.name" />
					<label>电话</label>
					<input type="text" class="form-control" placeholder="phone" v-model="customer.phone" />
					<label>邮箱</label>
					<input type="text" class="form-control" placeholder="email" v-model="customer.email" />
					<label>学历</label>
					<input type="text" class="form-control" placeholder="education" v-model="customer.education" />
					<label>毕业学校</label>
					<input type="text" class="form-control" placeholder="graduationschool" v-model="customer.graduationschool" />
					<label>职业</label>
					<input type="text" class="form-control" placeholder="profession" v-model="customer.profession" />
					<label>个人简历</label>
					<textarea type="text" class="form-control" rows="10" placeholder="profile" v-model="customer.profile" />
				</div>
				<button type="submit" class="btn btn-primary">提交</button>
			</div>
	</form>
	</h1>
  </div>
</template>

<script>
	import Alert from './Alert'
export default {
  name: 'add',
  data () {
    return {
      customer:{},
       alert:""
    }
  },
  methods:{
  	fetchCustomers(id){
  		this.$http.get("http://localhost:3000/users/"+id)
  		.then(function(reponse){
//			console.log(reponse)
			this.customer = reponse.body;
  		})
  	},
  	updateCustomer(e){
//		console.log(123);
			if (!this.customer.name || !this.customer.phone ||!this.customer.email) {
//				console.log("请添加对应的信息")
				this.alert='请添加对应的信息'
			}else{
				let updateCustomer ={
					name:this.customer.name,
					phone:this.customer.phone,
					email:this.customer.email,
					education:this.customer.education,
					graduationschool:this.customer.graduationschool,
					profession:this.customer.profession,
					profile:this.customer.profile
				}
				this.$http.put("http://localhost:3000/users/"+this.$route.params.id,updateCustomer)
				.then(function(response){
//					console.log(responce)
						this.$router.push({path:'/',query:{alert:"用户信息更新成功！"}})
				})
			}
  		e.preventDefault();
  		
  	}
  },
  created(){
  	this.fetchCustomers(this.$route.params.id)
  },
  components:{
  	Alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label{font-size: 14px;}
</style>
