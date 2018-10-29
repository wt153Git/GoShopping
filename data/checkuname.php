<?php
//读取客户端提交的用户名和密码，验证是否正确
header('Content-Type:text/plain');
	$user_name=$_REQUEST['user_name'];
	$user_pwd=$_REQUEST['user_pwd'];
	//连接数据库
	$conn=mysqli_connect('127.0.0.1','root','','mm');
	$sql="SET NAMES UTF8";
	mysqli_query($conn,$sql);
	$sql="SELECT user_id FROM mm_users WHERE 
	user_name='$user_name' AND user_pwd='$user_pwd'";
	$result=mysqli_query($conn,$sql);
	//上述查询结果集中可能有1/0行记录
	$row=mysqli_fetch_array($result);
	if($row){//查询结果集中有一行记录
		echo $row['user_id'];
	}else{//查询结果集中没有记录
		echo '-1';
	}
?>