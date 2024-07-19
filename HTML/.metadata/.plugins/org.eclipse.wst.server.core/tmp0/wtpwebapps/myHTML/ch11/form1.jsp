<%@ page contentType="text/html; charset=UTF-8"%>
<%
		String id = request.getParameter("id");
		String pw = request.getParameter("pw");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
ID: <%=id%><br>
PWD : <%=pw%><br>
<button onclick="history.back()">뒤로</button>
</body>
</html>