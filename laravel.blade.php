<?php

// app/Models/Bus.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bus extends Model
{
    // Define the fillable attributes for mass assignment
    protected $fillable = ['name', 'plate_number', 'capacity'];

    // Relationship with trips (a bus can have many trips)
    public function trips()
    {
        return $this->hasMany(Trip::class); // A bus can have many trips
    }
}



// app/Models/Trip.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Booking;

class Trip extends Model
{
    // Define the fillable attributes for mass assignment
    protected $fillable = ['bus_id', 'route', 'departure_time', 'available_seats'];

    // Relationship with bus (a trip belongs to one bus)
    public function bus()
    {
        return $this->belongsTo(Bus::class); // A trip belongs to a single bus
    }

    // Relationship with bookings (a trip can have many bookings)
    public function bookings()
    {
        return $this->hasMany(Booking::class); // A trip can have many bookings
    }

    // Method to book a seat and update available seats
    public function bookSeat($seatNumber, $userId)
    {
        if ($this->available_seats <= 0) {
            return false; // No available seats
        }

        // Create a booking
        Booking::create([
            'trip_id' => $this->id,
            'user_id' => $userId,
            'seat_number' => $seatNumber,
        ]);

        // Decrease available seats count
        $this->decrement('available_seats');
        
        return true;
    }
}



// app/Models/Booking.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    // Define the fillable attributes for mass assignment
    protected $fillable = ['trip_id', 'user_id', 'seat_number'];

    // Relationship with trip (a booking belongs to a trip)
    public function trip()
    {
        return $this->belongsTo(Trip::class); // A booking belongs to a trip
    }

    // Ensure the seat is not double-booked for the same trip
    public static function boot()
    {
        parent::boot();

        static::creating(function ($booking) {
            // Check if the seat is already booked for the trip
            $existingBooking = Booking::where('trip_id', $booking->trip_id)
                                      ->where('seat_number', $booking->seat_number)
                                      ->first();

            if ($existingBooking) {
                throw new \Exception('Seat already booked for this trip');
            }
        });
    }
}



// database/migrations/2025_04_22_000000_create_buses_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBusesTable extends Migration
{
    public function up()
    {
        Schema::create('buses', function (Blueprint $table) {
            $table->id(); // Auto-incrementing ID
            $table->string('name'); // Name of the bus
            $table->string('plate_number'); // Bus plate number
            $table->integer('capacity'); // Capacity of the bus (total seats)
            $table->timestamps(); // Timestamps for created_at and updated_at
        });
    }

    public function down()
    {
        Schema::dropIfExists('buses'); // Drop buses table
    }
}


// database/migrations/2025_04_22_000001_create_trips_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTripsTable extends Migration
{
    public function up()
    {
        Schema::create('trips', function (Blueprint $table) {
            $table->id(); // Auto-incrementing ID
            $table->foreignId('bus_id')->constrained('buses')->onDelete('cascade'); // Foreign key to buses table
            $table->string('route'); // Route for the trip (e.g., Dhaka → Gaibandha)
            $table->dateTime('departure_time'); // Scheduled departure time
            $table->integer('available_seats'); // Number of available seats
            $table->timestamps(); // Timestamps for created_at and updated_at
        });
    }

    public function down()
    {
        Schema::dropIfExists('trips'); // Drop trips table
    }
}




// database/migrations/2025_04_22_000002_create_bookings_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBookingsTable extends Migration
{
    public function up()
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id(); // Auto-incrementing ID
            $table->foreignId('trip_id')->constrained('trips')->onDelete('cascade'); // Foreign key to trips table
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade'); // Foreign key to users table
            $table->integer('seat_number'); // Seat number for the booking
            $table->timestamps(); // Timestamps for created_at and updated_at
            $table->unique(['trip_id', 'seat_number']); // Ensures a seat cannot be double-booked
        });
    }

    public function down()
    {
        Schema::dropIfExists('bookings'); // Drop bookings table
    }
}


php artisan migrate


// Creating a Bus:
$bus = Bus::create([
    'name' => 'Super Bus',
    'plate_number' => 'XYZ 1234',
    'capacity' => 50
]);

// Creating a Trip:
$trip = Trip::create([
    'bus_id' => $bus->id,
    'route' => 'Dhaka → Gaibandha',
    'departure_time' => now()->addDays(1),
    'available_seats' => 50
]);

// Booking a Seat:
$userId = 1; // Example user ID
$trip->bookSeat(1, $userId); // Book seat number 1 for the user
