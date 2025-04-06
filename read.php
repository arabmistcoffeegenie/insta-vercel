<?php
  echo "<h3>Saved Submissions:</h3>";
  $dataFile = '/tmp/data.txt';

  if (file_exists($dataFile)) {
    echo "<pre>" . htmlspecialchars(file_get_contents($dataFile)) . "</pre>";
  } else {
    echo "No data yet.";
  }
?>
