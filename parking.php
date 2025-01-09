<?php
header('Content-Type: application/json');

$response = [
    'status' => 'success',
    'parking_info' => [
        'available_spots' => 100,
        'rates' => [
            'hourly' => 2.00,
            'daily' => 15.00
        ]
    ]
];

echo json_encode($response);
?>
