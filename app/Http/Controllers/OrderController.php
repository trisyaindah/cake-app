<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'cake_id' => 'required|exists:cakes,id',
            'customer_name' => 'required|string|max:255',
            'address' => 'required|string|max:500',
        ]);

        $order = Order::create($validated);

        return response()->json([
            'message' => 'Order berhasil disimpan',
            'data' => $order,
        ]);
    }

    public function destroy($id)
    {
        $order = Order::findOrFail($id);
        $order->delete();
        return response()->json(['message' => 'Order deleted']);
    }

    public function show($id)
    {
        return Order::with('cake')->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $order = Order::findOrFail($id);
        $order->update($request->only(['customer_name', 'address', 'cake_id']));
        return response()->json(['message' => 'Order updated']);
    }

}
