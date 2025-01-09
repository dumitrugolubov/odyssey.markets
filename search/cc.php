<?php
header('Content-Type: application/json');

// Basic search functionality
$query = isset($_GET['q']) ? $_GET['q'] : '';
$response = [
    'status' => 'success',
    'query' => $query,
    'results' => []
];

echo json_encode($response);
?>
