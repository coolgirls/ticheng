<template>
	<view class="content">
		<view class="wrap-title">注册</view>
		<view class="regi-content">
			<view class="regi-item">
				<view class="item-left">
					<image src="../../static/shouji.png"></image>
				</view>
				<view class="item-right">
					<input type="text" placeholder="请输入手机号" class="txt" v-model="PhoneNumber"/>
				</view>
			</view>
			<view class="regi-item">
				<view class="item-left">
					<image src="../../static/mima.png"></image>
				</view>
				<view class="item-right">
					<input type="text" placeholder="请输入密码" password class="txt" v-model="Password"/>
				</view>
			</view>
		</view>
		<view class="regi-btn" @click="goLogin">注册</view>
		<view class="login-btn" @click="login">登录</view>
	</view>
</template>

<script>
	import globals from '../../config.js'
	import qs from '../../qs.js'
	export default {
		data() {
			return {
				PhoneNumber: '',
				Password: '',
			}
		},
		onLoad() {

		},
		methods: {
			goLogin(){
				var PhoneNumber=this.PhoneNumber;
				var Password=this.Password;
				uni.showLoading({
					title:'注册中...'
				})
				if(PhoneNumber==''){
					uni.showToast({
						title:'手机号不能为空',
						icon:'none'
					})
				}else if(PhoneNumber.length!=11){
					uni.showToast({
						title:'请输入11位的手机号码',
						icon:'none'
					})
				}else if(Password==''){
					uni.showToast({
						title:'密码不能为空',
						icon:'none'
					})
				}else{
					var data={
						PhoneNumber: PhoneNumber,
						Password: Password
					}
					uni.request({
						url: globals.url + 'Personal/Registration',
						data:qs.stringify(data),
						header: {
							'Accept': 'application/json',
							'Content-Type': 'application/x-www-form-urlencoded'
						},
						method: 'POST',
						success: (res) => {
							uni.hideLoading();
							console.log('注册',res);
							if(res.data.Success==true){
								uni.showToast({
									title:'注册成功',
									duration:2000,
									success:(res)=>{
										setTimeout(function() {
											uni.navigateTo({
												url:'../login/login'
											})
										}, 2000);
									}
								})
								uni.setStorageSync('PhoneNumber',PhoneNumber);
								uni.setStorageSync('Password',Password);
							}else{
								uni.showToast({
									title:res.data.ErrMsg
								})
							}
						}
					})
				}
				
			},
			login(){
				uni.navigateTo({
					url:'../login/login'
				})
			}
		}
	}
</script>

<style lang="less">
	.content{
		background:url(../../static/bg.png) no-repeat;
		width: 100%;
		height: 100vh;
		margin: 0 auto;
		background-size: 100% 100%;
		overflow:hidden;
		font-size:14px;
		.wrap-title{
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 200upx 0;
			font-size: 18px;
		}
		.regi-content{
			display: flex;
			flex-direction: column;
			align-items:center;
			width:80%;
			margin:0 auto;
			.regi-item{
				display: flex;
				align-items: center;
				margin-bottom:60upx;
				&:last-child{
					margin-bottom: 0;
				}
				.item-left{
					width: 60upx;
					height:60upx;
					margin-right:20upx;
					image{
						width: 100%;
						height: 100%;
						display: block;
					}
				}
				.item-right{
					width: 514upx;
					border-bottom: 1px solid #dbdbdb;
					display:flex;
					.uni-input-placeholder{
						color: #dbdbdb;
					}
					.txt{
						margin-bottom: 10upx;
					}
					.code{
						width: 70%;
					}
					.code-btn{
						width: 30%;
						color: #e51c23;
						text-align: right;
					}
				}
			}
		}
		.regi-btn{
			background: -moz-linear-gradient(top, #5f9fff 0%, #3280fd 100%);
			background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#5f9fff), color-stop(100%,#3280fd));
			background: -webkit-linear-gradient(top, #5f9fff 0%,#3280fd 100%);
			background: -o-linear-gradient(top, #5f9fff 0%,#3280fd 100%);
			background: -ms-linear-gradient(top, #5f9fff 0%,#3280fd 100%);
			background:linear-gradient(to bottom, #5f9fff  0%,#3280fd 100%);
			width: 86%;
			text-align: center;
			height: 90upx;
			line-height: 90upx;
			border-radius:50upx;
			color: #fff;
			margin: 160upx auto 0;
		}
		
		.login-btn {
			text-align: center;
			height: 90upx;
			line-height: 90upx;
			border-radius: 50upx;
			margin: 30upx auto 0;
			color: #007AFF;
		}
	}
</style>
