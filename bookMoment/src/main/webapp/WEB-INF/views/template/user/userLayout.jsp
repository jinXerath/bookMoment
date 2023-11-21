<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/common/common.jspf" %>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
		
		<title><tiles:getAsString name="title"/></title>
		
		<link rel="shortcut icon" href="/resources/images/icon.png" />
		<link rel="apple-touch-icon" href="resources/images/icon.png" />
		
		<!--[if lt IE 9]>
		<script src="../js/html5shiv.js"></script>
		<![endif]-->
	<!-- ########## CSS ################## -->	
		<!-- BootStrap Core CSS Files -->
		<link href="/resources/include/bootstrap-5.3.2-dist/css/bootstrap.min.css" rel="stylesheet"/>
		<!-- user-common CSS File  -->
		<link href="/resources/include/css/user/user-common.css" rel="stylesheet"/>
		
	<!-- ########## Java Script ########## -->	
		<!-- jQuery -->
		<script src="/resources/include/js/jquery-3.7.1.min.js" type="text/javascript"></script>		
		<!-- BootStrap Core JS Files -->
		<script src="/resources/include/bootstrap-5.3.2-dist/js/bootstrap.bundle.js"></script>
		<!-- fontawesome -->
		<script src="/resources/include/js/fontawesome-all.js" type="text/javascript"></script>				
 		<!-- common.js -->
        <script src="/resources/include/js/common.js" type="text/javascript"></script>		
	</head>
   <body> 
      <tiles:insertAttribute name="header" />
      <tiles:insertAttribute name="main" />
      <tiles:insertAttribute name="footer" />
   </body>
</html>