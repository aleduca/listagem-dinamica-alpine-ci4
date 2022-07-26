<?php

namespace App\Controllers;

use Config\Database;

class User extends BaseController
{
    public function index()
    {
        header('Access-Control-Allow-Origin: *');

        $db = Database::connect();
        $users = $db->table('users')->get()->getResult();

        return $this->response->setJSON($users);
    }
}
