<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Cake extends Model
{

	protected $fillable = ['name', 'price'];

	public function orders()
	{
		return $this->hasMany(Order::class);
	}
}
