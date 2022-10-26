<template>
	<view class="indexBoxClass">
		<view class="test">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.indexBoxClass{
		width:100vw;
		height:100vh;
		background:linen;
		.test{
			background-color: red;
			width:100%;
			height:var(--status-bar-height);
		}
	}
	
</style>
