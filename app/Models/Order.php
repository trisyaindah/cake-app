<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Order extends Model
{
	protected $fillable = ['cake_id', 'customer_name', 'address'];

	public function cake()
	{
		return $this->belongsTo(Cake::class);
	}
}
