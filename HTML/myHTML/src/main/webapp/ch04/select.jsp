<%@ page contentType="text/html; charset=UTF-8"%>

<%
	String subject[] = {"HTML", "CSS", "JavaScript", "JAVA", "Python", "C"};
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<form action="">
		<label for="select">당신이 선호하는 언어는?</label>
			<select name="select">
				<% for(int i=0;i<subject.length;i++) {%>
					<option value="<%=subject[i]%>"><%=subject[i] %></option>
				<%} %>
			</select>
	</form>
</body>
</html>