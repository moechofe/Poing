<?php
$input = json_decode(trim(file_get_contents('php://stdin')));
var_dump($input);
$outut = (object)array();
foreach($input->frames as $file=>$data)
{
	$output[ basename($file) ] = array(
		$data->frame->x,
		$data->frame->y,
		$data->frame->w,
		$data->frame->h
	);
}
var_dump($output);

