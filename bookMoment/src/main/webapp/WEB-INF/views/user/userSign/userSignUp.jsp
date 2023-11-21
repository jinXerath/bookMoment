<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/common/common.jspf" %>

<script src="/resources/include/js/user/signUp.js" type="text/javascript"></script>
<script type="text/javascript">
	$(function(){
		let errorMsg = "${errorMsg}";
		if(errorMsg != ""){
			alert(errorMsg);
			errorMsg = "";
		}
	})
</script>

<style>

	<!-- 체크기능 -->
	.userPwChk .pwChkChk{
		visibility: hidden;
	}
    <!-- 입력창 -->
	.container.py-4{
		width : 503px;
	}
    <!-- 회원가입 -->
	.d-grid.gap-2{
		padding-top: 30px;
	}
    


</style>
<div class="container mt-4 col-md-4">    
        <div class="container py-4">
            <div class="row align-items-center justify-content-between">
                <a class="navbar-brand h1 text-center" href="/">
                    <span class="text-primary h4">Book</span> <span class="text-primary h4">Moment</span>                 
                </a>
            </div>
            <form>
				<div class="form-group">
				    <label for="exampleInputEmail1" class="col-form-label">이메일</label>
				    <div class="row">
					    <div class="col-sm-10">
					        <input type="text" class="form-control" id="userEmail" name="userEmail">
					    </div>
					    <div class="col-sm-2">
					        <input type="button" class="btn btn-primary" value="인증">
					    </div>
					</div>
				</div>

                 			
				<div class="form-group">
					<label class="form-label mt-4">비밀번호</label>
					<input type="password" class="form-control" id="userPw" name="userPw">
                    <div class="userPwChk">
                    	<span>비밀번호</span>
                    </div>
				</div>

				<div class="form-group">
					<label class="form-label mt-4">비밀번호 확인</label> 
					<input type="password" class="form-control" id="userPwChk" name="userPwChk">
                    <div class="pwChkChk">
                         <span>비밀번호 확인</span>
                    </div>
					 <!--  <div class="invalid-feedback">비밀번호가 일치하지 않습니다</div> -->
				</div>
                <div class="form-group">
               		<label class="form-label mt-4">이름</label>
                    <input type="text" class="form-control">
                </div>
                
                <div class="form-group">
               		<label class="form-label mt-4">닉네임(별명)</label>
                    <input type="text" class="form-control">
                </div>
               
                
				<div class="d-grid gap-2">
                    <button class="btn btn-primary btn-lg" type="button">회원가입</button>
                </div>

            </form>
        </div>
   </div>