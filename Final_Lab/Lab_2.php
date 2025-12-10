<?php
 
$length = 8;
$width  = 5;
 
$area = $length * $width;
$perimeter = 2 * ($length + $width);
?>
<!doctype html>
<html>
<head><meta charset="utf-8"><title>All Tasks</title></head>
<body>
 
<h2>Task 1: Rectangle</h2>
<p>Length: <?= $length ?>, Width: <?= $width ?></p>
<p>Area = <?= $area ?></p>
<p>Perimeter = <?= $perimeter ?></p>
 
<?php
 
$amount = 1000.00;
$vat_rate = 0.15;
 
$vat = $amount * $vat_rate;
$total_with_vat = $amount + $vat;
?>
<h2>Task 2: VAT Calculator</h2>
<p>Amount: <?= number_format($amount, 2) ?></p>
<p>VAT (15%): <?= number_format($vat, 2) ?></p>
<p>Total (Amount + VAT): <?= number_format($total_with_vat, 2) ?></p>
 
<?php
 
$number = 27;
$result = ($number % 2 == 0) ? "even" : "odd";
?>
<h2>Task 3: Odd or Even</h2>
<p>Number: <?= $number ?> is <strong><?= $result ?></strong>.</p>
 
<?php
 
$a = 12;
$b = 45;
$c = 30;
 
$largest = $a;
if ($b > $largest) $largest = $b;
if ($c > $largest) $largest = $c;
?>
<h2>Task 4: Largest of Three Numbers</h2>
<p>Numbers: <?= $a ?>, <?= $b ?>, <?= $c ?></p>
<p>Largest: <?= $largest ?></p>
 
<?php
 
$odds = [];
for ($i = 11; $i <= 99; $i += 2) {
    $odds[] = $i;
}
?>
<h2>Task 5: Odd Numbers 10-100</h2>
<p><?= implode(", ", $odds) ?></p>
 
<?php
 
$array = ["apple", "banana", "grape", "mango", "orange"];
$search = "mango";
 
$found_index = -1;
for ($i = 0; $i < count($array); $i++) {
    if ($array[$i] === $search) {
        $found_index = $i;
        break;
    }
}
?>
<h2>Task 6: Array Search</h2>
<p>Array: <?= implode(", ", $array) ?></p>
<p>Searching for: <?= htmlspecialchars($search) ?></p>
<?php if ($found_index >= 0): ?>
    <p>Element found at index <?= $found_index ?>.</p>
<?php else: ?>
    <p>Element not found.</p>
<?php endif; ?>
 
<?php
 
$rows = 3;
$star_triangle = "";
for ($r = 1; $r <= $rows; $r++) {
    for ($c = 1; $c <= $r; $c++) {
        $star_triangle .= "* ";
    }
    $star_triangle .= "\n";
}
 
$num_pattern = "";
for ($r = 3; $r >= 1; $r--) {
    for ($c = 1; $c <= $r; $c++) {
        $num_pattern .= $c;
    }
    $num_pattern .= "\n";
}
 
$letters = range('A','Z');
$letter_pattern = "";
$index = 0;
for ($r = 1; $r <= 3; $r++) {
    for ($c = 1; $c <= $r; $c++) {
        $letter_pattern .= $letters[$index] . " ";
        $index++;
    }
    $letter_pattern .= "\n";
}
?>
<h2>Task 7: Shapes / Patterns</h2>
<pre><?= htmlspecialchars($star_triangle) ?></pre>
<pre><?= htmlspecialchars($num_pattern) ?></pre>
<pre><?= htmlspecialchars($letter_pattern) ?></pre>
 
<?php
 
$matrix = [
    [1, 2, 3, 'A'],
    [1, 2, 'B', 'C'],
    [1, 'D', 'E', 'F']
];
 
$asRows = "";
foreach ($matrix as $row) {
    $asRows .= implode(" ", $row) . "\n";
}
 
$pattern_out = "";
foreach ($matrix as $row) {
    $pattern_out .= implode("", $row) . "\n";
}
?>
<h2>Task 8: 2D Array & Shapes</h2>
<pre><?= htmlspecialchars($asRows) ?></pre>
<h3>Concatenated rows</h3>
<pre><?= htmlspecialchars($pattern_out) ?></pre>
 
</body>
</html>
 