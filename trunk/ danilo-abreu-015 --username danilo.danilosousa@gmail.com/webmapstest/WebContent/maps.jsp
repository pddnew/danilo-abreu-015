<?xml version="1.0" encoding="ISO-8859-1" ?>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
<link rel="stylesheet" type="text/css" href="resources/css/style.css" />
<link rel="stylesheet" type="text/css" href="resources/bootstrap/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="resources/bootstrap/css/bootstrap-responsive.min.css" />
<!-- 	API key	AIzaSyCN3mUErg2i5Th921ZjDfr7MNEluIGG7tM -->
<!-- 	Referers	http://localhost:8002/webmapstest/maps.jsp -->
<!-- 	Activation date	May 30, 2014 5:06 PM -->
<!-- 	Activated by	 danilo.danilosousa@gmail.com (you) -->
<!-- ------------------------------------------------------ -->
<!-- 	API key	AIzaSyAv9xKspOpAExKJK2RMVXoClVs5O9a94ds -->
<!-- 	Referers http://localhost:8080/webmapstest/maps.jsp -->
<!-- 	Activation date	May 30, 2014 6:48 AM -->
<!-- 	Activated by	 danilo.danilosousa@gmail.com (you) -->
<script type="text/javascript"
	src="http://maps.googleapis.com/maps/api/js?key=AIzaSyCN3mUErg2i5Th921ZjDfr7MNEluIGG7tM&sensor=TRUE"></script>
<!-- <script type="text/javascript" src="resources/js/markerclusterer.js"></script> -->
<script type="text/javascript"
	src="resources/js/markerclusterer_packed.js"></script>
<script type="text/javascript" src="resources/js/data.json"></script>
<title>POC - Google Maps API</title>
</head>
<body onload="initialize()">
	<div id="navbar navbar-inverse navbar-fixed-top">
		<div class="navbar-inner"></div>
	</div>
	<div class="container">
		<div class="row">
			<div class="span3">
				<!--Sidebar content-->
				<div id="add_address" class="row-fluid">
					<div class="">
						<input type="text" id="txt_address" style="width: 95%;" placeholder="Type an address or local"></input>
<!-- 						<input type="button" id="btn_search_address" class="btn btn-small" value="Search"></input> -->
					</div>
				</div>
				<div id="search_result"></div>
			</div>
			<div class="span9">
				<!--Body content-->
				<div id="map_canvas"></div>
			</div>
		</div>
	</div>

	<script type="text/javascript" src="resources/jquery/jquery.min.js"></script>
	<script type="text/javascript" src="resources/jquery/jquery-ui.js"></script>
	<script type="text/javascript" src="resources/bootstrap/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="resources/js/webmaps.js"></script>
</body>
</html>