<?php
header('Content-Type:text/plain');
//接收客户端提交的user_name、user_pwd
//执行SQL语句，存入数据库中
$user_name=$_REQUEST['user_name'];
$user_pwd=$_REQUEST['user_pwd'];
//连接数据库服务器
$conn=mysqli_connect('127.0.0.1','root','','mm');
//向服务器提交SQL语句
$sql='SET NAMES UTF8';
$sql="INSERT INTO mm_users VALUES(NULL,'$user_name','$user_pwd')";
$result=mysqli_query($conn,$sql);
if($result){
  //返回刚刚执行的INSERT语句生成的自增编号
  echo mysqli_insert_id($conn);
}else{
  echo -1;
}
?> 