<%@ page contentType="text/html; charset=UTF-8"%>
<%
		String id = request.getParameter("id");
		String pwd = request.getParameter("pwd");
		String name = request.getParameter("name");
		String gender = request.getParameter("gender");
		String birthday = request.getParameter("birthday");
		String email = request.getParameter("email");
		String zipcode = request.getParameter("zipcode");
		String address = request.getParameter("address");
		String hobbys[] = request.getParameterValues("hobby");
		String hobby ="";
		for(int i=0;i<hobbys.length;i++){
			hobby+=hobbys[i]+" ";
		}
		String job = request.getParameter("job");
		
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
회원가입 확인
id : <%=id %><br>
pwd : <%=pwd %><br>
name : <%=name %><br>
gender : <%=gender %><br>
birthday : <%=birthday %><br>
email : <%=email %><br>
zipcode : <%=zipcode %><br>
address : <%=address %><br>
hobby : <%=hobby %><br>
job : <%=job %><br>
<button onclick="history.back()">뒤로</button>
</body>
</html>







