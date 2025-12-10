<?php
 
$nameErr = $emailErr = $dobErr = $genderErr = $degreeErr = $bloodErr = "";
$name = $email = $dd = $mm = $yyyy = $gender = "";
$degree = [];
$blood = "";
 
 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
   
    if (empty($_POST["name"])) {
        $nameErr = "Name cannot be empty";
    } else {
        $name = trim($_POST["name"]);
 
        if (!preg_match("/^[a-zA-Z][a-zA-Z.\- ]*$/", $name)) {
            $nameErr = "Must start with letter & contain only letters, period, dash";
        } else {
            $words = explode(" ", $name);
            if (count($words) < 2) {
                $nameErr = "Name must contain at least two words";
            }
        }
    }
 
 
    if (empty($_POST["email"])) {
        $emailErr = "Email cannot be empty";
    } else if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
        $emailErr = "Invalid email format";
    } else {
        $email = $_POST["email"];
    }
 
 
    $dd = $_POST["dd"];
    $mm = $_POST["mm"];
    $yyyy = $_POST["yyyy"];
 
    if (empty($dd) || empty($mm) || empty($yyyy)) {
        $dobErr = "Date fields cannot be empty";
    } else if ($dd < 1 || $dd > 31 || $mm < 1 || $mm > 12 || $yyyy < 1953 || $yyyy > 1998) {
        $dobErr = "Invalid date range (dd:1-31, mm:1-12, yyyy:1953-1998)";
    }
 
 
    if (empty($_POST["gender"])) {
        $genderErr = "Gender must be selected";
    } else {
        $gender = $_POST["gender"];
    }
 
    if (empty($_POST["degree"])) {
        $degreeErr = "At least two must be selected";
    } else if (count($_POST["degree"]) < 2) {
        $degreeErr = "Select minimum two";
    } else {
        $degree = $_POST["degree"];
    }
 
 
    if (empty($_POST["blood"])) {
        $bloodErr = "Must be selected";
    } else {
        $blood = $_POST["blood"];
    }
}
?>
 
<!DOCTYPE html>
<html>
<head>
    <title>LAB 3 - PHP Validation</title>
</head>
<body>
 
<h2>1. NAME</h2>
<form method="post">
    <input type="text" name="name" value="<?php echo $name; ?>">
    <span style="color:red"><?php echo $nameErr; ?></span><br><br>
 
    <h2>2. EMAIL</h2>
    <input type="text" name="email" value="<?php echo $email; ?>">
    <span style="color:red"><?php echo $emailErr; ?></span><br><br>
 
    <h2>3. DATE OF BIRTH</h2>
    DD: <input type="number" name="dd" value="<?php echo $dd; ?>" style="width:60px">
    MM: <input type="number" name="mm" value="<?php echo $mm; ?>" style="width:60px">
    YYYY: <input type="number" name="yyyy" value="<?php echo $yyyy; ?>" style="width:80px">
    <span style="color:red"><?php echo $dobErr; ?></span><br><br>
 
    <h2>4. GENDER</h2>
    <input type="radio" name="gender" value="Male" <?php if ($gender=="Male") echo "checked"; ?>> Male
    <input type="radio" name="gender" value="Female" <?php if ($gender=="Female") echo "checked"; ?>> Female
    <input type="radio" name="gender" value="Other" <?php if ($gender=="Other") echo "checked"; ?>> Other
    <span style="color:red"><?php echo $genderErr; ?></span><br><br>
 
    <h2>5. DEGREE (Select at least two)</h2>
    <input type="checkbox" name="degree[]" value="SSC"> SSC
    <input type="checkbox" name="degree[]" value="HSC"> HSC
    <input type="checkbox" name="degree[]" value="BSc"> BSc
    <input type="checkbox" name="degree[]" value="MSc"> MSc
    <span style="color:red"><?php echo $degreeErr; ?></span><br><br>
 
    <h2>6. BLOOD GROUP</h2>
    <select name="blood">
        <option value="" disabled selected>Choose</option>
        <option value="A+" <?php if ($blood=="A+") echo "selected"; ?>>A+</option>
        <option value="A-" <?php if ($blood=="A-") echo "selected"; ?>>A-</option>
        <option value="B+" <?php if ($blood=="B+") echo "selected"; ?>>B+</option>
        <option value="O+" <?php if ($blood=="O+") echo "selected"; ?>>O+</option>
    </select>
    <span style="color:red"><?php echo $bloodErr; ?></span><br><br>
 
    <input type="submit" value="Submit">
</form>
 
</body>
</html>
 
 