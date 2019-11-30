<template>
	<view class="content">
		<view class="wrap-title">登录</view>
		<view class="login-content">
			<view class="login-item">
				<view class="item-left">
					<image src="../../static/shouji.png"></image>
				</view>
				<view class="item-right">
					<input type="text" placeholder="请输入手机号" v-model="PhoneNumber" class="txt" />
				</view>
			</view>
			<view class="login-item">
				<view class="item-left">
					<image src="../../static/mima.png"></image>
				</view>
				<view class="item-right">
					<input type="text" placeholder="请输入密码" v-model="Password" password class="txt" />
				</view>
			</view>
		</view>
		<view class="login-btn" @click="login">登录</view>
		<view class="regi-btn" @click="register">注册</view>
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
           this.PhoneNumber=uni.getStorageSync('PhoneNumber');
           this.Password=uni.getStorageSync('Password');
		},
		methods: {
			register() {
				uni.navigateTo({
					url: '../register/register'
				})
			},
			login() {
				var PhoneNumber=this.PhoneNumber;
				var Password=this.Password;
				uni.showLoading({
					title:'登录中...'
				})
				if(PhoneNumber==''){
					uni.showToast({
						title:'手机号不能为空',
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
						url: globals.url + 'Personal/Login',
						data:qs.stringify(data),
						header: {
							'Accept': 'application/json',
							'Content-Type': 'application/x-www-form-urlencoded'
						},
						method: 'POST',
						success: (res) => {
							uni.hideLoading();
							console.log('登录',res);
							if(res.data.count==1){
								uni.showToast({
									title:'登录成功',
									duration:2000,
									success:(res)=>{
										setTimeout(function() {
											uni.switchTab({
												url:'../index/index'
											})
										}, 2000);
									}
								})
								console.log('id',res.data.data.ID);
								uni.setStorageSync('states',res.data.data.SubmitState);
								uni.setStorageSync('userId',res.data.data.ID);
							}else{
								uni.showToast({
									title:res.data.msg
								})
							}
						}
					})
				}
			}
		}
	}
</script>

<style lang="less">
	.content {
		background: url(../../static/bg.png) no-repeat;
		width: 100%;
		height: 100vh;
		margin: 0 auto;
		background-size: 100% 100%;
		overflow: hidden;
		font-size: 14px;

		.wrap-title {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 200upx 0;
			font-size: 18px;
		}

		.login-content {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 80%;
			margin: 0 auto;

			.login-item {
				display: flex;
				align-items: center;
				margin-bottom: 60upx;

				.item-left {
					width: 60upx;
					height: 60upx;
					margin-right: 20upx;

					image {
						width: 100%;
						height: 100%;
						display: block;
					}
				}

				.item-right {
					width: 514upx;
					border-bottom: 1px solid #dbdbdb;

					.uni-input-placeholder {
						color: #dbdbdb;
					}

					.txt {
						margin-bottom: 10upx;
					}
				}
			}
		}

		.login-btn {
			background: -moz-linear-gradient(top, #5f9fff 0%, #3280fd 100%);
			background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #5f9fff), color-stop(100%, #3280fd));
			background: -webkit-linear-gradient(top, #5f9fff 0%, #3280fd 100%);
			background: -o-linear-gradient(top, #5f9fff 0%, #3280fd 100%);
			background: -ms-linear-gradient(top, #5f9fff 0%, #3280fd 100%);
			background: linear-gradient(to bottom, #5f9fff 0%, #3280fd 100%);
			width: 86%;
			text-align: center;
			height: 90upx;
			line-height: 90upx;
			border-radius: 50upx;
			color: #fff;
			margin: 160upx auto 0;
		}

		.regi-btn {
			width: 86%;
			text-align: center;
			height: 90upx;
			line-height: 90upx;
			border-radius: 50upx;
			margin: 30upx auto 0;
			border: 1px solid #007AFF;
			color: #007AFF;
		}
	}
</style>
