<?php
    
    $answer1 = $_POST['question-1-answers'];

    $totalCorrect = 0;
    
    if ($answer1 == "B") { $totalCorrect++; }

    
    echo "<div id='results'>$totalCorrect / 5 correct</div>";
    
?>
