// 유효성 체크 상태
let emailStatus = 0;
let pwStatus = 0;
let pwChkStatus = 0;
let nameStatus = 0;
let nickStatus = 0;

function openHint(item, color, msg){
	$(item).css('visibility', 'visible');
	$(item).css('color', color);
	$(item + ' span').text(msg);
}

$(function(){
	// 이메일 유효성 검사
	const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	$("#userEmail").on("keyup",function() {
		if($("#userEmail").val() === ""){
			$('#emailChk').css('visibility', 'hidden');
			id_status = 0;
		}else if(!idRegExp.test($("#userEmail").val())){
			openHint('#emailChk', 'red', '올바른 형식의 이메일을 입력해주세요.')
			id_status = 0;
		}else{
			//jinhwan 확인할것.
			$.ajax({
				url : "/user/userEmailConfirm",
				type : "post",
				data : { userEmail : $("#userEmail").val()},
				dataType : "text",
				error : function(){
					alert('시스템 오류입니다')
				},
				success: function(resultData){
					if(resultData=="성공") {
						openHint('#emailChk', 'green', '사용 가능한 이메일입니다')
						emailStatus = 1;
					}else if(resultData=="실패") {
						openHint('#emailChk', 'red', '중복된 이메일입니다')
						emailStatus = 0;
					}
				}
			});
		}
	});
	
	// 비밀번호 유효성 검사
	const pwRegExp = /^[a-zA-Z\\d`~!@#$%^&*()-_=+]{4,20}$/;
	$("#userPw").on("keyup",function(){
		if($("#userPw").val() === ""){
			$('#pwChk').css('visibility', 'hidden');
			pwStatus = 0;
		}else if(!pwRegExp.test($("#userPw").val())){
			openHint('#pwChk', 'red', '영문 대소문자, 숫자 또는 특수문자 4~20자리를 입력해주세요')
			pwStatus = 0;
		}else {
			$('#pwChk').css('visibility', 'hidden');
			pwStatus = 1;
		}
		if($("#userPwChk").val() === ""){
			$('#pwChkChk').css('visibility', 'hidden');
			pwChkStatus = 0;
		}else if($("#userPw").val() !== $("#userPwChk").val()){
			openHint('#pwChkChk', 'red', '비밀번호가 일치하지 않습니다')
			pwChkStatus = 0;
		}else if($("#userPw").val() === $("#userPwChk").val()){
			openHint('#pwChkChk', 'green', '비밀번호가 일치합니다')
			pwChkStatus = 1;
		}
	})
	
	// 비밀번호 확인 유효성 검사
	$("#userPwChk").on("keyup",function(){
		if($("#userPwChk").val() === ""){
			$('#pwChkChk').css('visibility', 'hidden');
			pwChkStatus = 0;
		}else if($("#userPw").val() !== $("#userPwChk").val()){
			openHint('#pwChkChk', 'red', '비밀번호가 일치하지 않습니다')
			pwChkStatus = 0;
		}else if($("#userPw").val() === $("#userPwChk").val()){
			openHint('#pwChkChk', 'green', '비밀번호가 일치합니다')
			pwChkStatus = 1;
		}
	})
	
	// 이름 유효성 검사
	const nameRegExp = /^[가-힣]{2,20}$/;
	$("#userName").on("keyup",function(){
		if($("#userName").val() === ""){
			$('#userNameChk').css('visibility', 'hidden');
			nameStatus = 0;
		}else if(!nameRegExp.test($("#userName").val())){
			openHint('#userNameChk', 'red', '이름은 한글로 2~20자리로 입력해주세요')
			nameStatus = 0;
		}else {
			$('#userNameChk').css('visibility', 'hidden');
			nameStatus = 1;
		}
	})


	

	
	
	// 회원가입 버튼
	$("#signUpBtn").click(function(){
		// ID(아이디) 공백 검사
		if(!chkData("#userEmail", "이메일을")) {return;}
		// 아이디 유효성 검사
		if(emailStatus === 0){
			alert("이메일을 확인해주세요.")
			return;
		}
		// 비밀번호 공백 검사
		if(!chkData("#userPw","비밀번호를")) {return;}
		// 비밀번호 유효성 검사
		if(PwStatus === 0){
			alert("비밀번호를 확인해주세요.")
			return;
		}
		// 비밀번호 확인 공백 검사
		if(!chkData("#userPwChk","비밀번호 확인을")) {return;}
		// 비밀번호 확인 유효성 검사
		if(pwChkStatus === 0){
			alert("비밀번호 확인을 확인해주세요.")
			return;
		}
		// 이름 공백 검사
		if(!chkData("#userName","이름을")) {return;}
		// 이름 유효성 검사
		if(nameStatus === 0){
			alert("이름을 확인해주세요.")
			return;
		}

		// 이메일 공백 검사
		if(!chkData("#userEmail","이메일을")) {return;}
		// 이메일 유효성 검사
		if(email_status === 0){
			alert("이메일을 인증해주세요.")
			return;
		}

		$("#signUpForm").attr({
			"method" : "post",
			"action" : "/user/userSign/userSignUp"
		});
		$("#signUpForm").submit();
	})
})